import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

type Props = {};

export function Waiting(props: Props) {
  return (
    <View className="waiting">
      <View className="ball-grid-pulse">
        <View />
        <View />
        <View />
        <View />
        <View />
        <View />
        <View />
        <View />
        <View />
      </View>
    </View>
  );
}
