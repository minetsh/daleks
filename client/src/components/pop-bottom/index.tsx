import Taro, { useState, useEffect } from "@tarojs/taro";
import classnames from "classnames";
import { View } from "@tarojs/components";
import "./index.scss";
import { CommonEvent } from "@tarojs/components/types/common";

type Props = Readonly<{ children?: any }> & {
  showing?: boolean;
  onDismiss?: () => void;
};

export default function PopBottomView(props: Props) {
  const { showing = false, onDismiss }: Props = props;
  const [animation, setAnimation] = useState("fade-in");
  const [actioning, setActioning] = useState(false);
  useEffect(() => {
    if (!actioning && showing) {
      setActioning(true);
      setAnimation("fade-in");
    }
  }, [showing]);
  const onHide = (e: CommonEvent) => {
    if (!actioning) {
      setActioning(true);
      setAnimation("fade-out");
      if (showing) {
        e.stopPropagation();
      }
    }
  };
  const onAnimationEnd = ({ detail: { animationName } }) => {
    setActioning(false);
    if (animationName === "fade-out") {
      setAnimation("hide");
      onDismiss && onDismiss();
    }
  };
  if (showing) {
    return (
      <View className="pop-view" onClick={onHide}>
        <View
          className={classnames("pop", animation)}
          onAnimationEnd={onAnimationEnd}
        >
          {props.children}
          {/* <Image/> */}
        </View>
      </View>
    );
  }
  return <View />;
}
