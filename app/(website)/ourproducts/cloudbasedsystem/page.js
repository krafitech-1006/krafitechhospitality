"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const CloudBasedSystem = () => {

  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/')
    }

    if (action === "next") {
      router.push('/ourproducts/cloudbasedsystem/pms')
    }

  }

  return (
    <div>

      <div className='hidden lg:block relative w-full bg-neutral-200 py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>

          <div className='font-bold tracking-widest text-3xl uppercase'>Krafitech Cloud-Based System</div>

          <div className='flex flex-row justify-start items-start mt-8'>
            <div>


              <div className='w-[100%] h-full justify-items-center'>
                <Image src={IMAGES.cloudsystem} alt='webdesigningpage' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>

          </div>
          {/* <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div> */}
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
              {`A cloud-based system utilizes remote servers and internet connectivity for storing, managing, and processing data and applications. It eliminates the need for local hardware by leveraging virtualized infrastructure in data centers. Users can access the system from anywhere, enabling remote collaboration and compatibility with various devices. Cloud-based systems offer scalability, allowing businesses to adjust computing resources based on demand. They are available in different service models (IaaS, PaaS, SaaS) with varying levels of control. Cloud providers prioritize reliability and redundancy to ensure high availability and data protection. Security measures like encryption and access controls are implemented. Cloud services operate on a subscription model, reducing upfront costs, and provide automatic updates. Integration with other applications is facilitated through APIs. Specific features may vary, so exploring different providers is recommended for finding the best fit.`}
            </div>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.cloudhosting} alt='DigitalBrandBuildingOne' height={1500} width={1500} className='w-[100%] h-[100%]' />
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




      <div className='lg:hidden relative w-full bg-neutral-200 py-20 md:py-32'>
        <div className='w-[90%] lg:w-[80%] mx-auto'>

          <div className='font-bold tracking-widest text-xl md:text-3xl uppercase text-center md:text-left'>
            Krafitech Cloud-Based System
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            <div className='w-full flex justify-center'>
              <Image
                src={IMAGES.cloudsystem}
                alt='webdesigningpage'
                height={1500}
                width={1500}
                className='w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-scale-down'
              />
            </div>
            <div className='bg-pink-300 text-black p-4 md:p-6 rounded-lg tracking-wider text-sm md:text-base'>
              A cloud-based system utilizes remote servers and internet connectivity for storing, managing, and processing data and applications. It eliminates the need for local hardware by leveraging virtualized infrastructure in data centers. Users can access the system from anywhere, enabling remote collaboration and compatibility with various devices.
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            <div className='w-full flex justify-center'>
              <Image
                src={IMAGES.cloudhosting}
                alt='DigitalBrandBuildingOne'
                height={1500}
                width={1500}
                className='w-full max-w-sm md:max-w-md lg:max-w-lg h-auto'
              />
            </div>
            <div className='bg-pink-300 text-black p-4 md:p-6 rounded-lg tracking-wider text-sm md:text-base'>
              Cloud-based systems offer scalability, allowing businesses to adjust computing resources based on demand. They are available in different service models (IaaS, PaaS, SaaS) with varying levels of control. Cloud providers prioritize reliability and redundancy to ensure high availability and data protection.
            </div>
          </div>

          <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-8'>
            <Button className='bg-white tracking-widest uppercase text-black py-4 px-8 md:py-6 md:px-10 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>
              Back
            </Button>
            <Button className='bg-white tracking-widest uppercase text-black py-4 px-8 md:py-6 md:px-10 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>
              Next
            </Button>
          </div>

        </div>
      </div>

    </div>

  )
}

export default CloudBasedSystem
