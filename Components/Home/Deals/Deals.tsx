"use client";
import React from "react";
import Image from "next/image";
import deal from "../../../public/Images/png/🧿inspirations/deal1.png";
import deal2 from "../../../public/Images/png/🧿inspirations/deal2.png";
import { useState } from "react";

const Deals = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const list: string[] = [
    "Residential Property",
    "Commercial Property",
    " Industrial Property",
  ];
  const handleClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className="max-w-[1200px] m-auto ">
      <div className="flex flex-row justify-between items-center mx-3">
        <p className="text-black font-Manrope font-semibold text-2xl sm:text-4xl px-3 py-10">
          Best Real Estate Deals
        </p>
        <button className="font-Inter font-medium text-xs sm:text-base text-white max-w-[200px] w-full h-14 bg-[#F77E53] mt-8 rounded-md px-2">
          View All Properties
        </button>
      </div>
      <p className="text-black font-Inter text-base font-normal leading-6 max-w-[450px] px-3 pb-10">
        We collaborate with organizations that are keen to transform the legal
        industry with tech.
      </p>
      <div>
        <ul className="gap-2 flex flex-row mb-11 px-3">
          {list.map((l) => {
            return (
              <ul
                key={l}
                className={`font-inter text-base sm:text-xl font-semibold leading-normal  ${
                  selectedItem === l
                    ? " text-[#F85A47] font-medium underline"
                    : "text-black "
                }`}
                onClick={() => handleClick(l)}
              >
                {l}
              </ul>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center px-3 gap-3 flex-wrap">
        <Image src={deal} alt="none" />
        <Image src={deal2} alt="none" />
        <Image src={deal} alt="none" />
      </div>
    </div>
  );
};
export default Deals;
