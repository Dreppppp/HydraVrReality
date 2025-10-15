import { RightPrevIcon } from "@/images/icons";

interface ISideMenu {
  isOpen: boolean;
  toggleMenu: () => void;
  scrollToHowBuild: () => void;
  scrollToAbout: () => void;
  scrollToTechnologies: () => void;
  scrollToWhyBuild: () => void;
  scrollToJoinHydra: () => void;
}
export default function SideMenu({
  isOpen,
  toggleMenu,
  scrollToHowBuild,
  scrollToAbout,
  scrollToTechnologies,
  scrollToWhyBuild,
  scrollToJoinHydra,
}: ISideMenu) {
  return (
    <div
      className={`h-screen w-screen fixed top-0 ${
        isOpen ? "right-0" : "right-[-100%]"
      } z-100 transition-all duration-500 flex justify-end backdrop-blur-md`}
    >
      <div className="w-[50%] h-screen bg-[#C0B7E8] relative">
        <div className="flex flex-col gap-4 mt-[45px] mx-[30px]">
          <button
            onClick={() => {
              toggleMenu();
            }}
            className="fixed top-[15px] right-[15px] size-[30px]"
          >
            <RightPrevIcon className="w-full h-full" />
          </button>
          <button
            data-aos="fade-right"
            data-aos-delay={300}
            className="text-[20px] font-medium text-[#302C42] text-left"
            onClick={() => {
              toggleMenu();
              scrollToAbout();
            }}
          >
            About
          </button>
          <button
            data-aos="fade-right"
            data-aos-delay={600}
            className="text-[20px] font-medium text-[#302C42] text-left"
            onClick={() => {
              toggleMenu();
              scrollToTechnologies();
            }}
          >
            Technologies
          </button>
          <button
            data-aos="fade-right"
            data-aos-delay={900}
            className="text-[20px] font-medium text-[#302C42] text-left"
            onClick={() => {
              toggleMenu();
              scrollToJoinHydra();
            }}
          >
            Join Hydra
          </button>
          <button
            data-aos="fade-right"
            data-aos-delay={1200}
            className="text-[20px] font-medium text-[#302C42] text-left"
            onClick={() => {
              toggleMenu();
              scrollToWhyBuild();
            }}
          >
            Why build
          </button>
        </div>
      </div>
    </div>
  );
}
