"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog3 = () => {


  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/resources/blog2')
    }

    if (action === "next") {
      router.push('/resources/blog4')
    }

  }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-32 lg:py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>TOP 5 THINGS TO LOOK OUT FOR IF YOU ARE HIRING A HOTEL MARKETING COMPANY</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md'>
                <p className=''><span className='font-semibold '>Hotel Marketing Company</span> comes with years of experience and specialization in Marketing and Distribution for hospitality brands; they have been there done that and its best to leverage Hotel Marketing Company’s experience to create a pull for a Hotel Product. It’s a holistic Hotel Digital Marketing Agency for hotels and resorts in multiple service lines. Increasing audiences, then converting them into guests is the agency’s forte, just like providing guests with a memorable experience when they get there is the hotel’s goal.</p>
              </div>
              <p className='font-semibold mt-2 tracking-wide'>Top 5 indicators to look when you hire a Hotel Marketing Company:</p>
              <div className='bg-[#14acac] rounded-xl p-2 mt-8 text-md'>
                <p><span className='font-semibold'>1-EXPERIENCE: </span>As more travellers are relying on online searches before they visit a place or book a hotel, there is a growing demand for Digital Marketing Agencies who can give Hotel a wider reach. With so many competitors around in the hotel industry, we should have experts running the marketing campaigns so that the hotelier can purely focus on boosting their hotel revenue and at the same time make sure that the guests have a great experience at their hotel property. Getting the Hotel right kind of customers is where an experienced Hotel Marketing Company will play a huge role.</p>
              </div>
            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog3img} alt='blog3img' height={1500} width={1500} className='w-[1000%] h-[1000%] object-scale-down' />
              </div>
            </div>
          </div>



          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='h-full justify-items-center'>
              <Image src={IMAGES.blog3img2} alt='blog3img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
            <div className='flex flex-col'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
                <p className='mt-0'>
                  <span className='font-semibold tracking-wider'>2 – THE RIGHT TEAM: </span>The moment you shortlist a Hotel Marketing Company, you need to have a clear understanding of why you are choosing them. We don’t want it to just be shooting in the dark and say random things but set achievable targets instead and make sure that the Hotel Marketing Agency has a firm grasp on these goals and these expectations the moment the relationship begins. Setting these expectations and being clear on your marketing goals from the beginning, will definitely go a long way with both your business and your agency, and keeping a pulse on the progress, the performance and just being able to correct course when needed. When you have the right, aggressive team onboard on the same page, achieving targets becomes far more feasible. Make sure that you set those expectations and those goals, the moment you reach out to the agencies so they have a clear expectation of what they’re aiming for. – Jacob Wulff
                </p>
              </div>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='mt-0'>
                <span className='font-semibold'>3-THE BIG QUESTION OF ROI:</span> To craft a dedicated digital marketing strategy for you, the Hotel Marketing Agency needs to be fully aware of your budget to determine how much time they can dedicate to meeting your goals and whether they can give you the Roi you are looking for. It’s not a matter of if an agency can execute, but rather if they have the resources to make the goals a possibility. Comparing agency to agency to see what type of model is going to best assist you and that you want to reward the agency with is a crucial factor. It is extremely important to assure that the agency will stand by the committed budget thereby not creating any discrepancy.</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='mt-0'>
                <span className='font-semibold'>4-TRANSPARENCY:</span>Transparency is one of the key things to be looking at when hiring a Hotel Digital Marketing agency because these are a group of people that are being hired since they are specialised in working with hotels, resorts and other hospitality brands. They are the people who will be trained and have access to the latest technology. If they’re not transparent enough with timely reporting with the appropriate details as decided mutually and in line with the strategy, then that’s a disadvantage. The whole relationship with the Hotel Sales & Marketing Company should be based on developing a solid marketing strategy for business and not just giving you the numbers that you want to hear every month.</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>



          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='mt-0'>
                <span className='font-semibold'>5-CUSTOMER FEEDBACK:</span> Whether an Online Hotel Marketing can deliver or not can best be judged based on the experience of the Hotel Marketing Companies existing customer feedback. Its best to speak to existing customers and assess the work or their feedback, since how long they have been working and if they are satisfied year after year. If a Hotel Marketing Company has list of hotel partners who have been with them for more than 3-4 years this simply means the Hotel Marketing Company is doing a satisfactory work. Enough research should be done and previous client experiences will give a far clearer picture when a decision is taken to hire a Hotel Marketing Company. Positive Customer Feedback will give you the reassurance that you are hiring a right Hotel Marketing Agency. “The keys to brand success are self-definition, transparency, authenticity and accountability”. – Simon Mainwaring Success</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

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
          <div className='font-bold tracking-widest text-lg uppercase'>TOP 5 THINGS TO LOOK OUT FOR IF YOU ARE HIRING A HOTEL MARKETING COMPANY</div>
          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md'>
                <p className=''><span className='font-semibold '>Hotel Marketing Company</span> comes with years of experience and specialization in Marketing and Distribution for hospitality brands; they have been there done that and its best to leverage Hotel Marketing Company’s experience to create a pull for a Hotel Product. It’s a holistic Hotel Digital Marketing Agency for hotels and resorts in multiple service lines. Increasing audiences, then converting them into guests is the agency’s forte, just like providing guests with a memorable experience when they get there is the hotel’s goal.</p>
              </div>
              <p className='font-semibold mt-2 tracking-wide'>Top 5 indicators to look when you hire a Hotel Marketing Company:</p>
              <div className='bg-[#14acac] rounded-xl p-2 mt-8 text-md'>
                <p><span className='font-semibold'>1-EXPERIENCE: </span>As more travellers are relying on online searches before they visit a place or book a hotel, there is a growing demand for Digital Marketing Agencies who can give Hotel a wider reach. With so many competitors around in the hotel industry, we should have experts running the marketing campaigns so that the hotelier can purely focus on boosting their hotel revenue and at the same time make sure that the guests have a great experience at their hotel property. Getting the Hotel right kind of customers is where an experienced Hotel Marketing Company will play a huge role.</p>
              </div>
            </div>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog3img} alt='blog3img' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
          </div>



          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='h-full justify-items-center'>
              <Image src={IMAGES.blog3img2} alt='blog3img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
            <div className='flex flex-col'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
                <p className='mt-0'>
                  <span className='font-semibold tracking-wider'>2 – THE RIGHT TEAM: </span>The moment you shortlist a Hotel Marketing Company, you need to have a clear understanding of why you are choosing them. We don’t want it to just be shooting in the dark and say random things but set achievable targets instead and make sure that the Hotel Marketing Agency has a firm grasp on these goals and these expectations the moment the relationship begins. Setting these expectations and being clear on your marketing goals from the beginning, will definitely go a long way with both your business and your agency, and keeping a pulse on the progress, the performance and just being able to correct course when needed. When you have the right, aggressive team onboard on the same page, achieving targets becomes far more feasible. Make sure that you set those expectations and those goals, the moment you reach out to the agencies so they have a clear expectation of what they’re aiming for. – Jacob Wulff
                </p>
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='mt-0'>
                <span className='font-semibold'>3-THE BIG QUESTION OF ROI:</span> To craft a dedicated digital marketing strategy for you, the Hotel Marketing Agency needs to be fully aware of your budget to determine how much time they can dedicate to meeting your goals and whether they can give you the Roi you are looking for. It’s not a matter of if an agency can execute, but rather if they have the resources to make the goals a possibility. Comparing agency to agency to see what type of model is going to best assist you and that you want to reward the agency with is a crucial factor. It is extremely important to assure that the agency will stand by the committed budget thereby not creating any discrepancy.</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>


          <div className='flex flex-col justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='mt-0'>
                <span className='font-semibold'>4-TRANSPARENCY:</span>Transparency is one of the key things to be looking at when hiring a Hotel Digital Marketing agency because these are a group of people that are being hired since they are specialised in working with hotels, resorts and other hospitality brands. They are the people who will be trained and have access to the latest technology. If they’re not transparent enough with timely reporting with the appropriate details as decided mutually and in line with the strategy, then that’s a disadvantage. The whole relationship with the Hotel Sales & Marketing Company should be based on developing a solid marketing strategy for business and not just giving you the numbers that you want to hear every month.</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>



          <div className='flex flex-col justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='mt-0'>
                <span className='font-semibold'>5-CUSTOMER FEEDBACK:</span> Whether an Online Hotel Marketing can deliver or not can best be judged based on the experience of the Hotel Marketing Companies existing customer feedback. Its best to speak to existing customers and assess the work or their feedback, since how long they have been working and if they are satisfied year after year. If a Hotel Marketing Company has list of hotel partners who have been with them for more than 3-4 years this simply means the Hotel Marketing Company is doing a satisfactory work. Enough research should be done and previous client experiences will give a far clearer picture when a decision is taken to hire a Hotel Marketing Company. Positive Customer Feedback will give you the reassurance that you are hiring a right Hotel Marketing Agency. “The keys to brand success are self-definition, transparency, authenticity and accountability”. – Simon Mainwaring Success</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

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

export default Blog3
