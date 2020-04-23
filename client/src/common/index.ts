import Taro from "@tarojs/taro";
import "@/common/route";

/**
 * 保持 Toast 安全地显示
 */
let toastDismissTime = 0;
const keepToast = (duration: number = 2000) => {
  toastDismissTime = Date.now() + duration;
};

let loadingTask: any;

Taro.$report = () => {};
Taro.$toast = (msg: string, extra?: Taro.showToast.Option): Promise<any> => {
  keepToast((extra && extra.duration) || 2000);
  return Taro.showToast({
    title: msg || "",
    duration: 2000,
    icon: "none",
    ...extra
  });
};

Taro.$loading = (
  title?: string,
  mask?: boolean,
  delay?: number
): Promise<any> => {
  if (delay && delay > 0) {
    loadingTask = setTimeout(() => {
      Taro.$loading(title, mask);
    }, delay);
    return Promise.resolve();
  } else {
    if (loadingTask) {
      clearTimeout(loadingTask);
      loadingTask = null;
    }
    // 重置 Toast 延迟时间
    toastDismissTime = 0;
    return Taro.showLoading({
      title: title || "",
      mask
    });
  }
};

/**
 * 如果刚刚弹出了 Toast，切还未消失，那么不隐藏 Loading
 */
Taro.$hide = (): void => {
  if (Date.now() >= toastDismissTime - 100) {
    if (loadingTask) {
      clearTimeout(loadingTask);
      loadingTask = null;
    }
    return Taro.hideLoading();
  }
};

Taro.$modal = Taro.showModal;
