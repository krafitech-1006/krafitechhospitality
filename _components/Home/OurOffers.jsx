// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image'
// import IMAGES from '@/public/index'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const OurOffers = () => {

//     const [isBeginning, setIsBeginning] = useState(true);
//     const [isEnd, setIsEnd] = useState(false);

//     const cardData = [
//         {
//           image: IMAGES.image1,
//           desc: (
//             <>
//               <div className="flex flex-col gap-1 mb-4 lg:mb-8">
//                 <div className="text-sm md:text-md font-semibold text-[#800000]">
//                   WE HELP
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Hoteliers to Boost
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Profitability
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1 mb-4 lg:mb-8">
//                 <div className="text-sm md:text-md font-semibold text-[#800000]">
//                   THROUGH
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Data-driven Revenue
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Management
//                 </div>
//               </div>
//             </>
//           ),
//         },
//         {
//           image: IMAGES.image2,
//           desc: (
//             <>
//               <div className="flex flex-col gap-1 mb-4 lg:mb-8">
//                 <div className="text-sm md:text-md font-semibold text-[#800000]">
//                   WE HELP
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Hoteliers to
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Maximize Bookings
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1 mb-4 lg:mb-8">
//                 <div className="text-sm md:text-md font-semibold text-[#800000]">
//                   THROUGH
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Stunning websites
//                 </div>
//               </div>
//             </>
//           ),
//         },
//         {
//           image: IMAGES.image3,
//           desc: (
//             <>
//               <div className="flex flex-col gap-1 mb-4 lg:mb-8">
//                 <div className="text-sm md:text-md font-semibold text-[#800000]">
//                   WE HELP
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Hoteliers to
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Drive Revenue
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1 mb-4 lg:mb-8">
//                 <div className="text-sm md:text-md font-semibold text-[#800000]">
//                   THROUGH
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Targeted Digital
//                 </div>
//                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
//                   Marketing Campaigns
//                 </div>
//               </div>
//             </>
//           ),
//         },
//     ];

//     return (
//         <div className="w-full flex justify-center items-center">
//             <div className="flex gap-4 lg:gap-8 p-4 w-[95%] lg:w-[80%] lg:justify-center lg:items-center">
//                 <Swiper
//                     spaceBetween={20}
//                     navigation={{
//                         nextEl: ".swiper-next",
//                         prevEl: ".swiper-prev",
//                     }}
//                     autoplay={{
//                         delay: 4000,
//                         disableOnInteraction: false,
//                     }}
//                     modules={[Navigation, Autoplay]}
//                     onSlideChange={(swiper) => {
//                         setIsBeginning(swiper.isBeginning);
//                         setIsEnd(swiper.isEnd);
//                     }}
//                 >
//                     {cardData?.map((item, index) => (
//                         <SwiperSlide key={index}>
//                             <div className='flex flex-col lg:flex-row gap-6 w-full justify-center items-center'>
//                                 <div className='w-full lg:w-[50%]'>
//                                     <Image
//                                         src={item.image}
//                                         alt={`Image ${index + 1}`}
//                                         width={600}
//                                         height={600}
//                                         quality={100}
//                                         className='object-scale-down h-full w-full'
//                                     />
//                                 </div>
//                                 <div className='w-full lg:w-[50%] text-left lg:text-left'>
//                                     {item.desc}

//                                     <div className="flex gap-4 justify-left lg:justify-start mt-8">
//                                         <button
//                                             className={`swiper-prev p-2 rounded-full bg-gray-200 text-gray-500 ${isBeginning ? "opacity-50" : ""
//                                                 }`}
//                                             disabled={isBeginning}
//                                         >
//                                             <ChevronLeft className="w-6 h-6" />
//                                         </button>
//                                         <button
//                                             className={`swiper-next p-2 rounded-full bg-gray-200 text-gray-500 ${isEnd ? "opacity-50" : ""
//                                                 }`}
//                                             disabled={isEnd}
//                                         >
//                                             <ChevronRight className="w-6 h-6" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default OurOffers;














// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import IMAGES from "@/public";
// import Image from "next/image";
// import { Button } from "@nextui-org/react";
// import { ChevronRight } from "lucide-react"

// const WhoWeAre = () => {

//   return (
//     <div className="relative flex w-full h-[50rem] max-h-[100%] overflow-hidden">
//       <div className="w-full h-full">
//         <Image
//           height="1500"
//           width="1500"
//           alt="image"
//           src={IMAGES.restro}
//           className="object-cover"
//         />
//       </div>

//       {/* Content */}

//       <div className="absolute inset-0 bg-black/40 z-10 text-center p-6 max-w-xl h-full justify-self-end mr-20">
//         <div className="flex flex-col justify-center items-start w-[80%] h-full ml-16">
//           <h2 className="text-4xl font-bold mb-4 text-white tracking-wide opacity-90">WHO WE ARE?</h2>
//           <p className="text-white text-start mt-8 text-sm font-semibold tracking-wide opacity-70">
//             Our passion for hospitality has been the driving force behind our commitment to creating innovative software that enhances the guest experience and streamlines operations for hotels, resorts, restaurants, and other hospitality establishments.
//           </p>
//           <p className="text-white text-start mt-4 text-sm font-semibold tracking-wide opacity-70">
//             By partnering with Krafitech Hospitality, you can expect a customer-centric approach, where we work closely with you to understand your unique requirements and challenges. We believe in fostering strong, long-term relationships with our clients, providing ongoing support and maintenance to ensure the smooth functioning of our software solutions.
//           </p>
//           <p className="text-white text-start mt-4 text-sm font-semibold tracking-wide opacity-70">
//             So, if you&apos;re looking for a passionate and experienced technology partner to help you revolutionize your hospitality business, look no further than Krafitech Hospitality. Together, let&apos;s unlock the full potential of your enterprise and create unforgettable experiences for your guests.
//           </p>
//           <div>
//             <Button className='border-white border-medium bg-transparent rounded-full border-opacity-50 p-7 mt-8'>
//               <div className='rounded-full bg-white p-2'>
//                 <ChevronRight className="size-4" />
//               </div>
//               <p className='tracking-widest text-white uppercase font-semibold ml-4'>Learn More</p>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoWeAre;













"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import IMAGES from "@/public";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";

const WhoWeAre = () => {

  return (

    <>
    
    <div className="hidden lg:flex relative w-full h-[50rem] max-h-[100%] overflow-hidden">
      <div className="w-full h-full">
        <Image
          height="1500"
          width="1500"
          alt="image"
          src={IMAGES.restro}
          className="object-cover" />
      </div>

      {/* Content */}

      <div className="absolute inset-0 bg-black/40 z-10 text-center p-6 max-w-xl h-full justify-self-end mr-20">
        <div className="flex flex-col justify-center items-start w-[80%] h-full ml-16">
          <h2 className="text-4xl font-bold mb-4 text-white tracking-wide opacity-90">WHO WE ARE?</h2>
          <p className="text-white text-start mt-8 text-sm font-semibold tracking-wide opacity-70">
            Our passion for hospitality has been the driving force behind our commitment to creating innovative software that enhances the guest experience and streamlines operations for hotels, resorts, restaurants, and other hospitality establishments.
          </p>
          <p className="text-white text-start mt-4 text-sm font-semibold tracking-wide opacity-70">
            By partnering with Krafitech Hospitality, you can expect a customer-centric approach, where we work closely with you to understand your unique requirements and challenges. We believe in fostering strong, long-term relationships with our clients, providing ongoing support and maintenance to ensure the smooth functioning of our software solutions.
          </p>
          <p className="text-white text-start mt-4 text-sm font-semibold tracking-wide opacity-70">
            So, if you&apos;re looking for a passionate and experienced technology partner to help you revolutionize your hospitality business, look no further than Krafitech Hospitality. Together, let&apos;s unlock the full potential of your enterprise and create unforgettable experiences for your guests.
          </p>
          <div>
            <Button className='border-white border-medium bg-transparent rounded-full border-opacity-50 p-7 mt-8'>
              <div className='rounded-full bg-white p-2'>
                <ChevronRight className="size-4" />
              </div>
              <p className='tracking-widest text-white uppercase font-semibold ml-4'>Learn More</p>
            </Button>
          </div>
        </div>
      </div>
    </div>



      <div className="lg:hidden relative flex flex-col w-full h-auto max-lg:flex-col">
        {/* Image Section (Above on Mobile & Tabs) */}
        <div className="w-full h-[15rem] max-lg:h-[15rem]">
          <Image
            height="1500"
            width="1500"
            alt="image"
            src={IMAGES.restro}
            className="object-cover w-full h-full" />
        </div>

        {/* Content Section (Below on Mobile & Tabs) */}
        <div className="relative bg-black z-10 text-center py-6 w-full flex justify-center">
          <div className="flex flex-col justify-center items-start w-[80%] ml-16 max-lg:ml-8 max-md:w-full max-md:px-6 max-md:ml-0 max-md:text-center max-md:items-center">
            <h2 className="text-4xl font-bold mb-4 text-white tracking-wide opacity-90 max-md:text-2xl">
              WHO WE ARE?
            </h2>

            {/* Text Content with Scrolling */}
            <div className="max-h-[60vh] overflow-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-700 px-2 opacity-90">
              <p className="text-white text-start mt-4 text-lg font-semibold tracking-wide opacity-70 max-md:text-xs max-md:text-center">
                Our passion for hospitality has been the driving force behind our commitment to creating innovative software that enhances the guest experience and streamlines operations for hotels, resorts, restaurants, and other hospitality establishments.
              </p>
              <p className="text-white text-start mt-4 text-lg font-semibold tracking-wide opacity-70 max-md:text-xs max-md:text-center">
                By partnering with Krafitech Hospitality, you can expect a customer-centric approach, where we work closely with you to understand your unique requirements and challenges. We believe in fostering strong, long-term relationships with our clients, providing ongoing support and maintenance to ensure the smooth functioning of our software solutions.
              </p>
              <p className="text-white text-start mt-4 text-lg font-semibold tracking-wide opacity-70 max-md:text-xs max-md:text-center">
                So, if you&apos;re looking for a passionate and experienced technology partner to help you revolutionize your hospitality business, look no further than Krafitech Hospitality. Together, let&apos;s unlock the full potential of your enterprise and create unforgettable experiences for your guests.
              </p>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Button className="border-white border-medium bg-transparent rounded-full border-opacity-50 p-7 max-md:p-5">
                <div className="rounded-full bg-white p-2">
                  <ChevronRight className="size-4 max-md:size-3" />
                </div>
                <p className="tracking-widest text-white uppercase font-semibold ml-4 max-md:text-sm">
                  Learn More
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default WhoWeAre;
