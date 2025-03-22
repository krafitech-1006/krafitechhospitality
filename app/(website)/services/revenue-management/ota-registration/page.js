"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';

const OTARegistration = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wider text-2xl lg:text-4xl'>OTA REGISTRATION</div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-0'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          OTA bookings are proofed to be the most convenient way for traveler&apos;s to arrange their stay as the traveler&apos;s can compare the hotel prices and can book them online according to their needs. Here we register your hotel on online working platforms to make the property visible and manage the registrations on behalf of a hotel.
          </div>
          <div>
            <img src={IMAGES.otaregistration} alt="otaregistration" className='w-full h-full' />
          </div>
        </div>

        <div className='p-2 w-full lg:w-[35rem] tracking-wider lg:ml-16'>
          
        </div>

        <div className=' lg:ml-16 mt-8'>
            <div className='flex flex-row justify-start items-start gap-2'>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button>
            </div>
        </div>

      </div>



    </div>
  )
}

export default OTARegistration
