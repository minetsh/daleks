import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

export default class extends Component {
  config: Config = {
    navigationBarTitleText: "首页",
    usingComponents: {
      chart: "plugin://album/chart"
    }
  };

  state = {
    option: {}
  };

  componentDidMount() {}

  render() {
    return (
      <View className="index">
        <chart></chart>
      </View>
    );
  }
}
