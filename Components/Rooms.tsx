import React from 'react'
import Image from 'next/image'
import room01 from '../../public/assets/room01.png'
import room02 from '../../public/assets/room02.png'
export default function Rooms() {
  return (
    <main className='flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-full h-auto bg-[#FCF8F3] py-8 my-8'>
          <div className='items-center w-[80%] text-center sm:text-start xs:[30%] sm:w-[45%] lg:[w-40%]'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl 2xl:text-6xl font-bold'>50+ Beautiful rooms 
           <h1> inspiration </h1>
            </h1>
            <p className='xs:py-3 lg:py-4  xs:text-base lg:text-xl 2xl:text-3xl'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className="hover:bg-[#6e561f] transition-colors ease duration-200  bg-[#B88E2F] h-12 w-36 md:h-8 md:w-24 lg:h-12 lg:w-32 2xl:h-16 2xl:w-1/3 text-white font-semibold uppercase ">Buy Now</button>
          </div>
          <div className='flex flex-col sm:flex-row items-center w-[100%] xs:w-[40%] mt-4 sm:mt-0 sm:gap-2 md:gap-4 lg:gap-6 2xl:gap-8 relative'>
            <Image src={room01} className='block my-10 sm:my-0 sm:w-[18vw] md:w-[20vw]' alt="Room 1"/>
            <div className='absolute hidden md:flex sm:w-[14vw] sm:h-[12vh] lg:w-[10vw] lg:h-[16vh] justify-center bg-[#ffffff90] bottom-2 left-2'>
              <div className='flex flex-col h-[14vh]   justify-evenly items-center'>
                <h1 className='font-normal text-xs lg:font-semibold  xl:text-base'>01 -- Bed Room</h1>
                <h1 className='font-normal text-xs lg:font-semibold  xl:text-base'>Inner Peace</h1>
              </div>
            </div>
            <Image src={room02} className='block  sm:w-[18vw] md:w-[20vw]' alt="Room 2"/>
          </div>
    </main>
  )
}
