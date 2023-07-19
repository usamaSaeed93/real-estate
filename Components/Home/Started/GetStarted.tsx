import React from "react";
import Image from "next/image";
import room from "../../../public/Images/png/room.png";
const GetStarted: React.FC = () => {
  return (
    <div className="m-auto w-full flex justify-center items-center mb-10">
      <div className="md:max-w-[750px] lg:max-w-[1050px] mx-5 flex flex-row w-full m-auto bg-[#D6EBE4] mt-44 h-[500px] justify-center items-center overflow-visible relative rounded-[100px] rounded-br-none ">
        <div className="lg:w-1/2 md:w-1/4 lg:flex hidden">
          <Image
            src={room}
            alt="room"
            className="absolute bottom-[5%] left-[-5%] lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>

        <div className="lg:w-1/2 md:w-3/4 justify-center items-start flex flex-col px-3">
          <div></div>
          <p className="text-black font-Manrope text-3xl sm:text-4xl font-semibold leading-normal max-w-[378px] mb-8">
            Trusted by over 250,000 businesses owners worldwide
          </p>
          <p className="max-w-[344px] mb-11 text-gray-600 font-Inter text-base font-normal leading-6">
            Crafted with care by the authors of Oshine, a best seller with over
            25K customers. Take complete control of your website.
          </p>
      <button className="font-Inter font-medium text-xs sm:text-base text-white max-w-[200px] w-full h-14 bg-[#F77E53] mt-8 rounded-md px-2">
          Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
