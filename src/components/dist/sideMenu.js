"use strict";
exports.__esModule = true;
function SideMenu(_a) {
    var isOpen = _a.isOpen;
    return (React.createElement("div", { className: "h-screen w-screen fixed top-0 " + (isOpen ? "right-0" : "right-[-90%]") + " z-10" },
        React.createElement("div", { className: "w-[50%] h-screen bg-purple-600" },
            React.createElement("div", { className: "flex flex-col gap-4 mt-[30px] mx-[30px]" },
                React.createElement("button", null, "About"),
                React.createElement("button", null, "Join Hydra"),
                React.createElement("button", null, "Whu build")))));
}
exports["default"] = SideMenu;
