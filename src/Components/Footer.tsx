import React from "react";

export default function Footer() {
  return (
   <>
      <div className="border-t-2 border-gray-300">
        <div className="py-8 w-[90%] mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-y-8">
            {/* Logo and Address */}
            <div className="w-full sm:w-[45%] md:w-[40%] flex flex-col text-center sm:text-left">
              <h1 className="mb-4 text-lg font-bold md:text-xl xl:text-3xl 2xl:text-4xl">
                Funiro.
              </h1>
              <p className="text-[#9F9F9F] md:max-w-[70%] text-sm lg:text-base 2xl:text-2xl leading-relaxed">
                400 University Drive Suite 200 Coral Gables, <br />
                FL 33134 USA
              </p>
            </div>

            {/* Links */}
            <div className="w-full sm:w-[25%] md:w-[20%] text-center sm:text-left">
              <h1 className="text-[#9F9F9F] text-base font-semibold mb-4">
                Links
              </h1>
              <ul className="flex flex-col gap-2 text-sm font-medium 2xl:gap-10 md:gap-6 lg:gap-8 sm:text-base 2xl:text-xl">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Help */}
            <div className="w-full sm:w-[25%] md:w-[20%] text-center sm:text-left">
              <h1 className="text-[#9F9F9F] text-base font-semibold mb-4">
                Help
              </h1>
              <ul className="flex flex-col gap-2 text-sm font-medium 2xl:gap-10 md:gap-6 lg:gap-8 sm:text-base 2xl:text-xl">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="gap-2  w-full sm:w-[45%] md:w-[20%] flex flex-col items-center sm:items-start">
              <h1 className="text-[#9F9F9F] text-base font-semibold mb-4">
                Newsletter
              </h1>
              <div className="w-full sm:max-w-[100%] flex flex-col gap-4">
                <input
                  type="email"
                  className="inline-block p-1 text-sm md:text-base placeholder-gray-400 border-b-2 text-center sm:text-start border-black 2xl:text-xl focus:outline-none max-w-full sm:max-w-[300px]"
                  placeholder="Enter Your Email"
                />

                <button className="mx-auto text-sm font-medium text-black border-b-2 border-black md:text-base 2xl:text-2xl w-fit sm:mx-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="border-t-2 border-gray-300 text-base md:text-lg 2xl:text-xl flex w-[90%] mx-auto py-8 justify-center lg:justify-start">2023 furino. All rights reserved</h1>
    </>
  );
}
