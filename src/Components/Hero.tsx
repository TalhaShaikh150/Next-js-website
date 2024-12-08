import React from "react";

export default function Hero() {
  return (
    <main className="background">
      <div
        className="absolute hidden sm:flex bg-[#FFF3E3] h-[280px] w-[320px] lg:h-[300px]
     lg:w-[440px] 2xl:w-[480px] 2xl:h-[380px]
      rounded-md right-2 bottom-2 
      md:right-6 md:bottom-6 md:scale-95 sm:scale-[0.85] lg:right-12 lg:bottom-12 2xl:right-20 2xl:bottom-16 box-border cursor-pointer hover:shadow-lg  transition-shadow ease duration-300 "
      >
        <div className="p-6 flex flex-col flex-wrap ">
          <h3 className="md:text-base 2xl:text-3xl font-semibold tracking-widest">
            New Arrival
          </h3>
          <h1 className="text-2xl  lg:text-4xl 2xl:text-5xl text-[#B88E2F] font-bold md:leading-tight lg:mt-2">
            Discover Our
            <h2>New Collection</h2>
          </h1>
          <p className="leading-tight sm:mt-2 lg:mt-4 text-xs md:text-xs lg:text-sm 2xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        <button className="hover:bg-[#6e561f]  transition-colors ease duration-200  bg-[#B88E2F] h-12 w-36 md:h-8 md:w-24 lg:h-12 lg:w-32 2xl:h-16 2xl:w-1/3 text-white font-semibold uppercase mt-4">Buy Now</button>
        </div>
      </div>
    </main>
  );
}
