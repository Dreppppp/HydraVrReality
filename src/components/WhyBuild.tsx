import { LeftPrevIcon, LongarrowIcon, RightPrevIcon } from "@/images/icons";
import Image, { StaticImageData } from "next/image";
import Simulation from "../images/Simulation.png";
import Education from "../images/Education.png";
import Selfcare from "../images/SelfCare.png";
import Oudoor from "../images/Outdoor.png";
import { RefObject, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface HydraCardProps {
  title: string;
  image: StaticImageData | string;
  aosDuration: number;
}

interface whyBuildI {
  whyBuild: RefObject<HTMLDivElement | null>;
}

export default function WhyBuild({ whyBuild }: whyBuildI) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { title: "SIMULATION", image: Simulation, aosDuration: 0 },
    { title: "EDUCATION", image: Education, aosDuration: 200 },
    { title: "SELFCARE", image: Selfcare, aosDuration: 400 },
    { title: "OUTDOOR", image: Oudoor, aosDuration: 600 },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const HydraPossibleCard: React.FC<HydraCardProps> = ({
    title,
    image,
    aosDuration,
  }) => (
    <div
      data-aos="fade-right"
      data-aos-delay={aosDuration}
      className="relative z-10 flex flex-col items-center justify-center gap-[30px] h-[510px] w-[310px] rounded-[40px] bg-[radial-gradient(circle,_#433D60_0%,_#211E2E_0%,_#211E2E_100%)]"
    >
      <div className="border border-[13px] border-[#0E0E0E52] rounded-[120px] w-fit h-fit">
        <div className="size-[190px] rounded-[100px]">
          <Image src={image} alt="cardHydraImg" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <h1 className="font-bold text-[24px] text-white">{title}</h1>
        <div className="w-[154px] h-[1px] bg-[#C0B7E854]"></div>
        <p className="w-[250px] text-[white] text-[12px] text-center">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <button className="transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
          TRY IT NOW
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#302C42] lg:px-[84px] h-[950px] pt-[50px]">
      <div className="w-full flex justify-between items-center">
        <div className=" text-center lg:text-left">
          <div>
            <h1 className="text-white text-[36px] font-bold">WHY BUILD</h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[100%] lg:w-[520px] gap-[20px] lg:gap-[40px]">
            <p className="text-[36px] font-thin text-white">WITH HYDRA?</p>
            <div className="hidden lg:block">
              <LongarrowIcon />
            </div>
          </div>
        </div>

        <p className="text-[16px] text-white w-[580px] hidden lg:block">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendreri4t lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      <div className="relative w-full mt-[100px]">
        <div
          className="hidden lg:flex w-full justify-between items-center"
          ref={whyBuild}
        >
          {cards.map((card, i) => (
            <HydraPossibleCard
              key={card.title}
              title={card.title}
              image={card.image}
              aosDuration={card.aosDuration}
            />
          ))}
        </div>
        <div className="relative flex lg:hidden items-center justify-center w-full mt-10">
          <button onClick={prevSlide} className="absolute left-0 z-20 p-2">
            <LeftPrevIcon />
          </button>
          <div className="w-[80%] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="flex-shrink-0 w-full flex justify-center"
                >
                  <HydraPossibleCard
                    title={card.title}
                    image={card.image}
                    aosDuration={card.aosDuration}
                  />
                </div>
              ))}
            </div>
          </div>
          <button onClick={nextSlide} className="absolute right-0 z-20 p-2">
            <RightPrevIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
