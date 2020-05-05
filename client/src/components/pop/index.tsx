import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { CommonEvent } from "@tarojs/components/types/common";
import "./index.scss";

export type Visibility = "showing" | "visible" | "hiding" | "hidden";

type Props = Readonly<{ children?: any }> & {
  x?: number;
  y?: number;
  cancelable?: boolean;
  visibility?: Visibility;
  onVisibility: (visibility: Visibility) => void;
};

export default function Pop(props: Props) {
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
    <View
      className="pop"
      style={{
        marginLeft: `${props.x || 0}px`,
        marginTop: `${props.y || 0}px`
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {(visibility === "showing" || visibility === "visible") && props.children}
    </View>
  );
}
