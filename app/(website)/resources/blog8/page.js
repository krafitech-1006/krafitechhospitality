"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog8 = () => {


  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/resources/blog7')
    }

    if (action === "next") {
      router.push('/resources/blog9')
    }

  }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-32 lg:py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>WHAT IT TAKES TO BE A HOTEL REVENUE MANAGEMENT AT KRAFITECH SOLUTIONS</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>Since Revenue Management is the core of info@krafitechsolution.com revenue managers are the driving force behind India’s best Hotel Marketing Agency. Hence when it comes to choosing a revenue manager especially for hotels, it is important to look for rather diverse skills and traits that can help hotels to reach and exceed their revenue targets. The Revenue Managers play a major part in getting guests to the doors during the period of the season and & most importantly during offseason. Here are some of the traits that info@krafitechsolution.com – a Hotel Marketing Agency, looks for while choosing the right person for the role of Revenue managers.</p>
              </div>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1. Communication and Interpersonal Skills:</span> The most important skill that a revenue manager needs to have is communication skills. The conversation is the foremost thing that would help us in building an understanding of hoteliers. It is also a deciding factor with the guests because if the guest is satisfied with the information that he or she receives than they are most likely to choose your Hotel as a stay option.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2. Analytical Skill:</span> Every revenue manager needs to check through the data and upcoming trends in the field of the Travel industry. Analyzing the correct and effective strategy, problem-solving, decision making, and enforcing them logically at the right time will not only help in achieving revenue targets but will also help in the overall productivity of the Hotel.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3. Detailing:</span>The responsibility of a revenue manager does not end at just updating the rate plans, setting up promotions and special offers, it is extremely important to make sure that the rate plans and promotions are fetched correctly across each and every OTA. When it comes to listing the property, descriptions also hold much importance. Hence paying attention to the details and cross-checking becomes necessary after setting up the property.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4. Relationship building:</span>It is one of the major key skills that is required for a revenue manager since they are linked between hoteliers, guests, staff, travel agents, and market managers. It is the duty of the revenue manager to build and maintain professional relationships with all of the respective departments concerned with the Hotel because each one of them is important for the overall profitability of the business.</p>
              </div>

            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog8img} alt='blog8img' height={1500} width={1500} className='w-[100%] h-[100%]' />
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog8img2} alt='blog8img2' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>5. Competitive aptitude:</span>  The revenue managers are driven by the monthly revenue budgets and targets and they try to not only reach them but also to exceed them. Being aware of the competitor’s pricing helps them to set the correct pricing and brings them at the top and for their hotels to get the optimum benefits from them. Hence a competitive nature will keep them motivated and strive through the results.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>6. Creativity:</span>Understanding data is one thing but to implement it creatively is the task of the revenue manager. They need to be confident enough to take risks and try new and effective approaches and solutions instead of sticking to the norms. A creative mindset of the revenue manager will pay off the most during the low season period.</p>
              </div>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>7. Tech Skills: </span>Revenue managers need to have basic technical knowledge in order to adapt to the new technologies quickly and efficiently. If the revenue manager is skilled enough to use the files it will save them a lot of time and will also help them to calculate the revenue figures while preparing the revenue sheets at the end of the month. Such a skill will also improve the overall productivity and functionality of the revenue managers in terms of generating business.</p>

              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>8. Patience:</span>Being a revenue manager takes a lot of patience and perseverance to stay and be credible in this position. The first person who is held accountable in case of any problem at the hotel, is the revenue manager, hence it is very important to keep patience while listening and understanding the problems of the guests and solving it.</p>

              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>9. Stay Updated: </span> It is very important for a revenue manager to keep interested in reading and develop a habit to stay updated with all the latest updates pertaining to the travel industry. They should be the first ones to know about updates and should be quick enough to apply them as it will help them to analyze targets and decide how to achieve them</p>

              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>10. Destination Knowledge:</span>It is necessary for a revenue manager to have knowledge about each and every tourist attraction near to the hotel. The first thing that the guests question is about the places to visit in that particular city and the revenue manager should be aware of even the smallest of the details of every destination. It can help the guest to trust the hotel and the chances of getting booked are increased</p>

              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

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


      <div className='relative lg:hidden w-full bg-neutral-200 py-32 lg:py-56'>
      <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>WHAT IT TAKES TO BE A HOTEL REVENUE MANAGEMENT AT KRAFITECH SOLUTIONS</div>
          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>Since Revenue Management is the core of info@krafitechsolution.com revenue managers are the driving force behind India’s best Hotel Marketing Agency. Hence when it comes to choosing a revenue manager especially for hotels, it is important to look for rather diverse skills and traits that can help hotels to reach and exceed their revenue targets. The Revenue Managers play a major part in getting guests to the doors during the period of the season and & most importantly during offseason. Here are some of the traits that info@krafitechsolution.com – a Hotel Marketing Agency, looks for while choosing the right person for the role of Revenue managers.</p>
              </div>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1. Communication and Interpersonal Skills:</span> The most important skill that a revenue manager needs to have is communication skills. The conversation is the foremost thing that would help us in building an understanding of hoteliers. It is also a deciding factor with the guests because if the guest is satisfied with the information that he or she receives than they are most likely to choose your Hotel as a stay option.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2. Analytical Skill:</span> Every revenue manager needs to check through the data and upcoming trends in the field of the Travel industry. Analyzing the correct and effective strategy, problem-solving, decision making, and enforcing them logically at the right time will not only help in achieving revenue targets but will also help in the overall productivity of the Hotel.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3. Detailing:</span>The responsibility of a revenue manager does not end at just updating the rate plans, setting up promotions and special offers, it is extremely important to make sure that the rate plans and promotions are fetched correctly across each and every OTA. When it comes to listing the property, descriptions also hold much importance. Hence paying attention to the details and cross-checking becomes necessary after setting up the property.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4. Relationship building:</span>It is one of the major key skills that is required for a revenue manager since they are linked between hoteliers, guests, staff, travel agents, and market managers. It is the duty of the revenue manager to build and maintain professional relationships with all of the respective departments concerned with the Hotel because each one of them is important for the overall profitability of the business.</p>
              </div>

            </div>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog8img} alt='blog8img' height={1500} width={1500} className='w-[100%] h-[100%]' />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-center'>
                <Image src={IMAGES.blog8img2} alt='blog8img2' height={1500} width={1500} className='w-[100%] h-[100%] object-cover' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>5. Competitive aptitude:</span>  The revenue managers are driven by the monthly revenue budgets and targets and they try to not only reach them but also to exceed them. Being aware of the competitor’s pricing helps them to set the correct pricing and brings them at the top and for their hotels to get the optimum benefits from them. Hence a competitive nature will keep them motivated and strive through the results.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>6. Creativity:</span>Understanding data is one thing but to implement it creatively is the task of the revenue manager. They need to be confident enough to take risks and try new and effective approaches and solutions instead of sticking to the norms. A creative mindset of the revenue manager will pay off the most during the low season period.</p>
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>7. Tech Skills: </span>Revenue managers need to have basic technical knowledge in order to adapt to the new technologies quickly and efficiently. If the revenue manager is skilled enough to use the files it will save them a lot of time and will also help them to calculate the revenue figures while preparing the revenue sheets at the end of the month. Such a skill will also improve the overall productivity and functionality of the revenue managers in terms of generating business.</p>

              </div>
            </div>

          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>8. Patience:</span>Being a revenue manager takes a lot of patience and perseverance to stay and be credible in this position. The first person who is held accountable in case of any problem at the hotel, is the revenue manager, hence it is very important to keep patience while listening and understanding the problems of the guests and solving it.</p>

              </div>
            </div>

          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>9. Stay Updated: </span> It is very important for a revenue manager to keep interested in reading and develop a habit to stay updated with all the latest updates pertaining to the travel industry. They should be the first ones to know about updates and should be quick enough to apply them as it will help them to analyze targets and decide how to achieve them</p>

              </div>
            </div>
       
          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>10. Destination Knowledge:</span>It is necessary for a revenue manager to have knowledge about each and every tourist attraction near to the hotel. The first thing that the guests question is about the places to visit in that particular city and the revenue manager should be aware of even the smallest of the details of every destination. It can help the guest to trust the hotel and the chances of getting booked are increased</p>

              </div>
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
    </div>
  )
}

export default Blog8
