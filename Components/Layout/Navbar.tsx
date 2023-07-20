"use client";
import React from "react";
import Image from "next/image";
import Logo from '../../public/Images/png/Logo.svg'
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import Drawer from "./Drawer";

export default function Navbar() {
  return (
    <div className="w-full absolute ">
      <div className="flex flex-row bg-layoutBlue h-16 items-center justify-between  lg:justify-between max-w-[1000px] m-auto">
        <Image src={Logo} alt="logo"  />

        <div className="lg:flex flex-row gap-10 hidden">
          <Link href="/" className="text-[#1F2B6C] font-medium font-poppins">
            Home
          </Link>
          <Link
            href="/"
            className="text-[#596B7B] active:text-[#1F2B6C] font-medium font-poppins"
          >
            Services
          </Link>
          <Link
            href="/"
            className="text-[#596B7B] active:text-[#1F2B6C] font-medium font-poppins"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-[#596B7B] active:text-[#1F2B6C] font-medium font-poppins"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-row">
          <button className="w-28 h-12 rounded-md bg-[#159FED] font-normal text-white text-lg">
            Sign Up
          </button>
          <div className="lg:hidden flex">
            <Drawer />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
