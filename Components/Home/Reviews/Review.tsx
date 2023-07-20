import React from "react";
import ReviewTab from "./ReviewTab";
import ebay from "../../../public/Images/svg/airbnb.svg";
import cisco from "../../../public/Images/svg/cisco.svg";
import micro from "../../../public/Images/svg/airbnb.svg";
import uber from "../../../public/Images/svg/ebay.svg";
import air from "../../../public/Images/svg/uber.svg";
import Image from "next/image";


const Review: React.FC = () => {
  return (
    <div className="max-w-[1200px] m-auto ">
      <p className="max-w-[570px] text-black font-manrope text-[40px] font-semibold leading-normal pb-12 m-auto md:m-0 pl-4">
        Loved by businesses, and individuals across the globe.
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-y-10 mx-3 gap-x-3">
        <ReviewTab />
        <ReviewTab />
        <ReviewTab />
      </div>
      <div className="flex flex-col lg:flex-row mt-28 justify-between gap-y-5">
        <div className="flex flex-row gap-x-4 px-2 md:gap-x-20  m-auto">
          <Image src={air} alt="ebay" />
          <Image src={micro} alt="ebay" />
          <Image src={uber} alt="ebay" />
          <Image src={cisco} alt="ebay" />
          <Image src={ebay} alt="ebay" className="hidden sm:flex" />
        </div>
        <p className="text-black max-w-[311px] font-inter text-base font-normal leading-6 underline m-auto">
          Give us a Call 1-888-498-9240 and we can set you up, or check our
          pricing plans
        </p>
      </div>
    </div>
  );
};
export default Review;
