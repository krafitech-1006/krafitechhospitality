"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';

const Revenuefeatures = () => {

    return (
        <div className='relative w-full bg-neutral-200 py-40 '>
            <div className='w-[90%] lg:w-[80%] m-auto '>
                <div>
                    <div className='font-bold tracking-wider text-4xl'>Revenue Management</div>
                    <div>
                        <img src={IMAGES.revenuemanagment} alt='revenuemanagment' />
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center'>
                    <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider'>
                    Revenue management is an extremely important concept within the hospitality industry, understanding relation between supply, demand, pricing and distribution by using different distribution channels to manage demand at competitive price. Today, playing field is drastically more complex, analyzing, forecasting, and optimizing hotel inventory through availability restrictions and dynamic rates and have appropriate instrumental in managing a hotel&apos;s demand through various online & offline channels to maximize hotels profit by Yield management. KRAFITECH Solutions provides high level of revenue management support at a very sensible price, we extend support consistent 24/7 & 365 days to hotels as it says that ‘Hotel business never sleeps.
                    </div>
                    <div>
                        <img src={IMAGES.revenuemanagment3d} alt="revenuemanagment3d" className='w-full h-full'/>
                    </div>
                </div>

                <div className='tracking-wider mt-16 underline'>
                    SCROLL DOWN
                </div>

            </div>

            

        </div>
    )
}

export default Revenuefeatures
