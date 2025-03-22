"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';

const GrowthReport = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wide text-xl lg:text-7xl uppercase'>GROWTH REPORTS</div>
        </div>

        <div className='flex flex-col lg:flex-row justify-start items-start mt-4 lg:mt-16'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          We understand the fact that as a hotel owner, you like to know the progress of the sale of your business. Our assigned staff will share the monthly growth reports that perfectly exhibit our hard work and efficient planning.
          </div>
          <div className='w-[50%] h-full justify-items-center'>
            <img src={IMAGES.growthreport} alt='growthreport' className='w-full h-full lg:w-[70%] lg:h-[70%]' />
          </div>

        </div>

        <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div>

        <div className='flex flex-col lg:flex-row justify-start items-start'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          Peter Drucker once said that ‘If you can’t measure it, you can’t improve it’ and this saying goes very well with our current industry. We can’t improve the occupancy and total revenue unless and until we don’t have the data to measure and we at promote my hotels exactly does that for you by maintaining the data of bookings and overall customer behaviors including the reviews. We maintain these data and present to you at the end of the month which help you to see the progress done by Krafitech Hospitality
          </div>
          <div>
            <img src={IMAGES.GrowthReportTwo} alt='GrowthReportTwo' />
          </div>

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

export default GrowthReport
