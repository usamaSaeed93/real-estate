"use client";
import { useState } from "react";
import Carousel from "./Carousal";
const Country: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const list: string[] = [
   'America',
   'Canada',
   'Australia',
   'Germany'
  ];
  const handleClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className="max-w-[1200px] w-full m-auto">
      <p className="text-black font-Manrope text-3xl font-semibold leading-10 mb-20 md:mt-44  mt-20 ">
        We’re already around americas.
      </p>
      <div className="flex flex-col md:flex-row gap-28">
        <ul className="gap-5 flex flex-col mb-11 px-2">
          {list.map((l) => {
            return (
              <ul
                key={l}
                className={`font-inter text-base sm:text-xl font-medium leading-normal  ${
                  selectedItem === l
                    ? " text-[#F85A47] font-medium "
                    : "text-black "
                }`}
                onClick={() => handleClick(l)}
              >
                {l}
              </ul>
            );
          })}
        </ul>
    
     
        <Carousel />
      </div>
    </div>
  );
};
export default Country;
