"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';

const PhotographyCon = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>

      <div className='font-bold tracking-wide text-7xl uppercase'>Photography & Video Making Content</div>

        <div className='flex flex-row justify-start items-start mt-8'>
          <div>
            
            <div className='rounded-lg bg-yellow-400 text-black p-2 w-[35rem] tracking-wider mt-8'>
            Immerse yourself in the art of photography with Krafitech Solutions. Explore the fundamental components of subject, form, and content, and master the art of composition. Elevate your photography skills through our Subjects of Photography activity series, capturing captivating images and unleashing your creative potential.
            </div>
          </div>
          <div className='w-[50%] h-full justify-items-start'>
            <Image src={IMAGES.photographycontent} alt='photographycontent' height={1500} width={1500} className='w-[75%] h-[100%]' />
          </div>
        </div>
        {/* <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div> */}
        <div className='flex flex-row justify-start items-start mt-8'>
          {/* <div className='rounded-lg bg-yellow-400 text-black p-2 w-[35rem] tracking-wider'>
            {`Most social media platforms have built-in data analytics tools, enabling companies to track the progress, success, and engagement of ad campaigns. Companies address a range of stakeholders through social media marketing, including current and potential customers, current and potential employees, journalists, bloggers, and the general public. On a strategic level, social media marketing includes the management of a marketing campaign, governance, setting the scope (e.g. more active or passive use) and the establishment of a firm's desired social media "culture" and "tone."`}
          </div> */}
          {/* <div className='w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.DigitalBrandBuildingOne} alt='DigitalBrandBuildingOne' height={1500} width={1500} className='w-[80%] h-[80%]' />
          </div> */}
        </div>
        <div className='mt-8'>
          <div className='flex flex-row justify-start items-start gap-2'>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotographyCon
