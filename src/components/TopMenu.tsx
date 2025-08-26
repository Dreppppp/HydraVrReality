import { HydraLogoIcon, HydraTextIcon } from "@/images/icons";

export default function TopMenu() {
  return (
    <div className="h-[150px] w-full py-[25px] px-[85px] bg-[#302C42] flex justify-between items-center ">
      <div className="flex justify-between items-center w-[193px] ">
        <HydraLogoIcon />
        <HydraTextIcon />
      </div>
      <div className="text-white text-[12px] font-bold w-[350px] flex justify-between items-center">
        <button>ABOUT</button>
        <button>SERVICES</button>
        <button>TECHNOLOGIES</button>
        <button>HOW TO</button>
      </div>
      <div className="flex justify-between items-center w-[340px]">
        <button className="font-bold text-white text-[12px] w-[155px] h-[50px] rounded-[40px] border border-2 border-white flex justify-center items-center ">CONTACT US</button>
        <button className="font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">JOIN HYDRA</button>
      </div>
    </div>
  );
}
