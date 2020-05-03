import Taro, { PropsWithChildren } from "@tarojs/taro";
import { ITouchEvent } from "@tarojs/components/types/common";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { to } from "@/common/route";
import "./index.scss";

type Props = {
  url?: string;
  appId?: string;
  target?: "self" | "web" | "mini";
  urlType?: number;
  openType?: "navigate" | "redirect" | "tab" | "launch" | "back";
  params?: object;
  disabled?: boolean;
  onClick?: (event: ITouchEvent) => any;
  onClicked?: (event: ITouchEvent) => any;
};

export default function Action(props: PropsWithChildren<Props>) {
  const {
    url,
    target,
    appId,
    disabled,
    openType = "navigate",
    params,
    onClick,
    onClicked
  }: Props = props;

  const onAction = (e: ITouchEvent) => {
    if (onClick) {
      e.stopPropagation();
      onClick(e);
      onClicked && onClicked(e);
      return;
    }
    if (target === "self") {
      to(openType, url, params);
    } else if (target === "web") {
      Taro.$web(url, params);
    } else if (target === "mini" && appId) {
      Taro.navigateToMiniProgram({
        appId,
        path: url
      });
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
