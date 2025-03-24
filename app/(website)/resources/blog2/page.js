"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Blog2 = () => {


  const router = useRouter()

  const handleNavigation = (action) => {
    if (action === "back") {
      router.push('/resources/blog1')
    }

    if (action === "next") {
      router.push('/resources/blog3')
    }

  }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-32 lg:py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-lg uppercase'>HOW TO MARKET A HOTEL AND TOP TEN TIPS FOR MARKETING YOUR HOTEL</div>
          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[55%]'>
              <div className='bg-[#14acac] rounded-xl p-2 mt-0 mr-14 text-md'>
                <p>How to Market a hotel?</p>
                <p >These questions keep coming now and then for Hoteliers and the world is constantly coming up with new tips, tricks, and tools as well. As a result, how to market a hotel becomes the most sought-after discussion point among the hospitality community. After all, people expect brands to be creative with their promotions. It is a constant race of impressing users.</p>
                <p className='mt-4'>Every brand is trying to sell services on digital and traditional platforms. But the first rule of How to Market a hotel is to attract and give a solution. If this feels like chaos, don’t worry! Sit with the marketing team and follow these tips on how to market a hotel. These tips can turn users into visitors and visitors into loyal customers. In short, how to market a hotel won’t be a question and will turn into ideas.</p>
              </div>
            </div>
            <div className='w-[45%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.blog2img} alt='blog2img' height={1500} width={1500} className='w-[90%] h-[90%] object-scale-down' />
              </div>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>List the hotel on GMB-</p>
              <p className='mt-4'>
                Google my business is the first step of taking a business online. In the past, people used to have directories to search for a shop/business. The technology flipped those directories because search engines are the new era directories. It provides the user with the nearby hotels when they perform a search. And their categories, ratings, reviews, photos, FAQs. It’s free marketing! For support Contact us.</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>Promoting through influencer marketing-</p>
              <p className='mt-4'>
                The crucial strategy to promote the hotels is influencer marketing. Influencers are social media experts. They can post across various social channels and drive the audience to a business page. The hotels invite influencers for brand promotion. Providing coupons and paid partnerships to the influencer for boosting sales</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>



          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>Keep up with the trends-</p>
              <p className='mt-4'>
                Viral trends always break the internet. A marketing team must run campaigns relating to the ongoing trends. It should reflect hotel services/features. A creative and humorous team is what the brand needs for this task. Meme Marketing- Despite the gender, profession, and age, people in today’s date scroll memes. Social channels like LinkedIn, Facebook, and Instagram are platforms to post memes. A content strategist could help in aligning memes with the services of the hotel.</p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>



          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{"Highlight online reviews->"}</p>
              <p className='mt-4'>
                Highlight how your hotel made someone’s vacation best on GMB, website, social media. When people visit a brand’s digital channels, they look for feedback and not only for services. Check out our social media pages for some examples. Give the prospect a virtual tour of the hotel– Giving prospects a virtual tour gives them an experience. For the potential sale boost, this should be on the list of how to market a hotel.
              </p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{"Maintain online reputation management-"}</p>
              <p className='mt-4'>
                Running PR, a user-friendly website, and social platforms speak louder for ORM. Indirectly, every marketing move on a digital platform affects the ORM. Execute the best possible ways to flourish the brand.
              </p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>



          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{"Share Blogs-"}</p>
              <p className='mt-4'>
                Blogs are the best ways to portray hotel stories. Every hotel holds unique stories to tell. Such helpful insights and information assist in lifting brand image.
              </p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>



          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{"Email marketing & SMS marketing–"}</p>
              <p className='mt-4'>
                The powerful ways to generate sales are email and SMS marketing. Throughout the year, events, festivals, occasions take place. The perfect time when brands can shoot their emails. Hire copywriters who can change the mindset of users with a catchy email copy. The user always seeks transparency in every purchase they make. While marketing the services, the goal should be following the best digital ways. It showcases the authenticity and serves the best solutions to users and is an integral part of how to market a hotel. To get further assistance on How to Market a Hotel, Contact us.
              </p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>



          <p className='mt-8 font-semibold text-xl'>Below are five important tips on “How to improve HOTEL ranking?</p>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[45%] h-full justify-items-center'>
              <Image src={IMAGES.blog2img2} alt='blog2img2' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
            <div className='flex flex-col gap-16'>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
                <p className='font-semibold'>• Boost Your Quality Rating:</p>
                <p className='mt-1'>
                  One of the most important things you can do to boost your quality rating is to improve your guest experience constantly. Empower your Team to ask for positive feedback and enhance your service constantly. Negative feedback can also be helpful if improvised upon. Make sure you do what is in your control. TripAdvisor works in bubbles so if a particular hotel has a score of 2.75 and another has a score of 2.76, both are going to be shown as 2 and a half bubbles while they will be leveraged depending on their reviews. So, the bubbles are scaled up and down based on the negative and positive reviews. To improvise your hotel ratings, connect to Online Reputation Management.
                </p>
              </div>
              <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
                <p className='font-semibold'>• Have well trained staff on the Online Process:</p>
                <p className='mt-1'> The staff of the hotel must be trained not only skill wise but behavioral training should also be encouraged. They should have complete knowledge of how the online process works so that their service is in sync with the same. They should be encouraged to ask guests for a review in a subtle way and speak positively about their experiences. There should be a dedicated staff addressing the negative reviews as well so that the guests know you care and see how it improves your hotel rankings.</p>
              </div>
            </div>
          </div>



          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{"• Provide Guest Service:"}</p>
              <p className='mt-1'>
                Excellent guest service is the heart and soul of the business and that should be the primary tip on how to improve Hotel rankings. Guests truly sense when a hotel’s staff is trained well. Overall, the quality-of-service level for experienced or trained staff is significantly better as compared to the under trained ones and it causes more damage to the reputation of the hotel. Trained staff should not only be focusing on the task but give a little extra to please the client and to clients loyal..
              </p>
            </div>
            <div className='w-[50%] h-full justify-items-center'>

            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{"• Manage Negative Reviews:"}</p>
              <p className='mt-1'>
                When it comes to the virtual world, opinions change like lightning and the word can spread simply via a click. Therefore, the significance of addressing negative reviews hands on is a necessity and plays a major role to improve your rankings. Negative reviews are unavoidable in the business but what is important is how they are responded to. You need to respond to the review without being defensive but instead providing reassurance to the guest. The best is to resolve any grievances beforehand.
              </p>
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
      <div className='w-[90%] lg:w-[80%] mx-auto'>
        <div className='font-bold tracking-widest text-lg uppercase text-center md:text-left'>
          HOW TO MARKET A HOTEL AND TOP TEN TIPS FOR MARKETING YOUR HOTEL
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center md:items-start mt-8 gap-8'>
          <div className='md:w-[55%] w-full'>
            <div className='bg-[#14acac] rounded-xl p-4 text-md'>
              <p>How to Market a hotel?</p>
              <p className='mt-2'>
              These questions keep coming now and then for Hoteliers and the world is constantly coming up with new tips, tricks, and tools as well. As a result, how to market a hotel becomes the most sought-after discussion point among the hospitality community. After all, people expect brands to be creative with their promotions. It is a constant race of impressing users.
              </p>
              <p className='mt-4'>
              Every brand is trying to sell services on digital and traditional platforms. But the first rule of How to Market a hotel is to attract and give a solution. If this feels like chaos, don’t worry! Sit with the marketing team and follow these tips on how to market a hotel. These tips can turn users into visitors and visitors into loyal customers. In short, how to market a hotel won’t be a question and will turn into ideas.
              </p>
            </div>
          </div>
          <div className='md:w-[45%] w-full flex justify-center'>
            <Image src={IMAGES.blog2img} alt='blog2img' height={500} width={500} className='w-full object-contain' />
          </div>
        </div>

        {/* Tips Sections */}
        {[
          { title: 'List the hotel on GMB', text: 'Google my business is the first step of taking a business online. In the past, people used to have directories to search for a shop/business. The technology flipped those directories because search engines are the new era directories. It provides the user with the nearby hotels when they perform a search. And their categories, ratings, reviews, photos, FAQs. It’s free marketing! For support Contact us.' },
          { title: 'Promoting through influencer marketing', text: 'The crucial strategy to promote the hotels is influencer marketing. Influencers are social media experts. They can post across various social channels and drive the audience to a business page. The hotels invite influencers for brand promotion. Providing coupons and paid partnerships to the influencer for boosting sales' },
          { title: 'Keep up with the trends', text: 'Viral trends always break the internet. A marketing team must run campaigns relating to the ongoing trends. It should reflect hotel services/features. A creative and humorous team is what the brand needs for this task. Meme Marketing- Despite the gender, profession, and age, people in today’s date scroll memes. Social channels like LinkedIn, Facebook, and Instagram are platforms to post memes. A content strategist could help in aligning memes with the services of the hotel.' },
          { title: 'Highlight online reviews', text: 'Highlight how your hotel made someone’s vacation best on GMB, website, social media. When people visit a brand’s digital channels, they look for feedback and not only for services. Check out our social media pages for some examples. Give the prospect a virtual tour of the hotel– Giving prospects a virtual tour gives them an experience. For the potential sale boost, this should be on the list of how to market a hotel.' },
          { title: 'Maintain online reputation management', text: 'Running PR, a user-friendly website, and social platforms speak louder for ORM. Indirectly, every marketing move on a digital platform affects the ORM. Execute the best possible ways to flourish the brand.' },
          { title: 'Share Blogs', text: 'Blogs are the best ways to portray hotel stories. Every hotel holds unique stories to tell. Such helpful insights and information assist in lifting brand image.' },
          { title: 'Email marketing & SMS marketing', text: 'The powerful ways to generate sales are email and SMS marketing. Throughout the year, events, festivals, occasions take place. The perfect time when brands can shoot their emails. Hire copywriters who can change the mindset of users with a catchy email copy. The user always seeks transparency in every purchase they make. While marketing the services, the goal should be following the best digital ways. It showcases the authenticity and serves the best solutions to users and is an integral part of how to market a hotel. To get further assistance on How to Market a Hotel, Contact us.' }
        ].map((tip, index) => (
          <div key={index} className='flex flex-col md:flex-row justify-start items-start mt-8 gap-4'>
            <div className='rounded-lg bg-[#14acac] text-black p-4 w-full md:w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{tip.title}</p>
              <p className='mt-4'>{tip.text}</p>
            </div>
          </div>
        ))}

        <p className='mt-12 font-semibold text-xl text-center md:text-left'>
          Below are five important tips on “How to improve HOTEL ranking?”
        </p>

        <div className='flex flex-col md:flex-row justify-start items-start mt-8 gap-8'>
          <div className='md:w-[45%] w-full flex justify-center'>
            <Image src={IMAGES.blog2img2} alt='blog2img2' height={500} width={500} className='w-full object-contain' />
          </div>
          <div className='flex flex-col gap-8 w-full md:w-[50%]'>
            {[
              { title: 'Boost Your Quality Rating', text: 'One of the most important things you can do to boost your quality rating is to improve your guest experience constantly. Empower your Team to ask for positive feedback and enhance your service constantly. Negative feedback can also be helpful if improvised upon. Make sure you do what is in your control. TripAdvisor works in bubbles so if a particular hotel has a score of 2.75 and another has a score of 2.76, both are going to be shown as 2 and a half bubbles while they will be leveraged depending on their reviews. So, the bubbles are scaled up and down based on the negative and positive reviews. To improvise your hotel ratings, connect to Online Reputation Management.' },
              { title: 'Have well-trained staff on the Online Process', text: 'The staff of the hotel must be trained not only skill wise but behavioral training should also be encouraged. They should have complete knowledge of how the online process works so that their service is in sync with the same. They should be encouraged to ask guests for a review in a subtle way and speak positively about their experiences. There should be a dedicated staff addressing the negative reviews as well so that the guests know you care and see how it improves your hotel rankings.' }
            ].map((tip, index) => (
              <div key={index} className='rounded-lg bg-[#14acac] text-black p-4 tracking-wider'>
                <p className='font-semibold'>{tip.title}</p>
                <p className='mt-1'>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {[
          { title: 'Provide Guest Service', text: 'Excellent guest service is the heart and soul of the business and that should be the primary tip on how to improve Hotel rankings. Guests truly sense when a hotel’s staff is trained well. Overall, the quality-of-service level for experienced or trained staff is significantly better as compared to the under trained ones and it causes more damage to the reputation of the hotel. Trained staff should not only be focusing on the task but give a little extra to please the client and to clients loyal..' },
          { title: 'Manage Negative Reviews', text: ' When it comes to the virtual world, opinions change like lightning and the word can spread simply via a click. Therefore, the significance of addressing negative reviews hands on is a necessity and plays a major role to improve your rankings. Negative reviews are unavoidable in the business but what is important is how they are responded to. You need to respond to the review without being defensive but instead providing reassurance to the guest. The best is to resolve any grievances beforehand.' }
        ].map((tip, index) => (
          <div key={index} className='flex flex-col md:flex-row justify-start items-start mt-8 gap-4'>
            <div className='rounded-lg bg-[#14acac] text-black p-4 w-full md:w-full lg:w-[35rem] tracking-wider'>
              <p className='font-semibold'>{tip.title}</p>
              <p className='mt-1'>{tip.text}</p>
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className='mt-12 flex justify-center md:justify-start gap-4'>
          <Button className='bg-white tracking-widest uppercase text-black py-4 px-8 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
          <Button className='bg-white tracking-widest uppercase text-black py-4 px-8 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>Next</Button>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Blog2
