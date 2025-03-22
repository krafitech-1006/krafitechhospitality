"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { ChevronRight } from "lucide-react"

const Blog1 = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-32 lg:py-56 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>
        <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
          <div className='w-full lg:w-[55%]'>
            <div className='font-bold tracking-widest text-md uppercase'>WHY ONLINE REPUTATION MANAGEMENT FOR HOTEL IS BIG THING</div>
            <div className='bg-[#14acac] rounded-xl p-2 mt-8 lg:mr-14 text-md'>
              <span className='font-semibold'>Online Reputation Management</span> services are slowly and steadily gaining popularity and attracting the attention of Hotelier and Hotel Revenue Management Companies. Warren Buffet quotes, “It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.” This quote subtly explains the significance of reputation for an Individual as well as a brand. As the world embraces digital, the importance of this is only elevated. Even though hotels are a physical property, its entire image and reputation are digital and with the process of running a hotel being so critical and exhausting, it is advisable to outsource Hotel reputation Management Services.
            </div>
          </div>
          <div className='w-full lg:w-[45%]'>
            <div className='w-[100%] h-full justify-items-center'>
              <Image src={IMAGES.blog1img} alt='blog1img' height={1500} width={1500} className='w-full h-full lg:w-[90%] lg:h-[90%] object-scale-down' />
            </div>
          </div>
        </div>

        <div className='font-bold tracking-wider text-black mb-5 text-xl mt-16'>Let’s have a look at some reasons to as Why Online Reputation for Hotels is Crucial: -</div>


        <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
          <div className='w-full lg:w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.blog1img2} alt='blog1img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
          </div>
          <div className='flex flex-col gap-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>• Factor:</p>
              <p className='mt-1'>
                With the Internet being so accessible and highly influential in people’s travel decisions, traveller’s constantly compare properties and rely on what’s written about them. It’s now so easy to share every opinion that a customer has on social media now, that detailed experiences of the guests can sometimes also be a cause of concern. Online reviews have the power to influence a customer’s decision which in term influences the hotel’s demand and therefore can have a direct impact on the revenue of the hotel owners. Hiring Hotel Online Reputation Management can help guide the hotel in the right path and take the weight off the shoulders of the operations team so that they can concentrate on enhancing the service of the hotel. To know how they can help, please visit our website
              </p>
            </div>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>• Your Services:</p>
              <p className='mt-1'> reviews can help properties build a thorough monitoring mechanism in place to keep a tab of both good and bad reviews based on which the hotel can constantly be updated about where they are lacking and have real-time access to the areas that they can improvise on. There are Hotel Online Reputation Management that help you do so and to know.</p>
            </div>
          </div>
        </div>


        <div className='flex flex-col lg:flex-row justify-start items-start mt-16'>
          <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
            <p className='mt-4'><span className='font-semibold'>• Benefit: </span>when your website is ranked well and has excellent reviews, it sells for itself generating more visits which consequently enhances the rate of direct booking on your engine. This ensures that you can spend less time and effort promoting your services as the online platforms begin working for you. The process works similar to word-of-mouth marketing, but in the digital environment. To save money and increase your profits hire the right Hotel Online Reputation Management. To know more, Visit us. Competitive Intelligence: Online Reputation management also gives you an access to have a competitive edge in the market. You can analyse your competitor’s reports and use the insights to improve your operations, analyse the market and devise more successful strategies helping you stay on top in the sphere and deal right with your competition.</p>
          </div>
          <div className='w-[50%] h-full justify-items-center'>

          </div>
        </div>


        <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
          <div className='flex flex-col gap-[5rem]'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>Cloud-Based:-</p>
              <p className='mt-4'>Cloud-based restaurant management software offers remote access, continuous data updates and backups, and minimized start-up costs through predictable subscription fees. It requires continuous internet access but provides greater security and compatibility with similar applications.</p>
            </div>
          </div>

          <div className='w-[50%] h-full justify-items-center'>
            
          </div>
        </div>


       <p className='mt-8 font-semibold'>In today’s world, where every service is taking a step digitally, Online Reputation Management is significantly important impacting the bottom line and the customer loyalty in the Hospitality Sector. So, wait no more and get in touch with us by writing to info@krafitechsolution.com and our team will contact you to explain you further.</p>


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

export default Blog1
