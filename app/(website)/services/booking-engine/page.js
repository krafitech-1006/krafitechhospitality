"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';

const BookingEngine = () => {

    return (
        <div className='relative w-full bg-neutral-200 py-40 '>
            <div className='w-[90%] lg:w-[80%] m-auto '>

                <div className='flex flex-row justify-start items-start mt-8'>
                    <div>
                        <div className='font-bold tracking-wide text-7xl'>Booking Engine</div>
                        <div className='rounded-lg bg-yellow-200 text-black p-2 w-[35rem] tracking-wider mt-8'>
                            <span className='font-semibold'>Secure Payment Options: </span> Easy direct payments for guests through websites, and collect a wide variety of online payments through our online booking engine.
                        </div>
                        <div className='rounded-lg bg-yellow-200 text-black p-2 w-[35rem] tracking-wider mt-8'>
                            <span className='font-semibold'>Manage Booking: </span>Create, update, and edit all your booking from a single dashboard
                        </div>
                    </div>
                    <div className='w-[50%] h-full justify-items-center'>
                        <Image src={IMAGES.bookingengineimg} alt='bookingengineimg' height={1500} width={1500} className='w-[80%] h-[80%] object-scale-down' />
                    </div>
                </div>
                {/* <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div> */}
                <div className='flex flex-row justify-start items-start mt-8'>
                    <div className='mt-8'>
                        <div className='rounded-lg bg-yellow-200 text-black p-2 w-[35rem] tracking-wider'>
                            <span className='font-semibold'>Report Analysis:</span>Analyse all your contactless check-in and check-out details with one click.
                        </div>
                        <div className='rounded-lg bg-yellow-200 text-black p-2 w-[35rem] tracking-wider mt-8'>
                            <span className='font-semibold'>Promotions & Deals:</span>Provide your guests with special deals and promo codes.
                        </div>
                        <div>
                            <div className='my-4 font-semibold tracking-wider'>
                                Multiple Payment Options:
                            </div>
                            <div className='rounded-lg bg-yellow-200 text-black p-2 w-[35rem] tracking-wider mt-8'>
                                {`Maximize revenue and take control of bookings with our Hotel Booking Engine Software. Enjoy commission-free direct bookings, dynamic discounts, and tailored special packages to boost profitability and reduce expenses. Streamline your booking management with our efficient online Hotel Booking Engine system.`}
                            </div>
                        </div>
                    </div>


                    <div className='w-[50%] h-full justify-items-center'>
                        <Image src={IMAGES.Bokingengin} alt='Bokingengin' height={1500} width={1500} className='w-[80%] h-[80%]' />
                    </div>
                </div>
                {/* <div className='mt-8'>
                    <div className='flex flex-row justify-start items-start gap-2'>
                        <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
                        <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default BookingEngine
