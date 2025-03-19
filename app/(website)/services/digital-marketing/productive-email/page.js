"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';

const ProductiveEmail = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>

      

        <div className='flex flex-row justify-start items-start mt-8'>
          <div>
          <div className='font-bold tracking-wide text-5xl uppercase'>Productive Email</div>
            <div className='rounded-lg bg-yellow-400 text-black pl-2 py-2 pr-6 w-[35rem] tracking-wider mt-8'>
            <span className='font-semibold'>Krafitech Hospitality</span> offers productive email services to enhance your communication and boost productivity. With advanced features, robust security, and seamless integration, our services streamline collaboration and ensure efficient organization. Experience reliable uptime and dedicated support for an optimized email experience.
            </div>
          </div>
          <div className='w-[50%] justify-items-start'>
            <Image src={IMAGES.productiveemailOne} alt='productiveemailOne' height={1500} width={1500} className='size-[30rem] object-scale-down' />
          </div>
        </div>
        {/* <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div> */}
        {/* <div className='flex flex-row justify-start items-start mt-8'> */}
          {/* <div className='rounded-lg bg-yellow-400 text-black p-2 w-[35rem] tracking-wider'>
            {`Most social media platforms have built-in data analytics tools, enabling companies to track the progress, success, and engagement of ad campaigns. Companies address a range of stakeholders through social media marketing, including current and potential customers, current and potential employees, journalists, bloggers, and the general public. On a strategic level, social media marketing includes the management of a marketing campaign, governance, setting the scope (e.g. more active or passive use) and the establishment of a firm's desired social media "culture" and "tone."`}
          </div> */}
          {/* <div className='w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.DigitalBrandBuildingOne} alt='DigitalBrandBuildingOne' height={1500} width={1500} className='w-[80%] h-[80%]' />
          </div> */}
        {/* </div> */}
        <div className='mt-0'>
          <div className='flex flex-row justify-start items-start gap-2'>
            {/* <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button> */}
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductiveEmail
