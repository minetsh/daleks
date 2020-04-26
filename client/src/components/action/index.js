"use strict";
exports.__esModule = true;
var taro_1 = require("@tarojs/taro");
var components_1 = require("@tarojs/components");
var classnames_1 = require("classnames");
require("./index.scss");
function Action(props) {
    var _a;
    var url = props.url, target = props.target, appId = props.appId, disabled = props.disabled, onClick = props.onClick;
    var onAction = function (e) {
        if (onClick) {
            e.stopPropagation();
            onClick(e);
            return;
        }
        if (target === "mini" && appId) {
            taro_1["default"].navigateToMiniProgram({
                appId: appId,
                path: url
            });
            return;
        }
    };
    return (<components_1.View className={classnames_1["default"]("action-layout", (_a = {},
        _a["disabled"] = disabled,
        _a))} hoverClass="action-layout-hover" onClick={onAction}>
      {props.children}
    </components_1.View>);
}
exports["default"] = Action;
