// 'use client'
// import IMAGES from '@/public';
// import { MoveUpRight } from 'lucide-react';
// import React, { useState } from 'react';
// import { motion } from "framer-motion";
// import { useRouter } from 'next/navigation';

// const Allpackages = () => {
//     const [activeButton, setActiveButton] = useState(0);

//     const router = useRouter();

//     // Variants for sections and image transitions
//     const sectionVariants = {
//         hidden: { opacity: 0, y: 30 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 1, ease: "easeInOut" },
//         },
//     };

//     const imageVariants = {
//         initial: { opacity: 0, y: 30 },
//         animate: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.9, ease: "easeInOut" },
//         },
//         exit: { opacity: 0, x: 30, transition: { duration: 0.5, ease: "easeInOut" } },
//     };

//     const buttonsData = [
//         { id: 0, heading: 'Revenue Management', content: 'Through our data-driven approach, We analyze market trends and competitor pricing to optimize occupancy and maximize your revenue potential.', image: IMAGES.revenue },
//         { id: 1, heading: 'Website Development', content: 'Our custom software and website solutions streamline operations and enhance guest experiences, driving efficiency and revenue growth.', image: IMAGES.revenue },
//         { id: 2, heading: 'Digital Marketing', content: 'Our digital marketing services boost your hotel’s visibility through targeted SEO, social media, and online advertising.', image: IMAGES.digitalmarketing },
//     ];

//     const handleClick = (buttonId) => {
//         setActiveButton(buttonId);
//     };

//     const handleLink = (id) => {

//         if(id === 0) {
//             router.push(`/services/revenue-management`)
//         }

//         if(id === 1) {
//             router.push(`/services/web-development`)
//         } 

//         if(id === 2) {
//             router.push(`/services/digital-marketing`)
//         }

//     }

//     return (
//         <div className='flex flex-col gap-10'>
//             <div className='w-[90%] lg:w-[80%] mx-auto'>
//                 <div className='w-full justify-start lg:justify-center items-center flex flex-col gap-10'>
//                     <h2 className='text-3xl lg:text-4xl font-semibold text-[#800000] text-start lg:text-center w-full'>Krafitech for Everything</h2>
//                     <div className='w-full flex justify-start lg:justify-center items-center'>
//                         <p className='text-start lg:text-center w-[85%]'>At Krafitech, By optimizing your revenue management, enhancing your online presence, and effectively marketing your offerings, you can create a strong foundation for success.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='w-[90%] lg:w-[80%] mx-auto flex gap-4 lg:gap-10 h-full flex-col lg:flex-row '>
//                 <div className="flex flex-col w-full lg:w-[30%] gap-5 h-full ">
//                     {buttonsData.map(({ id, heading, content }) => (
//                         <motion.div
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: false }}
//                             variants={sectionVariants}
//                             key={id}
//                             onClick={() => handleClick(id)} // Set active button on click
//                             className={`flex flex-col items-start p-5 rounded-xl gap-5 cursor-pointer
//                             ${activeButton === id ? 'bg-white border border-[#800000] shadow-xl' : 'bg-gray-200 border-gray-500'}`}
//                         >
//                             <h2
//                                 className="font-semibold text-xl text-gray-600 w-full h-full"
//                             >
//                                 {heading}
//                             </h2>
//                             {activeButton === id && (
//                                 <div className="flex flex-col items-start h-full gap-5">
//                                     <div className='w-full flex lg:hidden overflow-hidden h-full'>
//                                         {buttonsData.map(({ id, heading, image }) => (
//                                             activeButton === id && (
//                                                 <motion.div
//                                                     key={id}
//                                                     initial="initial"
//                                                     animate="animate"
//                                                     exit="exit"
//                                                     variants={imageVariants}
//                                                     className="bg-gray-200 flex flex-col items-start w-full h-full rounded-xl"
//                                                 >
//                                                     <img src={image} alt={`${heading} Image`} className="mb-2 rounded w-full h-full " />
//                                                 </motion.div>
//                                             )
//                                         ))}
//                                     </div>
//                                     <p>{content}</p>
//                                     <button className='flex gap-2 justify-center items-center px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold' onClick={(e) => handleLink(id)}>
//                                         Explore More <span><MoveUpRight className='size-4' /></span>
//                                     </button>
//                                 </div>
//                             )}
//                         </motion.div>
//                     ))}
//                 </div>
//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: false }}
//                     variants={sectionVariants}
//                     className='hidden lg:flex w-[70%] overflow-hidden h-full'
//                 >
//                     {buttonsData.map(({ id, heading, image }) => (
//                         activeButton === id && (
//                             <motion.div
//                                 key={id}
//                                 initial="initial"
//                                 animate="animate"
//                                 exit="exit"
//                                 variants={imageVariants}
//                                 className="bg-gray-200 flex flex-col items-start w-full h-full rounded-xl"
//                             >
//                                 <img src={image} alt={`${heading} Image`} className="mb-2 rounded w-full h-full " />
//                             </motion.div>
//                         )
//                     ))}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Allpackages;



'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import IMAGES from '@/public';
import Image from 'next/image';

const Allpackages = () => {

    const clientKraft = [
        {
            img: IMAGES.pic1,
            title: "Scirocco Resort",
            problem: "Problem : Less online visibility with zero business from OTA",
            desc: `Scirocco Resort had low online
                                visibility with zero business from OTA.
                                Our team at Krafitech Hospitality
                                created a fresh portfolio of high resolution
                                pictures and updated the content on the
                                OTA’s website with a professional touch.
                                We also revamped the client’s website to
                                make it more user-friendly and
                                incorporated the best SEO practices for
                                better search engine ranking. We further
                                helped create a social media campaign to
                                improve the engagement with their
                                potential customers.`,
        },
        {
            img: IMAGES.pic2,
            title: "Sanskruti Resort",
            problem: "Problem : Very low direct bookings as most bookings was coming from OTAs.",
            desc: `The direct booking numbers witnessed a surge of over 30% when the function was
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
            img: IMAGES.pic3,
            title: "Mountain View",
            problem: "Problem : Very low direct bookings as most bookings was coming from OTAs.",
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
            img: IMAGES.pic4,
            title: "JC Guest House",
            problem: "Problem :  Increase in Booking.com No show guest and unable to manage booking.com",
            desc: `
                                                        JC Guest House had listed
                                                        itself on booking.com but was unable to
                                                        collect payments as there was no payment
                                                        gateway embedded on the page. Thanks to
                                                        our tie-up with the client, we set up
                                                        the payment gateway at the outset and
                                                        started collecting the online payment
                                                        from booking.com. As a result, no show
                                                        bookings dropped significantly.
                                                    `
        }, {
            img: IMAGES.pic5,
            title: "Sunrise Villa",
            problem: "Problem: Ineffective upselling and cross-selling strategies.",
            desc: `
                                                        Krafitech Hospitality deploy a revenue
                                                        optimization tool that
                                                        identifies upsell and cross-sell
                                                        opportunities, enabling personalized
                                                        offers to maximize guest spend.
                                                    `
        }, {
            img: IMAGES.pic6,
            title: "Hotel Vrushali Inn",
            problem: "Problem: Limited integration between OTAs and other hotel systems.",
            desc: `
                                                        Krafitech Hospitality managed a hotel
                                                        technology platform that offers seamless
                                                        integration between OTAs, PMS, and other
                                                        essential systems, streamlining
                                                        operations and data flow.
                                                    `
        }, {
            img: IMAGES.pic7,
            title: "Shreesha Resort",
            problem: "Problem : No social media presence and no OTA presence",
            desc: `
                                                        Shresha Resort had little to no social
                                                        media presence and zero OTA listings
                                                        until we stepped in to shoulder them
                                                        with creating a brand awareness
                                                        campaign. The social media team at
                                                        Krafitech Hospitality started to work on
                                                        their social media profile and OTA
                                                        contracting aggressively. Our strategy
                                                        included both paid as well as organic
                                                        social media campaigns, and consequently
                                                        getting them listed on all the popular
                                                        OTAs. Our collaboration resulted in a
                                                        45% boost in our client’s revenue to 70%
                                                        from mere 25%: all of this in a span of
                                                        just 2 months.
                                                    `
        }, {
            img: IMAGES.pic8,
            title: "GOPAL VILLA",
            problem: "Problem: Overbooking due to manual inventory management.",
            desc: `
                                                        Krafitech hospitality Implement an
                                                        automated channel manager that
                                                        synchronizes inventory across all OTAs,
                                                        sold hotel and reducing the risk of
                                                        overbooking.
                                                    `
        }
    ]


    return (
        // <div>
        //     <div className='text-4xl font-bold tracking-wide ml-40 mb-8'>
        //         See Our Trusted Clients:
        //     </div>
        //     <div className='flex justify-center items-center w-full'>
        //         <div className='w-[98%]'>
        //             <Swiper
        //                 slidesPerView={3}
        //                 spaceBetween={30}
        //                 centeredSlides={true}
        //                 autoplay={{
        //                     delay: 2500,
        //                     disableOnInteraction: false,
        //                 }}
        //                 pagination={{
        //                     clickable: false,
        //                 }}
        //                 navigation={false}
        //                 modules={[Autoplay]}
        //                 className="mySwiper w-[90%]"
        //             >
        //                 {clientKraft?.map((item, index) => {
        //                     return (
        //                         <SwiperSlide className='max-w-[25%] bg-gray-100 rounded-lg shadow-lg overflow-hidden' key={index}>
        //                             <div className="">
        //                                 <div className="h-60 w-full">
        //                                     <Image
        //                                         alt="Resort Image"
        //                                         height={1500}
        //                                         width={1500}
        //                                         src={item.img}
        //                                         objectFit="cover"
        //                                         className="rounded-t-lg"
        //                                     />
        //                                 </div>
        //                                 <div className="p-4 bg-[#bbb6b6]">
        //                                     <div className="text-xl tracking-wide font-bold text-center py-8">
        //                                         {item.title}
        //                                         <div className="w-12 h-1 bg-yellow-600 mx-auto mt-1"></div>
        //                                     </div>
        //                                     <p className="text-gray-700 font-semibold mt-3 text-left text-base">
        //                                         {item.problem}
        //                                     </p>
        //                                     <div className="mt-2 text-base max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-200 pr-2 text-left">
        //                                         <p className="text-gray-600">
        //                                             {item.desc}
        //                                         </p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                     )
        //                 })}
        //             </Swiper>
        //         </div>
        //     </div>

        // </div>



        <div>
        <div className="text-4xl font-bold tracking-wide ml-40 mb-8 max-md:ml-4 max-md:text-4xl">
            See Our Trusted Clients:
        </div>
        <div className="flex justify-center items-center w-full">
            <div className="w-[98%]">
                <Swiper
                    slidesPerView={3}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {clientKraft?.map((item, index) => {
                        return (
                            <SwiperSlide className="max-w-[25%] bg-gray-100 rounded-lg shadow-lg overflow-hidden max-md:max-w-full" key={index}>
                                <div>
                                    <div className="h-60 w-full">
                                        <Image
                                            alt="Resort Image"
                                            height={1500}
                                            width={1500}
                                            src={item.img}
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <div className="p-4 bg-[#bbb6b6]">
                                        <div className="text-xl tracking-wide font-bold text-center py-8">
                                            {item.title}
                                            <div className="w-12 h-1 bg-yellow-600 mx-auto mt-1"></div>
                                        </div>
                                        <p className="text-gray-700 font-semibold mt-3 text-left text-base">
                                            {item.problem}
                                        </p>
                                        <div className="mt-2 text-base max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-200 pr-2 text-left">
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </div>
    );
};

export default Allpackages;

