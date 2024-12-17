import React from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import room01 from "../../public/assets/room01.png";
import room02 from "../../public/assets/room02.png";
export default function Rooms() {
  return (
    <main className="flex flex-col-reverse sm:flex-row justify-center sm:justify-evenly items-center w-full h-auto bg-[#FCF8F3] py-8 my-8">
      <div className="items-center w-[80%] text-center sm:text-start xs:[30%] sm:w-[45%] lg:[w-40%]">
        <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold">
          50+ Beautiful rooms
          <h1> inspiration </h1>
        </h1>
        <p className="py-3 lg:py-4  xs:text-base lg:text-xl 2xl:text-3xl">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="hover:bg-[#6e561f] transition-colors ease duration-200 mt-2 bg-[#B88E2F] h-12 w-36 md:h-12 md:w-32 lg:h-12 lg:w-32 2xl:h-16 2xl:w-1/3 text-white font-semibold uppercase ">
          Buy Now
        </button>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center w-[100%] xs:w-[40%] mt-4 sm:mt-0 sm:gap-2 md:gap-4 lg:gap-6 2xl:gap-8 relative">
        <Image
          src={room01}
          className="hidden sm:block my-10 sm:my-0 sm:w-[18vw] md:w-[20vw]"
          alt="Room 1"
        />
        <div className="absolute hidden lg:flex sm:w-[14vw] sm:h-[12vh] lg:w-[10vw] lg:h-[16vh] justify-center bg-[#ffffff90] bottom-2 left-2">
          <div className="flex flex-col h-[14vh]   justify-evenly items-center">
            <h1 className="font-normal text-xs lg:font-semibold  xl:text-base">
              01 -- Bed Room
            </h1>
            <h1 className="font-normal text-xs lg:font-semibold  xl:text-base">
              Inner Peace
            </h1>
          </div>
           <div className="hidden lg:block absolute h-[6vh] w-[3.2vw] right-[-32%] bottom-0 bg-[#B88E2F]">
            <IoArrowForwardSharp className="sm:text-2xl 2xl:text-4xl text-white flex items-center justify-center h-[6vh] font-light ms-2" />
          </div> 
         
        </div>
        <div className="relative">
          <Image
            src={room02}
            className="w-[90%] block mx-auto lg:w-[20vw]"
            alt="Room 2"
          />
          <div className="flex gap-6 xl:gap-8 my-8 md:my-0 h-[10vh] justify-center md:justify-start items-center me-auto">
            <div className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-[#B88E2F]">
              <div className="h-4 w-4 bg-[#B88E2F] rounded-full"></div>
            </div>
            <div className="h-5 w-5 bg-[#D8D8D8] rounded-3xl"></div>
            <div className="h-5 w-5 bg-[#D8D8D8] rounded-3xl"></div>
            <div className="h-5 w-5 bg-[#D8D8D8] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

