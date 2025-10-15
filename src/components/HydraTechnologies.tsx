import Image from "next/image";
import unityImg from "../images/Unity.png";
import engineUnreal from "../images/EngineUnreal.png";
import oculusImg from "../images/Oculus.png";
import viveImg from "../images/Vive.png";
import { LeftPrevIcon, RightPrevIcon, TecnologuiesVectorIcon } from "@/images/icons";
import { RefObject, useState } from "react";

interface technoRefI {
  technoRef: RefObject<HTMLDivElement | null>;
}

const images = [engineUnreal, unityImg, oculusImg, viveImg];

export default function HydraTechnologies({ technoRef }: technoRefI) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#302C42] flex justify-center h-[630px] relative">
      <div className="absolute left-0 top-[-550px] z-0 hidden lg:block w-screen overflow-hidden">
        <TecnologuiesVectorIcon />
      </div>
      <div className="relative z-10">
        <div className="mx-auto w-[380px] h-[165px] md:w-[600px] h-[230px] lg:w-[calc(100vw-80px)] lg:h-[303px] rounded-[100px] lg:rounded-[150px] bg-cover bg-center bg-no-repeat bg-[url('../images/HydraTechnologies.png')] flex items-center justify-center">
          <div
            className="w-fit flex flex-col items-center justify-center"
            ref={technoRef}
          >
            <h1 className="text-white text-[16px] md:text-[24px] lg:text-[36px] font-bold">
              TECHNOLOGIES & HARDWARE
            </h1>
            <p className="text-white text-[24px] md:text-[28px] lg:text-[36px] font-thin">
              USED BY HYDRA VR.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between mt-[50px] px-[70px]">
          <button className="lg:hidden"><LeftPrevIcon /></button>
          <div className="w-full flex justify-between items-center">
            {images.map((img, i) => (
              <Image key={i} src={img} alt="technoImg" className="w-[260px]" />
            ))}
          </div>
          <button className="lg:hidden"><RightPrevIcon /></button>
        </div>
        <div className="flex lg:hidden items-center justify-center mt-[50px] px-[30px]">
          <button onClick={prevSlide}>
            <LeftPrevIcon />
          </button>

          <div className="w-[70%] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="flex-shrink-0 w-full flex justify-center">
                  <Image
                    src={img}
                    alt="technoImg"
                    className="w-[200px] md:w-[250px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide}>
            <RightPrevIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
