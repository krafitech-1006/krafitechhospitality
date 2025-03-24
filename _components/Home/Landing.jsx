'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import IMAGES from '@/public';
import Image from 'next/image';
import "@/styles/landing.css"
import VIDEOS from "@/public/video";
import { ChevronRight } from "lucide-react"
import { useRouter } from 'next/navigation';

const Landing = (props) => {

  const router = useRouter();

  return (
    <div className="w-full h-[45rem] md:h-full flex justify-center items-center">
      {/* Background Image */}
      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEOS.homevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="hidden w-full h-[70vh] md:h-[80vh] lg:h-[90vh] py-10 lg:p-0 lg:flex justify-center items-center text-white">
        <div className="relative w-[90%] lg:w-[80%] mx-auto flex justify-start items-center h-full">

          <div className="flex flex-col z-10 text-left gap-10">
            <p className="text-4xl md:text-sm font-semibold tracking-wide opacity-80">
              KRAFITECH HOSPITALITY
            </p>
            <p className="text-4xl md:text-6xl font-semibold tracking-wide">
              Welcome to KRAFITECH
            </p>
            <div>
              <p className="mt-2 text-sm md:text-sm font-semibold tracking-widest">
                Krafitech works dedicatedly to evaluate the shortcomings of
              </p>
              <p className="mt-2 text-sm md:text-sm font-semibold tracking-widest">
                your hotel and enhance its efficiency.
              </p>
            </div>
            <div>
              <Button className='border-white border-medium bg-transparent rounded-full border-opacity-10 p-7' onPress={(e) => {
                router.push('/company/aboutus')
              }}>
                <div className='rounded-full bg-white'>
                  <ChevronRight className='p-1'/>
                </div>
                <p className='tracking-widest text-white'>MORE DETAILS</p>
              </Button>
            </div>
          </div>

        </div>
      </div>



      <div className="flex w-full h-[70vh] md:h-[80vh] lg:h-[90vh] py-10 lg:p-0 lg:hidden justify-center items-center text-white">
        <div className="relative w-[90%] lg:w-[80%] mx-auto flex justify-start items-center h-full">

          <div className="flex flex-col z-10 text-left gap-4">
            <div className="flex justify-start items-center text-white font-semibold text-lg">
              <span className="flex-grow border-t-2 border-white max-w-10 opacity-20"></span>
              <span className='tracking-widest ml-4 text-sm opacity-80'>KRAFITECH HOSPITALITY</span>
            </div>
            <p className="text-5xl md:text-6xl font-semibold tracking-wide w-full">
              Welcome to KRAFITECH
            </p>
            <div className='w-full'>
              <p className="mt-2 text-sm md:text-sm font-semibold tracking-widest">
                Krafitech works dedicatedly to evaluate the shortcomings of
              </p>
              <p className="mt-2 text-sm md:text-sm font-semibold tracking-widest">
                your hotel and enhance its efficiency.
              </p>
            </div>
            <div>
              <Button className='border-white border-medium bg-transparent rounded-full border-opacity-10 p-6' onPress={(e) => {
                router.push('/company/aboutus')
              }}>
                <div className='rounded-full bg-white p-2'>
                  <ChevronRight className='size-4'/>
                </div>
                <p className='tracking-widest text-white ml-4'>MORE DETAILS</p>
              </Button>
            </div>
          </div>

        </div>
      </div>



      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
};

export default Landing;





