"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var taro_1 = require("@tarojs/taro");
require("@/common");
var home_1 = require("@/pages/home");
require("./app.scss");
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        _this.config = {
            pages: ["pages/home/index"],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "Qimo",
                navigationBarTextStyle: "black"
            },
            cloud: true
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        if (process.env.TARO_ENV === "weapp") {
            taro_1["default"].cloud.init();
        }
    };
    App.prototype.componentDidShow = function () { };
    App.prototype.componentDidHide = function () { };
    App.prototype.componentDidCatchError = function () { };
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    App.prototype.render = function () {
        return <home_1["default"] />;
    };
    return App;
}(taro_1.Component));
taro_1["default"].render(<App />, document.getElementById("app"));
