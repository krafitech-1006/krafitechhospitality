"use client"
import React, { useState } from 'react'

import IMAGES from "@/public/index";

import { Button } from '@nextui-org/react';

import { useRouter } from 'next/navigation';

const SALESORIENTEDCONTENTWRITING = () => {

const router = useRouter()

    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/services/revenue-management/payment-followup')
      }
  
      if (action === "next") {
        router.push('/services/revenue-management/growth-report')
      }
  
    }

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wider text-md lg:text-4xl uppercase'>SALES ORIENTED CONTENT WRITING</div>
        </div>

        <div className='flex flex-col lg:flex-row justify-start items-center mt-4 lg:mt-0'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          Catch sales content is the key to grab the interest of the audience. We at Hotel Earning always do the market research and craft SEO Friendly content to gain maximum traffic to our destination page. Here we are doing the same to improve the property content to reach the maximum area.
          </div>
          <div className='w-[50%] h-full justify-items-center'>
            <img src={IMAGES.SalesOriented} alt='SalesOriented' className='w-full h-full lg:w-[70%] lg:h-[70%]' />
          </div>
        </div>

        <div className='font-bold tracking-widest text-black mb-5'>CONTENT MANAGEMENT</div>

        <div className='flex flex-col lg:flex-row justify-start items-center'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          The Hotel Business cannot be controlled single handily as it is much complex in maintaining and managing the content starting right from hotel display name through portals, its portrayal (description) also the rates of the food, rooms, services etc. Policies are also the vital part of this content which should be managed appropriately. We in krafitech, take care of all this content updating, management and changes on timely basis. As a result we are the best content management system for our clients. This gives our clients the freedom to develop and work on strategies and planning for growth as all the hard-hitting tasks, which divides their time and concentration are held by us very effectively and efficiently. We not only manage the content of our clients which they have on their websites or in hotels but also, take care of the content management for them on the marketing sites like TripAdvisor or google business page by uploading HD images or update high resolution images or by any finest possible means.
          </div>
          <div>
            <img src={IMAGES.SalesOrientedContentWriting} alt='SalesOrientedContentWriting' />
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

export default SALESORIENTEDCONTENTWRITING
