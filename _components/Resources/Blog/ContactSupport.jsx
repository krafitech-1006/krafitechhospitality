// import React from 'react'
// import Image from 'next/image'
// import IMAGES from '@/public'

// const ContactSupport = () => {
//     return (
//         <div className='w-full flex flex-col justify-center items-center'>
//             <div className='w-[90%] lg:w-[80%] flex'>
//                 <div className='py-4 flex flex-col gap-6'>
//                     <div className='text-gray-600 text-4xl'>24 X 7</div>
//                     <div className='text-gray-600 text-4xl'>Dedicated Manager</div>
//                     <div className='text-gray-500 text-xl'>
//                         <p>Our dedicated manager oversees your property 24/7, handling everything from initial inquiries to
//                             booking confirmations and guest checkouts. With a focus on seamless service, we ensure every
//                             aspect of guest management is expertly managed for an exceptional experience.</p>
//                     </div>
//                     <div className='hidden md:block'>
//                         <Image
//                             alt='image'
//                             src={IMAGES.section4}
//                             width={600}
//                             height={600}
//                             className='object-scale-down w-[100%] h-[100%] mx-auto'
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className='block lg:hidden'>
//                 <Image
//                     alt='image'
//                     src={IMAGES.mobilesection4}
//                     width={600}
//                     height={600}
//                     className='object-scale-down w-[100%] h-[100%] mx-auto'
//                 />
//             </div>
//         </div>
//     )
// }

// export default ContactSupport









'use client'
import React from 'react'
import IMAGES from '@/public'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

const ContactSupport = () => {

    const router = useRouter();

    const cardData = [
        {
            id: '66c4779d11f67143ae90ebb8',
            image: IMAGES.q1,
            title: "Why Online Reputation management for Hotel is Big Thing",
            desc: "We provied 24*7 Staff to Manage your Account & Front Desk be Half of you.",
            route: "blog1"
        },
        {
            id: '66c4798a11f67143ae90ecc3',
            image: IMAGES.q2,
            title: "How to market a hotel and top ten tips for marketing your hotel",
            desc: "We List Your Property On Most Populer OTA's (Online Traval Agents)",
            route: "blog2"
        },
        {
            id: '66c4798a11f67143ae90ecc4',
            image: IMAGES.q3,
            title: "Top 5 things to look out for if you are hiring a hotel marketing company",
            desc: "We Also Manage Your OTA's Season wise rate Update run Offers/Promotions.",
            route: "blog3"
        },
        {
            id: '66c4798a11f67143ae90safdsd4',
            image: IMAGES.q4,
            title: "social media marketing for hotel and the epic formula",
            desc: "The agreement between hotels and Online Travel Agencies.",
            route: "blog4"
        },
        {
            id: '66c4798a11f67143ae90safdsd5',
            image: IMAGES.q5,
            title: "How WILL tourism change after COVID19",
            desc: "we create applicable promo codes and coupons which are relevant to our client’s",
            route: "blog5"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.q6,
            title: "Top 5 Hotel Marketing Tips post and COVID",
            desc: "Hotel reviews have a direct impact on your hotel's demand. A positive review from happy guests .",
            route: "blog6"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.q7,
            title: "5 lessons for effective Intagram Marketing for hotels",
            desc: "We are more concerned about the revenue which you are expecting at end of the month.",
            route: "blog7"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.q8,
            title: "What it Takes to de a hotel revenue managemenent at Krafitech Hospitality",
            desc: "Here we are doing the same to improve the property content to reach the maximum area",
            route: "blog8"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.q9,
            title: "How to Improve ranking on otas in COVID times",
            desc: "Our assigned staff will share the monthly growth reports that perfectly exhibit our hard work and efficient planning.",
            route: "blog9"
        },
    ];

    const handleKnowMore = (route) => {
        router.push(`/resources/${route}`)
    }

    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center mt-28 pb-32">
            <div className='flex flex-col justify-start items-start w-[85%] lg:w-[80%] gap-4'>
                <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[25%]">
                    <span className="text-black ml-1">•</span>
                    <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                    <span className='text-sm tracking-widest text-gray-600 uppercase'>Krafitech Hospitality</span>
                </div>
                <div className='font-extrabold tracking-wide text-4xl uppercase'>
                    Blogs
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
                                    className="w-48 h-48 object-contain"
                                />
                                <div className='font-semibold tracking-wide mt-2 text-wrap py-2 px-12 text-center text-md'>
                                    {item.title}
                                </div>
                                {/* <div className='font-medium tracking-wide mt-1 text-wrap px-11 text-center text-md'>
                                    {item.desc}
                                </div> */}
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

export default ContactSupport
