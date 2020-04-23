import Taro from "@tarojs/taro";
import classnames from "classnames";
import { View } from "@tarojs/components";
import { CommonEvent } from "@tarojs/components/types/common";
import "./index.scss";

export type Visibility = "showing" | "visible" | "hiding" | "hidden";

type Props = Readonly<{ children?: any }> & {
  cancelable?: boolean;
  visibility?: Visibility;
  onVisibility: (visibility: Visibility) => void;
};

export default function PopView(props: Props) {
  const {
    visibility = "hidden",
    cancelable = true,
    onVisibility
  }: Props = props;

  const onHide = (e: CommonEvent) => {
    if (cancelable && visibility === "visible") {
      e.stopPropagation();
      onVisibility("hiding");
    }
  };

  const onAnimationEnd = () => {
    if (visibility === "showing") {
      onVisibility("visible");
    } else if (visibility === "hiding") {
      onVisibility("hidden");
    }
  };

  return (
    <View className="pop-view">
      <View
        className={classnames("frame", {
          "fade-in": visibility === "showing" || visibility === "visible",
          "fade-out": visibility === "hiding"
        })}
        onClick={onHide}
      />
      <View
        className={classnames("pop", {
          "slide-in": visibility === "showing" || visibility === "visible",
          "slide-out": visibility === "hiding"
        })}
        onAnimationEnd={onAnimationEnd}
      >
        {props.children}
      </View>
    </View>
  );
}
