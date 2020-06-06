import Taro, { PropsWithChildren } from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { CommonEvent } from "@tarojs/components/types/common";
import "./index.scss";

type Props = {
  url?: string;
  appId?: string;
  target?: "self" | "web" | "mini";
  urlType?: number;
  openType?: "navigate" | "redirect" | "tab" | "launch" | "back";
  params?: object;
  disabled?: boolean;
  onClick?: Function;
  onClicked?: Function;
};

export default function Action(props: PropsWithChildren<Props>) {
  const { url, target, appId, disabled, onClick }: Props = props;
  const onAction = (e: CommonEvent) => {
    if (onClick) {
      e.stopPropagation();
      onClick(e);
      return;
    }
    if (target === "mini" && appId) {
      Taro.navigateToMiniProgram({
        appId,
        path: url
      });
      return;
    }
  };

  return (
    <View
      className={classnames("action-layout", {
        ["disabled"]: disabled
      })}
      hoverClass="action-layout-hover"
      onClick={onAction}
    >
      {props.children}
    </View>
  );
}
