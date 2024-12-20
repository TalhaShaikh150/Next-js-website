import React from "react";
import Image from "next/image";
import blog01 from "../../../public/assets/blog01.png";
import blog02 from "../../../public/assets/blog02.png";
import blog03 from "../../../public/assets/blog03.png";
import { FaUser } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { FaTag } from "react-icons/fa";

export default function BlogMain() {
  return (
    <div className="flex flex-col items-center lg:items-start m-4 sm:m-6 lg:m-10 2xl:m-20 mt-40 sm:mt-10 w-[100vw] sm:w-[60vw] xl:w-[40vw] 2xl:w-[32vw]">
      <div className="left-col my-10">
        <Image
          src={blog01}
          alt="blog-1"
          className="w-[100vw] sm:w-[50vw] md:w-[80vw] 2xl:w-[30vw]"
        />
        <div className="flex gap-4 sm:gap-5 md:gap-8 my-6 text-[#9F9F9F] justify-center sm:justify-start text-sm xs:text-lg md:text-xl">
          <FaUser className="" />
          <p className="">Admin</p>
          <IoCalendarClear className="" />
          <p className="">20 Dec 2024</p>
          <FaTag className="" />
          <p className="">Wood</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-xl md:text-2xl 2xl:text-3xl font-semibold my-2">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] leading-relaxed sm:text-justify sm:w-[60vw] 2xl:w-[36vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <button className="border-b-2 border-black w-40 items-start my-4 hover:bg-black transition-all ease duration-200 hover:text-white">
            Read More
          </button>
        </div>
      </div>

      {/* {Post02} */}
      <div className="left-col my-10">
        <Image
          src={blog02}
          alt="blog-2 "
          className="w-[100vw] sm:w-[50vw] md:w-[80vw] 2xl:w-[30vw]"
        />
        <div className="flex gap-4 sm:gap-5 md:gap-8 my-6 text-[#9F9F9F] justify-center sm:justify-start text-sm xs:text-lg md:text-xl">
          <FaUser className="" />
          <p className="">Admin</p>
          <IoCalendarClear className="" />
          <p className="">20 Dec 2024</p>
          <FaTag className="" />
          <p className="">Wood</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-xl md:text-2xl 2xl:text-3xl font-semibold my-2">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] leading-relaxed sm:text-justify sm:w-[60vw] 2xl:w-[36vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <button className="border-b-2 border-black w-40 items-start my-4 hover:bg-black transition-all ease duration-200 hover:text-white">
            Read More
          </button>
        </div>
      </div>
      {/* {Post03} */}

      <div className="left-col my-10">
        <Image
          src={blog03}
          alt="blog-3"
          className="w-[100vw] sm:w-[50vw] md:w-[80vw] 2xl:w-[30vw]"
        />
        <div className="flex gap-4 sm:gap-5 md:gap-8 my-6 text-[#9F9F9F] justify-center sm:justify-start text-sm xs:text-lg md:text-xl">
          <FaUser className="" />
          <p className="">Admin</p>
          <IoCalendarClear className="" />
          <p className="">20 Dec 2024</p>
          <FaTag className="" />
          <p className="">Wood</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-xl md:text-2xl 2xl:text-3xl font-semibold my-2">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] leading-relaxed sm:text-justify sm:w-[60vw] 2xl:w-[36vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <button className="border-b-2 border-black w-40 items-start my-4 hover:bg-black transition-all ease duration-200 hover:text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
