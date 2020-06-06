"use strict";
exports.__esModule = true;
var auth_1 = require("@/common/auth");
var Page = /** @class */ (function () {
    function Page(props) {
        this.props = props;
    }
    Object.defineProperty(Page.prototype, "name", {
        get: function () {
            return this.props.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "path", {
        get: function () {
            return this.props.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "auth", {
        get: function () {
            return this.props.auth || auth_1["default"].auth;
        },
        enumerable: true,
        configurable: true
    });
    Page.of = function (props) {
        return new Page(props);
    };
    return Page;
}());
exports["default"] = Page;
