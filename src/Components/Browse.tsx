<<<<<<< HEAD
import React from "react";
import Image from "next/image";

import browse01 from "../../public/assets/browse01.png";
import browse02 from "../../public/assets/browse02.png";
import browse03 from "../../public/assets/browse03.png";
export default function Browse() {
  return (
    <main className="my-20">
      <div className="flex flex-col justify-center my-10">
        <h1 className="text-center font-bold text-3xl text-[#3A3A3A]">Browse The Range</h1>
        <p className="text-xs sm:text-base text-center text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <div className="hover-boxes-2 text-center w-[90%] mt-4 xs:w-[28vw] lg:w-[22vw] 2xl:w-[18vw]">
          <Image src={browse01} className="w-full d-block" alt="Dining" />
          <p className="mt-2 text-sm font-semibold sm:text-xl">Dining</p>
        </div>

        <div className="hover-boxes-2 text-center w-[90%] mt-4 xs:w-[28vw] lg:w-[22vw] 2xl:w-[18vw]">
          <Image src={browse02} className="w-full d-block" alt="Living" />
          <p className="mt-2 text-sm font-semibold sm:text-xl">Living</p>
        </div>

        <div className="hover-boxes-2 text-center w-[90%] mt-4 xs:w-[28vw] lg:w-[22vw] 2xl:w-[18vw]">
          <Image src={browse03} className="w-full d-block" alt="Bedroom" />
          <p className="mt-2 text-sm font-semibold sm:text-xl">Bedroom</p>
        </div>
      </div>
    </main>
  );
}
=======
import React from "react";
import Image from "next/image";

import browse01 from "../../public/assets/browse01.png";
import browse02 from "../../public/assets/browse02.png";
import browse03 from "../../public/assets/browse03.png";
export default function Browse() {
  return (
    <main className="my-20">
      <div className="flex flex-col justify-center my-10">
        <h1 className="text-center font-bold text-3xl text-[#3A3A3A]">Browse The Range</h1>
        <p className="text-xs sm:text-base text-center text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <div className="hover-boxes-2 text-center w-[90%] mt-4 xs:w-[28vw] lg:w-[22vw] 2xl:w-[18vw]">
          <Image src={browse01} className="d-block w-full" alt="Dining" />
          <p className="mt-2 text-sm sm:text-xl font-semibold">Dining</p>
        </div>

        <div className="hover-boxes-2 text-center w-[90%] mt-4 xs:w-[28vw] lg:w-[22vw] 2xl:w-[18vw]">
          <Image src={browse02} className="d-block w-full" alt="Living" />
          <p className="mt-2 text-sm sm:text-xl font-semibold">Living</p>
        </div>

        <div className="hover-boxes-2 text-center w-[90%] mt-4 xs:w-[28vw] lg:w-[22vw] 2xl:w-[18vw]">
          <Image src={browse03} className="d-block w-full" alt="Bedroom" />
          <p className="mt-2 text-sm sm:text-xl font-semibold">Bedroom</p>
        </div>
      </div>
    </main>
  );
}
>>>>>>> a115ac9b272c6a34f9dd63568c0a4769e6e24ea9
