import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public'

const page = () => {

    const reasons = [
        {
            id: 1,
            image: IMAGES.s1, // Replace with the actual image path
            title: 'Sanskruti Resort',
            problem: 'Very low direct bookings as most bookings was coming from OTAs.',
            desc: `
                                                                                The direct booking numbers witnessed a
                                                                                surge of over 30% when the function was
                                                                                delegated to Krafitech Hospitality team.
                                                                                Our team also recorded the call details
                                                                                in a software and made regular
                                                                                follow-ups, resulting in more closures.
                                                                                In the end, we helped the client save
                                                                                commission, which otherwise had to be
                                                                                paid to OTAs, by leaps and bounds.
                                                                            `
        },
        {
            id: 2,
            image: IMAGES.s2, // Replace with the actual image path
            title: 'Scirocco Resort',
            problem: 'Less online visibility with zero business from OTA',
            desc: `
                                                                                Scirocco Resort had low online
                                                                                visibility with zero business from OTA.
                                                                                Our team at Krafitech Hospitality
                                                                                created
                                                                                a fresh portfolio of high resolution
                                                                                pictures and updated the content on the
                                                                                OTA’s website with a professional touch.
                                                                                We also revamped the client’s website to
                                                                                make it more user-friendly and
                                                                                incorporated the best SEO practices for
                                                                                better search engine ranking. We further
                                                                                helped create a social media campaign to
                                                                                improve the engagement with their
                                                                                potential customers.
                                                                            `
        },
        {
            id: 3,
            image: IMAGES.s3, // Replace with the actual image path
            title: 'Mountain View',
            problem: 'Very low direct bookings as most bookings was coming from OTAs.',
            desc: `
                                                                                The direct booking numbers witnessed a
                                                                                surge of over 30% when the function was
                                                                                delegated to Krafitech Hospitality team.
                                                                                Our team also recorded the call details
                                                                                in a software and made regular
                                                                                follow-ups, resulting in more closures.
                                                                                In the end, we helped the client save
                                                                                commission, which otherwise had to be
                                                                                paid to OTAs, by leaps and bounds.
                                                                            `
        },
        {
            id: 3,
            image: IMAGES.s3, // Replace with the actual image path
            title: 'Mountain View',
            problem: 'Very low direct bookings as most bookings was coming from OTAs.',
            desc: `
                                                                                The direct booking numbers witnessed a
                                                                                surge of over 30% when the function was
                                                                                delegated to Krafitech Hospitality team.
                                                                                Our team also recorded the call details
                                                                                in a software and made regular
                                                                                follow-ups, resulting in more closures.
                                                                                In the end, we helped the client save
                                                                                commission, which otherwise had to be
                                                                                paid to OTAs, by leaps and bounds.
                                                                            `
        },
        {
            id: 4,
            image: IMAGES.s4, // Replace with the actual image path
            title: 'JC Guest House',
            problem: 'Increase in Booking.com No show guest and unable to manage booking.com',
            desc: `JC Guest House had listed itself on booking.com but was unable to collect payments as there was no payment gateway embedded on the page. Thanks to our tie-up with the client, we set up the payment gateway at the outset and started collecting the online payment from booking.com. As a result, no show bookings dropped significantly.`
        },
        {
            id: 5,
            image: IMAGES.s5, // Replace with the actual image path
            title: 'Sunrise Villa',
            problem: 'Ineffective upselling and cross-selling strategies.',
            desc: `Krafitech Hospitality deploy a revenue optimization tool that identifies upsell and cross-sell opportunities, enabling personalized offers to maximize guest spend.`
        },
        {
            id: 6,
            image: IMAGES.s6, // Replace with the actual image path
            title: 'Hotel Vrushali Inn',
            problem: 'Limited integration between OTAs and other hotel systems.',
            desc: `Krafitech Hospitality managed a hotel technology platform that offers seamless integration between OTAs, PMS, and other essential systems, streamlining operations and data flow.`
        },
        {
            id: 7,
            image: IMAGES.s7, // Replace with the actual image path
            title: 'Shreesha Resort',
            problem: 'No social media presence and no OTA presence',
            desc: `Shresha Resort had little to no social media presence and zero OTA listings until we stepped in to shoulder them with creating a brand awareness campaign. The social media team at Krafitech Hospitality started to work on their social media profile and OTA contracting aggressively. Our strategy included both paid as well as organic social media campaigns, and consequently getting them listed on all the popular OTAs. Our collaboration resulted in a 45% boost in our client’s revenue to 70% from mere 25%: all of this in a span of just 2 months.`
        },
    ];

    return (
        <div>
            <div className='hidden lg:block bg-white'>
                <div className='bg-neutral-100 w-full flex flex-col justify-center items-center h-full pt-48 pb-40'>
                    <div className='w-[100%]'>
                        <div className='flex flex-row gap-1'>
                            <div className='w-[100%]'>
                                <Image
                                    height="1500"
                                    width="1500"
                                    alt="image"
                                    src={IMAGES.krafitechad}
                                    className="w-full h-full object-scale-down" />
                            </div>

                        </div>
                    </div>
                </div>



                <div className='flex w-full flex-col justify-center items-center'>
                    <div className='w-[80%] pt-32 pb-10'>
                        <div className='flex flex-col justify-start items-start w-[100%] lg:w-[100%] gap-4'>
                            <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[30%]">
                                <span className="text-black ml-1">•</span>
                                <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                                <span className='text-sm tracking-widest text-gray-600 uppercase'>Krafitech Hospitality</span>
                            </div>
                            <div className='font-extrabold tracking-wide text-5xl'>
                                <p>See Our Client Success</p>
                                <p>Stories</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[95%] mt-16">
                                {reasons.map((reason, index) => (
                                    <div className="max-w-sm mx-auto bg-[#bbbbbb] overflow-hidden" key={index}>
                                        <div className="relative w-full h-52">
                                            <Image
                                                src={reason.image} // Replace with actual path
                                                alt="Sanskruti Resort"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-5">
                                            <h2 className="text-xl font-bold text-center tracking-wider">{reason.title}</h2>
                                            <div className="w-10 h-[2px] bg-yellow-500 mx-auto my-2"></div>
                                            <p className="text-md text-gray-700 text-center">
                                                Problem:  {reason.problem}
                                            </p>
                                            <div className="mt-3 h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-300">
                                                <p className="text-md text-gray-700 text-center">
                                                    {reason.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



            </div>



            <div className="block lg:hidden bg-white">
                <div className="bg-neutral-100 w-full flex flex-col justify-center items-center h-full pt-24 md:pt-48 pb-20 md:pb-40">
                    <div className="w-full px-4 md:px-0">
                        <div className="flex flex-row gap-1">
                            <div className="w-full">
                                <Image
                                    height="1500"
                                    width="1500"
                                    alt="image"
                                    src={IMAGES.krafitechad}
                                    className="w-full h-auto object-scale-down"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col justify-center items-center">
                    <div className="w-[90%] md:w-[80%] pt-20 md:pt-32 pb-10">
                        <div className="flex flex-col justify-start items-start w-full gap-4">
                            <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[40%]">
                                <span className="text-black ml-1">•</span>
                                <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
                                <span className="text-sm tracking-widest text-gray-600 uppercase">
                                    Krafitech Hospitality
                                </span>
                            </div>
                            <div className="font-extrabold tracking-wide text-3xl md:text-5xl text-center md:text-left">
                                <p>See Our Client Success</p>
                                <p>Stories</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full mt-10 md:mt-16">
                                {reasons.map((reason, index) => (
                                    <div
                                        className="max-w-sm mx-auto bg-[#bbbbbb] overflow-hidden shadow-md"
                                        key={index}
                                    >
                                        <div className="relative w-full h-48 md:h-52">
                                            <Image
                                                src={reason.image} // Replace with actual path
                                                alt="Sanskruti Resort"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-t-lg"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-4 md:p-5">
                                            <h2 className="text-lg md:text-xl font-bold text-center tracking-wider">
                                                {reason.title}
                                            </h2>
                                            <div className="w-8 md:w-10 h-[2px] bg-yellow-500 mx-auto my-2"></div>
                                            <p className="text-sm md:text-md text-gray-700 text-center">
                                                <strong>Problem:</strong> {reason.problem}
                                            </p>
                                            <div className="mt-3 h-32 md:h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-300">
                                                <p className="text-sm md:text-md text-gray-700 text-center">
                                                    {reason.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page