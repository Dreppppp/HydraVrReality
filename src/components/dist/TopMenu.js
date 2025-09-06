"use strict";
exports.__esModule = true;
var icons_1 = require("@/images/icons");
var react_1 = require("react");
function TopMenu(_a) {
    var scrollToHowBuild = _a.scrollToHowBuild, scrollToAbout = _a.scrollToAbout, scrollToIntro = _a.scrollToIntro, scrollToWhyBuild = _a.scrollToWhyBuild, scrollToTechnologies = _a.scrollToTechnologies, scrollToJoinHydra = _a.scrollToJoinHydra;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    return (React.createElement("div", { className: "h-[150px] w-full py-[25px] px-[20px] md:px-[50px] lg:px-[85px] bg-[#302C42] flex justify-between items-center relative z-10" },
        React.createElement("div", { className: "flex justify-between items-center w-[140px] md:w-[170px] lg:w-[193px]" },
            React.createElement("div", { className: "w-[70px] h-[60px] md:w-[80px] md:h-[80px] lg:w-full lg:h-full" },
                React.createElement(icons_1.HydraLogoIcon, { className: "w-full h-full" })),
            React.createElement("div", { className: "w-[55px] h-[35px] md:w-[150px] md:h-[80px]" },
                React.createElement(icons_1.HydraTextIcon, { className: "w-full h-full" }))),
        React.createElement("div", { className: "hidden md:flex justify-between items-center w-full px-[85px]" },
            React.createElement("div", { className: "text-white text-[12px] font-bold w-[350px] flex justify-between items-center" },
                React.createElement("button", { onClick: function () {
                        scrollToAbout();
                    }, className: " transform transition-transform duration-300 cursor-pointer hover:scale-110" }, "ABOUT"),
                React.createElement("button", { onClick: function () {
                        scrollToWhyBuild();
                    }, className: "transform transition-transform duration-300 cursor-pointer hover:scale-110" }, "SERVICES"),
                React.createElement("button", { onClick: function () {
                        scrollToTechnologies();
                    }, className: "transform transition-transform duration-300 cursor-pointer hover:scale-110" }, "TECHNOLOGIES"),
                React.createElement("button", { onClick: function () {
                        scrollToHowBuild();
                    }, className: "transform transition-transform duration-300 cursor-pointer hover:scale-110" }, "HOW TO")),
            React.createElement("div", { className: "flex justify-between items-center w-[340px]" },
                React.createElement("button", { onClick: function () {
                        scrollToJoinHydra();
                    }, className: "transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-white text-[12px] w-[155px] h-[50px] rounded-[40px] border border-2 border-white flex justify-center items-center " }, "CONTACT US"),
                React.createElement("button", { onClick: function () {
                        scrollToJoinHydra();
                    }, className: "transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]" }, "JOIN HYDRA"))),
        React.createElement("div", null,
            React.createElement("div", { className: "block md:hidden" },
                React.createElement("button", { onClick: function () { return setIsOpen(true); } },
                    React.createElement(icons_1.MenuBurgerIcon, null))))));
}
exports["default"] = TopMenu;
