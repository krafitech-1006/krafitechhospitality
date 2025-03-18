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
            image: IMAGES.rcard01,
            title: "Virtual Front Office",
            desc: "We provied 24*7 Staff to Manage your Account & Front Desk be Half of you.",
            route: "virtual-front-office"
        },
        {
            id: '66c4798a11f67143ae90ecc3',
            image: IMAGES.rcard02,
            title: "OTA's Registration",
            desc: "We List Your Property On Most Populer OTA's (Online Traval Agents)",
            route: "ota-registration"
        },
        {
            id: '66c4798a11f67143ae90ecc4',
            image: IMAGES.rcard03,
            title: "OTA's Sales Optimization",
            desc: "We Also Manage Your OTA's Season wise rate Update run Offers/Promotions.",
            route: "ota-sales-optimization"
        },
        {
            id: '66c4798a11f67143ae90safdsd4',
            image: IMAGES.rcard04,
            title: "Rate Management",
            desc: "The agreement between hotels and Online Travel Agencies.",
            route: "rate-management"
        },
        {
            id: '66c4798a11f67143ae90safdsd5',
            image: IMAGES.rcard05,
            title: "Promo Code Management",
            desc: "we create applicable promo codes and coupons which are relevant to our client’s",
            route: "promo-code-management"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard06,
            title: "Online Reputation Optimization",
            desc: "Hotel reviews have a direct impact on your hotel's demand. A positive review from happy guests .",
            route: "online-reputation-optimization"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard07,
            title: "Payment Followup",
            desc: "We are more concerned about the revenue which you are expecting at end of the month.",
            route: "payment-followup"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard08,
            title: "Sales Oriented Content Writing",
            desc: "Here we are doing the same to improve the property content to reach the maximum area",
            route: "sales-oriented-content-writing"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard09,
            title: "Growth Report",
            desc: "Our assigned staff will share the monthly growth reports that perfectly exhibit our hard work and efficient planning.",
            route: "growth-report"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard010,
            title: "Property Audit",
            desc: "We do Property Audit from a Guest point of view in which we make sure to observe a minute detail of the whole property.",
            route: "property-audit"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard011,
            title: "B2B partnership",
            desc: "We always focus on enlarging your hotel business to the next level",
            route: "b2b-partnership"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard012,
            title: "Dealing With Travel Partner",
            desc: "Our skilled employees always get in touch with Travel Partners to grab maximum b2b travel advantage for your hotel.",
            route: "dealing-with-travel-partner"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard013,
            title: "Hotel Renovation And Beautification",
            desc: "Nowadays, hotel renovation is not only replacing worn out furniture and mattresses but much more .",
            route: "hotel-renovation-and-beautification"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard014,
            title: "Hotel Maintenance",
            desc: "It’s a daily hassle for a hotel to keep fixing the wear & tear in the property. Whether it’s about fixing a plumbing, electrical, carpentry works etc..",
            route: "hotel-maintenance"
        },
        {
            id: '66c4798a11f67143ae90safewr6',
            image: IMAGES.rcard015,
            title: "Hotel Operations",
            desc: "Are you planning to open a new hotel or you want someone who can run a hotel behalf of you by taking care of all .",
            route: "hotel-operations"
        },
    ];

    const handleKnowMore = (route) => {
        router.push(`/services/revenue-management/${route}`)
    }

    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center mt-28">
            <div className='flex flex-col justify-start items-start w-[85%] lg:w-[80%] gap-4'>
                <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[25%]">
                    <span className="text-black ml-1">•</span>
                    <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                    <span className='text-sm tracking-widest text-gray-600 uppercase'>Krafitech Solutions</span>
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

export default ContactSupport
