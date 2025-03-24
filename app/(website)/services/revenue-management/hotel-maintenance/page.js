"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const HotelMaintenance = () => {

const router = useRouter()

    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/services/revenue-management/hotel-renovation-and-beautification')
      }
  
      if (action === "next") {
        router.push('/services/revenue-management/hotel-operations')
      }
  
    }

    return (
        <div className='relative w-full h-full bg-neutral-200 py-40 '>
            <div className='w-[90%] lg:w-[80%] m-auto '>

                <div>
                </div>

                <div className='w-full font-bold tracking-wider text-2xl lg:text-4xl uppercase'>Hotel Maintenance</div>

                <div className='flex flex-col lg:flex-row justify-start items-start mt-4 lg:mt-8'>
                    <div className='flex flex-col lg:flex-row'>

                        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] h-full lg:h-[15rem] tracking-wider'>
                            It&apos;s a daily hassle for a hotel to keep fixing the wear & tear in the property. Whether it’s about fixing a plumbing, electrical, carpentry works etc. these can’t be avoided as this impacts the customer experience, but getting it done on daily basis become tedious for a hotel. We have full-fledged team with expert technicians, carpenters, labors etc. working round the clock providing the best &hassle-free maintenance services. We conduct regular audit of the hotel and submit hotel health report ensuring the hotel is maintained in top condition and untoward incident & expenses can be avoided.
                        </div>


                        <div className='relative h-full lg:relative lg:h-full lg:w-[50%] mt-8 lg:mt-0'>
                            <div className='flex flex-row justify-between lg:flex lg:flex-row lg:justify-between'>
                                <img src={IMAGES.HotelMaintenanceOne} alt='HotelMaintenanceOne' className='w-[40%] h-[40%] z-0 lg:w-[40%] lg:h-[40%] lg:z-0' />
                                <img src={IMAGES.HotelMaintenanceTwo} alt='HotelMaintenanceTwo' className='w-[40%] h-[40%] z-0 lg:w-[40%] lg:h-[40%] lg:z-0' />
                            </div>
                            <img src={IMAGES.HotelMaintenance} alt='HotelMaintenance' className=' absolute top-[15px] w-[80%] h-[200%] left-[45px] z-50 lg:absolute  lg:top-[0px] lg:left-[62px] lg:w-[80%] lg:h-[200%] lg:z-30' />
                        </div>
                    </div>


                    {/* <div className='w-[25rem] h-[25rem] self-end'>
            <img src={IMAGES.PAYMENTFOLLOWUPSTWO} alt="PAYMENTFOLLOWUPSTWO" className='w-full h-full' />
          </div> */}
                </div>

                {/* <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div>

        <div className='flex flex-row justify-start items-start'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
          Peter Drucker once said that ‘If you can’t measure it, you can’t improve it’ and this saying goes very well with our current industry. We can’t improve the occupancy and total revenue unless and until we don’t have the data to measure and we at promote my hotels exactly does that for you by maintaining the data of bookings and overall customer behaviors including the reviews. We maintain these data and present to you at the end of the month which help you to see the progress done by Krafitech Hospitality
          </div>
          <div>
            <img src={IMAGES.GrowthReportTwo} alt='GrowthReportTwo' />
          </div>
          <div className='w-[25rem] h-[25rem] self-end'>
            <img src={IMAGES.PAYMENTFOLLOWUPSTWO} alt="PAYMENTFOLLOWUPSTWO" className='w-full h-full' />
          </div>
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider mt-4'>
        <span className='font-semibold'>• Online reputation optimization levers: </span> Hotel reviews have a direct impact on your hotel's demand. A positive review from happy guests can influence the minds of the next reader toying with the idea of booking your hotel. Negative reviews on the other hand, can tarnish the image of your brand. Your hotel's online reputation therefore holds tremendous value and must be a part of your marketing plan. Krafitech Hospitality have strong strategic methods to improve the online brand value of our partner hotels and resorts.
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider  mt-16'>
          <span className='font-semibold'>• Review Optimization: </span>   Managing a hotel’s reputation is crucial in ensuring repeated custom and the acquisition of new customers and there’s no easier way of doing this than via online reviews. OTA platforms and Meta search sites like Trip Advisor are open platforms where people can post reviews about a hotel, its services and facilities. Krafitech Hospitality, by working with concerned OTAs, ensure that our partner hotels and resorts have genuine reviews about them on OTAs.
        </div>

        <div className='flex flex-row justify-center items-center mt-8'>
          <div>
            <img src={IMAGES.ONLINEREPUTATIONOPTIMIZATIONTWO} alt="ONLINEREPUTATIONOPTIMIZATIONTWO" className='w-full h-full' />
          </div>

          <div>
            <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
            <span className='font-semibold'>• Reputation Optimization strategy: </span>   The first step in Krafitech Hospitality online reputation management strategy is the evaluation of our partner hotels online image. Tracking the reputation is an important part of reputation management, and ideally, it’s a practice that you’ll continue once your primary reputation remediation efforts are finished. That’s because staying on the right track requires constant vigilance A little bit of neglect can turn into a serious problem very quickly
            </div>

            <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider mt-8'>
            <span className='font-semibold'>• Building trust: </span>   Building trust in online platforms are not an easy task as building trusts and relationships as there is no direct contact with customers. Managing reputation is crucial in ensuring repeated custom and the acquisition of new customers and there’s no easier way of doing this than via online reviews. Krafitech Hospitality follows a quick as well as proper review responding system for our partner hotels which responds to reviews effectively.
            </div>
          </div>

        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider  mt-16'>
          <span className='font-semibold'>• Quality Content: </span>  Online reputation optimization is not just about managing reviews or responding to them , moreover online reputation optimization is about the quality of the content hotel’s maintain in the online platforms. KRAFTITECH SOLUTIONS maintain a good content about the facilities our partner hotels offering in addition to your basic accommodation either. Quality content is a major factor that attracts more customers as quality content is a source of information to the customers.
        </div> */}


                <div className='mt-44'>
                    <div className='flex flex-row justify-start items-start gap-2'>
                        <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
                        <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>Next</Button>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default HotelMaintenance
