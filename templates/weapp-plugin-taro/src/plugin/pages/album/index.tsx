import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

export default class extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state = {
    option: {}
  };

  componentDidMount() {}

  render() {
    return <View className="index">asdas</View>;
  }
}
