"use strict";
exports.__esModule = true;
var icons_1 = require("@/images/icons");
function Footer() {
    return (React.createElement("div", { className: "w-full h-[350px] bg-[#302C42] flex items-center justify-center relative" },
        React.createElement("div", { className: "absolute left-[0px] top-[-230px] z-0 hidden lg:block" },
            React.createElement(icons_1.FooterTopIcon, null)),
        React.createElement("div", { className: "absolute left-[0px] top-[0px] z-0 hidden lg:block" },
            React.createElement(icons_1.FoooterBottomVectorIcon, null)),
        React.createElement("div", { className: "relative z-10 w-[1200px] lg:grid lg:grid-cols-[auto_1px_auto_1px_auto_1px_auto] lg:items-center lg:gap-10" },
            React.createElement("div", { className: "flex justify-center" },
                React.createElement("div", { className: "size-[185px]" },
                    React.createElement(icons_1.HydraLogoIcon, null))),
            React.createElement("div", { className: "h-[196px] w-[3px] bg-gradient-to-t from-[#343045] via-[#C0B7E8] to-[#343045] hidden lg:block" }),
            React.createElement("div", { className: "ml-[70px] flex flex-col gap-3 items-start hidden lg:block" },
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "ABOUT"),
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "SERVICES"),
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "TECHNOLOGIES"),
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "HOW TO"),
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "JOIN HYDRA")),
            React.createElement("div", { className: "h-[196px] w-[3px] bg-gradient-to-t from-[#343045] via-[#C0B7E8] to-[#343045 hidden lg:block]" }),
            React.createElement("div", { className: "flex flex-col gap-3 items-start hidden lg:block" },
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "F.A.Q"),
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "SITEMAP"),
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "CONDITIONS"),
                React.createElement("button", { className: "text-white text-[16px] font-bold" }, "LICENSES")),
            React.createElement("div", { className: "h-[196px] w-[3px] bg-gradient-to-t from-[#343045] via-[#C0B7E8] to-[#343045] hidden lg:block" }),
            React.createElement("div", { className: "flex flex-col items-center gap-5 mt-[10px] mb-[30px]" },
                React.createElement("p", { className: "text-white text-[16px] font-bold" }, "SOCIALIZE WITH HYDRA"),
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement(icons_1.InstagramIcon, null),
                    React.createElement(icons_1.FacebookIcon, null),
                    React.createElement(icons_1.YoutubeIcon, null),
                    React.createElement(icons_1.TwitterIcon, null)),
                React.createElement("button", { className: "font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]" }, "BUILD YOUR WORLD")))));
}
exports["default"] = Footer;
