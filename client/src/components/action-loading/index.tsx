import Taro from "@tarojs/taro";
import { View, CoverView } from "@tarojs/components";
import "./index.scss";

export type ActionStatus = "loading" | "success" | "failure";

type Props = {
  status?: ActionStatus;
};

export default function ActionLoading(props: Props) {
  const { status = "loading" } = props;
  return (
    <View className="action-loading">
      {
        {
          ["loading"]: (
            <View className="loading">
              <View className="ball-pulse-sync">
                <View />
                <View />
                <View />
              </View>
            </View>
          ),
          ["success"]: <View className="success">成功</View>,
          ["failure"]: <View className="failure">失败</View>
        }[status]
      }
    </View>
  );
}
