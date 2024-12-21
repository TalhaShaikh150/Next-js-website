"use client"
import React from 'react'
import { useState } from "react";


export default function Buttons() {
    const [activeButton, setActiveButton] = useState(1); // Default to "1"
  
  return (
    <>
    {/* Pagination Buttons */}
    <div className="flex mx-auto xs:flex-row justify-center my-14 gap-6 flex-wrap">
   <button
     className={`rounded-md text-base md:text-lg 2xl:text-xl py-3 px-6 transition-all ease duration-300 ${
       activeButton === 1 ? "bg-[#B88E2f] text-white" : "bg-[#FFF3E3]"
     }`}
     onClick={() => setActiveButton(1)}
   >
     1
   </button>
   <button
     className={`rounded-md text-base md:text-lg 2xl:text-xl py-3 px-6 transition-all ease duration-300 ${
       activeButton === 2 ? "bg-[#B88E2f] text-white" : "bg-[#FFF3E3]"
     }`}
     onClick={() => setActiveButton(2)}
   >
     2
   </button>
   <button
     className={`rounded-md text-base md:text-lg 2xl:text-xl py-3 px-6 transition-all ease duration-300 ${
       activeButton === 3 ? "bg-[#B88E2f] text-white" : "bg-[#FFF3E3]"
     }`}
     onClick={() => setActiveButton(3)}
   >
     3
   </button>
   <button
     className={`rounded-md text-base md:text-lg 2xl:text-xl py-3 px-8 transition-all ease duration-300 ${
       activeButton === 4 ? "bg-[#B88E2f] text-white" : "bg-[#FFF3E3]"
     }`}
     onClick={() => setActiveButton(4)}
   >
     Next
   </button>
 </div>

    </>
  )
}
