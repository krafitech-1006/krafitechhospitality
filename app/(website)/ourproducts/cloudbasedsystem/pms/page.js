"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { ChevronRight } from "lucide-react"
import { useRouter } from 'next/navigation';

const PMS = () => {

  const bookingSections = [
    {
      image: IMAGES.colornewreservationtab, // Path to the image
      alt: "New Reservation",
      text: ["New Reservation section allows you to create a new reservation. It typically includes fields to enter guest information, check-in/check-out dates, room preferences, and other details required to make a booking."],
      imageFirst: false, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.b2, // Path to the image
      alt: "Booking History ",
      text: ["Booking History This section provides various views of the booking history, including reserved, checked-in, checked-out, cancelled, and on-hold reservations, as well as bookings made through the Internet Booking Engine (IBE)."],
      imageFirst: true, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.b3, // Path to the image
      alt: "Online Booking",
      text: ["Online Booking This section is dedicated to managing online bookings. It may include features such as integrating with online travel agencies (OTAs) or managing bookings made through the hotel's website or other online platforms."],
      imageFirst: false, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.b4, // Path to the image
      alt: "Booking History ",
      text: ["Booking Chart The booking chart provides a visual representation of room availability. It typically displays a calendar with color-coded blocks representing the status of each room (e.g., available, booked, occupied). This helps hotel staff easily understand room occupancy at a glance.", "Housekeeping Status Shows the current status of each room, indicating whether it needs cleaning, is being cleaned, or has been cleaned.", "Checklist Provides a list of tasks or items to be checked or completed during the housekeeping process, ensuring all necessary steps are followed for room preparation."],
      imageFirst: true, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.b5, // Path to the image
      alt: "Property Master",
      text: ["Property Master This section manages the configuration and setup of the property or hotel. It includes details such as hotel information, user management, floor plans, property photos, tax setup, additional services offered, promotional codes, packages, and terms & conditions."],
      imageFirst: false, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.b6, // Path to the image
      alt: "New Reservation",
      text: ["Room Inventory This section manages the inventory of products and items associated with the hotel, such as toiletries, minibar items, and other supplies. It also handles the procurement process for purchasing inventory items, tracks the receipt of inventory items, and performs periodic stock counts to maintain accurate inventory levels and identify discrepancies."],
      imageFirst: true, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.b7, // Path to the image
      alt: "Reports",
      text: ["Reports This section generates various reports to provide insights into different aspects of the hotel's operations. Examples include booking reports, stay-over reports, payment folios, guest lists, credit reports, and reports related to online travel agency (OTA) bookings."],
      imageFirst: false, // Determines whether the image appears first or last
    },
  ]


  
    const router = useRouter()
  
    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/ourproducts/cloudbasedsystem')
      }
  
      if (action === "next") {
        router.push('/ourproducts/cloudbasedsystem/rms')
      }
  
    }

  return (

    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-56 '>
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
            <Button className='border-white border bg-[#8690db] rounded-full border-opacity-70 p-6 shadow-2xl' onPress={(e) => {
                router.push('/support/contact')
              }}>
              <div className='rounded-full bg-black p-2'>
                <ChevronRight className='size-4 text-white' />
              </div>
              <p className='tracking-widest text-black font-bold ml-4 uppercase'>Book a Demo</p>
            </Button>
          </div>
          <div className='font-bold tracking-wider text-black mb-5 text-3xl mt-16'>BOOKING</div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
              <span className='font-semibold'>New Reservation</span> section allows you to create a new reservation. It typically includes fields to enter guest information, check-in/check-out dates, room preferences, and other details required to make a booking.
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
            <span className='font-semibold'>Booking History</span>This section provides various views of the booking history, including reserved, checked-in, checked-out, cancelled, and on-hold reservations, as well as bookings made through the Internet Booking Engine {"(IBE)"}.
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
            <span className='font-semibold'>Online Booking </span> This section is dedicated to managing online bookings. It may include features such as integrating with online travel agencies {"(OTAs)"} or managing bookings made through the hotel&apos;s website or other online platforms.
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
            <span className='font-semibold'>Booking Chart </span> The booking chart provides a visual representation of room availability. It typically displays a calendar with color-coded blocks representing the status of each room {"(e.g., available, booked, occupied)"}. This helps hotel staff easily understand room occupancy at a glance.
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-4'>
              <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>Housekeeping</p>
                <span className='font-semibold'>Status </span>Shows the current status of each room, indicating whether it needs cleaning, is being cleaned, or has been cleaned.
              </div>
              <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
              <span className='font-semibold'>Checklist </span> Provides a list of tasks or items to be checked or completed during the housekeeping process, ensuring all necessary steps are followed for room preparation.
              </div>
            </div>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.b4} alt='b4' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.b5} alt='b5' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
              <p className='font-semibold'>Property Master</p>
This section manages the configuration and setup of the property or hotel. It includes details such as hotel information, user management, floor plans, property photos, tax setup, additional services offered, promotional codes, packages, and terms & conditions.
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
            <p className='font-semibold'>Room Inventory</p>
This section manages the inventory of products and items associated with the hotel, such as toiletries, minibar items, and other supplies. It also handles the procurement process for purchasing inventory items, tracks the receipt of inventory items, and performs periodic stock counts to maintain accurate inventory levels and identify discrepancies.
            </div>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.b6} alt='b6' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.b7} alt='b7' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
            <div className='rounded-lg bg-pink-300 text-black p-2 w-[35rem] tracking-wider'>
              <p className='font-semibold'>Reports</p>
This section generates various reports to provide insights into different aspects of the hotel&apos;s operations. Examples include booking reports, stay-over reports, payment folios, guest lists, credit reports, and reports related to online travel agency {"(OTA)"} bookings.
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



      <div className='block lg:hidden relative w-full bg-neutral-200 pt-56 pb-32 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>
          <div className='font-bold tracking-widest text-3xl uppercase'>
            Krafitech PROPERTY MANAGEMENT SYSTEM (PMS)
          </div>
          <div className='flex flex-row justify-center items-center mt-8'>
            <div className='w-[100%] h-full justify-items-center'>
              <Image
                src={IMAGES.newrmsgroup}
                alt='newrmsgroup'
                height={1500}
                width={1500}
                className='w-[90%] h-[90%] object-scale-down'
              />
            </div>
          </div>
          <div>
            <Button className='border-white border bg-[#8690db] rounded-full border-opacity-70 p-6 shadow-2xl' onPress={(e) => {
                router.push('/support/contact')
              }}>
              <div className='rounded-full bg-black p-2'>
                <ChevronRight className='size-4 text-white' />
              </div>
              <p className='tracking-widest text-black font-bold ml-4 uppercase'>Book a Demo</p>
            </Button>
          </div>
          <div className='font-bold tracking-wider text-black mb-5 text-3xl mt-16'>BOOKING</div>

          {/** Booking Sections **/}
          {bookingSections.map((section, index) => (
            <div className='flex flex-col justify-start items-start mt-8' key={index}>
              {section.imageFirst && (
                <div className='h-full justify-items-center'>
                  <Image src={section.image} alt={section.alt} height={1500} width={1500} className='w-[100%] h-[100%]' />
                </div>
              )}
              <div className='flex flex-col gap-2'>
                {section.text.map((item, index) => {
                  return (
                    <div key={index} className='rounded-lg bg-pink-300 text-black p-2 m-auto tracking-wider'>
                      {item}
                    </div>
                  )
                })}
              </div>
              {!section.imageFirst && (
                <div className='h-full justify-items-center'>
                  <Image src={section.image} alt={section.alt} height={1500} width={1500} className='w-[100%] h-[100%]' />
                </div>
              )}
            </div>
          ))}

          {/** Navigation Buttons **/}
          <div className='mt-8'>
            <div className='flex flex-row justify-start items-start gap-2'>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>
                Back
              </Button>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("next")}>Next</Button>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default PMS
