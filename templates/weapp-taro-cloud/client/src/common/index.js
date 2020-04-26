"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var taro_1 = require("@tarojs/taro");
require("@/common/route");
/**
 * 保持 Toast 安全地显示
 */
var toastDismissTime = 0;
var keepToast = function (duration) {
    if (duration === void 0) { duration = 2000; }
    toastDismissTime = Date.now() + duration;
};
var loadingTask;
taro_1["default"].$report = function () { };
taro_1["default"].$toast = function (msg, extra) {
    keepToast((extra && extra.duration) || 2000);
    return taro_1["default"].showToast(__assign({ title: msg || "", duration: 2000, icon: "none" }, extra));
};
taro_1["default"].$loading = function (title, mask, delay) {
    if (delay && delay > 0) {
        loadingTask = setTimeout(function () {
            taro_1["default"].$loading(title, mask);
        }, delay);
        return Promise.resolve();
    }
    else {
        if (loadingTask) {
            clearTimeout(loadingTask);
            loadingTask = null;
        }
        // 重置 Toast 延迟时间
        toastDismissTime = 0;
        return taro_1["default"].showLoading({
            title: title || "",
            mask: mask
        });
    }
};
/**
 * 如果刚刚弹出了 Toast，切还未消失，那么不隐藏 Loading
 */
taro_1["default"].$hide = function () {
    if (Date.now() >= toastDismissTime - 100) {
        if (loadingTask) {
            clearTimeout(loadingTask);
            loadingTask = null;
        }
        return taro_1["default"].hideLoading();
    }
};
taro_1["default"].$modal = taro_1["default"].showModal;
