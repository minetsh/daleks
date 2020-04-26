"use strict";
exports.__esModule = true;
var envs = {
    dev: { env: "dev-0cpve" },
    prod: { env: "product-e2f515" }
};
console.log(process.env.NODE_ENV);
exports["default"] = process.env.NODE_ENV === "production" ? envs.prod : envs.dev;
