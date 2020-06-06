"use strict";
exports.__esModule = true;
var components_1 = require("@tarojs/components");
require("./index.scss");
function Pop(props) {
    var _a = props.visibility, visibility = _a === void 0 ? "hidden" : _a, _b = props.cancelable, cancelable = _b === void 0 ? true : _b, onVisibility = props.onVisibility;
    var onHide = function (e) {
        if (cancelable && visibility === "visible") {
            e.stopPropagation();
            onVisibility("hiding");
        }
    };
    var onAnimationEnd = function () {
        if (visibility === "showing") {
            onVisibility("visible");
        }
        else if (visibility === "hiding") {
            onVisibility("hidden");
        }
    };
    return (visibility === "showing" ||
        (visibility === "visible" && (<components_1.View className="pop" style={{
            marginLeft: (props.x || 0) + "px",
            marginTop: (props.y || 0) + "px"
        }} onAnimationEnd={onAnimationEnd}>
        {props.children}
      </components_1.View>)));
}
exports["default"] = Pop;
