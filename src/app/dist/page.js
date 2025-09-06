"use client";
"use strict";
exports.__esModule = true;
var Footer_1 = require("@/components/Footer");
var Header_1 = require("@/components/Header");
var HowBuildHydra_1 = require("@/components/HowBuildHydra");
var HydraTechnologies_1 = require("@/components/HydraTechnologies");
var Introduction_1 = require("@/components/Introduction");
var JoinHydra_1 = require("@/components/JoinHydra");
var sideMenu_1 = require("@/components/sideMenu");
var TopMenu_1 = require("@/components/TopMenu");
var WhyBuild_1 = require("@/components/WhyBuild");
require("aos/dist/aos.css");
var react_1 = require("react");
function Home() {
    var aboutRef = react_1.useRef(null);
    var introRef = react_1.useRef(null);
    var howToRef = react_1.useRef(null);
    var technoRef = react_1.useRef(null);
    var joinHydraRef = react_1.useRef(null);
    var whyBuild = react_1.useRef(null);
    var _a = react_1.useState(false), isSideBarMenuOpen = _a[0], setIsSideBarMenuOpen = _a[1];
    var scrollToHowBuild = function () {
        var _a;
        (_a = howToRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    var scrollToAbout = function () {
        var _a;
        (_a = aboutRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    var scrollToIntro = function () {
        var _a;
        (_a = introRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    var scrollToWhyBuild = function () {
        var _a;
        (_a = whyBuild.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    var scrollToTechnologies = function () {
        var _a;
        (_a = technoRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    var scrollToJoinHydra = function () {
        var _a;
        (_a = joinHydraRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(TopMenu_1["default"], { scrollToHowBuild: scrollToHowBuild, scrollToAbout: scrollToAbout, scrollToIntro: scrollToIntro, scrollToWhyBuild: scrollToWhyBuild, scrollToTechnologies: scrollToTechnologies, scrollToJoinHydra: scrollToJoinHydra }),
        React.createElement(sideMenu_1["default"], { isOpen: isSideBarMenuOpen }),
        React.createElement(Header_1["default"], null),
        React.createElement(Introduction_1["default"], { aboutRef: aboutRef }),
        React.createElement(WhyBuild_1["default"], { whyBuild: whyBuild }),
        React.createElement(HydraTechnologies_1["default"], { technoRef: technoRef }),
        React.createElement(HowBuildHydra_1["default"], { howToRef: howToRef }),
        React.createElement(JoinHydra_1["default"], { joinHydraRef: joinHydraRef }),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
