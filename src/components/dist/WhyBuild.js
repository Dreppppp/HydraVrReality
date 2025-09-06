"use strict";
exports.__esModule = true;
var icons_1 = require("@/images/icons");
var image_1 = require("next/image");
var Simulation_png_1 = require("../images/Simulation.png");
var Education_png_1 = require("../images/Education.png");
var SelfCare_png_1 = require("../images/SelfCare.png");
var Outdoor_png_1 = require("../images/Outdoor.png");
var react_1 = require("react");
var aos_1 = require("aos");
require("aos/dist/aos.css");
function WhyBuild(_a) {
    var whyBuild = _a.whyBuild;
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var cards = [
        { title: "SIMULATION", image: Simulation_png_1["default"], aosDuration: 0 },
        { title: "EDUCATION", image: Education_png_1["default"], aosDuration: 200 },
        { title: "SELFCARE", image: SelfCare_png_1["default"], aosDuration: 400 },
        { title: "OUTDOOR", image: Outdoor_png_1["default"], aosDuration: 600 },
    ];
    react_1.useEffect(function () {
        aos_1["default"].init({ once: true });
    }, []);
    var prevSlide = function () {
        setCurrentIndex(function (prev) { return (prev === 0 ? cards.length - 1 : prev - 1); });
    };
    var nextSlide = function () {
        setCurrentIndex(function (prev) { return (prev === cards.length - 1 ? 0 : prev + 1); });
    };
    var HydraPossibleCard = function (_a) {
        var title = _a.title, image = _a.image, aosDuration = _a.aosDuration;
        return (React.createElement("div", { "data-aos": "fade-right", "data-aos-delay": aosDuration, className: "relative z-10 flex flex-col items-center justify-center gap-[30px] h-[510px] w-[310px] rounded-[40px] bg-[radial-gradient(circle,_#433D60_0%,_#211E2E_0%,_#211E2E_100%)]" },
            React.createElement("div", { className: "border border-[13px] border-[#0E0E0E52] rounded-[120px] w-fit h-fit" },
                React.createElement("div", { className: "size-[190px] rounded-[100px]" },
                    React.createElement(image_1["default"], { src: image, alt: "cardHydraImg" }))),
            React.createElement("div", { className: "flex flex-col items-center gap-[20px]" },
                React.createElement("h1", { className: "font-bold text-[24px] text-white" }, title),
                React.createElement("div", { className: "w-[154px] h-[1px] bg-[#C0B7E854]" }),
                React.createElement("p", { className: "w-[250px] text-[white] text-[12px] text-center" }, "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."),
                React.createElement("button", { className: "transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]" }, "TRY IT NOW"))));
    };
    return (React.createElement("div", { className: "w-full bg-[#302C42] lg:px-[84px] h-[950px] pt-[50px]" },
        React.createElement("div", { className: "w-full flex justify-between items-center" },
            React.createElement("div", { className: "mx-auto text-center lg:text-left" },
                React.createElement("div", null,
                    React.createElement("h1", { className: "text-white text-[36px] font-bold" }, "WHY BUILD")),
                React.createElement("div", { className: "flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[100%] lg:w-[520px] gap-[20px] lg:gap-[40px]" },
                    React.createElement("p", { className: "text-[36px] font-thin text-white" }, "WITH HYDRA?"),
                    React.createElement("div", { className: "hidden lg:block" },
                        React.createElement(icons_1.LongarrowIcon, null)))),
            React.createElement("p", { className: "text-[16px] text-white w-[580px] hidden lg:block" }, "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendreri4t lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.")),
        React.createElement("div", { className: "relative w-full mt-[100px]" },
            React.createElement("div", { className: "hidden lg:flex w-full justify-between items-center", ref: whyBuild }, cards.map(function (card, i) { return (React.createElement(HydraPossibleCard, { key: card.title, title: card.title, image: card.image, aosDuration: card.aosDuration })); })),
            React.createElement("div", { className: "relative flex lg:hidden items-center justify-center w-full mt-10" },
                React.createElement("button", { onClick: prevSlide, className: "absolute left-0 z-20 p-2" },
                    React.createElement(icons_1.LeftPrevIcon, null)),
                React.createElement("div", { className: "w-[80%] overflow-hidden" },
                    React.createElement("div", { className: "flex transition-transform duration-500 ease-in-out", style: { transform: "translateX(-" + currentIndex * 100 + "%)" } }, cards.map(function (card) { return (React.createElement("div", { key: card.title, className: "flex-shrink-0 w-full flex justify-center" },
                        React.createElement(HydraPossibleCard, { title: card.title, image: card.image, aosDuration: card.aosDuration }))); }))),
                React.createElement("button", { onClick: nextSlide, className: "absolute right-0 z-20 p-2" },
                    React.createElement(icons_1.RightPrevIcon, null))))));
}
exports["default"] = WhyBuild;
