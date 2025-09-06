import {
  ArrowRightHeaderIcon,
  HowBuildVectorIcon,
  LeftPrevIcon,
  LongarrowIcon,
  RightPrevIcon,
} from "@/images/icons";
import { RefObject, useState } from "react";

interface HowBuildHydraProps {
  howToRef: RefObject<HTMLDivElement | null>;
}

export default function HowBuildHydra({ howToRef }: HowBuildHydraProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSteps = 4;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSteps - 1 ? 0 : prev + 1));
  };

  const StepBuildCard: React.FC<{
    number: number;
    description: string;
    aosdelay: number;
    isMobile?: boolean;
  }> = ({ number, description, aosdelay, isMobile }) => (
   <div className="flex flex-col justify-center items-center w-[230px] mx-auto">
  <div className="flex items-center justify-center rounded-[150px] bg-[#0D0D0D50] size-[190px]">
    <div className="size-[150px] rounded-full flex items-center justify-center text-[64px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] font-bold">
      0{number}
    </div>
  </div>
  <div className="flex justify-center items-center mt-[30px]">
    <div className="hidden lg:block mr-[15px]">
      <ArrowRightHeaderIcon />
    </div>
    <p className="text-[24px] text-white font-bold text-center">{description}</p>
  </div>
</div>

  );

  return (
    <div className="w-full bg-[#302C42] px-[20px] lg:px-[84px] h-[820px] pt-[115px]">
      <div ref={howToRef} className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left gap-[20px]">
        <div>
          <h1 className="text-white text-[36px] font-bold">HOW WE BUILD</h1>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full lg:w-[520px] gap-[20px] lg:gap-[40px] mt-[10px]">
            <p className="text-[36px] font-thin text-white">WITH HYDRA VR?</p>
            <div className="hidden lg:block">
              <LongarrowIcon />
            </div>
          </div>
        </div>
        <p className="text-[16px] text-white w-full lg:w-[580px] hidden lg:block">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendreri4t lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="relative mt-[100px]">
        <div className="absolute left-[-50px] top-[0px] z-0 hidden lg:block w-full">
          <HowBuildVectorIcon />
        </div>
        <div className="hidden lg:flex w-full justify-between items-center relative z-10">
          <StepBuildCard number={1} description="3D Conception & Design" aosdelay={0} />
          <StepBuildCard number={2} description="Interaction Design" aosdelay={200} />
          <StepBuildCard number={3} description="VR World User Testing" aosdelay={400} />
          <StepBuildCard number={4} description="Hydra VR Deploy" aosdelay={600} />
        </div>
        <div className="flex lg:hidden items-center justify-center mt-[50px] relative z-10">
          <button onClick={prevSlide} className="mr-2">
            <LeftPrevIcon />
          </button>

          <div className="w-[80%] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex-shrink-0 w-full flex justify-center">
                <StepBuildCard number={1} description="3D Conception & Design" aosdelay={0} isMobile />
              </div>
              <div className="flex-shrink-0 w-full flex justify-center">
                <StepBuildCard number={2} description="Interaction Design" aosdelay={200} isMobile />
              </div>
              <div className="flex-shrink-0 w-full flex justify-center">
                <StepBuildCard number={3} description="VR World User Testing" aosdelay={400} isMobile />
              </div>
              <div className="flex-shrink-0 w-full flex justify-center">
                <StepBuildCard number={4} description="Hydra VR Deploy" aosdelay={600} isMobile />
              </div>
            </div>
          </div>

          <button onClick={nextSlide} className="ml-2">
            <RightPrevIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
