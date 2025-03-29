'use client'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import IMAGES from '@/public';
import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";

export default function OurOffers() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div>
      <div
        ref={container}
        className='hidden relative lg:flex items-center justify-center h-screen overflow-hidden'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
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
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
          <motion.div style={{ y }} className='relative w-full h-full'>
            <Image src={IMAGES.restro} fill alt="image" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </div>


      <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden lg:hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Text Content */}
      <div className="absolute inset-0 bg-black/50 z-10 text-center p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <div className="flex flex-col justify-center items-start w-[90%] md:w-[80%] h-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white tracking-wide opacity-90">
            WHO WE ARE?
          </h2>
          <p className="text-white text-start mt-4 text-sm md:text-sm lg:text-base font-semibold tracking-wide opacity-70">
            Our passion for hospitality has been the driving force behind our commitment to creating innovative software that enhances the guest experience and streamlines operations for hotels, resorts, restaurants, and other hospitality establishments.
          </p>
          <p className="text-white text-start mt-3 md:mt-4 text-sm md:text-sm lg:text-base font-semibold tracking-wide opacity-70">
            By partnering with Krafitech Hospitality, you can expect a customer-centric approach, where we work closely with you to understand your unique requirements and challenges.
          </p>
          <p className="text-white text-start mt-3 md:mt-4 text-sm md:text-sm lg:text-base font-semibold tracking-wide opacity-70">
            If you&apos;re looking for a passionate and experienced technology partner, look no further than Krafitech Hospitality. Let&apos;s unlock the full potential of your enterprise and create unforgettable experiences for your guests.
          </p>
          <div className="mt-6 md:mt-8">
            <Button className="border-white border border-opacity-50 bg-transparent rounded-full px-5 py-3 md:px-7 md:py-4 flex items-center">
              <div className="rounded-full bg-white p-2">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="tracking-widest text-white uppercase font-semibold ml-3 md:ml-4 text-xs md:text-sm">
                Learn More
              </p>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="fixed top-[0vh] left-0 h-full w-full md:h-[120vh]">
        <motion.div className="relative w-full h-full">
          <Image
            src={IMAGES.restro}
            fill
            alt="image"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
    </div>
  )
}