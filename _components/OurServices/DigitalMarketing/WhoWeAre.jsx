'use client'
import React from 'react'
import IMAGES from '@/public'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

const WhoWeAre = () => {

    const router = useRouter();

    const cardData = [
        {
            id: '66c4779d11f67143ae90ebb8',
            image: IMAGES.DigitalBrandBuilding,
            title: "Digital Brand Building",
            desc: "We provied 24*7 Staff to Manage your Account & Front Desk be Half of you.",
            route: "digital-brand-building"
        },
        {
            id: '66c4798a11f67143ae90ecc3',
            image: IMAGES.SocialMediaMarketing,
            title: "Social Media Marketing",
            desc: "We List Your Property On Most Populer OTA's (Online Traval Agents)",
            route: "social-media-marketing"
        },
        {
            id: '66c4798a11f67143ae90ecc4',
            image: IMAGES.photographycon,
            title: "Photography & Video Making Content",
            desc: "We Also Manage Your OTA's Season wise rate Update run Offers/Promotions.",
            route: "photography-and-video-making-content"
        },
        {
            id: '66c4798a11f67143ae90safdsd4',
            image: IMAGES.searchengineoptimization,
            title: "Search Engine Optimization",
            desc: "The agreement between hotels and Online Travel Agencies.",
            route: "search-engine-optimization"
        },
        {
            id: '66c4798a11f67143ae90safdsd5',
            image: IMAGES.productiveemail,
            title: "Productive Email",
            desc: "we create applicable promo codes and coupons which are relevant to our client’s",
            route: "productive-email"
        },
    ];

    const handleKnowMore = (route) => {
        router.push(`/services/digital-marketing/${route}`)
    }

    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center mt-28">
            <div className='flex flex-col justify-start items-start w-[85%] lg:w-[80%] gap-4'>
                <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[25%]">
                    <span className="text-black ml-1">•</span>
                    <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                    <span className='text-sm tracking-widest text-gray-600 uppercase'>Krafitech Hospitality</span>
                </div>
                <div className='font-extrabold tracking-wide text-4xl uppercase'>
                    Our Services
                </div>
            </div>
            <div className="gap-8 p-4 w-[90%] lg:w-[80%] first-line:lg:justify-center lg:items-center grid lg:grid-cols-3 mt-8">
                {cardData?.map((item, index) => (
                    <div key={index} className="card-container w-full h-[25rem]">
                        <div className="card-inner relative w-full h-[25rem]">
                            <div className="card-front absolute w-full h-[25rem] rounded-2xl flex flex-col justify-center items-center bg-blue-300  shadow-md">
                                <Image
                                    src={item.image}
                                    alt={`Image ${index + 1}`}
                                    width={600}
                                    height={600}
                                    quality={100}
                                    className="w-20 h-20 object-contain"
                                />
                                <div className='font-semibold tracking-wide mt-2 text-wrap py-2 px-8 text-center text-2xl'>
                                    {item.title}
                                </div>
                                <div className='font-medium tracking-wide mt-1 text-wrap px-11 text-center text-md'>
                                    {item.desc}
                                </div>
                                <div className='tracking-wide mt-4 text-wrap p-2 text-center text-lg'>
                                    <Button className='font-semibold tracking-widest uppercase bg-white border border-green-300 px-10 py-6' onPress={(e) => handleKnowMore(item.route)}>Know more</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhoWeAre
