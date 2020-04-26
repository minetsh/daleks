"use strict";
exports.__esModule = true;
var components_1 = require("@tarojs/components");
var classnames_1 = require("classnames");
require("./index.scss");
function ActionButton(props) {
    var _a;
    var openType = props.openType, disabled = props.disabled, onUserInfo = props.onUserInfo;
    var onUserInfoEvent = function (e) {
        onUserInfo && onUserInfo(e.detail);
    };
    return (<components_1.Button className={classnames_1["default"]("action-layout", (_a = {},
        _a["disabled"] = disabled,
        _a))} hoverClass="action-layout-hover" openType={openType} onGetUserInfo={onUserInfoEvent}>
      {props.children}
    </components_1.Button>);
}
exports["default"] = ActionButton;
