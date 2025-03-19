"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { ChevronRight } from "lucide-react"

const PMS = () => {

  return (
    <div className='relative w-full bg-neutral-200 py-56 '>
      <div className='w-[90%] lg:w-[80%] m-auto '>

        <div className='font-bold tracking-widest text-3xl uppercase'>Krafitech PROPERTY MANAGEMENT SYSTEM (PMS)</div>

        <div className='flex flex-row justify-center items-center mt-8'>
          <div>
            <div className='w-[100%] h-full justify-items-center'>
              <Image src={IMAGES.newrmsgroup} alt='newrmsgroup' height={1500} width={1500} className='w-[90%] h-[90%] object-scale-down' />
            </div>
          </div>


        </div>
        <div>
          <Button className='border-white border bg-[#8690db] rounded-full border-opacity-70 p-6 shadow-2xl'>
            <div className='rounded-full bg-black p-2'>
              <ChevronRight className='size-4 text-white' />
            </div>
            <p className='tracking-widest text-black font-bold ml-4 uppercase'>Book a Demo</p>
          </Button>
        </div>
        <div className='font-bold tracking-wider text-black mb-5 text-3xl mt-16'>BOOKING</div>


        <div className='flex flex-row justify-start items-start mt-8'>
          <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
            {` New Reservation section allows you to create a new reservation. It typically includes fields to enter guest information, check-in/check-out dates, room preferences, and other details required to make a booking.`}
          </div>
          <div className='w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.colornewreservationtab} alt='colornewreservationtab' height={1500} width={1500} className='w-[100%] h-[100%]' />
          </div>
        </div>


        <div className='flex flex-row justify-start items-start mt-8'>
          <div className='w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.b2} alt='b2' height={1500} width={1500} className='w-[100%] h-[100%]' />
          </div>
          <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
            {` Booking History
This section provides various views of the booking history, including reserved, checked-in, checked-out, cancelled, and on-hold reservations, as well as bookings made through the Internet Booking Engine (IBE).`}
          </div>
        </div>


        <div className='flex flex-row justify-start items-start mt-8'>
          <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
            {` Online Booking This section is dedicated to managing online bookings. It may include features such as integrating with online travel agencies (OTAs) or managing bookings made through the hotel's website or other online platforms.`}
          </div>
          <div className='w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.b3} alt='b3' height={1500} width={1500} className='w-[100%] h-[100%]' />
          </div>
        </div>


        <div className='flex flex-row justify-start items-start mt-8'>
          {/* <div className='w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.b4} alt='b4' height={1500} width={1500} className='w-[100%] h-[100%]' />
          </div> */}
          <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
            {` Booking Chart The booking chart provides a visual representation of room availability. It typically displays a calendar with color-coded blocks representing the status of each room (e.g., available, booked, occupied). This helps hotel staff easily understand room occupancy at a glance.`}
          </div>
        </div>


        <div className='flex flex-row justify-start items-start mt-8'>
          <div>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
              {`Housekeeping
 Status Shows the current status of each room, indicating whether it needs cleaning, is being cleaned, or has been cleaned.`}
            </div>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
              {`Checklist Provides a list of tasks or items to be checked or completed during the housekeeping process, ensuring all necessary steps are followed for room preparation.`}
            </div>
          </div>
          <div className='w-[50%] h-full justify-items-center'>
            <Image src={IMAGES.b4} alt='b4' height={1500} width={1500} className='w-[100%] h-[100%]' />
          </div>
        </div>


        <div className='mt-8'>
          <div className='flex flex-row justify-start items-start gap-2'>
            <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
            {/* <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PMS
