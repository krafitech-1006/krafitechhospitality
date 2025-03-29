// "use client"
// import React, { useState } from 'react'
// import Image from 'next/image'
// import IMAGES from "@/public/index";
// import AboutUs from '@/_components/Company/AboutUs';

// const AboutUss = () => {

//   return (
//     <div className='relative w-full bg-neutral-100'>

//       <div className='w-full bg-neutral-200 pt-56 '>
//         <div className='w-[90%] lg:w-[80%] m-auto '>

//           <div className='w-full font-bold tracking-wide text-xl lg:text-6xl uppercase'>Krafitech Hospitality</div>

//           <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
//             <div className='rounded-lg bg-[#c14ac178] text-black p-2 w-full lg:w-[50%] tracking-wider'>
//               {/* <p className='font-semibold'>What is Restaurant Management?</p> */}
//               <p className='mt-0 tracking-wider pr-3'>{`"We have a deep-rooted connection to the hotel industry, fueled by our passion, and have transformed it into a profession. Join us at Krafitech Hospitality to unlock the full potential of your hotel and create unforgettable hospitality experiences."`}</p>
//             </div>
//             <div className='w-full lg:w-[50%]'>
//               <div className='w-[100%] h-full justify-items-start'>
//                 <Image src={IMAGES.About} alt='About' height={1500} width={1500} className='w-full h-full lg:w-[85%] lg:h-[85%] object-scale-down' />
//               </div>
//             </div>


//           </div>
//           <div className='tracking-wider uppercase font-normal pb-16 lg:pb-0'>Scroll Down</div>

//         </div>
//         <div className="hidden lg:flex relative w-full h-full lg:h-[50rem] max-h-[100%] overflow-hidden mt-32">
//           <div className="w-full h-full">
//             <Image
//               height="1500"
//               width="1500"
//               alt="image"
//               src={IMAGES.team}
//               className="object-cover" />
//           </div>

//           <div className="absolute inset-0 bg-black opacity-30"></div>

//           {/* Content */}

//           <div className="absolute inset-0 bg-black/40 z-10 text-center p-6 max-w-xl h-full justify-self-end mr-20">
//             <div className="flex flex-col justify-center items-start w-[80%] h-full ml-16 gap-10">
//               <h2 className="text-3xl font-bold text-white tracking-wide opacity-90">MISSION</h2>
//               <p className="text-white text-start  text-md font-normal tracking-wide opacity-70">
//                 Experience the transformative power of Krafitech Hospitality in the hospitality industry. We are deeply connected to hotels, driven by passion and expertise, and dedicated to revolutionizing the landscape through technology, data-driven approaches, and strategic planning. With a focus on staying ahead of industry trends, we empower hotels to maintain a competitive edge, enhance guest connections, and adapt to the digital era with a strong online presence.
//               </p>
//               <h2 className="text-3xl font-bold text-white tracking-wide opacity-90">VISION</h2>
//               <p className="text-white text-start  text-md font-normal tracking-wide opacity-70">
//                 Experience the visionary approach of Krafitech Hospitality in redefining the hospitality industry. Our deep-rooted passion and expertise drive our mission to empower hotels through innovative strategies and cutting-edge technology. Join us in shaping the future of hospitality by embracing our vision of excellence, growth, and sustainability.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <AboutUs />

//       <div className='flex justify-center items-center w-full h-full pb-[12rem]'>
//         <div className='w-[80%] h-full'>
//           <div className='font-bold text-3xl'>Connected Client In</div>
//           <div className="w-full h-full mt-8">
//             <Image
//               height="1500"
//               width="1500"
//               alt="image"
//               src={IMAGES.newmap}
//               className="object-cover" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AboutUss




'use client'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import IMAGES from '@/public';
import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import AboutUs from '@/_components/Company/AboutUs';

export default function AboutUss() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div>
      <div className='w-full bg-neutral-200 pt-56 pb-32'>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='w-full font-bold tracking-wide text-xl lg:text-6xl uppercase'>Krafitech Hospitality</div>
          <div className='flex flex-col lg:flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-[#c14ac178] text-black p-2 w-full lg:w-[50%] tracking-wider'>
              <p className='mt-0 tracking-wider pr-3'>{`"We have a deep-rooted connection to the hotel industry, fueled by our passion, and have transformed it into a profession. Join us at Krafitech Hospitality to unlock the full potential of your hotel and create unforgettable hospitality experiences."`}</p>
            </div>
            <div className='w-full lg:w-[50%]'>
              <div className='w-[100%] h-full justify-items-start'>
                <Image src={IMAGES.About} alt='About' height={1500} width={1500} className='w-full h-full lg:w-[85%] lg:h-[85%] object-scale-down' />
              </div>
            </div>
          </div>
          <div className='tracking-wider uppercase font-normal pb-16 lg:pb-0'>Scroll Down</div>
        </div>
      </div>
      <div
        ref={container}
        className='hidden relative lg:flex items-center justify-center h-screen overflow-hidden'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-black/40 z-10 text-center p-6 max-w-xl h-full justify-self-end mr-20">
          <div className="flex flex-col justify-center items-start w-[80%] h-full ml-16 gap-10">
            <h2 className="text-3xl font-bold text-white tracking-wide opacity-90">MISSION</h2>
            <p className="text-white text-start  text-md font-normal tracking-wide opacity-70">
              Experience the transformative power of Krafitech Hospitality in the hospitality industry. We are deeply connected to hotels, driven by passion and expertise, and dedicated to revolutionizing the landscape through technology, data-driven approaches, and strategic planning. With a focus on staying ahead of industry trends, we empower hotels to maintain a competitive edge, enhance guest connections, and adapt to the digital era with a strong online presence.
            </p>
            <h2 className="text-3xl font-bold text-white tracking-wide opacity-90">VISION</h2>
            <p className="text-white text-start  text-md font-normal tracking-wide opacity-70">
              Experience the visionary approach of Krafitech Hospitality in redefining the hospitality industry. Our deep-rooted passion and expertise drive our mission to empower hotels through innovative strategies and cutting-edge technology. Join us in shaping the future of hospitality by embracing our vision of excellence, growth, and sustainability.
            </p>
          </div>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
          <motion.div style={{ y }} className='relative w-full h-full'>
            <Image src={IMAGES.restro} fill alt="image" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </div>
      <AboutUs />
      <div className='flex justify-center items-center w-full h-full pb-[12rem]'>
        <div className='w-[80%] h-full'>
          <div className='font-bold text-3xl'>Connected Client In</div>
          <div className="w-full h-full mt-8">
            <Image
              height="1500"
              width="1500"
              alt="image"
              src={IMAGES.newmap}
              className="object-cover" />
          </div>
        </div>
      </div>
    </div>

  )
}