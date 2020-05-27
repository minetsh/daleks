import Taro, { PropsWithChildren } from "@tarojs/taro";
import { ITouchEvent } from "@tarojs/components/types/common";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { to } from "@/common/route";
import { buildURI } from "@/core/utils/uri";
import "./index.scss";

type Props = {
  url?: string;
  appId?: string;
  target?: "self" | "web" | "mini";
  openType?: "navigate" | "redirect" | "tab" | "launch" | "back";
  params?: object;
  disabled?: boolean;
  onClick?: (event: ITouchEvent) => any;
  onAction?: (event: ITouchEvent) => any;
  onClicked?: (event: ITouchEvent) => any;
  onActioned?: (event: ITouchEvent) => any;
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
    onAction,
    onClicked,
    onActioned
  }: Props = props;

  const handleAction = (e: ITouchEvent) => {
    if (onAction || onClick) {
      e.stopPropagation();
      (onAction && onAction(e)) || (onClick && onClick(e));
      (onActioned && onActioned(e)) || (onClicked && onClicked(e));
      return;
    }
    if (target === "self") {
      to(openType, url, params);
    } else if (target === "web") {
      Taro.$web(url, params);
    } else if (target === "mini" && appId) {
      Taro.navigateToMiniProgram({
        appId,
        path: buildURI(url, params)
      });
    }
    (onActioned && onActioned(e)) || (onClicked && onClicked(e));
  };

  return (
    <View
      className={classnames("action", "class-name", {
        ["disabled"]: disabled
      })}
      hoverClass="action-hover"
      onClick={handleAction}
    >
      {props.children}
    </View>
  );
}

Action.externalClasses = ["class-name"];
