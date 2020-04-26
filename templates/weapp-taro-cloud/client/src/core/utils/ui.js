"use strict";
exports.__esModule = true;
var taro_1 = require("@tarojs/taro");
var DEFAULT_RECT = {
    bottom: 82,
    height: 32,
    left: 317,
    right: 404,
    top: 50,
    width: 87
};
var cr;
exports.getMenuBoundingRect = function () {
    if (!cr) {
        try {
            cr = taro_1["default"].getMenuButtonBoundingClientRect();
            return cr || DEFAULT_RECT;
        }
        catch (e) {
            console.error(e);
            return DEFAULT_RECT;
        }
    }
    return cr;
};
var info;
exports.getSystemInfo = function () {
    if (!info) {
        try {
            info = taro_1["default"].getSystemInfoSync();
        }
        catch (e) {
            console.error(e);
        }
    }
    return info;
};
exports.getStatusBarHeight = function () {
    var i = exports.getSystemInfo();
    if (i) {
        return i.statusBarHeight || 44;
    }
    return 44;
};
exports.getActionBarHeight = function () {
    var rect = exports.getMenuBoundingRect();
    if (rect) {
        return (rect.top - exports.getStatusBarHeight()) * 2 + rect.height;
    }
    return 44;
};
exports.getActionBarPaddingRight = function () {
    var rect = exports.getMenuBoundingRect();
    if (rect) {
        return (rect.top - exports.getStatusBarHeight()) * 3 + rect.width;
    }
    return 100;
};
exports.getPagePanddingTop = function () {
    return exports.getStatusBarHeight() + exports.getActionBarHeight();
};
exports.isTopPage = function () {
    var pages = taro_1["default"].getCurrentPages();
    if (pages) {
        return pages.length === 1;
    }
    return true;
};
