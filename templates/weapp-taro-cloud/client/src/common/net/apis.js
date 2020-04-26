"use strict";
exports.__esModule = true;
var fetch_1 = require("@/core/fetch");
var app_1 = require("@/store/app");
exports.user = function (param) {
    return fetch_1.fetch("scrum-user", param).then(function (user) {
        app_1["default"].user = user;
        return user;
    });
};
