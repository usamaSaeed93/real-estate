import React from "react";
import Image from "next/image";
import Button from "../../../public/Images/svg/Button.svg";
import man from "../../../public/Images/svg/manicon.svg";
import home from '../../../public/Images/svg/homeicon.svg'
const Options: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-20 sm:flex-row sm:gap-10 md:gap-20 mt-16 pb-20">
      <div className="max-w-[350px] w-full h-32 mx-4  md:ml-12 lg:ml-32 m-auto">
        <Image src={man} alt="man" />
        <div className="flex flex-row justify-between items-end">
          <p className="text-black font-Inter text-2xl font-medium leading-10 pt-7">
            Want to sell a home in Besnik
          </p>
          <Image src={Button} alt="button" className="w-14 h-10 pr-2" />
        </div>
        <p className="text-black font-Inter text-base font-normal leading-normal pt-6">
          Call the broker for a quote!
        </p>
      </div>
      <div className="max-w-[350px] w-full h-32 mx-4 ">
        <Image src={home} alt="home" />
        <div className="flex flex-row justify-between items-end">
          <p className="text-black font-Inter text-2xl font-medium leading-10 pt-7">
            Want to sell a home in Besnik
          </p>
          <Image src={Button} alt="button" className="w-14 h-10 pr-2" />
        </div>
        <p className="text-black font-Inter text-base font-normal leading-normal pt-6">
          Call the broker for a quote!
        </p>
      </div>
    </div>
  );
};
export default Options;
