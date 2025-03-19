"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';

const PromoCodeManagement = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wider text-4xl uppercase'>PROMO CODE MANAGEMENT</div>
          {/* <div>
                        <img src={IMAGES.revenuemanagment} alt='revenuemanagment' />
                    </div> */}
        </div>

        <div className='flex flex-row justify-start items-center'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider'>
          In promo code management services, we create applicable promo codes and coupons which are relevant to our client’s offers and services to increase their customer reach by providing exciting promo codes and coupons to the targeted audience. We do promo-code management by our coupon management system and promo code management system which enables us to provide the best promo-codes and manage them on timely basis.
          </div>
          <div className='w-[22rem] h-[20rem]'>
            <img src={IMAGES.PromoCodeManagement} alt="PromoCodeManagement" className='w-full h-full' />
          </div>
          <div className='w-[15rem] h-[15rem] self-start mt-[-90px]'>
            <img src={IMAGES.PromoCodeManagementTwo} alt="PromoCodeManagementTwo" className='w-full h-full' />
          </div>
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider mt-4'>
          Our team also works on the best promo code ideas to entice more crowd of client’s interest and increase the sells graph for them. Our management systems also take care of the exact time span of the activated promo code or coupon and disables it once the time span is supposed to be over. KRAFITECH ensures that these services should always work in the Favour of our client as they expect it to be.
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider  mt-16'>
          <span className='font-semibold'>AUTOMATED SMS: </span>  If you want to send any promotional code or any update about your hotel to your guest from one click, we have the solution for you. Have a dedicated SMS server which can help you to send the SMS notifications to your guest.
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

export default PromoCodeManagement
