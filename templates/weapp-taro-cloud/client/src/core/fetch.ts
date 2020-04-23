import Taro from "@tarojs/taro";

interface FunctionResult<T = {}> {
  errMsg?: string;
  requestID?: string;
  result: T;
}

export interface ResultMessage extends Partial<Uri> {
  mode: "toast" | "modal";
  title?: string;
  content?: string;
  cancel?: string;
  confirm?: string;
}

export interface Result<T = any> {
  success: boolean;
  message?: ResultMessage;
  code?: number;
  extra?: any;
  data?: T;
}

const message = async message => {
  switch (message.mode) {
    case "toast":
      return new Promise(resolve => {
        Taro.$toast(message.title);
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    case "modal":
      return Taro.$modal({
        title: message.title,
        content: message.content,
        showCancel: !!message.cancel,
        cancelText: message.cancel || "取消",
        confirmText: message.confirm || "确定",
        confirmColor: "#7048E8",
        cancelColor: "#2B2B2B"
      }).then(result => {
        if (result.confirm && message.url) {
          return Taro.$go(message);
        }
      });
  }
};

export const fetch = async <T, R = any>(
  name: string,
  data?: T,
  slow?: boolean
): Promise<R> => {
  try {
    const { result } = <FunctionResult<Result>>await Taro.cloud.callFunction({
      name,
      data,
      slow
    });
    if (!result.success) {
      if (result.message) {
        return message(result.message).then(() => {
          return Promise.reject(result);
        });
      }
      return Promise.reject(result);
    }
    return result.data;
  } catch (e) {
    console.log(Object.keys(e));
    console.log(Object.values(e));
    console.error("捕获", JSON.stringify(e));
    return Promise.reject(e);
  }
};
