"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog7 = () => {


  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/resources/blog7')
    }

    if (action === "next") {
      router.push('/resources/blog8')
    }

  }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-32 lg:py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>5 LESSONS FOR EFFECTIVE INSTAGRAM MARKETING FOR HOTELS</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>Below are 5 effective Instagram marketing for hotels tools, Instagram’s primary advantage over other social media platforms being its visual nature and hotel industry is the most likely to benefit from it. Instagram is the best platform to showcase content related to Hotel Marketing,</p>
              </div>
              
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1.Make your Hotel Instagram worthy:</span>Customers now take photos of everything at any moment of the day. Most people travel to escape the ordinary routine of their life the hotels should strive to give them the extraordinary experience so they’re inclined to talk about it. The hospitality industry benefits enormously as it is perfect for a photo-based social media network, especially the millennials who often prefer to pay more for an Instagram worthy hotel than a cheaper one. These snaps, in turn, advertise your hotel and the wonderful experiences that they and others are having while staying with you, and give all-important validation that your guests made a great vacation hotel choice. When used in an optimized manner, Instagram is an affordable and effective way to create awareness and build a community. Moreover, it’s free and that is one of the most important lessons for effective Instagram marketing of hotels. For beautiful properties.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2.Engage with the audience through Stories:</span>2.Engage with the audience through Stories:Many consider the best way to use IG Stories as a hotel is to create a ‘day in the life’ series using guests who stay in the resort. For example, let’s say a guest comes in and starts the day with a big breakfast, sits by the pool, takes an experience that you’re offering while sharing images of this process is sure to make people interested in your resort. This is one of the golden rules when it comes to using Instagram, and that’s to post often. By frequently posting, you’re keeping your brand in the minds of your customers. Hotels can also begin a dialogue and network, asking the followers to vote in polls based on their favorite hotel food, their recent experiences with your hotel and upcoming events at your property. To know more, contact us</p>
              </div>

            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog7img} alt='blog7img' height={1500} width={1500} className='w-[100%] h-[100%]' />
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>
          <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog7img2} alt='blog7img2' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[50%]'>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3.Collaborate with the Influencers:</span> With the current pandemic, the social media has become the daily norm with people spending between 3 – 7 hours on their devices. Influencer marketing for hotels has been the latest trend in digital marketing for the top hotel brands. Instagram has over 800 million users and working with an influencer gives you immediate access to their followers and potential guests. The hotels are also at an advantage because consumers believe influencers to be authentic and trustworthy, making marketing through their influence much more effective for the hotel. Connecting with an Instagram influencer allows you to curate your brand online, develop engagement and breakthrough with a potentially huge marketing base making it an effective tip for Instagram Marketing for Hotels.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4.Excellent responsive Customer Service:</span> Over the last few years, customer service expectations have changed. The days when travelers would contact a guest through numbers and mails are far behind us. Modern customers use social media platforms like Instagram to share their customer experiences and get their requests solved. To increase customer satisfaction and give your customers a solid reason to choose your company over competitors, it’s important to provide excellent customer support on Instagram by reading comments, analyzing direct messages and monitoring brand mentions to solve customer requests fast minimizing the turnaround time.</p>
              </div>

            </div>
            
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>5.Use a Business Account/ Instagram Insights: </span>One of the most effective tip for Instagram marketing for hotels is optimal utilization of Instagram Insights. This section provides you with an overview of the people visiting your page and interacting with posts. The audience is categorized as per age group, gender, location, and other parameters. You can look at the data for multiple posts, the metrics for individual posts, and get insights into your Instagram feed and stories. All of this means you can see exactly which posts and stories are driving the most engagement, which can then be used to help refine your marketing efforts</p>

              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

            </div>
          </div>


         




      

<p className='font-semibold tracking-wide mt-8'>Krafitech Hospitality have a very creative social media team working for hotels, if you are looking to subscribe to social page programmer – a social media marketing tool for hotels, please write to contact US.</p>









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
          <div className='font-bold tracking-widest text-lg uppercase'>5 LESSONS FOR EFFECTIVE INSTAGRAM MARKETING FOR HOTELS</div>
          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>Below are 5 effective Instagram marketing for hotels tools, Instagram’s primary advantage over other social media platforms being its visual nature and hotel industry is the most likely to benefit from it. Instagram is the best platform to showcase content related to Hotel Marketing,</p>
              </div>
              
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1.Make your Hotel Instagram worthy:</span>Customers now take photos of everything at any moment of the day. Most people travel to escape the ordinary routine of their life the hotels should strive to give them the extraordinary experience so they’re inclined to talk about it. The hospitality industry benefits enormously as it is perfect for a photo-based social media network, especially the millennials who often prefer to pay more for an Instagram worthy hotel than a cheaper one. These snaps, in turn, advertise your hotel and the wonderful experiences that they and others are having while staying with you, and give all-important validation that your guests made a great vacation hotel choice. When used in an optimized manner, Instagram is an affordable and effective way to create awareness and build a community. Moreover, it’s free and that is one of the most important lessons for effective Instagram marketing of hotels. For beautiful properties.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2.Engage with the audience through Stories:</span>2.Engage with the audience through Stories:Many consider the best way to use IG Stories as a hotel is to create a ‘day in the life’ series using guests who stay in the resort. For example, let’s say a guest comes in and starts the day with a big breakfast, sits by the pool, takes an experience that you’re offering while sharing images of this process is sure to make people interested in your resort. This is one of the golden rules when it comes to using Instagram, and that’s to post often. By frequently posting, you’re keeping your brand in the minds of your customers. Hotels can also begin a dialogue and network, asking the followers to vote in polls based on their favorite hotel food, their recent experiences with your hotel and upcoming events at your property. To know more, contact us</p>
              </div>

            </div>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog7img} alt='blog7img' height={1500} width={1500} className='w-[100%] h-[100%]' />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>
          <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog7img2} alt='blog7img2' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[100%]'>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3.Collaborate with the Influencers:</span> With the current pandemic, the social media has become the daily norm with people spending between 3 – 7 hours on their devices. Influencer marketing for hotels has been the latest trend in digital marketing for the top hotel brands. Instagram has over 800 million users and working with an influencer gives you immediate access to their followers and potential guests. The hotels are also at an advantage because consumers believe influencers to be authentic and trustworthy, making marketing through their influence much more effective for the hotel. Connecting with an Instagram influencer allows you to curate your brand online, develop engagement and breakthrough with a potentially huge marketing base making it an effective tip for Instagram Marketing for Hotels.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4.Excellent responsive Customer Service:</span> Over the last few years, customer service expectations have changed. The days when travelers would contact a guest through numbers and mails are far behind us. Modern customers use social media platforms like Instagram to share their customer experiences and get their requests solved. To increase customer satisfaction and give your customers a solid reason to choose your company over competitors, it’s important to provide excellent customer support on Instagram by reading comments, analyzing direct messages and monitoring brand mentions to solve customer requests fast minimizing the turnaround time.</p>
              </div>

            </div>
            
          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>5.Use a Business Account/ Instagram Insights: </span>One of the most effective tip for Instagram marketing for hotels is optimal utilization of Instagram Insights. This section provides you with an overview of the people visiting your page and interacting with posts. The audience is categorized as per age group, gender, location, and other parameters. You can look at the data for multiple posts, the metrics for individual posts, and get insights into your Instagram feed and stories. All of this means you can see exactly which posts and stories are driving the most engagement, which can then be used to help refine your marketing efforts</p>

              </div>
            </div>
          </div>


         




      

<p className='font-semibold tracking-wide mt-8'>Krafitech Hospitality have a very creative social media team working for hotels, if you are looking to subscribe to social page programmer – a social media marketing tool for hotels, please write to contact US.</p>









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

export default Blog7
