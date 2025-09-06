"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var aos_1 = require("aos");
require("aos/dist/aos.css");
function AOSProvider(_a) {
    var children = _a.children;
    react_1.useEffect(function () {
        aos_1["default"].init({
            duration: 800,
            once: false
        });
    }, []);
    return react_1["default"].createElement(react_1["default"].Fragment, null, children);
}
exports["default"] = AOSProvider;
