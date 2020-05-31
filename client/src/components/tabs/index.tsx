import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import classnames from "classnames";
import "./index.scss";

type Tab = { name: string; value: any };
type Props = {
  tabs?: Tab[];
  onTab?: (tab: Tab) => void;
};

export default function Tabs(props: Props) {
  const [value, setValue] = useState<string>();
  const handleTab = (e: any) => {
    const {
      target: {
        dataset: { tab }
      }
    } = e;
    setValue(tab.value);
    props.onTab && props.onTab(tab);
  };

  return (
    <View className="tabs class-name">
      {(props.tabs || []).map((tab, index) => {
        return (
          <View
            key={index}
            className={classnames("tab", {
              active: value === tab.value
            })}
            hoverClass="tab-hover"
            data-tab={tab}
            onClick={handleTab}
          >
            {tab.name}
          </View>
        );
      })}
      <View className="more">添加</View>
    </View>
  );
}

Tabs.externalClasses = ["class-name"];
