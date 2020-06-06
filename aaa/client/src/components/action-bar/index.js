"use strict";
exports.__esModule = true;
var taro_1 = require("@tarojs/taro");
var classnames_1 = require("classnames");
var components_1 = require("@tarojs/components");
var ui_1 = require("@/core/utils/ui");
var ic_back_svg_1 = require("@/images/ic_back.svg");
var ic_back_light_svg_1 = require("@/images/ic_back_light.svg");
var ic_share_svg_1 = require("@/images/ic_share.svg");
var ic_share_light_svg_1 = require("@/images/ic_share_light.svg");
var ic_home_svg_1 = require("@/images/ic_home.svg");
var ic_home_light_svg_1 = require("@/images/ic_home_light.svg");
var pages_1 = require("@/common/route/pages");
require("./index.scss");
function ActionBar(props) {
    var title = props.title, _a = props.back, back = _a === void 0 ? true : _a, _b = props.share, share = _b === void 0 ? false : _b, _c = props.home, home = _c === void 0 ? false : _c, _d = props.auto, auto = _d === void 0 ? true : _d, _e = props.immerse, immerse = _e === void 0 ? false : _e, _f = props.light, light = _f === void 0 ? false : _f;
    var top = taro_1.useState(ui_1.isTopPage())[0];
    var _g = taro_1.useState(home), backHome = _g[0], setBackHome = _g[1];
    taro_1.useEffect(function () {
        setBackHome(home || (auto && top));
    }, [props.auto, props.home]);
    return (<components_1.View className={classnames_1["default"]("status-bar", {
        immerse: immerse
    })}>
      <components_1.View style={{ height: ui_1.getStatusBarHeight() + "PX" }}/>
      <components_1.View className={classnames_1["default"]("action-bar", { back: back || backHome })} style={{
        height: ui_1.getActionBarHeight() + "PX",
        paddingRight: ui_1.getActionBarPaddingRight() + "PX"
    }}>
        {back && !backHome && (<components_1.View className="action-back-box" onClick={function () { return taro_1["default"].$back(); }}>
            <components_1.Image className="action-back" mode="aspectFit" src={light ? ic_back_light_svg_1["default"] : ic_back_svg_1["default"]}/>
          </components_1.View>)}
        {backHome && (<components_1.View className="action-back-box" onClick={function () { return taro_1["default"].$launch(pages_1["default"].home.name); }}>
            <components_1.Image className="action-home" mode="aspectFit" src={light ? ic_home_light_svg_1["default"] : ic_home_svg_1["default"]}/>
          </components_1.View>)}
        {title && <components_1.View className="title">{title}</components_1.View>}
        {props.children}
        {share && (<components_1.Button className="action-share-box" openType="share">
            <components_1.Image className="action-share" mode="aspectFit" src={light ? ic_share_light_svg_1["default"] : ic_share_svg_1["default"]}/>
          </components_1.Button>)}
      </components_1.View>
    </components_1.View>);
}
exports["default"] = ActionBar;
