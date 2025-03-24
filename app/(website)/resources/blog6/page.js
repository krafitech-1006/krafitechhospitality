"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog6 = () => {


  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/resources/blog5')
    }

    if (action === "next") {
      router.push('/resources/blog7')
    }

  }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-32 lg:py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>TOP 5 HOTEL MARKETING TIPS POST AND COVID</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>Although Covid-19 has shaken up every nook of the world, the hospitality sector is amongst the highest hit sector and below are a few <span className='font-semibold '>{"Hotel Marketing Tips"}</span>  that can be considered by the hoteliers while preparing for a comeback post-pandemic:</p>
              </div>
              <p className='font-semibold'>Top 5 indicators to look when you hire a Hotel Marketing Company:
              </p>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1: Enhance Visibility Online:</span> Most people are spending way more time digitally during the lockdown and Hoteliers should leverage their digital channels including social media and google platforms. Each guest’s journey begins by discovering your hotel on metasearch engines, social channels, or organic search like on Google, Yahoo, and more. Strategic initiatives like website enhancements, visual and blog content, program evaluations and implementation, digital presentations, branding should be done now to ensure you are prepped up when the sector begins working completely. For evaluating factors and bookings.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2: Restructuring your outgoing message:</span> In days where everyone is gripped with the threat of the ongoing virus, the biggest message and hotel marketing tip for the hoteliers is to reassure the people of the safety and hygiene measures practiced in the hotel because for a guest to enjoy their visit in the current situation, they need to feel that their risk is as low as possible. Make sure you update descriptions on third-party platforms and look into ways you can go above and beyond, such as using contactless check-ins and payments. Its 2021, folks: read the room. You have to show guests that you’ve gone above and beyond your typical “high standards” to exceed their expectations.</p>
              </div>

            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog6img} alt='blog6img' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>
          <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog6img2} alt='blog6img2' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[50%]'>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3: Emphasize the word Leisure:</span> With the ongoing Work From home pattern and travel restrictions, the impact for the hotels has been on business customers. If this has been a key focus to the hotel, it needs to be diverted. Although leisure travel has been impacted too, it has not been hit to the same level and there are still ways to appeal to leisure travelers, especially if you focus your hotel marketing strategies on families, couples and groups of friends. You will also need to make sure you use distribution and communication channels that allow you to reach these guests.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4: Go Local as opposed to International:</span>4: Go Local as opposed to International:Focusing on the local market may mean highlighting facilities like your restaurant, gym or meeting rooms and it could also involve promoting one of your hotel rooms as a temporary office, which can be ideal for those working remotely. Also selling the location as a whole with the hotel is one of the most effective Hotel Marketing Tips to be implemented. Local experiences like partnering with popular local cuisines, tasting sessions can be integrated while marketing the venue. Personalized experiences strike a deeper chord with the customer also leading to better retention. TO KNOW MORE CONTACT US.</p>
              </div>

            </div>
            
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>5: Analyse your data:</span> One of the best hotel marketing strategies involves capitalizing on the availability of website data, turning to tools like Google Analytics, and using this information to understand which demographics are most interested in travelling to your hotel, or most willing to do so. In doing so, your main target demographic may need to change. Once you have the data sorted, you can implement these hotel marketing tips further.</p>

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
          <div className='font-bold tracking-widest text-lg uppercase'>TOP 5 HOTEL MARKETING TIPS POST AND COVID</div>
          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='flex flex-col gap-8 w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'>Although Covid-19 has shaken up every nook of the world, the hospitality sector is amongst the highest hit sector and below are a few <span className='font-semibold '>{"Hotel Marketing Tips"}</span>  that can be considered by the hoteliers while preparing for a comeback post-pandemic:</p>
              </div>
              <p className='font-semibold'>Top 5 indicators to look when you hire a Hotel Marketing Company:
              </p>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>1: Enhance Visibility Online:</span> Most people are spending way more time digitally during the lockdown and Hoteliers should leverage their digital channels including social media and google platforms. Each guest’s journey begins by discovering your hotel on metasearch engines, social channels, or organic search like on Google, Yahoo, and more. Strategic initiatives like website enhancements, visual and blog content, program evaluations and implementation, digital presentations, branding should be done now to ensure you are prepped up when the sector begins working completely. For evaluating factors and bookings.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>2: Restructuring your outgoing message:</span> In days where everyone is gripped with the threat of the ongoing virus, the biggest message and hotel marketing tip for the hoteliers is to reassure the people of the safety and hygiene measures practiced in the hotel because for a guest to enjoy their visit in the current situation, they need to feel that their risk is as low as possible. Make sure you update descriptions on third-party platforms and look into ways you can go above and beyond, such as using contactless check-ins and payments. Its 2021, folks: read the room. You have to show guests that you’ve gone above and beyond your typical “high standards” to exceed their expectations.</p>
              </div>

            </div>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog6img} alt='blog6img' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>
          <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog6img2} alt='blog6img2' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
            <div className='flex flex-col gap-8 w-[100%]'>

              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>3: Emphasize the word Leisure:</span> With the ongoing Work From home pattern and travel restrictions, the impact for the hotels has been on business customers. If this has been a key focus to the hotel, it needs to be diverted. Although leisure travel has been impacted too, it has not been hit to the same level and there are still ways to appeal to leisure travelers, especially if you focus your hotel marketing strategies on families, couples and groups of friends. You will also need to make sure you use distribution and communication channels that allow you to reach these guests.</p>
              </div>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold'>4: Go Local as opposed to International:</span>4: Go Local as opposed to International:Focusing on the local market may mean highlighting facilities like your restaurant, gym or meeting rooms and it could also involve promoting one of your hotel rooms as a temporary office, which can be ideal for those working remotely. Also selling the location as a whole with the hotel is one of the most effective Hotel Marketing Tips to be implemented. Local experiences like partnering with popular local cuisines, tasting sessions can be integrated while marketing the venue. Personalized experiences strike a deeper chord with the customer also leading to better retention. TO KNOW MORE CONTACT US.</p>
              </div>

            </div>
            
          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-0'><span className='font-semibold  '>5: Analyse your data:</span> One of the best hotel marketing strategies involves capitalizing on the availability of website data, turning to tools like Google Analytics, and using this information to understand which demographics are most interested in travelling to your hotel, or most willing to do so. In doing so, your main target demographic may need to change. Once you have the data sorted, you can implement these hotel marketing tips further.</p>

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

export default Blog6
