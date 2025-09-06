import { HydraLogoIcon, HydraTextIcon, MenuBurgerIcon } from "@/images/icons";
import { useState } from "react";

interface TopMenuProps {
  scrollToHowBuild: () => void;
  scrollToAbout: () => void;
  scrollToIntro: () => void;
  scrollToWhyBuild: () => void;
  scrollToTechnologies: () => void;
  scrollToJoinHydra: () => void;
  toggleMenu: () => void
}
export default function TopMenu({
  scrollToHowBuild,
  scrollToAbout,
  scrollToIntro,
  scrollToWhyBuild,
  scrollToTechnologies,
  scrollToJoinHydra,
  toggleMenu
}: TopMenuProps) {
  return (
    <div className="h-[150px] w-full py-[25px] px-[20px] md:px-[50px] lg:px-[85px] bg-[#302C42] flex justify-between items-center relative z-10">
      <div className="flex justify-between items-center w-[140px] md:w-[170px] lg:w-[193px]">
        <div className="w-[70px] h-[60px] md:w-[80px] md:h-[80px] lg:w-full lg:h-full">
          <HydraLogoIcon className="w-full h-full" />
        </div>
        <div className="w-[55px] h-[35px] md:w-[150px] md:h-[80px]">
          <HydraTextIcon className="w-full h-full" />
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center w-full px-[85px]">
        <div className="text-white text-[12px] font-bold w-[350px] flex justify-between items-center">
          <button
            onClick={() => {
              scrollToAbout();
            }}
            className=" transform transition-transform duration-300 cursor-pointer hover:scale-110"
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              scrollToWhyBuild();
            }}
            className="transform transition-transform duration-300 cursor-pointer hover:scale-110"
          >
            SERVICES
          </button>
          <button
            onClick={() => {
              scrollToTechnologies();
            }}
            className="transform transition-transform duration-300 cursor-pointer hover:scale-110"
          >
            TECHNOLOGIES
          </button>
          <button
            onClick={() => {
              scrollToHowBuild();
            }}
            className="transform transition-transform duration-300 cursor-pointer hover:scale-110"
          >
            HOW TO
          </button>
        </div>
        <div className="flex justify-between items-center w-[340px]">
          <button
            onClick={() => {
              scrollToJoinHydra();
            }}
            className="transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-white text-[12px] w-[155px] h-[50px] rounded-[40px] border border-2 border-white flex justify-center items-center "
          >
            CONTACT US
          </button>
          <button
            onClick={() => {
              scrollToJoinHydra();
            }}
            className="transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
          >
            JOIN HYDRA
          </button>
        </div>
      </div>
      <div>
        <div className="block md:hidden">
          <button onClick={() =>  toggleMenu()}>
            <MenuBurgerIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
