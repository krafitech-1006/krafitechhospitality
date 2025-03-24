// import React from "react";
// import { Award, ChartPie, Headset, Lightbulb } from 'lucide-react'

// const HomeCards = () => {
//     const cardData = [
//         {
//             icon: <Lightbulb className='size-14 text-[#800000]' strokeWidth={1.5} />,
//             heading: "Tailored Solutions",
//             description: "We take the time to understand your hotel’s unique needs, creating customized strategies that align with your specific goals.",
//         },
//         {
//             icon: <ChartPie className='size-14 text-[#800000] font-medium' strokeWidth={1.5} />,
//             heading: "Data-Driven Approach",
//             description: "Our methodologies are grounded in thorough data analysis, enabling informed decisions that drive measurable results.",
//         },
//         {
//             icon: <Headset className='size-14 text-[#800000] font-medium' strokeWidth={1.5} />,
//             heading: "Continuous Support",
//             description: "Our team is always available to provide ongoing support, insights, and adjustments to your revenue strategy.",
//         },
//         {
//             icon: <Award className='size-14 text-[#800000] font-medium' strokeWidth={1.5} />,
//             heading: "Proven Results",
//             description: "We have successfully helped numerous hotels increase their revenue and optimize their operations, turning challenges into opportunities.",
//         },
//     ];

//     return (
//         <div className='flex flex-col gap-10'>
//             <div className='w-[90%] lg:w-[80%] mx-auto'>
//                 <div className='w-full justify-start lg:justify-center items-center flex flex-col gap-10'>
//                     <h2 className='text-3xl lg:text-4xl font-semibold text-[#800000] text-start lg:text-center w-full'>Let Krafitech do the heavy lifting for you</h2>
//                     <div className='w-full flex justify-start lg:justify-center items-center'>
//                         <p className='text-start lg:text-center w-[85%]'>At Krafitech Hospitality, we create simple, tailored strategies that address your hotel’s unique needs. Our data-driven insights empower you to optimize pricing and maximize occupancy for sustainable revenue growth.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex overflow-x-auto snap-x snap-mandatory p-5 gap-4 w-[90%] lg:w-[80%] mx-auto hide-scrollbar-x">
//                 {cardData.map((card, index) => (
//                     <div 
//                         key={index} 
//                         className="relative flex-none w-[calc(90%-16px)] md:w-[calc(45%-16px)] lg:w-[calc(100%/4-16px)] 
//                                   flex flex-col snap-start cursor-default 
//                                    overflow-hidden bg-gray-100 border shadow-lg py-10 px-2 gap-5 rounded"
//                     >
//                         <span>{card.icon}</span>
//                         <h2 className="text-xl font-bold mt-4 text-[#800000]">{card.heading}</h2>
//                         <p className="text-gray-600 mt-2">{card.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HomeCards;


'use client'
import React from 'react'
import IMAGES from '@/public'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const HomeCards = () => {

    const router = useRouter()

    return (
        // <div className='w-full flex flex-col justify-center items-center mt-32'>
        //     <div className='flex flex-row w-[80%] border-b-1 border-black pb-5'>
        //         <div className='flex flex-col w-[50%] gap-40'>
        //             <div>
        //                 <p className='font-bold text-3xl tracking-wide'>Embrace the <span className='text-[#d87ad8]'>Future</span> of</p>
        //                 <p className='font-bold text-3xl tracking-wide'>Enterprise Hospitality Technology</p>
        //                 <p className='font-bold text-sm tracking-wide text-gray-500 mt-4'>with Our Smart Software Solutions</p>
        //             </div>
        //             <div className='w-full flex justify-center items-center gap-4'>
        //                 <Button className='rounded-full bg-[#d87ad8] text-black shadow-lg p-6'>
        //                     <div className='rounded-full bg-black'>
        //                         <ChevronRight className='text-white size-4 m-2'/>
        //                     </div>
        //                     <img src={IMAGES.button1} className='size-8'/><p className='font-semibold text-sm tracking-widest'>PMS</p>
        //                 </Button>
        //                 <Button className='rounded-full bg-[#d87ad8] text-black shadow-lg p-6'>
        //                     <div className='rounded-full bg-black'>
        //                     <ChevronRight className='text-white size-4 m-2'/>
        //                     </div>
        //                     <img src={IMAGES.button2} className='size-8'/><p className='font-semibold text-sm tracking-widest'>RESTAURANT</p>
        //                 </Button>
        //             </div>
        //         </div>
        //         <div className='w-[50%]'>
        //             <Image
        //                 width={1500}
        //                 height={1500}
        //                 src={IMAGES.section2}
        //                 alt="header"
        //                 className='object-fill'
        //             />
        //         </div>
        //     </div>
        // </div>

        <div className="w-full flex flex-col justify-center items-center mt-0 md:mt-32 px-4 md:px-8 lg:px-0">
            <div className="flex flex-col lg:flex-row w-full lg:w-[80%] border-b-1 border-black pb-5">
                {/* Left Section */}
                <div className="flex flex-col w-full lg:w-[50%] gap-10 md:gap-20 lg:gap-40">
                    <div className="text-center lg:text-left">
                        <p className="font-bold text-2xl md:text-3xl tracking-wide">
                            Embrace the <span className="text-[#d87ad8]">Future</span> of
                        </p>
                        <p className="font-bold text-2xl md:text-3xl tracking-wide">
                            Enterprise Hospitality Technology
                        </p>
                        <p className="font-bold text-sm md:text-base tracking-wide text-gray-500 mt-4">
                            with Our Smart Software Solutions
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
                        <Button className="flex items-center gap-2 rounded-full bg-[#d87ad8] text-black shadow-lg p-4 md:p-6" onPress={(e) => {
                router.push('/ourproducts/cloudbasedsystem/pms')
              }}>
                            <div className="rounded-full bg-black p-1">
                                <ChevronRight className="text-white size-4 m-1" />
                            </div>
                            <img src={IMAGES.button1} className="size-6 md:size-8" />
                            <p className="font-semibold text-xs md:text-sm tracking-widest">PMS</p>
                        </Button>
                        <Button className="flex items-center gap-2 rounded-full bg-[#d87ad8] text-black shadow-lg p-4 md:p-6" onPress={(e) => {
                router.push('/ourproducts/cloudbasedsystem/rms')
              }}>
                            <div className="rounded-full bg-black p-1">
                                <ChevronRight className="text-white size-4 m-1" />
                            </div>
                            <img src={IMAGES.button2} className="size-6 md:size-8" />
                            <p className="font-semibold text-xs md:text-sm tracking-widest">RESTAURANT</p>
                        </Button>
                    </div>
                </div>
                {/* Right Section (Image) */}
                <div className="w-full lg:w-[50%] flex justify-center mt-10 lg:mt-0">
                    <Image
                        width={800}
                        height={800}
                        src={IMAGES.section2}
                        alt="header"
                        className="object-cover w-full h-auto md:w-[80%] lg:w-auto"
                    />
                </div>
            </div>
        </div>

    )
}

export default HomeCards
