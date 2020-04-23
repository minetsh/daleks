import Taro, { useState, useEffect } from "@tarojs/taro";
import classnames from "classnames";
import { Image, View, Button } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import {
  getStatusBarHeight,
  getActionBarHeight,
  getActionBarPaddingRight,
  isTopPage
} from "@/core/utils/ui";
import ic_back from "@/images/ic_back.svg";
import ic_back_light from "@/images/ic_back_light.svg";
import ic_share from "@/images/ic_share.svg";
import ic_share_light from "@/images/ic_share_light.svg";
import ic_home from "@/images/ic_home.svg";
import ic_home_light from "@/images/ic_home_light.svg";
import pages from "@/common/route/pages";
import "./index.scss";

type Props = StandardProps & {
  auto?: boolean;
  back?: boolean;
  home?: boolean;
  share?: boolean;
  title?: string;
  immerse?: boolean;
  light?: boolean;
  children?: any;
};

export default function ActionBar(props: Props) {
  const {
    title,
    back = true,
    share = false,
    home = false,
    auto = true,
    immerse = false,
    light = false
  }: Props = props;
  const [top] = useState(isTopPage());
  const [backHome, setBackHome] = useState(home);
  useEffect(() => {
    setBackHome(home || (auto && top));
  }, [props.auto, props.home]);
  return (
    <View
      className={classnames("status-bar", {
        immerse: immerse
      })}
    >
      <View style={{ height: `${getStatusBarHeight()}PX` }} />
      <View
        className={classnames("action-bar", { back: back || backHome })}
        style={{
          height: `${getActionBarHeight()}PX`,
          paddingRight: `${getActionBarPaddingRight()}PX`
        }}
      >
        {back && !backHome && (
          <View className="action-back-box" onClick={() => Taro.$back()}>
            <Image
              className="action-back"
              mode="aspectFit"
              src={light ? ic_back_light : ic_back}
            />
          </View>
        )}
        {backHome && (
          <View
            className="action-back-box"
            onClick={() => Taro.$launch(pages.home.name)}
          >
            <Image
              className="action-home"
              mode="aspectFit"
              src={light ? ic_home_light : ic_home}
            />
          </View>
        )}
        {title && <View className="title">{title}</View>}
        {props.children}
        {share && (
          <Button className="action-share-box" openType="share">
            <Image
              className="action-share"
              mode="aspectFit"
              src={light ? ic_share_light : ic_share}
            />
          </Button>
        )}
      </View>
    </View>
  );
}
