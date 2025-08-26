import { LongarrowIcon } from "@/images/icons";
import HydravrMan from "../images/HydraVrMan.png";
import Image from "next/image";

export default function Introduction() {
  return (
    <div>
      <div className="w-full flex jsutify-between items-center px-[85px] mt-[100px]">
        <div>
          <div>
            <h1 className="text-white text-[36px] font-bold">INTRODUCTION</h1>
          </div>
          <div className="flex jusify-between items-center w-[520px]">
            <p className="text-[36px] font-thin">TO HYDRA VR</p>
            <LongarrowIcon />
          </div>
        </div>
        <div>
          <p className="text-[16px] text-white">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div>
        <div>
          <Image src={HydravrMan} alt="HydravrMan" />
        </div>
        <div> 
          <div>
            <h1 className="text-white text-[36px] font-bold">ABOUT</h1>
            <p className="text-[36px] font-thin">HYDRA VR</p>
          </div>
          <div>
            <p className="text-[16px] text-white">
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
          </div>
        </div>
      </div>
    </div>
  );
}
