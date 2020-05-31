import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

export default function Tabs() {
  return (
    <View className="tabs class-name">
      {[
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n"
      ].map(name => {
        return (
          <View key={name} className="tab" hoverClass="tab-hover">
            {name}
          </View>
        );
      })}
      <View className="more">添加</View>
    </View>
  );
}

Tabs.externalClasses = ["class-name"];
