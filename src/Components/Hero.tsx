import React from "react";

export default function Hero() {
  return (
    <main className="background">
      <div
        className="xs:absolute justify-center items-center flex bg-[#FFF3E3] h-[280px] w-[320px] lg:h-[300px]
     lg:w-[440px] 2xl:w-[480px] 2xl:h-[380px]
      rounded-md right-[-60px] bottom-[-40px]
      xs:right-[-20px] xs:bottom-[-20px]
      sm:right-[0px]
      sm:bottom-[0px]
      md:right-6 md:bottom-6 md:scale-95 sm:scale-[0.85] xs:scale-75 scale-[0.8]   lg:right-12 lg:bottom-12 2xl:right-20 2xl:bottom-16 box-border cursor-pointer hover:shadow-lg  transition-shadow ease duration-300 "
      >
        <div className="flex flex-col flex-wrap p-6 ">
          <h3 className="font-semibold tracking-widest md:text-base 2xl:text-3xl">
            New Arrival
          </h3>
          <h1 className="text-2xl  lg:text-4xl 2xl:text-5xl text-[#B88E2F] font-bold md:leading-tight lg:mt-2">
            Discover Our
            <h1>New Collection</h1>
          </h1>
          <p className="text-xs leading-tight sm:mt-2 lg:mt-4 md:text-xs lg:text-sm 2xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="hover:bg-[#6e561f]  transition-colors ease duration-200  bg-[#B88E2F] h-12 w-36 md:h-8 md:w-24 lg:h-12 lg:w-32 2xl:h-16 2xl:w-1/3 text-white font-semibold uppercase mt-4">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}
