import Taro, { Component, Config } from "@tarojs/taro";
import { View, Navigator } from "@tarojs/components";
import "./index.scss";

type State = {};

export default class extends Component<{}, State> {
  config: Config = {
    navigationBarTitleText: "首页",
    usingComponents: {
      hello: "plugin://album/hello"
    }
  };

  render() {
    return (
      <View className="index">
        <hello text={"男大神"} />
        {/* <Navigator url="plugin://album/album">插件页面</Navigator> */}
      </View>
    );
  }
}
