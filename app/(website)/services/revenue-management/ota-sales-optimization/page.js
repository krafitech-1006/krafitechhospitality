"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';

const OTASalesOptimization = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wider text-4xl uppercase'>OTA Sales Optimization</div>
          {/* <div>
                        <img src={IMAGES.revenuemanagment} alt='revenuemanagment' />
                    </div> */}
        </div>

        <div className='flex flex-row justify-center items-center'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider'>
            Like Google, OTAs have their own algorithms to determine how hotels rank on their website, thus OTA sales is not just listing hotels in their sites and expecting business from them. Here hotels and resorts need support form revenue management Company like KRAFITECH SOLUTIONS, OTA Sales Management Company in Cochin, with optimized OTA profile with KRAFITECH SOLUTIONS our hotel partners stand to gain not only bookings from all OTAs they are listed with. By OTA sales optimization KRAFITECH SOLUTIONS ensures all our partner hotels and resorts have a well maintained OTA seller space, Quality contents, adequate promotions and offers, good ranking etc.
          </div>
          <div>
            <img src={IMAGES.OTASALESOPTIMIZATION} alt="OTASALESOPTIMIZATION" className='w-full h-full' />
          </div>
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider  ml-16'>
          <span className='font-semibold'>OTA Sales Optimization Levers:</span> Online travel agents are important, because they allow hotels to communicate with customers who may otherwise be out of reach. From a customer perspective, an OTA also serves as a comprehensive travel platform, potentially allowing them to find hotels, arrange flights, read reviews and make hotel bookings, all from a single location. KRAFITECH SOLUTIONS, helps our partner hotels to make use of these OTA in a most effective way.
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider  ml-16 mt-8'>
          <span className='font-semibold'>Right OTA Mix: </span> A vital first step KRAFITECH SOLUTIONS takes for a newly signed hotel is to make sure you find the right OTA mix, so that our partner hotels are reaching their target audiences. This helps KRAFITECH SOLUTIONS for taking the time to research different OTAs and then partnering with the right ones. It also means managing distribution, so that you optimize both revenue and profit for your hotel.
        </div>

        <div className='flex flex-row justify-center items-center mt-8'>
          <div>
            <img src={IMAGES.OTASALESOPTIMIZATIONONE} alt="OTASALESOPTIMIZATIONONE" className='w-full h-full' />
          </div>

          <div>
            <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider'>
            <span className='font-semibold'>Competition Analysis: </span>  Hotel industry is extremely competitive and your hotel and its main rivals are likely to be competing for the same customers on the same OTAs. So, it is important to take the time to get to know about competition, understand what they have to offer customers, and pinpoint their weaknesses too. KRAFITECH SOLUTIONS pays an utmost on competition analysis for our partner hotels to get a competitive advantage over their rivalries.
            </div>

            <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider mt-8'>
            <span className='font-semibold'>Right Pricing: </span>  Adopting the right pricing strategy is crucial for increasing hotel bookings through OTAs, and it is important that you charge the right price for the right moment. Two of the main pricing strategies KRAFITECH SOLUTIONS follows while setting your prices based on demand, and maintaining price parity across all distribution channels.
            </div>
          </div>

        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider  ml-16 mt-8'>
          <span className='font-semibold'>Right Content: </span> Right Content: When it comes to selling your hotel to potential customers, a picture is worth a thousand words. High-quality photographs can help you to make a great first impression and provide you with a chance to clearly highlight what your hotel has to offer. Aside from promoting its qualities using photos, your description plays a key role. KRAFITECH SOLUTIONS is expertise in describing your hotel and its details in a very effective manner it should be.
        </div>

        <div className='ml-16 mt-8'>
          <div className='flex flex-row justify-start items-start gap-2'>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button>
          </div>
        </div>

      </div>



    </div>
  )
}

export default OTASalesOptimization
