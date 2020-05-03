import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

type Props = {};
type State = {};

export default class extends Component<Props, State> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return <View className="home"></View>;
  }
}
