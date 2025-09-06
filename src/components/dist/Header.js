"use strict";
exports.__esModule = true;
var icons_1 = require("@/images/icons");
var image_1 = require("next/image");
var MaskGroup_png_1 = require("../images/MaskGroup.png");
var react_1 = require("react");
function Header() {
    var slides = [
        {
            icon: React.createElement(icons_1.GeoPointIcon, null),
            title: "Pay Us a Visit",
            desc: "Union St, Seattle, WA 98101, United States"
        },
        {
            icon: React.createElement(icons_1.PhoneIcon, null),
            title: "Give Us a Call",
            desc: "110 1111-1010"
        },
        {
            icon: React.createElement(icons_1.EmailIcon, null),
            title: "Send Us a Message",
            desc: "110 1111-1010"
        },
    ];
    var _a = react_1.useState(0), current = _a[0], setCurrent = _a[1];
    var nextSlide = function () {
        if (current < slides.length - 1)
            setCurrent(current + 1);
    };
    var prevSlide = function () {
        if (current > 0)
            setCurrent(current - 1);
    };
    return (React.createElement("div", { className: "relative w-full h-[650px] md:h-[750px] lg:h-[850px] bg-[#302C42] md:pt-[100px] md:px-[84px]" },
        React.createElement("div", { className: "flex flex-col-reverse md:flex-row md:justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-16" },
            React.createElement("div", { className: "w-full md:w-[460px] flex flex-col items-start mt-2 md:mt-0" },
                React.createElement("h1", { className: "text-[28px] sm:text-[32px] md:text-[38px] lg:text-[40px] text-white font-bold leading-snug mx-auto md:mx-[] text-center lg:text-start" },
                    React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]" }, "DIVE"),
                    " ",
                    "Into The Depths ",
                    React.createElement("br", null),
                    " Of",
                    " ",
                    React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]" }, "Virtual"),
                    " ",
                    React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]" }, "Reality")),
                React.createElement("p", { className: "text-white text-[14px] sm:text-[16px] mt-4 md:mt-8 hidden lg:block" }, "Explore immersive worlds where technology blurs the line between reality and imagination. Experience fully interactive environments, engaging simulations, and new dimensions that transform how we perceive digital spaces."),
                React.createElement("div", { className: "flex flex-col sm:flex-row justify-start items-center gap-4 mt-6 md:mt-10 w-full mb-[30px]" },
                    React.createElement("button", { className: "transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-[#343045] text-[14px] font-bold w-[292px] h-[52px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]" },
                        " ",
                        "BUILD YOUR WORLD",
                        " "),
                    React.createElement("div", { className: "hidden lg:block transform transition-transform duration-300 cursor-pointer hover:scale-110" },
                        React.createElement(icons_1.ArrowRightHeaderIcon, null)))),
            React.createElement("div", { className: "w-full flex justify-center md:w-auto mb-8 md:mb-0 relative" },
                React.createElement("div", { className: "w-[400px] h-[300px] md:w-[350px] md:h-[330px] lg:w-[530px] lg:h-[460px] relative z-10 " },
                    React.createElement(image_1["default"], { src: MaskGroup_png_1["default"], alt: "maskgroup", className: "w-full h-full object-contain" })),
                React.createElement("div", { className: "hidden lg:block absolute left-[-100px] top-[10px] z-0" },
                    React.createElement(icons_1.HeaderLeftVectorIcon, null)),
                React.createElement("div", { className: "hidden lg:block absolute left-[90px] top-[-250px] z-0" },
                    React.createElement(icons_1.HeaderImageLeftVector, null)),
                React.createElement("div", { className: "hidden lg:block absolute right-[-70px] top-[-80px] z-0" },
                    React.createElement(icons_1.HeaderImageRightVector, null)),
                React.createElement("div", { className: "hidden lg:block absolute left-[-100px] bottom-[-80px] z-0" },
                    React.createElement(icons_1.HeaderImageBottomtVector, null)))),
        React.createElement("div", { className: "hidden lg:flex relative z-20 mt-[30px] w-[347px] md:w-[600px] lg:w-[1270px] overflow-hidden h-[170px] rounded-[120px] \r\n        bg-gradient-to-r from-[#211E2E] via-[#3A3456F2] to-[#211E2E] \r\n        justify-between items-center px-[40px] mx-auto" },
            React.createElement("div", { className: "flex items-center" },
                React.createElement(icons_1.GeoPointIcon, null),
                React.createElement("div", { className: "ml-[30px]" },
                    React.createElement("h1", { className: "text-[24px] font-bold text-white" }, "Pay Us a Visit"),
                    React.createElement("p", { className: "text-white text-[14px]" }, "Union St, Seattle, WA 98101, United States"))),
            React.createElement("div", { className: "w-[1px] h-[110px] bg-[#C0B7E854]" }),
            React.createElement("div", { className: "flex items-center" },
                React.createElement(icons_1.PhoneIcon, null),
                React.createElement("div", { className: "ml-[30px]" },
                    React.createElement("h1", { className: "text-[24px] font-bold text-white" }, "Give Us a Call"),
                    React.createElement("p", { className: "text-white text-[14px]" }, "110 1111-1010"))),
            React.createElement("div", { className: "w-[1px] h-[110px] bg-[#C0B7E854]" }),
            React.createElement("div", { className: "flex items-center" },
                React.createElement(icons_1.EmailIcon, null),
                React.createElement("div", { className: "ml-[30px]" },
                    React.createElement("h1", { className: "text-[24px] font-bold text-white" }, "Send Us a Message"),
                    React.createElement("p", { className: "text-white text-[14px]" }, "110 1111-1010")))),
        React.createElement("div", { className: "lg:hidden relative w-[347px] h-[109px]  max-w-[600px] mx-auto overflow-hidden rounded-[100px] bg-gradient-to-r from-[#211E2E] via-[#3A3456F2] to-[#211E2E] flex items-center justify-center mx-[20px]" },
            React.createElement("div", { className: "flex transition-transform duration-500", style: { transform: "translateX(-" + current * 100 + "%)" } }, slides.map(function (slide, index) { return (React.createElement("div", { key: index, className: "w-full flex-shrink-0 flex items-center justify-center px-[20px]" },
                React.createElement("div", { className: "flex items-center justify-center w-full" },
                    React.createElement("div", { className: "flex items-center justify-center gap-4 " },
                        slide.icon,
                        React.createElement("p", { className: "text-white text-[14px] max-w-[180px] " }, slide.desc))))); })),
            React.createElement("button", { onClick: prevSlide, disabled: current === 0, className: "absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-40 disabled:opacity-30" }, "\u276E"),
            React.createElement("button", { onClick: nextSlide, disabled: current === slides.length - 1, className: "absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-40 disabled:opacity-30" }, "\u276F"))));
}
exports["default"] = Header;
