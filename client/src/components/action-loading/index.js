"use strict";
exports.__esModule = true;
var components_1 = require("@tarojs/components");
require("./index.scss");
function ActionLoading(props) {
    var _a;
    var _b = props.status, status = _b === void 0 ? "loading" : _b;
    return (<components_1.View className="action-loading">
      {(_a = {},
        _a["loading"] = (<components_1.View className="loading">
              <components_1.View className="ball-pulse-sync">
                <components_1.View />
                <components_1.View />
                <components_1.View />
              </components_1.View>
            </components_1.View>),
        _a["success"] = <components_1.View className="success">成功</components_1.View>,
        _a["failure"] = <components_1.View className="failure">失败</components_1.View>,
        _a)[status]}
    </components_1.View>);
}
exports["default"] = ActionLoading;
