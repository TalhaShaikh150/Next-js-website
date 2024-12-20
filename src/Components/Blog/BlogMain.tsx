import React from "react";
import Image from "next/image";
import blog01 from "../../../public/assets/blog01.png";
import blog02 from "../../../public/assets/blog02.png";
import blog03 from "../../../public/assets/blog03.png";
import recent01 from "../../../public/assets/recent01.png"
import recent02 from "../../../public/assets/recent02.png"
import recent03 from "../../../public/assets/recent03.png"
import recent04 from "../../../public/assets/recent04.png"
import recent05 from "../../../public/assets/recent05.png"
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { FaTag } from "react-icons/fa";

export default function BlogMain() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between h-[200vh]  2xl:h-[140vh]">
        <div className="flex flex-col items-center lg:items-start  md:m-6 lg:m-10 2xl:m-20 mt-32 xs:mt-24 w-[100vw] sm:w-[60vw] md:w-[70vw] xl:w-[40vw] 2xl:w-[32vw]">
          <div className="left-col my-10">
            <Image
              src={blog01}
              alt="blog-1"
              className="w-[100vw] sm:w-[50vw] md:w-[80vw] 2xl:w-[30vw] p-2"
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
              <p className="text-[#9F9F9F] leading-relaxed text-center xs:text-justify sm:w-[50vw] md:w-[40vw] 2xl:w-[36vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button className="border-b-2 border-black w-40 items-start my-4">
                Read More
              </button>
            </div>
          </div>

          {/* {Post02} */}

          <div className="left-col my-10">
            <Image
              src={blog02}
              alt="blog-2"
              className="w-[100vw] sm:w-[50vw] md:w-[80vw] 2xl:w-[30vw] p-2"
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
              <p className="text-[#9F9F9F] leading-relaxed text-center xs:text-justify sm:w-[50vw] md:w-[40vw] 2xl:w-[36vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button className="border-b-2 border-black w-40 items-start my-4">
                Read More
              </button>
            </div>
          </div>
          {/* {Post03} */}

          <div className="left-col my-10">
            <Image
              src={blog03}
              alt="blog-3"
              className="w-[100vw] sm:w-[50vw] md:w-[80vw] 2xl:w-[30vw] p-2"
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
              <p className="text-[#9F9F9F] leading-relaxed text-center xs:text-justify sm:w-[50vw] md:w-[40vw] 2xl:w-[36vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button className="border-b-2 border-black w-40 items-start my-4">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 mx-auto my-auto flex flex-col relative">
          <input
            type="text"
            className="mx-auto ps-2 h-12 w-60 md:h-14 md:w-80 border rounded-xl border-[#9F9F9F]"
          />
          <FiSearch className="absolute right-24 top-8 sm:top-9 sm:right-14 md:top-8 md:right-12 text-xl md:text-2xl 2xl:text-3xl align-middle" />
          <h1 className="font-medium my-6 text-xl md:text-2xl 2xl:text-3xl">
            Categories
          </h1>
          <div className="flex flex-col gap-8 mt-2 text-[#9F9F9F]">
            <div className="flex justify-between">
              <p>Crafts</p>
              <p>2</p>
            </div>
            <div className="flex justify-between">
              <p>Design</p>
              <p>8</p>
            </div>
            <div className="flex justify-between">
              <p>Handmade</p>
              <p>7</p>
            </div>
            <div className="flex justify-between">
              <p>Interior</p>
              <p>1</p>
            </div>
            <div className="flex justify-between">
              <p>Wood</p>
              <p>6</p>
            </div>
          </div>

        <div>
        <h1 className="font-medium mt-20 text-xl md:text-2xl 2xl:text-3xl">
            Recent Post
          </h1>
          <div className="flex gap-4 my-5">
              <Image src={recent01} alt="recent01" className="w-[30%] h-[40%]"/>
              <div className="flex flex-col justify-center">
              <p>Going all-in with millennial design</p>
              <p className="text-[#9F9F9F]">03 Aug 2022</p>
              </div>
            </div>

            <div className="flex gap-4 my-5">
              <Image src={recent02} alt="recent02" className="w-[30%] h-[40%]"/>
              <div className="flex flex-col justify-center">
              <p>Going all-in with millennial design</p>
              <p className="text-[#9F9F9F]">03 Aug 2022</p>
              </div>
            </div>

            <div className="flex gap-4 my-5">
              <Image src={recent03} alt="recent03" className="w-[30%] h-[40%]"/>
              <div className="flex flex-col justify-center">
              <p>Going all-in with millennial design</p>
              <p className="text-[#9F9F9F]">03 Aug 2022</p>
              </div>
            </div>

            <div className="flex gap-4 my-5">
              <Image src={recent04} alt="recent04" className="w-[30%] h-[40%]"/>
              <div className="flex flex-col justify-center">
              <p>Going all-in with millennial design</p>
              <p className="text-[#9F9F9F]">03 Aug 2022</p>
              </div>
            </div>


            <div className="flex gap-4 my-5">
              <Image src={recent05} alt="recent05" className="w-[30%] h-[40%]"/>
              <div className="flex flex-col justify-center">
              <p>Going all-in with millennial design</p>
              <p className="text-[#9F9F9F]">03 Aug 2022</p>
              </div>
            </div>


        </div>
        </div>
      </div>
    </>
  );
}
