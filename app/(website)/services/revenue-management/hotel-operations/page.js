"use client"
import React, { useState } from 'react'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';

const HotelOperations = () => {

  return (
    <div className='relative w-full h-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div className='w-full font-bold tracking-wider text-2xl lg:text-4xl uppercase'>Hotel Operations</div>
        <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
          <div className='flex flex-col lg:flex-row'>
            <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] max-h-fit tracking-wider'>
              Are you planning to open a new hotel or you want someone who can run a hotel behalf of you by taking care of all the Operational and Sales need then KRAFITECH Hospitality is the answer of you. We help you to set up a Hotel right from inception till its ready to welcome its first guest. We offer all the below services starting from pre opening support management.
            </div>


            <div className=''>
              <img src={IMAGES.HOTELOPERATIONS} alt='HOTELOPERATIONS' className='w-[100%] h-[100%]' />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <div className='flex flex-row justify-start items-start gap-2'>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelOperations
