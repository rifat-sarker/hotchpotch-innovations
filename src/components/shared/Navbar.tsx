"use client";

import Image from "next/image";
import logo from "@/assets/White Logo_Hotchpotch-01 1.png";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="">
      <div className="flex justify-around items-center text-[#FAFAFA] p-4  justify-items-center w-full mx-auto">
        <div className="flex items-center ">
          <div className="md:hidden">
            <button onClick={toogleMenu}>
              {isMenuOpen ? (
                <IoMdClose size={28} />
              ) : (
                <CiMenuBurger size={28} />
              )}
            </button>
          </div>

          {!isMenuOpen && <Image className="py-6" src={logo} alt="logo" />}
          {isMenuOpen && (
            <div
              className="fixed left-0 top-0 bottom-0 z-50 bg-[#12141D] p-6 
             rounded-r-lg shadow-md w-60  px-10 "
            >
              <ul className="flex flex-col  space-y-2 p-4 gap-2">
                <li className=" px-6 py-1 rounded hover:text-gradient hover:border border-t-[#2B59FF] border-r-[#BB2BFF] ">
                  Demos
                </li>
                <li className="  px-6 py-1 rounded hover:text-gradient hover:border border-t-[#2B59FF] border-r-[#BB2BFF]">
                  About
                </li>
                <li className="  px-6 py-1 rounded hover:text-gradient hover:border border-t-[#2B59FF] border-r-[#BB2BFF] ">
                  Blog
                </li>
                <li className="  px-6 py-1 rounded hover:text-gradient hover:border border-t-[#2B59FF] border-r-[#BB2BFF] ">
                  Pages
                </li>
                <li className="  px-6 py-1 rounded hover:text-gradient hover:border border-t-[#2B59FF] border-r-[#BB2BFF] ">
                  Contact
                </li>
                <li className="  px-6 py-1 rounded hover:text-gradient hover:border border-t-[#2B59FF] border-r-[#BB2BFF] ">
                  Sign In
                </li>
              </ul>
            </div>
          )}
          <ul className="hidden md:flex md:gap-10">
            <li>Demos</li>
            <li>About</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>

        <ul className="flex justify-center gap-3  ">
          <li>
            <button className="px-5 py-4  hover:border-t-[#2B59FF] hover:border-r-[#BB2BFF]  hidden lg:block rounded-md border  hover:text-gradient">
              Sign in
            </button>
          </li>
          <li>
            <button className="px-5 py-4 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
              Get Started Free
            </button>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0  opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
