"use strict";
exports.__esModule = true;
var random = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
exports.uuid = function () {
    return (random() +
        random() +
        "-" +
        random() +
        "-" +
        random() +
        "-" +
        random() +
        "-" +
        random() +
        random() +
        random());
};
