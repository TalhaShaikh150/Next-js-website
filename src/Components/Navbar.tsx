"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { FiUserCheck, FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="h-[16vh] bg-white flex justify-between items-center px-8 shadow-md">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="Logo"
            className="w-40 2xl:w-50 cursor-pointer"
          />
        </div>

        {/* Nav Links Section */}
        <ul className="items-center justify-center flex-grow hidden gap-8 text-lg md:flex 2xl:text-2xl sm:ms-6 lg:ms-12 lg:gap-12">
          <li className="underline hover-nav underline-offset-4">
            <Link href="/">Home</Link>
          </li>
          <li className="hover-nav">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover-nav">
            <Link href="#">Blog</Link>
          </li>
          <li className="hover-nav">
            <Link href="#">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="items-center justify-center flex-shrink-0 gap-6 sm:gap-8 md:gap-4 lg:gap-8 hidden xs:flex">
          <FiUserCheck className="text-xl md:text-2xl cursor-pointer" />
          <FiSearch className="text-xl md:text-2xl cursor-pointer" />
          <FaRegHeart className="text-xl md:text-2xl cursor-pointer" />
          <AiOutlineShoppingCart className="text-xl md:text-2xl cursor-pointer" />
        </div>

        {/* Menu Icon for Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-3xl focus:outline-none"
          >
            {isMenuOpen ? <MdClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[220px] xs:max-w-[300px] bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-6 p-8 text-lg">
          <li className="underline hover-nav underline-offset-4">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="hover-nav">
            <Link href="/shop" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li className="hover-nav">
            <Link href="#" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li className="hover-nav">
            <Link href="#" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Inside Off-Canvas Menu */}
        <div className="flex flex-col items-start gap-4 px-8 mt-6 xs:hidden">
          <div className="flex items-center gap-4">
            <FiUserCheck className="text-xl md:text-2xl cursor-pointer" />
            <span>Profile</span>
          </div>
          <div className="flex items-center gap-4">
            <FiSearch className="text-xl md:text-2xl cursor-pointer" />
            <span>Search</span>
          </div>
          <div className="flex items-center gap-4">
            <FaRegHeart className="text-xl md:text-2xl cursor-pointer" />
            <span>Favorites</span>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineShoppingCart className="text-xl md:text-2xl cursor-pointer" />
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
