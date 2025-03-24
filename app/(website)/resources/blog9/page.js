"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog9 = () => {


  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/resources/blog8')
    }

    // if (action === "next") {
    //   router.push('/resources/blog')
    // }

  }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-32 lg:py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>HOW TO IMPROVE HOTELS RANKING ON OTAS IN COVID TIMES</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>For any hotelier the work- How to Improve Hotel’s ranking on OTA (Online Travel Agency) is a constant task and is the most time consuming activity, still Hoteliers spend time and energy on OTAs because online bookings have become a major contributor to Hotel’s revenue. OTA Rankings are governed by different algorithms and vary from OTA to OTA and hence an OTA specific strategy needs to be in place, however there are some Top Hacks that can give your Hotel Ranking a boost on OTAs</p>
              </div>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1: Add more content –</span>  pictures & videos: One has to be super active in adding more and more content confirming with OTAs content policy. Pictures and videos leave a much more powerful impression on viewers than raw text. Having high quality images of your hotel online is crucial to driving more hotel bookings. High quality content can not only boost your hotel’s online presence but Improve the booking experience for customer, receive more engagement and ultimately increase hotel bookings.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2: Flexible Cancellation Policy:</span>  Another important point that can be covered is keeping a flexible cancellation policy will lead to more bookings; bookings from actual customer as well as from those who are tentative and planning. Online Booking deacons are quick deacons and technology make it increasingly easy and simple to book a hotel on the go. There are many travelers who are not sure with their travel dates and so they choose to go with flexible cancellation rules or are ready to pay at hotels. We also advise to go for special policies for group bookings supported by Pay at Hotel.</p>
              </div>
          
            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog9img} alt='blog9img' height={1500} width={1500} className='w-[100%] h-[100%]' />
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog9img2} alt='blog9img2' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3: Mobile friendly promotions:</span>  42% of travelers book via mobile and a much higher percentage search on mobile and may be book offline, thus Hoteliers should focus catching more eyeballs via mobile. As the future of travel is shifting towards mobile, it’s become clear the future of the travel industry will see hotel marketing and mobile devices go hand in hand. Putting this in mind, hotels need to start making mobile marketing a priority and keep mobile users front of mind with mobile-only strategies. Mobile-only promotions will encourage more bookings, will speed up conversations.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4: Beat your campest by Dynamic Pricing:</span> all your marketing strategies are in in place, the final holy grail of Hotel Marketing is pricing it right. For this you need to keep a close watch on your comp-set and their price movement. Right pricing will help you in more clicks and improved click to book ratio. Rate dynamics depends on variety of factor like floor price – occupancy ratio – desired ARR and Hotelier brand positioning.</p>
              </div>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>5: Work on your reviews: </span>Besides content one should make sure that customer ratings on OTAs is among the top category. If customers are liking your product this means that there is more likelihood of getting clicked or ranking up higher in searches. High ranked hotel on customer feedback parameters also means that there are high probability that booking will be converted.</p>
                <p className='mt-4'>There are many more strategies that are being adopted by Hotel Revenue Managers to improve Hotel’s ranking and some are very specific to OTAs. The topic is very exhaustive and strategies are ever evolving. If you are interested or free consultation please write to contact <span className='font-semibold  '>info@krafitechsolution.com</span> and our Hotel Marketing Consultants will explain you in detail.</p>
              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

            </div>
          </div>


          

          <div className='mt-8'>
            <div className='flex flex-row justify-start items-start gap-2'>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
              {/* <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>Next</Button> */}
            </div>
          </div>
        </div>
      </div>


      <div className='relative lg:hidden w-full bg-neutral-200 py-32 lg:py-56'>
      <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>HOW TO IMPROVE HOTELS RANKING ON OTAS IN COVID TIMES</div>
          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>For any hotelier the work- How to Improve Hotel’s ranking on OTA (Online Travel Agency) is a constant task and is the most time consuming activity, still Hoteliers spend time and energy on OTAs because online bookings have become a major contributor to Hotel’s revenue. OTA Rankings are governed by different algorithms and vary from OTA to OTA and hence an OTA specific strategy needs to be in place, however there are some Top Hacks that can give your Hotel Ranking a boost on OTAs</p>
              </div>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1: Add more content –</span>  pictures & videos: One has to be super active in adding more and more content confirming with OTAs content policy. Pictures and videos leave a much more powerful impression on viewers than raw text. Having high quality images of your hotel online is crucial to driving more hotel bookings. High quality content can not only boost your hotel’s online presence but Improve the booking experience for customer, receive more engagement and ultimately increase hotel bookings.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2: Flexible Cancellation Policy:</span>  Another important point that can be covered is keeping a flexible cancellation policy will lead to more bookings; bookings from actual customer as well as from those who are tentative and planning. Online Booking deacons are quick deacons and technology make it increasingly easy and simple to book a hotel on the go. There are many travelers who are not sure with their travel dates and so they choose to go with flexible cancellation rules or are ready to pay at hotels. We also advise to go for special policies for group bookings supported by Pay at Hotel.</p>
              </div>
          
            </div>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog9img} alt='blog9img' height={1500} width={1500} className='w-[100%] h-[100%]' />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog9img2} alt='blog9img2' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3: Mobile friendly promotions:</span>  42% of travelers book via mobile and a much higher percentage search on mobile and may be book offline, thus Hoteliers should focus catching more eyeballs via mobile. As the future of travel is shifting towards mobile, it’s become clear the future of the travel industry will see hotel marketing and mobile devices go hand in hand. Putting this in mind, hotels need to start making mobile marketing a priority and keep mobile users front of mind with mobile-only strategies. Mobile-only promotions will encourage more bookings, will speed up conversations.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4: Beat your campest by Dynamic Pricing:</span> all your marketing strategies are in in place, the final holy grail of Hotel Marketing is pricing it right. For this you need to keep a close watch on your comp-set and their price movement. Right pricing will help you in more clicks and improved click to book ratio. Rate dynamics depends on variety of factor like floor price – occupancy ratio – desired ARR and Hotelier brand positioning.</p>
              </div>
            </div>
          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>5: Work on your reviews: </span>Besides content one should make sure that customer ratings on OTAs is among the top category. If customers are liking your product this means that there is more likelihood of getting clicked or ranking up higher in searches. High ranked hotel on customer feedback parameters also means that there are high probability that booking will be converted.</p>
                <p className='mt-4'>There are many more strategies that are being adopted by Hotel Revenue Managers to improve Hotel’s ranking and some are very specific to OTAs. The topic is very exhaustive and strategies are ever evolving. If you are interested or free consultation please write to contact <span className='font-semibold  '>info@krafitechsolution.com</span> and our Hotel Marketing Consultants will explain you in detail.</p>
              </div>
            </div>
           
          </div>


          

          <div className='mt-8'>
            <div className='flex flex-row justify-start items-start gap-2'>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
              {/* <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>Next</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog9
