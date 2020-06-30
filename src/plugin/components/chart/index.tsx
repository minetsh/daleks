import Taro from "@tarojs/taro";
import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

type Props = {
  content?: string;
};

type State = {};

export default class Chart extends Component<Props, State> {
  render() {
    return <View className="chart">插件组件：{this.props.content}</View>;
  }
}
