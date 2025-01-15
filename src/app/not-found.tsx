import React from 'react'
import Link from 'next/link'
import { IoChevronForward } from "react-icons/io5";
import Image from 'next/image'
import logo02 from '../../public/assets/logo02.png'


export default function NotFoundPage() {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-[#F9F1E7] main-3'>
<div className="">
    {/* Header Section */}
    <div className="flex flex-col h-[30vh] items-center justify-center px-4 text-center">
      <Image src={logo02} alt='hero-logo' className='w-14'/>
      <h1 className="text-3xl font-medium md:text-5xl 2xl:text-6xl">Page Not Found</h1>
      <div className="flex items-center gap-1 mt-2 text-sm md:text-base">
        <h1 className="font-medium">Error</h1>
        <IoChevronForward className="text-xs" />
        <h1>404</h1>
      </div>
      <Link href={'/'}>

<button className="hover:bg-[#6e561f] transition-colors ease duration-200 mt-2 bg-[#B88E2F] h-12 w-36 md:h-12 md:w-32 lg:h-12 lg:w-36 2xl:h-16 2xl:w-1/3 rounded-md text-white font-semibold uppercase text-sm md:text-base ">
  Back to Home
</button>
</Link>
    </div>
  </div>  
    </div>
  )
}
