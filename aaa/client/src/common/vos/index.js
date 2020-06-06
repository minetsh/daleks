"use strict";
exports.__esModule = true;
var RoleName;
(function (RoleName) {
    RoleName["owner"] = "\u623F\u4E3B";
    RoleName["member"] = "\u53C2\u4E0E";
    RoleName["onlooker"] = "\u65C1\u89C2";
})(RoleName = exports.RoleName || (exports.RoleName = {}));
var StakeholderRoleAlias;
(function (StakeholderRoleAlias) {
    StakeholderRoleAlias["owner"] = "\u65C1\u89C2\uFF08\u5176\u4ED6\u623F\u4E3B\u529F\u80FD\u4E0D\u53D7\u5F71\u54CD\uFF09";
    StakeholderRoleAlias["member"] = "\u53C2\u4E0E";
    StakeholderRoleAlias["onlooker"] = "\u65C1\u89C2";
})(StakeholderRoleAlias = exports.StakeholderRoleAlias || (exports.StakeholderRoleAlias = {}));
var ScaleMode;
(function (ScaleMode) {
    ScaleMode["arithmetic-mean"] = "\u7B97\u672F\u5E73\u5747\u6570";
    ScaleMode["trimmed-mean"] = "\u5207\u5C3E\u5E73\u5747\u6570";
    ScaleMode["median"] = "\u4E2D\u4F4D\u6570";
    ScaleMode["mode"] = "\u4F17\u6570";
})(ScaleMode = exports.ScaleMode || (exports.ScaleMode = {}));
var ScaleModerate;
(function (ScaleModerate) {
    ScaleModerate["one"] = "\u4FDD\u7559\u4E00\u4F4D\u5C0F\u6570";
    ScaleModerate["two"] = "\u4FDD\u7559\u4E8C\u4F4D\u5C0F\u6570";
    ScaleModerate["floor"] = "\u5411\u4E0B\u53D6\u6574";
    ScaleModerate["round"] = "\u53D6\u63A5\u8FD1\u503C";
    ScaleModerate["ceil"] = "\u5411\u4E0A\u53D6\u6574";
})(ScaleModerate = exports.ScaleModerate || (exports.ScaleModerate = {}));
exports.ScaleModes = [
    ScaleMode["arithmetic-mean"],
    ScaleMode["trimmed-mean"],
    ScaleMode.median,
    ScaleMode.mode
];
exports.ScaleModerates = [
    ScaleModerate.floor,
    ScaleModerate.round,
    ScaleModerate.ceil,
    ScaleModerate.one,
    ScaleModerate.two
];
exports.ScaleModeValues = [
    "arithmetic-mean",
    "trimmed-mean",
    "median",
    "mode"
];
exports.ScaleModerateValues = [
    "floor",
    "round",
    "ceil",
    "one",
    "two"
];
