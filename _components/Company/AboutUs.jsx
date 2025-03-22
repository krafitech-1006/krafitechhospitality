import React from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import InstagramReels from '../Home/InstagramFeed';

const AboutUs = () => {
    return (
        <div className='w-full py-32'>
            <div className='w-[90%] lg:w-[80%] m-auto '>
                <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[20%]">
                    <span className="text-black ml-1">•</span>
                    <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                    <span className='text-xs tracking-widest text-gray-600 uppercase'>Krafitech Hospitality</span>
                </div>
                <div className='text-4xl font-bold tracking-wide uppercase'>About us</div>
                <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[3%] mt-12">
                    <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                </div>
                <div className='text-2xl mt-4 font-bold tracking-wider'>Who we are?</div>
                <div className='flex flex-col lg:flex-row gap-0'>
                    <div className='flex flex-col gap-4 p-2 bg-[#c14ac178] rounded-xl mt-8 w-full lg:w-[40%] shadow-md'>
                        <p className='font-bold'>We have a deep-rooted connection to the hotel industry, fueled by our passion, and have transformed it into a profession</p>
                        <p>The hospitality industry has undergone significant changes in recent years, driven by technology and a data-driven approach. At Krafitech Hospitality, we understand the importance of staying ahead of the latest trends to ensure your business maintains a competitive edge.
                            We connect our clients with guests in a reputable manner, providing precise and straightforward information about the property and its surroundings. Our aim is to assist hotels in achieving valuable returns on their investments by enhancing their online rankings, visibility, and ratings on various online portals.</p>
                        <p>Krafitech Hospitality plays a significant role in establishing your hotel as a brand.</p>
                        <p>To achieve greatness, it takes enormous strategies. At Krafitech, we closely monitor monthly growth, share comprehensive growth reports with our customers, compare revenue figures, and track financial improvements year after year. Our greatest strength lies in our ability to generate revenue for hotels of all star categories. Krafitech is dedicated to supporting those who tirelessly work towards making notable changes in the hospitality industry. We assist in establishing your business by aligning with your vision and finding suitable ways to manage it.</p>
                        <p>We cater to various types of hotels by ensuring they maintain a strong and valuable online presence. Over the years, customer buying behaviors have evolved, with a majority of bookings now being made online. This trend has become even more prevalent in a post-pandemic world. Our dedicated team is committed to serving you with innovative ideas and strategic planning.</p>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <Image src={IMAGES.webdevelopmentNew} alt='webdevelopmentNew' height={1500} width={1500} className='w-full h-full lg:h-[70%] lg:w-[80%] object-contain lg:ml-8' />
                    </div>
                </div>




                <div className=''>
                    <div className='flex justify-center items-center w-full'>
                        <div className="flex justify-center items-center text-black font-semibold text-lg w-[85%] lg:w-[3%] mt-12">
                            <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                        </div>


                    </div>

                    <div className='flex justify-center items-center w-full mt-4'>
                        <div className='font-bold text-2xl tracking-wider'>
                            Why Us
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-start items-start pb-16'>
                        <div className='w-full lg:w-[40%]'>
                            <Image src={IMAGES.webdevelopment2} alt='webdevelopment2' height={1500} width={1500} className='h-[100%] w-[100%] object-contain' />
                        </div>
                        <div className='w-full lg:w-[40%] lg:mt-16 lg:ml-8'>
                            <div className='bg-[#c14ac178] shadow-lg rounded-lg p-2'>
                                Krafitech Hospitality is your comprehensive solution for all hospitality needs. Hiring staff solely for online sales can be challenging and costly, as it entails constant monitoring of market trends, competitors, analysis, and strategizing. With our extensive experience in managing and providing solutions for hotels, we take care of all your hospitality requirements, including revenue management, digital marketing, photography, content management, web design, maintenance, and beautification. Additionally, we offer training to hotel staff, ensuring their proficiency in delivering exceptional customer service.
                            </div>
                        </div>
                    </div>

                </div>



                


            </div>

            <InstagramReels />
        </div>
    )
}

export default AboutUs