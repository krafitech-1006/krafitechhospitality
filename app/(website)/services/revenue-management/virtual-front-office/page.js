"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const VFO = () => {


const router = useRouter()

    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/services/revenue-management')
      }
  
      if (action === "next") {
        router.push('/services/revenue-management/ota-registration')
      }
  
    }

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wider text-2xl lg:text-4xl'>VIRTUAL FRONT OFFICE</div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-0'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
            Krafitech Hospitality provides virtual office services for those clients who wants to outsource their front office administration to make their work easier and more comfortable. In these services we provide devoted staff with decent communication skills who will be handling reservation of hotel rooms and tables. The team will also take care of converting business leads through communication channels like calls and emails.
          </div>
          <div>
            <img src={IMAGES.VFO} alt="revenuemanagment3d" className='w-full h-full' />
          </div>
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider ml-0  lg:ml-16'>
          Virtual office services can provide our clients with the staff such as virtual receptionist and front office management team. Our services ensures that we excel the expectations of our client and make them rely on us for more and more growth and enhancement of their business. Thus, we keep close eye on the team’s work to deliver client with the best virtual front office service experience of the market.
        </div>

        <div className='ml-16 mt-8'>
          <div className='flex flex-row justify-start items-start gap-2'>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>Next</Button>
          </div>
        </div>

      </div>



    </div>
  )
}

export default VFO
