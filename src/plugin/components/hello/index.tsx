import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

type Props = {
  text?: string;
};
export default class Hello extends Component<Props, {}> {
  render() {
    const { text } = this.props;
    return <View>adsas{text}</View>;
  }
}
