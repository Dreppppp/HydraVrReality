import {
  ArrowRightHeaderIcon,
  EmailIcon,
  GeoPointIcon,
  PhoneIcon,
} from "@/images/icons";
import Image from "next/image";
import MaskGroup from "../images/MaskGroup.png";

export default function Header() {
  return (
    <div className="w-full h-[870px] bg-[#302C42] pt-[100px] px-[84px]">
      <div className="flex justify-between">
        <div className="w-[460px]">
          <h1 className="text-[40px] text-white font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]">
              Dive
            </span>{" "}
            Into The Depths <br /> Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              Virtual
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]">
              Reality
            </span>
          </h1>
          <p className="text-white text-[16px] mt-[35px]">
            Explore immersive worlds where technology blurs the line between
            reality and imagination. Experience fully interactive environments,
            engaging simulations, and new dimensions that transform how we
            perceive digital spaces.
          </p>
          <div className="flex justify-between items-center w-[260px] mt-[65px]">
            <button className="font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              BUILD YOUR WORLD
            </button>
            <ArrowRightHeaderIcon />
          </div>
        </div>
        <div>
          <Image src={MaskGroup} alt="maskgroup" />;
        </div>
      </div>
      <div
        className="mt-[70px] w-[1270px] h-[170px] rounded-[120px] 
            bg-gradient-to-r from-[#211E2E] via-[#3A3456F2] to-[#211E2E] 
            flex justify-between items-center px-[40px]"
      >
        <div className="flex items-center">
          <GeoPointIcon />
          <div className="ml-[30px]">
            <h1 className="text-[24px] font-bold text-white">Pay Us a Visit</h1>
            <p className="text-white text-[14px]">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </div>
        <div className="w-[1px] h-[110px] bg-[#C0B7E854]"></div>
        <div className="flex items-center">
          <PhoneIcon />
          <div className="ml-[30px]">
            <h1 className="text-[24px] font-bold text-white">Give Us a Call</h1>
            <p className="text-white text-[14px]">110 1111-1010</p>
          </div>
        </div>
        <div className="w-[1px] h-[110px] bg-[#C0B7E854]"></div>
        <div className="flex items-center">
          <EmailIcon />
          <div className="ml-[30px]">
            <h1 className="text-[24px] font-bold text-white">
              Send Us a Message
            </h1>
            <p className="text-white text-[14px]">110 1111-1010</p>
          </div>
        </div>
      </div>
    </div>
  );
}
