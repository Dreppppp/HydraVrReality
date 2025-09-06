import { RefObject } from "react";

interface joinHydraRefI {
  joinHydraRef: RefObject<HTMLDivElement | null>;
}

export default function JoinHydra({ joinHydraRef }: joinHydraRefI) {
  interface blankInputI {
    placeholder: string;
  }

  const BlankInput: React.FC<blankInputI> = ({ placeholder }) => {
    return (
      <div className="w-full sm:w-[250px] md:w-[400px] lg:w-[500px] h-[72px] rounded-[40px] border border-2 border-white px-4 sm:px-6 py-3 sm:py-4">
        <input
          type="text"
          placeholder={placeholder}
          className="text-[14px] sm:text-[14px] md:text-[16px] outline-none placeholder-white text-white w-full bg-transparent"
        />
      </div>
    );
  };

  return (
    <div className="bg-[#302C42] flex items-center justify-center py-10 px-4 sm:px-6 md:px-10">
      <div className=" px-[30px] w-full max-w-[1275px] h-auto md:h-[908px] bg-[radial-gradient(circle,_#433D60_0%,_#2d2940_50%,_#211E2E_100%)] rounded-[30px] sm:rounded-[60px] md:rounded-[100px] flex flex-col items-center py-10 gap-6 relative z-10">
        <div className="w-full flex flex-col justify-center items-center gap-[15px] text-center px-4 sm:px-6">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] text-white font-bold">JOIN HYDRA</h1>
          <div className="w-[250px] sm:w-[350px] md:w-[414px] h-[1px] bg-gradient-to-r from-[#343045] via-[#C0B7E8] to-[#343045] mt-[20px]"></div>
          <p className="font-thin text-white text-[24px] sm:text-[30px] md:text-[36px] mt-[15px]">
            Let’s Build Your VR Experience
          </p>
        </div>
        <div
          ref={joinHydraRef}
          className="flex flex-wrap justify-between gap-y-4 gap-x-4 mt-10 w-full max-w-[1058px]"
        >
          <BlankInput placeholder="First Name" />
          <BlankInput placeholder="Last Name" />
          <BlankInput placeholder="Email" />
          <BlankInput placeholder="Phone Number" />
        </div>

        <div className="w-full max-w-[1058px] h-[72px] rounded-[40px] border border-2 border-white px-4 sm:px-6 py-3 sm:py-4 mt-4 ">
          <input
            type="text"
            placeholder="Subject"
            className="text-[14px] sm:text-[14px] md:text-[16px] outline-none placeholder-white text-white w-full bg-transparent"
          />
        </div>

        <div className="w-full max-w-[1058px] h-[150px] sm:h-[180px] md:h-[210px] rounded-[40px] border border-2 border-white px-4 sm:px-6 py-3 sm:py-4 mt-4">
          <textarea
            placeholder="Tell Us Something..."
            className="text-[14px] sm:text-[14px] md:text-[16px] outline-none placeholder-white text-white w-full h-full bg-transparent resize-none"
          />
        </div>
        <button className="transform transition-transform duration-300 cursor-pointer hover:scale-110 font-bold text-[#343045] text-[12px] sm:text-[12px] md:text-[14px] w-[155px] h-[50px] rounded-[40px] flex justify-center items-center bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] mt-6">
          SEND TO HYDRA
        </button>
      </div>
    </div>
  );
}
