import Taro, { Component, Config } from "@tarojs/taro";
import Index from "./pages/index";
import "./app.scss";

class App extends Component {
  config: Config = {
    pages: ["pages/index/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    plugins: {
      album: {
        version: "dev",
        provider: "wx1db9e5ab1149ea03"
      }
    }
  };

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
