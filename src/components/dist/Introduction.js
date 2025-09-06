"use strict";
exports.__esModule = true;
var icons_1 = require("@/images/icons");
var HydraVrMan_png_1 = require("../images/HydraVrMan.png");
var image_1 = require("next/image");
function Introduction(_a) {
    var aboutRef = _a.aboutRef;
    return (React.createElement("div", { className: "w-full bg-[#302C42] px-4 md:px-10 lg:px-[84px] pt-[60px] lg:pt-[115px]" },
        React.createElement("div", { className: "w-full flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left gap-6 mt-[50px]" },
            React.createElement("div", null,
                React.createElement("h1", { className: "text-white text-[28px] md:text-[36px] font-bold" }, "INTRODUCTION"),
                React.createElement("div", { className: "flex justify-center lg:justify-start items-center gap-[20px] md:gap-[40px] mt-2" },
                    React.createElement("p", { className: "text-[28px] md:text-[36px] font-thin text-white" }, "TO HYDRA VR"),
                    React.createElement("div", { className: "hidden lg:block" },
                        React.createElement(icons_1.LongarrowIcon, null)))),
            React.createElement("p", { className: "text-[16px] text-white max-w-[580px] hidden lg:block" }, "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendreri4t lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.")),
        React.createElement("div", { className: "mt-[60px] lg:mt-[100px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10" },
            React.createElement("div", { className: "relative flex justify-center" },
                React.createElement("div", { className: "hidden lg:block absolute left-[-90px] top-[-70px] z-0" },
                    React.createElement(icons_1.AboutHydraIcon, null)),
                React.createElement("div", { className: "hidden lg:block absolute left-[-90px] top-[250px] z-0" },
                    React.createElement(icons_1.AboutBottomIcon, null)),
                React.createElement("div", { className: "w-[340px] h-[360px] md:w-[450px] md:h-[450px] lg:w-[530px] lg:h-[530px] relative z-10 mx-auto", ref: aboutRef },
                    React.createElement(image_1["default"], { src: HydraVrMan_png_1["default"], alt: "HydravrMan", className: "w-full h-full object-contain" }))),
            React.createElement("div", { className: "w-[350px] md:w-[450px] lg:w-[580px]" },
                React.createElement("h1", { className: "text-white text-[28px] md:text-[36px] font-bold hidden lg:block" }, "ABOUT"),
                React.createElement("p", { className: "text-[28px] md:text-[36px] font-thin text-white hidden lg:block" }, "HYDRA VR"),
                React.createElement("p", { className: "text-[16px] text-white mt-[20px] md:mt-[40px] mb-[20px] md:mb-[30px]" }, "Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor."),
                React.createElement("button", { className: "relative z-10 transform transition-transform duration-300 cursor-pointer hover:scale-110 mb-[30px] font-bold text-[#343045] text-[14px] w-[276px] h-[56px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] mx-auto lg:mx-0 mt-[10px]" }, "LET\u2019S GET IN TOUCH")))));
}
exports["default"] = Introduction;
