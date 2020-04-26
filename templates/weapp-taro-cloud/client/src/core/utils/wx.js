"use strict";
exports.__esModule = true;
exports.getOriginalAvatarUrl = function (url) {
    if (url) {
        return url.replace(/132$/g, "0");
    }
    return url;
};
