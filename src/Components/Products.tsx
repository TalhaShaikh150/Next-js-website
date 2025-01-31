import React from "react";
import Image from "next/image";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link'

import product01 from "../../public/assets/product01.png";
import product02 from "../../public/assets/product02.png";
import product03 from "../../public/assets/product03.png";
import product04 from "../../public/assets/product04.png";
import product05 from "../../public/assets/product05.png";
import product06 from "../../public/assets/product06.png";
import product07 from "../../public/assets/product07.png";
import product08 from "../../public/assets/product08.png";

export default function Products() {
  return (
    <main className="mt-8">
      <h1 className="text-center text-[#3A3A3A] font-bold text-4xl my-10">
        Our Products
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-4 md:gap-6">
        {/* Product01 */}

        <div className="bg-slate-100 hover-boxes pb-4 w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
          <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <Image src={product01} className="w-full d-block" alt="Syltherine" />
          <div className="absolute w-12 h-12 bg-red-400 rounded-3xl top-2 right-4">
            <p className="mt-3 text-base font-semibold text-center text-white">
              -30%
            </p>
          </div>
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-3 text-sm font-semibold sm:text-xl text-start">
              Syltherine
            </p>
            <p className="text-[#898989] my-1">Stylish cafe chair</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base">P</sub>{" "}
                2.500.000
              </p>
              <p className="line-through ms-3 text-[#B0B0B0] text-xs md:text-sm 2xl:text-base ">
                Rp 3.500.000
              </p>
            </div>
          </div>
        </div>

        {/* Product02 */}

        <div className="bg-slate-100 hover-boxes pb-4 w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
        <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <Image src={product02} className="w-full d-block" alt="Leviosa" />
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-3 text-sm font-semibold sm:text-xl text-start">
              Leviosa
            </p>
            <p className="text-[#898989]  my-1">Stylish cafe chair</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base ">P</sub>{" "}
                2.500.000
              </p>{" "}
            </div>
          </div>
        </div>

        {/* Product03 */}

        <div className="bg-slate-100 hover-boxes pb-4 w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
        <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <div className="absolute w-12 h-12 bg-red-400 rounded-3xl top-2 right-4">
            <p className="mt-3 text-base font-semibold text-center text-white">
              -50%
            </p>
          </div>
          <Image src={product03} className="w-full d-block" alt="Lolito" />
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-3 text-sm font-semibold sm:text-xl text-start">
              Lolito
            </p>
            <p className="text-[#898989]  my-1">Luxury big sofa</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base ">P</sub>{" "}
                7.000.000
              </p>
              <p className="line-through ms-3 text-[#B0B0B0] text-xs md:text-sm 2xl:text-base ">
                {" "}
                14.000.000
              </p>
            </div>
          </div>
        </div>

        {/* Product04 */}

        <div className="bg-slate-100 hover-boxes pb-5  w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
        <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <div className="absolute h-12 w-12 bg-[#2EC1AC] rounded-3xl top-2 right-4">
            <p className="mt-3 text-base font-semibold text-center text-white">
              New
            </p>
          </div>
          <Image src={product04} className="w-full d-block" alt="Respira" />
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-3 text-sm font-semibold sm:text-xl text-start">
              Respira
            </p>
            <p className="text-[#898989]  my-1">Outdoor bar table</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base ">P</sub>{" "}
                500.000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row-2 */}

      <div className="flex flex-wrap justify-center gap-4 mt-2 md:gap-6">
        <div className="bg-slate-100 hover-boxes pb-4 w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
        <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <Image src={product05} className="w-full d-block" alt="Grifo" />
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-2 text-sm font-semibold sm:text-xl text-start">
              Grifo
            </p>
            <p className="text-[#898989]  my-1">Night Lamp</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base ">P</sub>{" "}
                1.500.000
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 hover-boxes pb-4 w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
        <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <div className="absolute h-12 w-12 bg-[#2EC1AC] rounded-3xl top-2 right-4">
            <p className="mt-3 text-base font-semibold text-center text-white">
              New
            </p>
          </div>
          <Image src={product06} className="w-full d-block" alt="Muggo" />
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-2 text-sm font-semibold sm:text-xl text-start">
              Muggo
            </p>
            <p className="text-[#898989]  my-1">Small mug</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base ">P</sub>{" "}
                150.000
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 hover-boxes pb-4 w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
        <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <div className="absolute w-12 h-12 bg-red-400 rounded-3xl top-2 right-4">
            <p className="mt-3 text-base font-semibold text-center text-white">
              -50%
            </p>
          </div>
          <Image src={product07} className="w-full d-block" alt="Pingky" />
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-2 text-sm font-semibold sm:text-xl text-start">
              Pingky
            </p>
            <p className="text-[#898989]  my-1">Cute bed set</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base ">P</sub>{" "}
                7.000.000
              </p>
              <p className="line-through ms-3 text-[#B0B0B0] text-xs md:text-sm 2xl:text-base ">
                {" "}
                14.000.000
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 hover-boxes pb-4 w-[90%] md:mt-4 xs:w-[36vw] lg:w-[18vw] 2xl:w-[16vw] relative">
        <div className=" overlay">
            <div className="flex flex-col justify-center items-center h-[100%]">
            <Link href={'/products'}>
              <button className="bg-white font-semibold text-sm md:text-base 2xl:text-lg text-[#B88E2F] py-2 px-6 hover:bg-[#B88E2f] hover:text-[#fff] transition duration-200 all">
                Add To Cart
              </button>
            </Link>
              <div className="flex text-white items-center gap-1 2xl:gap-3 mt-4 ">
                <IoShareSocial className="text-xl font-bold" /> 
                <span className="text-sm"> Share </span>
                <MdOutlineCompareArrows className="text-xl font-bold" />
                <span className="text-sm"> Compare </span>
                <CiHeart className="text-xl font-bold" /> 
                <span className="text-sm"> Like </span> 
              </div>
            </div>
          </div>
          <div className="absolute h-12 w-12 bg-[#2EC1AC] rounded-3xl top-2 right-4">
            <p className="mt-3 text-base font-semibold text-center text-white">
              New
            </p>
          </div>
          <Image src={product08} className="w-full d-block" alt="Potty" />
          <div className="ms-2 lg:ms-2 2xl:ms-4">
            <p className="mt-2 text-sm font-semibold sm:text-xl text-start">
              Potty
            </p>
            <p className="text-[#898989]  my-1">Minimalist flower pot</p>
            <div className="flex flex-wrap items-center">
              <p className="font-bold">
                R<sub className="text-xs md:text-sm 2xl:text-base ">P</sub>{" "}
                500.000
              </p>
            </div>
          </div>
        </div>
      </div>

        <Link href={'/shop/#More'}>
      <div className="flex justify-center my-12">
        <button  className="text-[#B88E2F] border-2 border-[#B88E2F] w-[50%] h-[8vh] xs:w-[40%] xs:h-[8vh] sm:w-[20vw] sm:h-[8vh] 2xl:w-[20%] 2xl:h-[6vh] hover:bg-[#b69037] hover:text-white transition-colors ease duration-200 ">
          Show More
        </button>
      </div>
        </Link>
    </main>
  );
}
