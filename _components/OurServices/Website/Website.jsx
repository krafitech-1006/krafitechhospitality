"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";

const Website = () => {

    return (
        <div className='relative w-full bg-neutral-200 py-40 '>
            <div className='w-[90%] lg:w-[80%] m-auto '>


                <div className='flex flex-row justify-center items-start gap-8 mt-10'>
                    <div className='flex flex-col gap-8 w[50%]'>
                        <div className='font-bold tracking-wider text-6xl'>Web Development</div>
                        <div className='rounded-lg bg-sky-600 text-black p-2 w-[35rem] tracking-wider'>
                            Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.
                        </div>
                    </div>

                    {/* <div>
                        <img src={IMAGES.Webdevelopment} alt="Webdevelopment" className='w-[85%] h-[85%]' />
                    </div> */}
                    <div className='relative h-full w-[40%] mt-10'>
                        <img src={IMAGES.Webdevelopment} alt='Webdevelopment' className='absolute  top-[0px] left-[62px] w-[85%] h-[385%] z-50' />
                        <div className='flex flex-row justify-between'>
                            <img src={IMAGES.WebdevelopmentOne} alt='WebdevelopmentOne' className='w-[20%] h-[20%] z-0' />
                            <img src={IMAGES.WebdevelopmentTwo} alt='WebdevelopmentTwo' className='w-[20%] h-[20%] z-0' />
                        </div>
                    </div>
                </div>

                <div className='tracking-wider mt-[18rem]'>
                    SCROLL DOWN
                </div>

            </div>



        </div>
    )
}

export default Website
