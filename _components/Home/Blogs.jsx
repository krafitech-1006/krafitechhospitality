'use client'
import React from 'react'
import IMAGES from '@/public'
import Image from 'next/image'
import { ChevronRight, MoveUpRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from 'swiper/modules';
import "@/styles/swiper.css"
import { useRouter } from 'next/navigation'

const Blogs = () => {

    const cardData = [
        {
            id: '66c4779d11f67143ae90ebb8',
            image: IMAGES.card01,
            title: "CLOUD BASE SYSTEM",
            desc: "Access your data and applications from anywhere with an internet connection. Benefit from scalable infrastructure that can grow with your business needs. Ensure data security and backup with automatic cloud backups and encryption.",
        },
        {
            id: '66c4798a11f67143ae90ecc3',
            image: IMAGES.card02,
            title: "REVENUE MANAGEMENT",
            desc: "Optimize pricing strategies for maximum profitability. Utilize data analysis to forecast demand and optimize inventory. Implement dynamic pricing strategies to maximize revenue.",
        },
        {
            id: '66c4798a11f67143ae90ecc4',
            image: IMAGES.card03,
            title: "WEBSITE BUILDING",
            desc: "Create visually stunning and responsive websites tailored to your business needs. Leverage the latest web technologies and frameworks for cutting-edge functionality. Optimize website performance, security, and search engine visibility for maximum impact.",
        },
        {
            id: '66c4798a11f67143ae90safdsd4',
            image: IMAGES.card04,
            title: "24*7 TECHNICAL SUPPORT",
            desc: "Get round-the-clock assistance from our dedicated technical support team. Resolve software issues promptly and minimize downtime for your business. Benefit from expert guidance and solutions tailored to your specific needs.",
        },
        {
            id: '66c4798a11f67143ae90safdsd5',
            image: IMAGES.card05,
            title: "POSITITVE REVIEWS & MAXIMUM RATINGS",
            desc: "Our company has received numerous positive reviews from satisfied customers, praising our exceptional products/services, reliable delivery, and outstanding customer support. We have achieved the highest possible rating in customer satisfaction, reflecting our commitment to delivering top-quality products/services and exceeding customer expectations.",
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.card06,
            title: "SEO",
            desc: "Our company specializes in providing top-notch SEO services, leveraging industry-leading strategies and techniques to enhance online visibility and drive organic traffic.",
        },
    ];

    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center mt-28">
            <div className='flex flex-col justify-start items-start w-[85%] lg:w-[80%] gap-4'>
                <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[20%]">
                    <span className="text-black ml-1">•</span>
                    <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                    <span className='text-sm tracking-widest text-gray-600'>OUR SERVICES</span>
                </div>
                <div className='font-extrabold tracking-wide text-4xl'>
                    HOW CAN WE HELP YOU?
                </div>
            </div>



            <style jsx>
{`
  .card-container {
    perspective: 1000px;
  }
  .card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .card-container:hover .card-inner {
    transform: rotateY(180deg);
  }
  .card-front, .card-back {
    backface-visibility: hidden;
  }
  .card-back {
    transform: rotateY(180deg);
  }
`}
</style>

<div className="gap-16 p-4 w-[90%] lg:w-[70%] first-line:lg:justify-center lg:items-center grid lg:grid-cols-3 mt-8">
  {cardData?.map((item, index) => (
    <div key={index} className="card-container w-full lg:w-[75%] h-[18rem]">
      <div className="card-inner relative w-full h-[18rem]">
        
        {/* Front Side */}
        <div className="card-front absolute w-full h-[18rem] border border-black rounded-2xl flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-blue-100 shadow-xl">
          <Image
            src={item.image}
            alt={`Image ${index + 1}`}
            width={600}
            height={600}
            quality={100}
            className="w-28 h-28 object-contain"
          />
          <div className='font-bold tracking-wide mt-4 text-wrap p-2 text-center text-lg'>
            {item.title}
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back absolute w-full h-[18rem] border border-black rounded-2xl flex flex-col justify-center items-center bg-gray-800 text-white p-4 bg-gradient-to-br from-green-200 to-blue-300 shadow-xl">
          {/* <h3 className="text-lg font-semibold">{item.desc}</h3> */}
          <p className={item.id === '66c4798a11f67143ae90safdsd5' ? `text-xs text-center text-black text-wrap` : `text-sm text-center text-black text-wrap`}>{item.desc}</p>
        </div>

      </div>
    </div>
  ))}
</div>



            {/* <div className="lg:hidden w-[95%] p-4">
                <Swiper
                    spaceBetween={20}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                >
                    {cardData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative'>
                                <Image
                                    src={item.image}
                                    alt={`Image ${index + 1}`}
                                    width={600}
                                    height={600}
                                    quality={100}
                                    className='object-cover h-96 w-full rounded-2xl z-0'
                                />
                                <div className='absolute bottom-0 left-0 right-0 h-[33%] flex flex-col justify-between text-gray-500 rounded-b-2xl'>
                                    <div className='bg-gray-100 p-3 h-full flex flex-col justify-between rounded-b-2xl'>
                                        <div className='text-[12px] text-gray-500 mt-1'>{item.date}</div>
                                        <div className='flex-1 flex items-center justify-between'>
                                            <div className='text-xl font-semibold text-start'>{item.desc}</div>
                                            <div className='text-[12px] mt-2 flex justify-center items-center gap-1 font-semibold text-gray-600 cursor-pointer' onClick={() => handleKnowMore(item.id)}>know more <ChevronRight size={13} className='mt-1' /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='flex justify-left items-left text-left text-md mt-14'>
                    <button className='flex gap-2 justify-left items-left px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold'>
                        Explore More <span><MoveUpRight className='size-4' /></span>
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default Blogs
