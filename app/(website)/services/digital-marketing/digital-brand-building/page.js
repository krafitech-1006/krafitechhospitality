"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const DigitalBrandBuilding = () => {

const router = useRouter()

    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/services/digital-marketing')
      }
  
      if (action === "next") {
        router.push('/services/digital-marketing/social-media-marketing')
      }
  
    }

    return (
        <div className='relative w-full bg-neutral-200 py-40 '>
            <div className='w-[90%] lg:w-[80%] m-auto '>

                <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
                    <div>
                        <div className='font-bold tracking-wide text-2xl lg:text-4xl uppercase'>Digital Brand Building</div>
                        <div className='rounded-lg bg-yellow-400 text-black p-2 w-full lg:w-[35rem] tracking-wider mt-8'>
                            The path to building a brand has changed dramatically in the last several years. Brands can be built faster, cheaper and bigger than ever before. And in many cases, well-established CPGs are rapidly losing share to smaller, niche brands.
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%] h-full justify-items-center'>
                        <Image src={IMAGES.DigitalBrandd} alt='growthreport' height={1500} width={1500} className='w-[100%] h-[100%]' />
                    </div>
                </div>
                {/* <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div> */}
                <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
                    <div className='rounded-lg bg-yellow-400 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
                    Here’s why: It’s never been easier to bring a brand to market. To generate awareness, digital and social media provide the means to get new products in front of customers quickly and easily. For distribution, e-commerce platforms eagerly await to match products to customers and facilitate transactions. Don’t have order fulfillment set up? No problem — a burgeoning third-party logistics industry is available to handle e-commerce shipping and returns. Need data to inform product development? Reviews engines provide valuable feedback for brands to listen, engage and iterate in a responsive and rapid product development cycle.
                    </div>
                    <div className='w-full lg:w-[50%] h-full justify-items-center'>
                        <Image src={IMAGES.DigitalBrandBuildingOne} alt='DigitalBrandBuildingOne' height={1500} width={1500} className='w-full h-full lg:w-[80%] lg:h-[80%]'/>
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

export default DigitalBrandBuilding
