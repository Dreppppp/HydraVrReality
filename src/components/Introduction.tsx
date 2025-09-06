import { AboutBottomIcon, AboutHydraIcon, HeaderImageLeftVector, LongarrowIcon } from "@/images/icons";
import HydravrMan from "../images/HydraVrMan.png";
import Image from "next/image";
import { RefObject } from "react";
  interface aboutRefI {
    aboutRef: RefObject<HTMLDivElement | null>;
  }
export default function Introduction({aboutRef} : aboutRefI) {
  return (
<div className="w-full bg-[#302C42] px-4 md:px-10 lg:px-[84px] pt-[60px] lg:pt-[115px]">
  <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left gap-6 mt-[50px]">
    <div>
      <h1 className="text-white text-[28px] md:text-[36px] font-bold">INTRODUCTION</h1>
      <div className="flex justify-center lg:justify-start items-center gap-[20px] md:gap-[40px] mt-2">
        <p className="text-[28px] md:text-[36px] font-thin text-white">TO HYDRA VR</p>
        <div className="hidden lg:block"><LongarrowIcon /></div>
      </div>
    </div>
    <p className="text-[16px] text-white max-w-[580px] hidden lg:block">
      Vitae sapien pellentesque habitant morbi tristique senectus et netus
      et. Feugiat nibh sed pulvinar proin gravida hendreri4t lectus. Mi sit
      amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
      aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
      in. Lectus magna fringilla urna porttitor rhoncus vitae.
    </p>
  </div>
  <div className="mt-[60px] lg:mt-[100px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10">
    <div className="relative flex justify-center">
      <div className="hidden lg:block absolute left-[-90px] top-[-70px] z-0">
        <AboutHydraIcon />
      </div>
      <div className="hidden lg:block absolute left-[-90px] top-[250px] z-0">
        <AboutBottomIcon />
      </div>
      <div className="w-[340px] h-[360px] md:w-[450px] md:h-[450px] lg:w-[530px] lg:h-[530px] relative z-10 mx-auto" ref={aboutRef}>
        <Image
          src={HydravrMan}
          alt="HydravrMan"
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    <div className="w-[350px] md:w-[450px] lg:w-[580px]">
      <h1 className="text-white text-[28px] md:text-[36px] font-bold hidden lg:block">ABOUT</h1>
      <p className="text-[28px] md:text-[36px] font-thin text-white hidden lg:block">HYDRA VR</p>
      <p className="text-[16px] text-white mt-[20px] md:mt-[40px] mb-[20px] md:mb-[30px]">
        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
        mattis rhoncus urna neque viverra justo. Vivamus at augue eget
        arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
        Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
        faucibus purus in massa. Est placerat in egestas erat imperdiet
        sed. Consequat semper viverra nam libero justo laoreet sit amet.
        Aliquam etiam erat velit scelerisque in dictum non consectetur a.
        Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
        orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
        adipiscing bibendum. Leo a diam sollicitudi n tempor.
      </p>
      <button className="relative z-10 transform transition-transform duration-300 cursor-pointer hover:scale-110 mb-[30px] font-bold text-[#343045] text-[14px] w-[276px] h-[56px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] mx-auto lg:mx-0 mt-[10px]">
        LET’S GET IN TOUCH
      </button>
    </div>
  </div>
</div>

  );
}
