import React from 'react'
import Image from 'next/image'
import trophy from '../../../public/assets/trophy.png'
import warranty from '../../../public/assets/warranty.png'
import delivery from '../../../public/assets/delivery.png'
import customer from '../../../public/assets/customer.png'

export default function ShopServices() {
  return (
  //  <div className="main p-10 bg-[#FAF3EA]">
  //       <div className='flex items-center justify-between flex-wrap-reverse w-[100%] md:w-[90%] 2xl:w-[90%] mx-auto'>

  //         <div className='flex  items-center gap-4'>
  //         <Image src={trophy} className='w-10'  alt="Trophy"/>
  //         <div className='flex flex-col'>
  //         <h1 className='text-xs sm:text-sm md:text-base 2xl:text2xl font-semibold'>High Quality</h1>
  //         <p className='text-[#898989]'>crafted from top materials</p>
  //         </div>
  //         </div>

  //           <div className='flex items-center gap-4'>
  //         <Image src={warranty} className='w-10'  alt="warranty"/>
          
  //         <div className='flex flex-col'>

  //         <h1 className='text-xs sm:text-sm md:text-base 2xl:text2xl font-semibold'>Warranty Protection</h1>

  //         <p className='text-[#898989]'>over 2 years</p>
  //           </div>
  //           </div>
            
  //           <div className='flex items-center gap-4'>
  //         <Image src={delivery} className='w-10'  alt="delivery"/>
  //         <div className='flex flex-col'>

  //         <h1 className='text-xs sm:text-sm md:text-base 2xl:text2xl font-semibold'>Free Shipping</h1>
  //         <p className='text-[#898989]'>Order over 150 $</p>
  //         </div>
  //           </div>

  //           <div className='flex items-center gap-4'>
  //         <Image src={customer}  className='w-10' alt="customer"/>
  //         <div className="flex flex-col">

  //         <h1 className='text-xs sm:text-sm md:text-base 2xl:text2xl font-semibold'>24/7 Support</h1>
  //         <p className='text-[#898989]'>Dedicated support</p>
  //         </div>
  //           </div>
          
  //       </div>
  //  </div>
  

    <div className="main p-16 bg-[#FAF3EA]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[100%] md:w-[96%] 2xl:w-[90%] mx-auto">
        {/* High Quality */}
        <div className="flex items-center flex-col sm:flex-row mx-auto text-center sm:text-start gap-4">
          <Image src={trophy} className="w-10" alt="Trophy" />
          <div className="flex flex-col ">
            <h1 className="text-xs sm:text-sm md:text-base 2xl:text-2xl font-semibold">High Quality</h1>
            <p className="text-[#898989] text-sm">Crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center flex-col sm:flex-row mx-auto text-center sm:text-start gap-4">
          <Image src={warranty} className="w-10" alt="Warranty" />
          <div className="flex flex-col">
            <h1 className="text-xs sm:text-sm md:text-base 2xl:text-2xl font-semibold">Warranty Protection</h1>
            <p className="text-[#898989] text-sm">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center flex-col sm:flex-row mx-auto text-center sm:text-start gap-4">
          <Image src={delivery} className="w-10" alt="Delivery" />
          <div className="flex flex-col">
            <h1 className="text-xs sm:text-sm md:text-base 2xl:text-2xl font-semibold">Free Shipping</h1>
            <p className="text-[#898989] text-sm">Order over $150</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center flex-col sm:flex-row mx-auto text-center sm:text-start gap-4">
          <Image src={customer} className="w-10" alt="Customer Support" />
          <div className="flex flex-col">
            <h1 className="text-xs sm:text-sm md:text-base 2xl:text-2xl font-semibold">24/7 Support</h1>
            <p className="text-[#898989] text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
