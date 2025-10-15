import {
  FacebookIcon,
  FoooterBottomVectorIcon,
  FooterTopIcon,
  HydraLogoIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/images/icons";

export default function Footer() {
  return (
    <div className="w-full h-[400px] bg-[#302C42] flex items-center justify-center relative">
      <div className="absolute left-[0px] top-[-230px] z-0 hidden lg:block w-screen overflow-hidden">
        <FooterTopIcon />
      </div>
      <div className="absolute left-[0px] top-[0px] z-0 hidden lg:block w-screen overflow-hidden">
        <FoooterBottomVectorIcon />
      </div>
      <div className="relative z-10 w-[1200px] lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="flex justify-center">
          <div className="size-[185px]">
            <HydraLogoIcon />
          </div>
        </div>
        <div className="h-[196px] w-[3px] bg-gradient-to-t from-[#343045] via-[#C0B7E8] to-[#343045] hidden lg:block"></div>
        <div className="ml-[70px] flex flex-col gap-3 items-start hidden lg:flex">
          <button className="text-white text-[16px] font-bold">ABOUT</button>
          <button className="text-white text-[16px] font-bold">SERVICES</button>
          <button className="text-white text-[16px] font-bold">
            TECHNOLOGIES
          </button>
          <button className="text-white text-[16px] font-bold">HOW TO</button>
          <button className="text-white text-[16px] font-bold">
            JOIN HYDRA
          </button>
        </div>
        <div className="h-[196px] w-[3px] bg-gradient-to-t from-[#343045] via-[#C0B7E8] to-[#343045] hidden lg:block"></div>
        <div className="flex flex-col gap-3 items-start  hidden lg:flex">
          <button className="text-white text-[16px] font-bold">F.A.Q</button>
          <button className="text-white text-[16px] font-bold">SITEMAP</button>
          <button className="text-white text-[16px] font-bold">
            CONDITIONS
          </button>
          <button className="text-white text-[16px] font-bold">LI CENSES</button>
        </div>
        <div className="h-[196px] w-[3px] bg-gradient-to-t from-[#343045] via-[#C0B7E8] to-[#343045] hidden lg:block"></div>
        <div className="flex flex-col items-center gap-5 mt-[10px] mb-[30px]">
          <p className="text-white text-[16px] font-bold">
            SOCIALIZE WITH HYDRA
          </p>
          <div className="flex items-center gap-3">
            <InstagramIcon />
            <FacebookIcon />
            <YoutubeIcon />
            <TwitterIcon />
          </div>
          <button className="font-bold text-[#343045] text-[12px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            BUILD YOUR WORLD
          </button>
        </div>
      </div>
    </div>
  );
}
