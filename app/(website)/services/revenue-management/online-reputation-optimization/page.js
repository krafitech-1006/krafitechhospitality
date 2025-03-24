"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const OnlineReputationOptimization = () => {


  const router = useRouter()
  
      const handleNavigation = (action) => {
        if (action === "back") {
          router.push('/services/revenue-management/promo-code-management')
        }
    
        if (action === "next") {
          router.push('/services/revenue-management/payment-followup')
        }
    
      }

  return (
    <div className='relative w-full bg-neutral-200 py-40 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div>
          <div className='font-bold tracking-wider text-md lg:text-4xl uppercase'>ONLINE REPUTATION OPTIMIZATION</div>
          {/* <div>
            <img src={IMAGES.ONLINEREPUTATIONOPTIMIZATION} alt='ONLINEREPUTATIONOPTIMIZATION' />
          </div> */}
        </div>

        <div className='flex flex-col lg:flex-row justify-start items-center lg:mt-0 mt-4'>
          <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider'>
            One negative comment in online or OTA platforms can massively affect a hotel brand’s reputation. Negative comments in OTA platforms start to take an ugly turn when these elements start affecting your sales and sow seeds of distrust in your customers, making everything you worked so hard for amount to nothing. That’s why Krafitech Hospitality gives importance in monitoring our partner’s online reputation very carefully. Krafitech Hospitality online reputation optimization process can have a huge impact on your business by monitoring our hotel partners OTA platforms carefully with our artificial intelligence tools and techniques
          </div>
          <div>
            <img src={IMAGES.ONLINEREPUTATIONOPTIMIZATION} alt='ONLINEREPUTATIONOPTIMIZATION' />
          </div>
          {/* <div className='w-[15rem] h-[15rem] self-start mt-[-90px]'>
            <img src={IMAGES.PromoCodeManagementTwo} alt="PromoCodeManagementTwo" className='w-full h-full' />
          </div> */}
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider mt-4'>
        <span className='font-semibold'>• Online reputation optimization levers: </span> Hotel reviews have a direct impact on your hotel&apos;s demand. A positive review from happy guests can influence the minds of the next reader toying with the idea of booking your hotel. Negative reviews on the other hand, can tarnish the image of your brand. Your hotel&apos;s online reputation therefore holds tremendous value and must be a part of your marketing plan. Krafitech Hospitality have strong strategic methods to improve the online brand value of our partner hotels and resorts.
        </div>

        <div className='rounded-lg bg-red-300 text-black p-2 w-full lg:w-[35rem] tracking-wider  mt-16'>
          <span className='font-semibold'>• Review Optimization: </span>   Managing a hotel’s reputation is crucial in ensuring repeated custom and the acquisition of new customers and there’s no easier way of doing this than via online reviews. OTA platforms and Meta search sites like Trip Advisor are open platforms where people can post reviews about a hotel, its services and facilities. Krafitech Hospitality, by working with concerned OTAs, ensure that our partner hotels and resorts have genuine reviews about them on OTAs.
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center mt-8'>
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

export default OnlineReputationOptimization
