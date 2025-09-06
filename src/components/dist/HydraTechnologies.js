"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Unity_png_1 = require("../images/Unity.png");
var EngineUnreal_png_1 = require("../images/EngineUnreal.png");
var Oculus_png_1 = require("../images/Oculus.png");
var Vive_png_1 = require("../images/Vive.png");
var icons_1 = require("@/images/icons");
var react_1 = require("react");
var images = [EngineUnreal_png_1["default"], Unity_png_1["default"], Oculus_png_1["default"], Vive_png_1["default"]];
function HydraTechnologies(_a) {
    var technoRef = _a.technoRef;
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var prevSlide = function () {
        setCurrentIndex(function (prev) { return (prev === 0 ? images.length - 1 : prev - 1); });
    };
    var nextSlide = function () {
        setCurrentIndex(function (prev) { return (prev === images.length - 1 ? 0 : prev + 1); });
    };
    return (React.createElement("div", { className: "w-full bg-[#302C42] flex justify-center h-[630px] relative" },
        React.createElement("div", { className: "absolute left-0 top-[-550px] z-0 hidden lg:block" },
            React.createElement(icons_1.TecnologuiesVectorIcon, null)),
        React.createElement("div", { className: "relative z-10" },
            React.createElement("div", { className: "mx-auto w-[380px] h-[165px] md:w-[600px] h-[230px] lg:w-[1280px] lg:h-[303px] rounded-[100px] lg:rounded-[150px] bg-cover bg-center bg-no-repeat bg-[url('../images/HydraTechnologies.png')] flex items-center justify-center" },
                React.createElement("div", { className: "w-fit flex flex-col items-center justify-center", ref: technoRef },
                    React.createElement("h1", { className: "text-white text-[16px] md:text-[24px] lg:text-[36px] font-bold" }, "TECHNOLOGIES & HARDWARE"),
                    React.createElement("p", { className: "text-white text-[24px] md:text-[28px] lg:text-[36px] font-thin" }, "USED BY HYDRA VR."))),
            React.createElement("div", { className: "hidden lg:flex items-center justify-between mt-[50px] px-[70px]" },
                React.createElement("button", { className: "lg:hidden" },
                    React.createElement(icons_1.LeftPrevIcon, null)),
                React.createElement("div", { className: "w-full flex justify-between items-center" }, images.map(function (img, i) { return (React.createElement(image_1["default"], { key: i, src: img, alt: "technoImg", className: "w-[260px]" })); })),
                React.createElement("button", { className: "lg:hidden" },
                    React.createElement(icons_1.RightPrevIcon, null))),
            React.createElement("div", { className: "flex lg:hidden items-center justify-center mt-[50px] px-[30px]" },
                React.createElement("button", { onClick: prevSlide },
                    React.createElement(icons_1.LeftPrevIcon, null)),
                React.createElement("div", { className: "w-[70%] overflow-hidden" },
                    React.createElement("div", { className: "flex transition-transform duration-500 ease-in-out", style: { transform: "translateX(-" + currentIndex * 100 + "%)" } }, images.map(function (img, i) { return (React.createElement("div", { key: i, className: "flex-shrink-0 w-full flex justify-center" },
                        React.createElement(image_1["default"], { src: img, alt: "technoImg", className: "w-[200px] md:w-[250px]" }))); }))),
                React.createElement("button", { onClick: nextSlide },
                    React.createElement(icons_1.RightPrevIcon, null))))));
}
exports["default"] = HydraTechnologies;
