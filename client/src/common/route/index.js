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
var qs_1 = require("qs");
var pages_1 = require("@/common/route/pages");
var auth_1 = require("@/common/auth");
function onPageRouteError(e) {
    console.error("路由", e);
    taro_1["default"].reLaunch({ url: pages_1["default"].home.name });
}
var parse = function (u, params) {
    if (!u) {
        console.error("页面路径错误");
        return {
            u: pages_1["default"].home.name,
            page: pages_1["default"].home
        };
    }
    var _a = u.split("?"), path = _a[0], search = _a[1];
    var s = qs_1["default"].stringify(__assign(__assign({}, qs_1["default"].parse(search)), params));
    var page = pages_1.pageMap[path];
    return {
        page: page,
        u: ((page && page.path) || path) + "?" + s
    };
};
var route = function (u, params, func) {
    var _a = parse(u, params), url = _a.u, page = _a.page;
    var fun = func || taro_1["default"].navigateTo;
    if (page) {
        auth_1.check({
            type: page.auth
        }).then(function (ok) {
            if (ok) {
                fun({ url: url })["catch"](onPageRouteError);
            }
        });
    }
    else {
        // TODO
        fun({ url: url })["catch"](onPageRouteError);
    }
};
function navigate(url, params) {
    route(url, params, taro_1["default"].navigateTo);
}
function web(url, params) { }
function redirect(url, params) {
    route(url, params, taro_1["default"].redirectTo);
}
function tab(url, params) {
    route(url, params, taro_1["default"].switchTab);
}
function launch(url, params) {
    route(url, params, taro_1["default"].reLaunch);
}
function go(uri, params) {
    if (uri.url) {
        switch (uri.urlType) {
            case "self":
                return navigate(uri.url, params);
            case "web":
                return web(uri.url, params);
            case "mini":
                if (uri.appId) {
                    return taro_1["default"].navigateToMiniProgram({
                        path: uri.url,
                        appId: uri.appId
                    });
                }
        }
    }
}
function back(delta, delay) {
    if (delta === void 0) { delta = 1; }
    if (delay === void 0) { delay = 0; }
    if (delay <= 0) {
        taro_1["default"].navigateBack({ delta: delta });
    }
    else {
        var task_1 = setTimeout(function () {
            taro_1["default"].navigateBack({ delta: delta });
            clearTimeout(task_1);
        }, delay);
    }
}
taro_1["default"].$web = web;
taro_1["default"].$navigate = navigate;
taro_1["default"].$redirect = redirect;
taro_1["default"].$tab = tab;
taro_1["default"].$go = go;
taro_1["default"].$launch = launch;
taro_1["default"].$back = back;
