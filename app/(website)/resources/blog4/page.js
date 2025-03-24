"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog4 = () => {


  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/resources/blog3')
    }

    if (action === "next") {
      router.push('/resources/blog5')
    }

  }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-32 lg:py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>SOCIAL MEDIA MARKETING FOR HOTELS AND THE EPIC FORMULA</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='font-semibold '>THE EPIC FORMULA FOR HOTELS:</p>
                <p className='mt-4'><span className='font-semibold '>Social Media Marketing</span> for Hotels has witnessed a gigantic growth in terms of internet usage, reach and popularity. Social Media Sites like Instagram, Facebook, and Twitter are slowly replacing traditional forms of communication. Before, we begin looking at the impact that Social Media Marketing is having on the hospitality industry, the statistics as per research conducted by Global Web Index for 2021 shows that, 53.6% of the world’s total population uses social media. No surprise that it is fast becoming an integral part of our lives. When statistics says that an average person spends about 4 hours, 24 minutes daily on the internet, it’s only right that the businesses make optimum use of it as a marketing resource and the same applies for the concept of Social Media Marketing for Hotels.</p>
              </div>


            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-center'>
                <Image src={IMAGES.blog4img} alt='blog4img' height={1500} width={1500} className='w-[60%] h-[60%] object-scale-down' />
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-[55%] tracking-wider'>

                <p className='font-semibold'>Top 5 indicators to look when you hire a Hotel Marketing Company:</p>
                <p className='mt-4'><span className='font-semibold  '>• Digital Media </span> is fast moving towards consumer empowerment in track with the convenience with which content can be transmitted to billions out there with a click. Hotels need to capitalize on this trend by revamping their marketing strategies in line with the ongoing Social Media Marketing for Hotels. The process involves setting up new brand plans, structuring new metrics and bridging the gaps wherever necessary. In order to ensure success, hoteliers must be active on their social media handles since a customer relationship strategy demands a very high digital presence. We have in-house experts who can build a strong social media marketing strategy for you. Does this mean Social Media Marketing for Hotels has replaced the traditional media? No but the key is to find the right balance between both and they both go hand in hand. Social Media Marketing for Hotels mainly helps in increasing the hotel revenue by attracting and increasing traffic, engaging more customers and connecting with every customer on a personal level. Things like creating themed posts, offering helpful responses, using hashtags, promoting events, showing ides, communicating instant changes becomes far easier and more accessible through social media.</p>

              </div>
            </div>
            <div className='w-full h-full justify-items-start'>

            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[36rem] tracking-wider'>
                <p className='mt-0'>
                  <span className='font-semibold'>• Social Media Marketing</span> have platforms that have in built analytics tools that allow hotel management to monitor engagement which means goals and objectives can be monitored and achieved as well as performance is measured. It also allows the business to be omnipresent by increasing personalization and generating more loyalty. Social Media Marketing for Hotels can help collaborations within the industry and expand their audiences by simply sharing a post. In today’s world, if someone is searching a hotel, they will first see their social media accounts for feedback, therefore allowing hotels to take charge of their reputation. The biggest benefit of having social media marketing is an acquirement of millions of social media referral’s since it’s almost a platform for virtual word of mouth. To conclude, like the quote Pete Cashmore
                </p>
                <p className='mt-4'>
                  “We’re living at a time when attention is the new currency. Those who insert themselves into as many channels as possible look set to capture the most value.”
                </p>
                <p className='mt-4'>
                  Social media may not completely replace the mainstream marketing but social media marketing for hotels is definitely here with a bang and to stay. To know more, contact us.
                </p>
              </div>
            </div>
            <div className='w-full h-full justify-items-start'>
              <Image src={IMAGES.blog4img2} alt='blog4img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
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
          <div className='font-bold tracking-widest text-lg uppercase'>SOCIAL MEDIA MARKETING FOR HOTELS AND THE EPIC FORMULA</div>
          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='font-semibold '>THE EPIC FORMULA FOR HOTELS:</p>
                <p className='mt-4'><span className='font-semibold '>Social Media Marketing</span> for Hotels has witnessed a gigantic growth in terms of internet usage, reach and popularity. Social Media Sites like Instagram, Facebook, and Twitter are slowly replacing traditional forms of communication. Before, we begin looking at the impact that Social Media Marketing is having on the hospitality industry, the statistics as per research conducted by Global Web Index for 2021 shows that, 53.6% of the world’s total population uses social media. No surprise that it is fast becoming an integral part of our lives. When statistics says that an average person spends about 4 hours, 24 minutes daily on the internet, it’s only right that the businesses make optimum use of it as a marketing resource and the same applies for the concept of Social Media Marketing for Hotels.</p>
              </div>


            </div>
            <div className='w-[100%] mt-4'>
              <div className='w-[100%] h-full justify-items-center'>
                <Image src={IMAGES.blog4img} alt='blog4img' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-[100%] tracking-wider'>

                <p className='font-semibold'>Top 5 indicators to look when you hire a Hotel Marketing Company:</p>
                <p className='mt-4'><span className='font-semibold  '>• Digital Media </span> is fast moving towards consumer empowerment in track with the convenience with which content can be transmitted to billions out there with a click. Hotels need to capitalize on this trend by revamping their marketing strategies in line with the ongoing Social Media Marketing for Hotels. The process involves setting up new brand plans, structuring new metrics and bridging the gaps wherever necessary. In order to ensure success, hoteliers must be active on their social media handles since a customer relationship strategy demands a very high digital presence. We have in-house experts who can build a strong social media marketing strategy for you. Does this mean Social Media Marketing for Hotels has replaced the traditional media? No but the key is to find the right balance between both and they both go hand in hand. Social Media Marketing for Hotels mainly helps in increasing the hotel revenue by attracting and increasing traffic, engaging more customers and connecting with every customer on a personal level. Things like creating themed posts, offering helpful responses, using hashtags, promoting events, showing ides, communicating instant changes becomes far easier and more accessible through social media.</p>

              </div>
            </div>
            <div className='w-full h-full justify-items-start'>

            </div>
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[36rem] tracking-wider'>
                <p className='mt-0'>
                  <span className='font-semibold'>• Social Media Marketing</span> have platforms that have in built analytics tools that allow hotel management to monitor engagement which means goals and objectives can be monitored and achieved as well as performance is measured. It also allows the business to be omnipresent by increasing personalization and generating more loyalty. Social Media Marketing for Hotels can help collaborations within the industry and expand their audiences by simply sharing a post. In today’s world, if someone is searching a hotel, they will first see their social media accounts for feedback, therefore allowing hotels to take charge of their reputation. The biggest benefit of having social media marketing is an acquirement of millions of social media referral’s since it’s almost a platform for virtual word of mouth. To conclude, like the quote Pete Cashmore
                </p>
                <p className='mt-4'>
                  “We’re living at a time when attention is the new currency. Those who insert themselves into as many channels as possible look set to capture the most value.”
                </p>
                <p className='mt-4'>
                  Social media may not completely replace the mainstream marketing but social media marketing for hotels is definitely here with a bang and to stay. To know more, contact us.
                </p>
              </div>
            </div>
            <div className='w-full h-full justify-items-start'>
              <Image src={IMAGES.blog4img2} alt='blog4img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
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

export default Blog4
