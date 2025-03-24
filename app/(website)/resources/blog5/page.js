"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog5 = () => {


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
          <div className='font-bold tracking-widest text-lg uppercase'>HOW WILL TOURISM CHANGE AFTER COVID19</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold '>Social Media Marketing</span> Everyone has the same question in mind and the answer is not straight but yes there are some trends that will be visible. COVID-19 crisis upended our daily lives at dizzying speed. It was an entirely new experience for all generations together. Travel screeched to a halt. Schools, stores, restaurants, gymnasiums, and entertainment venues shut. Sports leagues suspended their seasons. Travel paused and hotels emptied with Hotel Marketing Agencies scurrying to find ways to fill hotel rooms. And billions of people found themselves under lockdown, working from home— or suddenly out of work. With the situation improvising and the Tourism Industry making a comeback, the staked are hopeful but will the industry ever be the same. The coronavirus pandemic has altered individual lives. As such, the service sector, especially travel-related industries, restaurants, airlines, hotels, and tourist attractions, is seriously hurt. More than that, the pandemic has changed our social and work life in more complicated ways, especially the way we communicate in light of the development of information technology and communication.</p>
              </div>


            </div>
            <div className='w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog5img} alt='blog5img' height={1500} width={1500} className='w-[90%] h-[90%] object-scale-down' />
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>

                <p className='font-semibold'>Let’s look into How will tourism change after COVID-19, these Top 10 Trends will be more visible:</p>
                <p className='mt-4'><span className='font-semibold  '>1. Smaller & Boutique Hotels: </span>Current statistics show that Occupancy rates show that occupancy was less than 15 % for luxury hotels and around 40 % for the economy. The extended periods of lockdowns where most of us were imprisoned in our concrete towers have allowed travelers to truly appreciate freedom – freedom to decide where they want to go, with whom, and when. In such a paradigm, the focus appears to be spending time away from crowds. Experts say the reason behind this popularity is that people are now giving preference to smaller boutique properties, over big chain of hotels, to avoid huge crowds.</p>

              </div>
            </div>
            <div className='w-[50%] h-full justify-items-start'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>2. Family Owned:</span>Consumers are doubling down on sustainability. The prediction is travelers will take on the role of “concerned citizens” demanding responsible travel. The industry will respond with active measures to prioritize a healthy world over profit margins. People have realized that supporting local and family-owned properties is now important more than ever. Also, since the pandemic has put people under so much isolation, the importance of reaching out to people and exploring ground lifestyles is driven. The other reason being, some are also opting to stay in private homes where they can prepare their own food and won’t come into contact with strangers from outside their quarantine bubble.</p>

              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2  w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>3.Short Distance Travel: </span>The prediction is before people start hopping on long flights or jetting around the world, they will first start venturing out closer to home. The COVID-19 PANDEMIC has forced the world to cancel vacations, reunions, pleasure and business trips this year. The beleaguered travel and the hospitality industries have been hit with huge waves of cancellations incurring humongous losses. Now, as countries cautiously reopen after many months of lockdown and with the unpredictable status of the second wave of the pandemic in some countries, people are looking for safe ways to return to some semblance of normal life. With the pandemic triggering layoffs and pay cuts and long working hours especially for millions who are working from home, a short break may now be more important than ever.</p>

              </div>
            </div>
            <div className='w-[50%] h-full justify-items-start'>

            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>4.Self-Driving Destinations: </span>Before the pandemic, people typically decided whether to fly or drive to a destination based on factors like price and travel time. Now, a year into the pandemic, the debate over flying vs. driving has more to do with safety than plane ticket prices. People are more likely to think that when in car by themselves or with the family who are probably in residence anyway, there are minimal interactions with outside people with respect to the staff, food, etc. Also, when it comes to airlines there are tons of restrictions involved keeping the safety of the travelers in mind including and a lot more preparation is required which may make some people paranoid about the same.</p>

              </div>
            </div>
            <div className=' w-[50%] h-full justify-items-start'>

            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[50%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>5.Unexplored Destinations: </span>The trend of travelling slowly to lesser-known areas, “rather than racing through destinations” is happening and will continue moving forward. Most travelers are taking into account a destination’s culture of social responsibility towards preventing the spread of the virus before deciding whether to go, and are looking for the opportunity to avoid crowded places when travelling. Nature destinations, such as national parks and beaches, have disproportionately benefited from returning demand. Campgrounds and farmhouses have also grown in popularity, and user searches for properties with outdoor activities are also on the rise.</p>

              </div>
            </div>
            <div className='w-[50%] h-full justify-items-start'>

            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>
          <div className='w-full h-full justify-items-start'>
              <Image src={IMAGES.blog5img2} alt='blog5img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>

            <div className='flex flex-col gap-8'>
              
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[36rem] tracking-wider'>
                <p className='mt-0'>
                <span className='font-semibold'>6.Sustainable Travel:</span>If there is a silver lining from the pandemic, it has been a reboot of sorts for the world making sustainable travel a necessity. The past year has taught people the need to slow down, take stock of their actions on themselves and the world around them. People are now exploring tours that are designed to keep the environment in mind. This is where nature-centric breaks seem to come out on top. Eco resorts are rapidly gaining in popularity as people look to unwind after the coronavirus induced lockdown forced them to stay at homes for long.
                </p>
              </div>

              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[36rem] tracking-wider'>
                <p className='mt-0'>
                <span className='font-semibold'>7.Social Media Impact on picking up destinations:</span> social media has a big impact on How will tourism change after COVID-19. We are online more than ever, working from home, attending school from home, catching up with friends via video calls. Therefore, the average usage of social media has uplifted from what it was before the pandemic. Social media is affecting the travel and tourism industry in a very positive manner. Exquisite destinations are now made famous by friends and family via social media accounts like Facebook, Instagram and Twitter, giving tourism agencies more clients owing to the free advertisement of these unexplored destinations.
                </p>
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


      <div className='relative lg:hidden w-full bg-neutral-200 py-32 lg:py-56'>
      <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>HOW WILL TOURISM CHANGE AFTER COVID19</div>
          <div className='flex flex-col justify-start items-start mt-8'>
            <div className='w-[100%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 text-md '>
                <p className='mt-0'><span className='font-semibold '>Social Media Marketing</span> Everyone has the same question in mind and the answer is not straight but yes there are some trends that will be visible. COVID-19 crisis upended our daily lives at dizzying speed. It was an entirely new experience for all generations together. Travel screeched to a halt. Schools, stores, restaurants, gymnasiums, and entertainment venues shut. Sports leagues suspended their seasons. Travel paused and hotels emptied with Hotel Marketing Agencies scurrying to find ways to fill hotel rooms. And billions of people found themselves under lockdown, working from home— or suddenly out of work. With the situation improvising and the Tourism Industry making a comeback, the staked are hopeful but will the industry ever be the same. The coronavirus pandemic has altered individual lives. As such, the service sector, especially travel-related industries, restaurants, airlines, hotels, and tourist attractions, is seriously hurt. More than that, the pandemic has changed our social and work life in more complicated ways, especially the way we communicate in light of the development of information technology and communication.</p>
              </div>


            </div>
            <div className='w-[100%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog5img} alt='blog5img' height={1500} width={1500} className='w-[100%] h-[100%] object-scale-down' />
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>

                <p className='font-semibold'>Let’s look into How will tourism change after COVID-19, these Top 10 Trends will be more visible:</p>
                <p className='mt-4'><span className='font-semibold  '>1. Smaller & Boutique Hotels: </span>Current statistics show that Occupancy rates show that occupancy was less than 15 % for luxury hotels and around 40 % for the economy. The extended periods of lockdowns where most of us were imprisoned in our concrete towers have allowed travelers to truly appreciate freedom – freedom to decide where they want to go, with whom, and when. In such a paradigm, the focus appears to be spending time away from crowds. Experts say the reason behind this popularity is that people are now giving preference to smaller boutique properties, over big chain of hotels, to avoid huge crowds.</p>

              </div>
            </div>
           
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>2. Family Owned:</span>Consumers are doubling down on sustainability. The prediction is travelers will take on the role of “concerned citizens” demanding responsible travel. The industry will respond with active measures to prioritize a healthy world over profit margins. People have realized that supporting local and family-owned properties is now important more than ever. Also, since the pandemic has put people under so much isolation, the importance of reaching out to people and exploring ground lifestyles is driven. The other reason being, some are also opting to stay in private homes where they can prepare their own food and won’t come into contact with strangers from outside their quarantine bubble.</p>

              </div>
            </div>
            
          </div>


          <div className='flex flex-col justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2  w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>3.Short Distance Travel: </span>The prediction is before people start hopping on long flights or jetting around the world, they will first start venturing out closer to home. The COVID-19 PANDEMIC has forced the world to cancel vacations, reunions, pleasure and business trips this year. The beleaguered travel and the hospitality industries have been hit with huge waves of cancellations incurring humongous losses. Now, as countries cautiously reopen after many months of lockdown and with the unpredictable status of the second wave of the pandemic in some countries, people are looking for safe ways to return to some semblance of normal life. With the pandemic triggering layoffs and pay cuts and long working hours especially for millions who are working from home, a short break may now be more important than ever.</p>

              </div>
            </div>
            
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>4.Self-Driving Destinations: </span>Before the pandemic, people typically decided whether to fly or drive to a destination based on factors like price and travel time. Now, a year into the pandemic, the debate over flying vs. driving has more to do with safety than plane ticket prices. People are more likely to think that when in car by themselves or with the family who are probably in residence anyway, there are minimal interactions with outside people with respect to the staff, food, etc. Also, when it comes to airlines there are tons of restrictions involved keeping the safety of the travelers in mind including and a lot more preparation is required which may make some people paranoid about the same.</p>

              </div>
            </div>
           
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>

            <div className='flex flex-col w-[100%]'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full tracking-wider'>


                <p className='mt-4'><span className='font-semibold  '>5.Unexplored Destinations: </span>The trend of travelling slowly to lesser-known areas, “rather than racing through destinations” is happening and will continue moving forward. Most travelers are taking into account a destination’s culture of social responsibility towards preventing the spread of the virus before deciding whether to go, and are looking for the opportunity to avoid crowded places when travelling. Nature destinations, such as national parks and beaches, have disproportionately benefited from returning demand. Campgrounds and farmhouses have also grown in popularity, and user searches for properties with outdoor activities are also on the rise.</p>

              </div>
            </div>
            
          </div>

          <div className='flex flex-col justify-start items-start mt-8'>
          <div className='w-full h-full justify-items-start'>
              <Image src={IMAGES.blog5img2} alt='blog5img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>

            <div className='flex flex-col gap-8'>
              
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[36rem] tracking-wider'>
                <p className='mt-0'>
                <span className='font-semibold'>6.Sustainable Travel:</span>If there is a silver lining from the pandemic, it has been a reboot of sorts for the world making sustainable travel a necessity. The past year has taught people the need to slow down, take stock of their actions on themselves and the world around them. People are now exploring tours that are designed to keep the environment in mind. This is where nature-centric breaks seem to come out on top. Eco resorts are rapidly gaining in popularity as people look to unwind after the coronavirus induced lockdown forced them to stay at homes for long.
                </p>
              </div>

              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[36rem] tracking-wider'>
                <p className='mt-0'>
                <span className='font-semibold'>7.Social Media Impact on picking up destinations:</span> social media has a big impact on How will tourism change after COVID-19. We are online more than ever, working from home, attending school from home, catching up with friends via video calls. Therefore, the average usage of social media has uplifted from what it was before the pandemic. Social media is affecting the travel and tourism industry in a very positive manner. Exquisite destinations are now made famous by friends and family via social media accounts like Facebook, Instagram and Twitter, giving tourism agencies more clients owing to the free advertisement of these unexplored destinations.
                </p>
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

export default Blog5
