"use strict";
exports.__esModule = true;
var page_1 = require("@/common/route/page");
var pages = {
    home: page_1["default"].of({ name: "home", path: "/pages/home/index" })
};
for (var name_1 in pages) {
    var page = pages[name_1];
    pages[page.path] = page;
    pages[page.path.substr(1)] = page;
}
exports["default"] = pages;
