import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import ActionButton from "@/components/action-button";
import "./index.scss";
import Tabs from "@/components/tabs";

type Props = {};
type State = {
  showing?: boolean;
};

export default class extends Component<Props, State> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state: State = {
    showing: false
  };

  render() {
    return (
      <View className="home">
        <Tabs
          class-name="tabs"
          tabs={Array(10)
            .fill(1)
            .map(() => {
              return {
                name: "哈哈",
                value: Math.random()
              };
            })}
          onTab={tab => {
            console.log(tab);
          }}
        />
        <ActionButton openType="getUserInfo">
          <View className="userinfo">用户授权</View>
        </ActionButton>
      </View>
    );
  }
}
