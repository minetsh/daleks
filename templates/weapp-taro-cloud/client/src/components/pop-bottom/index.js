"use strict";
exports.__esModule = true;
var taro_1 = require("@tarojs/taro");
var classnames_1 = require("classnames");
var components_1 = require("@tarojs/components");
require("./index.scss");
function PopBottomView(props) {
    var _a = props.showing, showing = _a === void 0 ? false : _a, onDismiss = props.onDismiss;
    var _b = taro_1.useState("fade-in"), animation = _b[0], setAnimation = _b[1];
    var _c = taro_1.useState(false), actioning = _c[0], setActioning = _c[1];
    taro_1.useEffect(function () {
        if (!actioning && showing) {
            setActioning(true);
            setAnimation("fade-in");
        }
    }, [showing]);
    var onHide = function (e) {
        if (!actioning) {
            setActioning(true);
            setAnimation("fade-out");
            if (showing) {
                e.stopPropagation();
            }
        }
    };
    var onAnimationEnd = function (_a) {
        var animationName = _a.detail.animationName;
        setActioning(false);
        if (animationName === "fade-out") {
            setAnimation("hide");
            onDismiss && onDismiss();
        }
    };
    if (showing) {
        return (<components_1.View className="pop-view" onClick={onHide}>
        <components_1.View className={classnames_1["default"]("pop", animation)} onAnimationEnd={onAnimationEnd}>
          {props.children}
          
        </components_1.View>
      </components_1.View>);
    }
    return <components_1.View />;
}
exports["default"] = PopBottomView;
