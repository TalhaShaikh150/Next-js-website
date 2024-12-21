"use client"
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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [count, setcount] = useState(0);
  const [searchActive, setSearchActive] = useState(false); // state to toggle search input

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  function increment() {
    setcount(count + 1);
  }

  return (
    <>
      {/* Navbar */}
      <nav className="h-[16vh] bg-white flex justify-between items-center px-8 shadow-md">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-40 2xl:w-50 cursor-pointer" />
          </Link>
        </div>

        {/* Nav Links Section */}
        <ul className="items-center justify-center flex-grow hidden gap-8 text-lg md:flex 2xl:text-2xl sm:ms-6 lg:ms-12 lg:gap-12">
          <li className="hover-nav">
            <Link href="/">Home</Link>
          </li>
          <li className="hover-nav">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover-nav">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover-nav">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section (Always Visible) */}
        <div className="hidden xs:flex items-center justify-center flex-shrink-0 gap-6 sm:gap-8 md:gap-4 lg:gap-8">
          <FiUserCheck className="text-xl md:text-2xl 2xl:text-3xl cursor-pointer icon" />
          
          {/* Conditionally render the search input */}
          <div className="relative">
  <FiSearch
    className={`text-xl md:text-2xl 2xl:text-3xl cursor-pointer icon ${searchActive ? 'text-[#B88E2F]' : 'text-black'}`} // Apply a different color when searchActive is true
    onClick={() => setSearchActive(!searchActive)} // Toggle search input on icon click
  />
  {searchActive && (
    <input
      type="text"
      placeholder="Search..."
      className="absolute top-6 left-[-2em] md:top-8 md:left-[-4em] mt-0 2xl:mt-2 w-36 p-2 border border-gray-300 rounded-md  md:w-48 2xl:w-56 transition-all ease duration-200"
    />
  )}
</div>


          <div className="relative">
            <FaRegHeart
              className="text-xl md:text-2xl 2xl:text-3xl cursor-pointer active:text-[#B88E2F] icon"
              onClick={increment}
            />
            {count > 0 && (
              <div className="w-[22px] h-[22px] bg-red-500 absolute top-[-10px] right-[-10px] rounded-full flex items-center justify-center">
                <p className="text-xs md:text-sm font-bold text-white">{count}</p>
              </div>
            )}
          </div>

          <AiOutlineShoppingCart
            className="text-xl md:text-2xl 2xl:text-3xl cursor-pointer icon"
            onClick={toggleCart}
          />
        </div>

        {/* Menu Icon for Mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-3xl focus:outline-none">
            {isMenuOpen ? <MdClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-6 p-8 text-lg">
          <li className="hover-nav">
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
            <Link href="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li className="hover-nav">
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons in Off-Canvas Menu */}
        <div className="flex flex-col xs:hidden gap-6 p-8 mt-4 transition-all ease duration-200">
          <div className="flex items-center gap-4">
            <FiUserCheck className="text-xl md:text-2xl 2xl:text-3xl cursor-pointer icon" />
            <span>Profile</span>
          </div>

          {/* Search input with smooth transition */}
 

          <div className="flex items-center gap-4 relative">
            <FaRegHeart
              className="text-xl md:text-2xl 2xl:text-3xl cursor-pointer active:text-[#B88E2F] icon"
              onClick={increment}
            />
            {count > 0 && (
              <div className="w-[20px] h-[20px] bg-red-500 absolute top-[-8px] left-3 rounded-full flex items-center justify-center">
                <p className="text-xs font-bold text-white">{count}</p>
              </div>
            )}
            <span>Favorites</span>
          </div>

          <div className="flex items-center gap-4">
            <AiOutlineShoppingCart className="text-xl md:text-2xl 2xl:text-3xl cursor-pointer icon" onClick={toggleCart} />
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Off-Canvas Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white shadow-lg z-50 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <p>Your cart is currently empty.</p>
        </div>
        <button onClick={toggleCart} className="absolute top-4 right-4 text-2xl focus:outline-none">
          <MdClose />
        </button>
      </div>

      {/* Backdrop */}
      {(isMenuOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setIsMenuOpen(false);
            setIsCartOpen(false);
          }}
        ></div>
      )}
    </>
  );
}
