"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const PropertyAudit = () => {

const router = useRouter()

    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/services/revenue-management/growth-report')
      }
  
      if (action === "next") {
        router.push('/services/revenue-management/b2b-partnership')
      }
  
    }

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wide text-2xl lg:text-7xl uppercase'>PROPERTY AUDIT</div>

        </div>

        <div className='flex flex-col lg:flex-row justify-start items-start mt-4 lg:mt-16'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          We do Property Audit from a Guest point of view in which we make sure to observe a minute detail of the whole property. In the Property Audit we inspect the Hotel exterior, Interior , Rooms , amenities and facilitate check and rate then according to their standards and maintenance and make a detail reports for you highlighting issues to fixed on urgent basis, plus mentioning good to do and need to do task.
          </div>
          <div className=''>
            <img src={IMAGES.PropertyAudit} alt='PropertyAudit' className='lg:mt-[-60px] lg:ml-[54px]'/>
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

export default PropertyAudit
