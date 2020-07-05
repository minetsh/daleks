import React, { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import "./index.scss";

type Props = {};

type State = {};

@inject("store")
@observer
export default class extends Component<Props, State> {
  render() {
    return <View className="index">Daleks</View>;
  }
}
