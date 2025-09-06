"use strict";
exports.__esModule = true;
var icons_1 = require("@/images/icons");
var react_1 = require("react");
function HowBuildHydra(_a) {
    var howToRef = _a.howToRef;
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var totalSteps = 4;
    var prevSlide = function () {
        setCurrentIndex(function (prev) { return (prev === 0 ? totalSteps - 1 : prev - 1); });
    };
    var nextSlide = function () {
        setCurrentIndex(function (prev) { return (prev === totalSteps - 1 ? 0 : prev + 1); });
    };
    var StepBuildCard = function (_a) {
        var number = _a.number, description = _a.description, aosdelay = _a.aosdelay, isMobile = _a.isMobile;
        return (React.createElement("div", { className: "flex flex-col justify-center items-center w-[230px] mx-auto" },
            React.createElement("div", { className: "flex items-center justify-center rounded-[150px] bg-[#0D0D0D50] size-[190px]" },
                React.createElement("div", { className: "size-[150px] rounded-full flex items-center justify-center text-[64px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] font-bold" },
                    "0",
                    number)),
            React.createElement("div", { className: "flex justify-center items-center mt-[30px]" },
                React.createElement("div", { className: "hidden lg:block mr-[15px]" },
                    React.createElement(icons_1.ArrowRightHeaderIcon, null)),
                React.createElement("p", { className: "text-[24px] text-white font-bold text-center" }, description))));
    };
    return (React.createElement("div", { className: "w-full bg-[#302C42] px-[20px] lg:px-[84px] h-[820px] pt-[115px]" },
        React.createElement("div", { ref: howToRef, className: "w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left gap-[20px]" },
            React.createElement("div", null,
                React.createElement("h1", { className: "text-white text-[36px] font-bold" }, "HOW WE BUILD"),
                React.createElement("div", { className: "flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full lg:w-[520px] gap-[20px] lg:gap-[40px] mt-[10px]" },
                    React.createElement("p", { className: "text-[36px] font-thin text-white" }, "WITH HYDRA VR?"),
                    React.createElement("div", { className: "hidden lg:block" },
                        React.createElement(icons_1.LongarrowIcon, null)))),
            React.createElement("p", { className: "text-[16px] text-white w-full lg:w-[580px] hidden lg:block" }, "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendreri4t lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.")),
        React.createElement("div", { className: "relative mt-[100px]" },
            React.createElement("div", { className: "absolute left-[-50px] top-[0px] z-0 hidden lg:block w-full" },
                React.createElement(icons_1.HowBuildVectorIcon, null)),
            React.createElement("div", { className: "hidden lg:flex w-full justify-between items-center relative z-10" },
                React.createElement(StepBuildCard, { number: 1, description: "3D Conception & Design", aosdelay: 0 }),
                React.createElement(StepBuildCard, { number: 2, description: "Interaction Design", aosdelay: 200 }),
                React.createElement(StepBuildCard, { number: 3, description: "VR World User Testing", aosdelay: 400 }),
                React.createElement(StepBuildCard, { number: 4, description: "Hydra VR Deploy", aosdelay: 600 })),
            React.createElement("div", { className: "flex lg:hidden items-center justify-center mt-[50px] relative z-10" },
                React.createElement("button", { onClick: prevSlide, className: "mr-2" },
                    React.createElement(icons_1.LeftPrevIcon, null)),
                React.createElement("div", { className: "w-[80%] overflow-hidden" },
                    React.createElement("div", { className: "flex transition-transform duration-500 ease-in-out", style: { transform: "translateX(-" + currentIndex * 100 + "%)" } },
                        React.createElement("div", { className: "flex-shrink-0 w-full flex justify-center" },
                            React.createElement(StepBuildCard, { number: 1, description: "3D Conception & Design", aosdelay: 0, isMobile: true })),
                        React.createElement("div", { className: "flex-shrink-0 w-full flex justify-center" },
                            React.createElement(StepBuildCard, { number: 2, description: "Interaction Design", aosdelay: 200, isMobile: true })),
                        React.createElement("div", { className: "flex-shrink-0 w-full flex justify-center" },
                            React.createElement(StepBuildCard, { number: 3, description: "VR World User Testing", aosdelay: 400, isMobile: true })),
                        React.createElement("div", { className: "flex-shrink-0 w-full flex justify-center" },
                            React.createElement(StepBuildCard, { number: 4, description: "Hydra VR Deploy", aosdelay: 600, isMobile: true })))),
                React.createElement("button", { onClick: nextSlide, className: "ml-2" },
                    React.createElement(icons_1.RightPrevIcon, null))))));
}
exports["default"] = HowBuildHydra;
