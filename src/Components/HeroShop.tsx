import React from 'react'
import { IoChevronForward } from "react-icons/io5";
import { LiaSlidersHSolid } from "react-icons/lia";
import { IoGrid } from "react-icons/io5";

import { BsViewList } from "react-icons/bs";


export default function HeroShop() {
  return (
    <div>
  <div className="main-2">
  {/* Header Section */}
  <div className="flex flex-col h-[30vh] items-center justify-center px-4 text-center">
    <h1 className="text-3xl font-medium md:text-4xl lg:text-5xl">Shop</h1>
    <div className="flex items-center gap-1 mt-2 text-sm md:text-base">
      <h2 className="font-medium">Home</h2>
      <IoChevronForward className="text-xs" />
      <h2>Shop</h2>
    </div>
  </div>

  {/* Filter and Sorting Section */}
  <div className="bg-[#F9F1E7] py-4 flex flex-col gap-4">
    <div className="w-[90%] mx-auto flex flex-col gap-4 sm:flex-row justify-between items-center">
      
      {/* Filter Section */}
      <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
        <LiaSlidersHSolid className="text-lg" />
        <h1>Filter</h1>
        <IoGrid className="text-lg hidden sm:block" />
        <BsViewList className="text-lg hidden sm:block" />
        <div className="border-l border-gray-400 h-6"></div>
        <p className="text-xs md:text-sm">Showing 1–16 of 32 results</p>
      </div>

      {/* Sorting Section */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4  items-center w-full sm:w-auto">
        <div className="flex items-center  justify-center gap-2 w-full sm:w-auto">
          <span className="text-sm md:text-base 2xl:text-lg">Show:</span>
          <input
            className="w-14 h-8 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            placeholder="16"
            type="text"
          />
        </div>
        <div className="flex items-center justify-center gap-2 w-[200px] sm:w-auto">
          <span className="text-sm md:text-base 2xl:text-lg">Sort By:</span>
          <input
            className="w-full sm:w-[8rem] h-8 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            placeholder="Default"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
  )
}
