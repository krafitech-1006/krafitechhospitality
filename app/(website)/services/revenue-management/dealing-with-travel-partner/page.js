"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const DealingWithTravelPartner = () => {


const router = useRouter()

    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/services/revenue-management/b2b-partnership')
      }
  
      if (action === "next") {
        router.push('/services/revenue-management/hotel-renovation-and-beautification')
      }
  
    }

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>

        </div>

        <div className='flex flex-col lg:flex-row justify-start items-start mt-4 lg:mt-16'>
          <div className='flex flex-col gap-8'>
            <div className='font-bold tracking-wide text-3xl lg:text-3xl uppercase'>Dealing With Travel Partner</div>
            <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
            Our skilled employees always get in touch with Travel Partners to grab maximum B2B travel advantage for your hotel. This is one of the core parts where the business is leading by pursuing good relations with other travel partners.
            </div>
          </div>

          <div className=''>
            <img src={IMAGES.DEALINGWITHTRAVELPARTNERS} alt='DEALINGWITHTRAVELPARTNERS' className='w-[78%] h-[78%] mt-8' />
          </div>

        </div>

        


        <div className='mt-8'>
          <div className='flex flex-row justify-start items-start gap-2'>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>Next</Button>
          </div>
        </div>

      </div>



    </div>
  )
}

export default DealingWithTravelPartner
