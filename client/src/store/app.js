"use strict";
exports.__esModule = true;
var mobx_1 = require("mobx");
var app = mobx_1.observable({
    user: void 0,
    get userId() {
        if (this.user) {
            return this.user._id;
        }
    },
    get isAuthed() {
        return !!this.userId;
    }
});
exports["default"] = app;
