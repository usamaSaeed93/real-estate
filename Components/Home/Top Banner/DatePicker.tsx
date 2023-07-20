"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AirbnbCalendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="lg:hidden flex m-auto ">
      <div className="airbnb-calendar bg-white gap-x-10 gap-y-10 max-w-[300px] w-full px-10 py-10 rounded-xl shadow-2xl m-auto mt-5 overflow-hidden ">
        <div className="flex flex-row  justify-center items-center gap-5 ">
          <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
            Location
          </p>
          <input
            type="text"
            placeholder="Where are you going?"
            className="text-gray-400 font-Inter text-base font-normal leading-normal w-[200px] border-none outline-none justify-center items-center"
          />
        </div>

        <div className="flex flex-row  justify-center items-center gap-5 pl-10 pt-10">
          <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
            Check In
          </p>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
          />
        </div>

        <div className="flex flex-row  justify-center items-center gap-5 pl-10 pt-10">
          <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
            Check Out
          </p>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
          />
        </div>

        <button className="max-w-56 px-4 w-full h-14 flex flex-row justify-center items-center bg-[#F85A47] font-white font-normal text-base text-white rounded-md mt-10">
          564 property found
          <SearchIcon
            sx={{ color: "#fff", fontSize: "26px", paddingLeft: "8px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default AirbnbCalendar;
