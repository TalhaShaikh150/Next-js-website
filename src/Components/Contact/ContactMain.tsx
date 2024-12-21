import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";

export default function ContactMain() {
  return (
    <div className="mt-40 sm:mt-28">
      <div className="flex flex-col items-center w-[80%] xs:w-1/2 mx-auto  text-center">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl my-2">
          Get In Touch With Us
        </h1>
        <p className="text-[#9F9F9F] text-xs md:text-sm">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex flex-col xs:flex-row items-center justify-between px-8 sm:justify-evenly mt-8">
        <div className="flex flex-col justify-center  gap-2 sm:gap-4">
          <FaMapMarkerAlt className="text-lg sm:text-xl 2xl:text-2xl" />
          <p className="ms-8 font-medium text-lg">Address</p>
          <p className="text-xs sm:text-sm ms-8">
            236 5th SE Avenue, New <br />
            York NY10000, United
            <br /> States
          </p>
          <FaPhone className="text-lg sm:text-xl 2xl:text-2xl" />
          <p className="ms-8 font-medium text-lg">Phone</p>
          <p className="text-xs sm:text-sm ms-8">
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </p>
          <AiFillClockCircle className="text-lg sm:text-xl 2xl:text-2xl" />
          <p className="ms-8 font-medium text-lg">Clock</p>
          <p className="text-xs sm:text-sm ms-8">
            Monday-Friday: 9:00
            <br /> - 22:00
            <br />
            Saturday-Sunday: 9:00
            <br /> - 21:00
          </p>
        </div>

        <div className="flex flex-col my-14 sm:my-20">
          <p>Your Name</p>
          <input
            type="text"
            placeholder="Abc"
            className="border-2 rounded-lg h-14 sm:h-16 p-4 w-[90vw] xs:w-[50vw] md:w-[38vw] mb-8"
          />
          <p>Email Address</p>
          <input
            type="text"
            placeholder="Abc@def.com"
            className="border-2 rounded-lg h-14 sm:h-16 p-4 w-[90vw] xs:w-[50vw] md:w-[38vw] mb-8"
          />
          <p>Subject</p>
          <input
            type="text"
            placeholder="This is an optional"
            className="border-2 rounded-lg h-14 sm:h-16 p-4 w-[90vw]  xs:w-[50vw] md:w-[38vw] mb-8"
          />
          <p>Message</p>
          <input
            type="text"
            placeholder="Hi! i’d like to ask about"
            className="border-2 rounded-lg h-28 xs:h-18  sm:h-28 p-4 pb-12 w-[90vw] xs:w-[50vw] md:w-[38vw] mb-8"
          />
  <button className="bg-[#B88E2f] font-semibold text-sm md:text-base 2xl:text-lg text-white py-2 px-6 hover:] hover:bg-[#6e561f] h-12 transition duration-200 all w-[90%] mx-auto xs:mx-0 xs:w-1/2 xl:w-1/3 text-center rounded-lg">
               Submit
              </button>        </div>
      </div>
    </div>
  );
}
