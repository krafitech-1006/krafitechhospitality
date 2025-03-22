"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';

const RateManagement = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div className='w-full'>
          <div className='font-bold tracking-wider text-xl lg:text-4xl uppercase w-full'>Rate Parity Management</div>
          {/* <div>
                        <img src={IMAGES.revenuemanagment} alt='revenuemanagment' />
                    </div> */}
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-0'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          Parity is the practice of maintaining consistent room rates across several distribution channels and it is often part of the agreement between hotels and Online Travel Agencies. Many of hotels and resorts have difficulty in managing rate parity across all OTAs alike as OTAs run their own promotions and offers. Krafitech Hospitality keenly observes the prices of our partner hotels across all distribution channels to maintain a healthy as well as an ethical relationship with our OTAs. We work with a policy that all OTA partners are important to our partner hotels.
          </div>
          <div>
            <img src={IMAGES.RateManagement} alt="RateManagement" className='w-full h-full' />
          </div>
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider  lg:ml-16'>
          <span className='font-semibold'>• Rate Parity Management Levers:</span>  In simple terms, a rate parity strategy involves maintaining consistent rates for the same product, across all online distribution channels, we believe it a basic but most important part of our commitment to our partners. Krafitech Hospitality ensures that our partner hotels have a complete control of setting the bar for their room rates and ensure equal prices across all distribution channels. Krafitech Hospitality safeguards our partner hotel’s brand value and online reputation by keeping an extra eye on rate parity management.
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider  lg:ml-16 mt-8'>
          <span className='font-semibold'>• Daily Review System: </span>  Krafitech Hospitality maintains a daily rate review system for the partner hotels with the support of relevant technology. Our human supported system can find rate disparity among OTA partners and report them to concerned market managers and maintain a rate parity for our partner hotels and resorts.
        </div>

        {/* <div className='flex flex-row justify-center items-center mt-8'>
          <div>
            <img src={IMAGES.OTASALESOPTIMIZATIONONE} alt="OTASALESOPTIMIZATIONONE" className='w-full h-full' />
          </div>

          <div>
            <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider'>
            <span className='font-semibold'>Competition Analysis: </span>  Hotel industry is extremely competitive and your hotel and its main rivals are likely to be competing for the same customers on the same OTAs. So, it is important to take the time to get to know about competition, understand what they have to offer customers, and pinpoint their weaknesses too. Krafitech Hospitality pays an utmost on competition analysis for our partner hotels to get a competitive advantage over their rivalries.
            </div>

            <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider mt-8'>
            <span className='font-semibold'>Right Pricing: </span>  Adopting the right pricing strategy is crucial for increasing hotel bookings through OTAs, and it is important that you charge the right price for the right moment. Two of the main pricing strategies Krafitech Hospitality follows while setting your prices based on demand, and maintaining price parity across all distribution channels.
            </div>
          </div>

        </div> */}

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider  lg:ml-16 mt-8'>
          <span className='font-semibold'>• Uniform Offers & Discounts: </span>  Offers and discounts are in OTA often lead to rate disparity across other OTAs. Krafitech Hospitality believes all OTAs are equally important to our partner hotels and tailor made offers for our hotels that suits all our OTA partners. Our approach helps our partner hotels to keep rate parity and maintain a good relationship with all OTAs.
        </div>

        <div className='lg:ml-16 mt-8'>
          <div className='flex flex-row justify-start items-start gap-2'>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button>
          </div>
        </div>

      </div>



    </div>
  )
}

export default RateManagement
