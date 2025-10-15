import {
  ArrowRightHeaderIcon,
  EmailIcon,
  GeoPointIcon,
  HeaderImageBottomtVector,
  HeaderImageLeftVector,
  HeaderImageRightVector,
  HeaderLeftVectorIcon,
  PhoneIcon,
} from "@/images/icons";
import Image from "next/image";
import MaskGroup from "../images/MaskGroup.png";
import { useState } from "react";

export default function Header() {
  const slides = [
    {
      icon: <GeoPointIcon />,
      title: "Pay Us a Visit",
      desc: "Union St, Seattle, WA 98101, United States",
    },
    {
      icon: <PhoneIcon />,
      title: "Give Us a Call",
      desc: "110 1111-1010",
    },
    {
      icon: <EmailIcon />,
      title: "Send Us a Message",
      desc: "110 1111-1010",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };
  
  return (
    <div className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] bg-[#302C42] md:pt-[100px]">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-16">
        <div className="w-full md:w-[460px] flex flex-col items-center mt-2 md:mt-0">
          <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[40px] text-white font-bold text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]">
              DIVE
            </span>{" "}
            Into The Depths <br /> Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              Virtual
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]">
              Reality
            </span>
          </h1>
          <p className="text-white text-[14px] sm:text-[16px] mt-4 md:mt-8 hidden lg:block">
            Explore immersive worlds where technology blurs the line between
            reality and imagination. Experience fully interactive environments,
            engaging simulations, and new dimensions that transform how we
            perceive digital spaces.
          </p>
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-6 md:mt-10 w-full mb-[30px]">
            <button className="transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-[#343045] text-[14px] font-bold w-[292px] h-[52px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              {" "}
              BUILD YOUR WORLD{" "}
            </button>
            <div className="hidden lg:block transform transition-transform duration-300 cursor-pointer hover:scale-110">
              <ArrowRightHeaderIcon />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center md:w-auto mb-8 md:mb-0 relative">
          <div className="w-[400px] h-[300px] md:w-[350px] md:h-[330px] lg:w-[530px] lg:h-[460px] relative z-10 ">
            <Image
              src={MaskGroup}
              alt="maskgroup"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden lg:block absolute left-[-100px] top-[10px] z-0 ">
            <HeaderLeftVectorIcon />
          </div>
          <div className="hidden lg:block absolute left-[90px] top-[-250px] z-0">
            <HeaderImageLeftVector />
          </div>
          <div className="hidden lg:block absolute right-[-70px] top-[-80px] z-0">
            <HeaderImageRightVector />
          </div>
          <div className="hidden lg:block absolute left-[-100px] bottom-[-80px] z-0">
            <HeaderImageBottomtVector />
          </div>
        </div>
      </div>

      <div
        className="hidden lg:flex relative z-20 mt-[30px] 
    w-full max-w-[calc(100%-200px)] overflow-hidden h-[170px] rounded-[120px]
    bg-gradient-to-r from-[#211E2E] via-[#3A3456F2] to-[#211E2E]
    justify-between items-center px-[40px] mx-auto"
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
      <div className="lg:hidden relative w-[347px] h-[109px]  max-w-[600px] mx-auto overflow-hidden rounded-[100px] bg-gradient-to-r from-[#211E2E] via-[#3A3456F2] to-[#211E2E] flex items-center justify-center mx-[20px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center px-[20px]"
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center gap-4 ">
                  {slide.icon}
                  <p className="text-white text-[14px] max-w-[180px] ">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          disabled={current === 0}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-40 disabled:opacity-30"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          disabled={current === slides.length - 1}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-40 disabled:opacity-30"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
