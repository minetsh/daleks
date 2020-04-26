"use strict";
exports.__esModule = true;
var components_1 = require("@tarojs/components");
require("./index.scss");
function Waiting(props) {
    return (<components_1.View className="waiting">
      <components_1.View className="ball-grid-pulse">
        <components_1.View />
        <components_1.View />
        <components_1.View />
        <components_1.View />
        <components_1.View />
        <components_1.View />
        <components_1.View />
        <components_1.View />
        <components_1.View />
      </components_1.View>
    </components_1.View>);
}
exports.Waiting = Waiting;
