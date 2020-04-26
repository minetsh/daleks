"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
var components_1 = require("@tarojs/components");
require("./index.scss");
function PopView(props) {
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
    return (<components_1.View className="pop-view">
      <components_1.View className={classnames_1["default"]("frame", {
        "fade-in": visibility === "showing" || visibility === "visible",
        "fade-out": visibility === "hiding"
    })} onClick={onHide}/>
      <components_1.View className={classnames_1["default"]("pop", {
        "slide-in": visibility === "showing" || visibility === "visible",
        "slide-out": visibility === "hiding"
    })} onAnimationEnd={onAnimationEnd}>
        {props.children}
      </components_1.View>
    </components_1.View>);
}
exports["default"] = PopView;
