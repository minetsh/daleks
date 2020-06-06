import Taro, { PropsWithChildren } from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { CommonEvent } from "@tarojs/components/types/common";
import "./index.scss";

type Props = {
  disabled?: boolean;
  onClick?: Function;
};

export default function ActionBlock(props: PropsWithChildren<Props>) {
  const { disabled, onClick }: Props = props;
  const onAction = (e: CommonEvent) => {
    if (onClick) {
      e.stopPropagation();
      onClick(e);
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
