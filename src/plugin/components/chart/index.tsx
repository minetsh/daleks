import Taro from "@tarojs/taro";
import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

type Props = {
  xx?: string;
};

type State = {};

export default class Chart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(props.xx);
  }
  render() {
    const { xx } = this.props;
    return <View className="chart">插件组件：{xx}</View>;
  }
}
