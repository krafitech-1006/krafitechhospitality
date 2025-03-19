"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';

const WebDesigning = () => {

    return (
        <div className='relative w-full bg-neutral-200 py-40 '>
            <div className='w-[90%] lg:w-[80%] m-auto '>

                <div className='flex flex-row justify-start items-start mt-8'>
                    <div>
                        <div className='font-bold tracking-wide text-6xl uppercase'>Web Designing</div>
                        <div className='rounded-lg bg-sky-600 text-black p-2 w-[35rem] tracking-wider mt-8'>
                        Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design (UI design); authoring, including standardised code and proprietary software; user experience design (UX design); and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.
                        </div>
                    </div>
                    <div className='w-[50%] h-full justify-items-center'>
                        <Image src={IMAGES.webdesigningpage} alt='webdesigningpage' height={1500} width={1500} className='w-[80%] h-[80%] object-scale-down' />
                    </div>
                </div>
                {/* <div className='font-bold tracking-widest text-black mb-5 text-lg'>PERFORMANCE REPORT</div> */}
                <div className='flex flex-row justify-start items-start mt-8'>
                    <div className='rounded-lg bg-sky-600 text-black p-2 w-[35rem] tracking-wider'>
                    {`The term "web design" is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and be up to date with web accessibility guidelines.`}
                    </div>
                    {/* <div className='w-[50%] h-full justify-items-center'>
                        <Image src={IMAGES.DigitalBrandBuildingOne} alt='DigitalBrandBuildingOne' height={1500} width={1500} className='w-[80%] h-[80%]'/>
                    </div> */}
                </div>
                <div className='mt-8'>
                    <div className='flex flex-row justify-start items-start gap-2'>
                        <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Back</Button>
                        <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebDesigning
