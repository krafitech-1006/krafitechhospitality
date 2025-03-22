"use client"
import React, { useState } from 'react'
import IMAGES from "@/public/index";

const Revenuefeatures = () => {

    return (

        <div>
            <div className='hidden lg:block relative w-full bg-neutral-200 py-40 '>
                <div className='w-[90%] lg:w-[80%] m-auto '>
                    <div>
                        <div className='font-bold tracking-wider text-4xl'>Revenue Management</div>
                        <div>
                            <img src={IMAGES.revenuemanagment} alt='revenuemanagment' />
                        </div>
                    </div>

                    <div className='flex flex-row justify-center items-center'>
                        <div className='rounded-lg bg-red-300 text-black p-2 w-[35rem] tracking-wider'>
                            Revenue management is an extremely important concept within the hospitality industry, understanding relation between supply, demand, pricing and distribution by using different distribution channels to manage demand at competitive price. Today, playing field is drastically more complex, analyzing, forecasting, and optimizing hotel inventory through availability restrictions and dynamic rates and have appropriate instrumental in managing a hotel&apos;s demand through various online & offline channels to maximize hotels profit by Yield management. Krafitech Hospitality provides high level of revenue management support at a very sensible price, we extend support consistent 24/7 & 365 days to hotels as it says that ‘Hotel business never sleeps.
                        </div>
                        <div>
                            <img src={IMAGES.revenuemanagment3d} alt="revenuemanagment3d" className='w-full h-full' />
                        </div>
                    </div>

                    <div className='tracking-wider mt-16 underline'>
                        SCROLL DOWN
                    </div>

                </div>



            </div>



            <div className="block lg:hidden relative w-full bg-neutral-200 py-20">
                <div className="w-[90%] lg:w-[80%] m-auto">
                    {/* Title & Image */}
                    <div className="text-center">
                        <div className="font-bold tracking-wider text-2xl md:text-4xl">
                            Revenue Management
                        </div>
                        <div className="mt-4">
                            <img
                                src={IMAGES.revenuemanagment}
                                alt="revenuemanagment"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-6">
                        <div className="rounded-lg bg-red-300 text-black p-4 md:p-6 w-full md:w-[35rem] tracking-wider text-sm md:text-base">
                            Revenue management is an extremely important concept within the hospitality industry, understanding the relation between supply, demand, pricing, and distribution by using different distribution channels to manage demand at a competitive price. Today, the playing field is drastically more complex—analyzing, forecasting, and optimizing hotel inventory through availability restrictions and dynamic rates is instrumental in managing a hotel&apos;s demand through various online & offline channels to maximize hotel profit by Yield management. Krafitech Hospitality provides a high level of revenue management support at a very sensible price, extending consistent 24/7 & 365-day support to hotels, as the saying goes, ‘Hotel business never sleeps.’
                        </div>
                        <div className="w-full md:w-[50%]">
                            <img
                                src={IMAGES.revenuemanagment3d}
                                alt="revenuemanagment3d"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Scroll Down Text */}
                    <div className="tracking-wider mt-10 text-center underline text-sm md:text-base">
                        SCROLL DOWN
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Revenuefeatures
