"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';

const Blog = () => {

    return (
        <div className='relative w-full bg-neutral-200 py-40 '>
            <div className='w-[90%] lg:w-[80%] m-auto '>
                <div className='flex flex-col lg:flex-row justify-start items-start'>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <div className='font-bold tracking-wider text-7xl'>Blog</div>
                        </div>
                        <div className='rounded-lg bg-[#14acac] text-black p-2 w-full lg:w-[35rem] tracking-wider'>
                            Stay up-to-date on the hospitality industry, technology trends, and Krafitech products by exploring the latest news and articles written by our industry experts.
                        </div>
                    </div>

                    <div>
                        <Image src={IMAGES.blogimg} width={800} height={800} alt="blogimg" className='w-full h-full lg:w-[80%] lg:h-[80%] object-scale-down mt-10' />
                    </div>
                </div>

                <div className='tracking-widest mt-16'>
                    SCROLL DOWN
                </div>

            </div>



        </div>
    )
}

export default Blog
