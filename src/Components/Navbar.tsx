import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { FiUserCheck } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="h-[16vh] bg-white flex justify-center xs:justify-between items-center px-8 sm:px-16 shadow-md">
      {/* For Logo*/}
      <div className="flex-shrink-0">
        <Image src={logo} alt="Logo" className="w-40 cursor-pointer " />
      </div>

      {/* Nav Links Section */}
      <ul className="hidden md:flex text-lg 2xl:text-2xl gap-8 sm:ms-6 lg:ms-12 justify-center items-center lg:gap-12 flex-grow ">
        <li className="hover-nav underline underline-offset-4">
          <a href="#">Home</a>
        </li>
        <li className="hover-nav">
          <a href="#">Shop</a>
        </li>
        <li className="hover-nav">
          <a href="#">Blog</a>
        </li>
        <li className="hover-nav">
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="icons hidden xs:flex justify-center items-center gap-4  lg:gap-8 flex-shrink-0">
        <FiUserCheck className="text-2xl cursor-pointer" />
        <FiSearch className="text-2xl cursor-pointer" />
        <FaRegHeart className="text-2xl cursor-pointer" />
        <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
}
