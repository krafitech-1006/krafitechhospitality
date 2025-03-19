// 'use client'
// import React, { useState, useEffect, useRef } from 'react';

// const NumberStats = () => {
//     const [occupancyRate, setOccupancyRate] = useState(0);
//     const [repeatCustomerRate, setRepeatCustomerRate] = useState(0);
//     const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const statsRef = useRef(null);

//     const easeOut = (t) => 1 - Math.pow(1 - t, 3);

//     const animateNumber = (start, end, duration, setter) => {
//         let startTime = null;

//         const step = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = timestamp - startTime;
//             const progressPercentage = Math.min(progress / duration, 1);
//             const easedProgress = easeOut(progressPercentage);
//             const currentValue = Math.floor(easedProgress * (end - start) + start);

//             setter(currentValue);

//             if (progress < duration) {
//                 window.requestAnimationFrame(step);
//             }
//         };

//         window.requestAnimationFrame(step);
//     };

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasAnimated) {
//                         setHasAnimated(true);


//                         setTimeout(() => {
//                             animateNumber(0, 60, 6000, setOccupancyRate);
//                             animateNumber(0, 72, 6000, setRepeatCustomerRate);
//                             animateNumber(0, 86, 6000, setCustomerSatisfaction);
//                         }, 1000);
//                     }
//                 });
//             },
//             {
//                 root: null, 
//                 rootMargin: '0px 0px -10% 0px',
//                 threshold: 0.1 
//             }
//         );

//         if (statsRef.current) {
//             observer.observe(statsRef.current);
//         }

//         return () => {
//             if (statsRef.current) {
//                 observer.unobserve(statsRef.current);
//             }
//         };
//     }, [hasAnimated]);



//     return (
//         <div ref={statsRef} className="w-full flex justify-center items-center">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-4 lg:gap-4 p-4 w-[90%] lg:[80%]">

//                 {/* First stat */}
//                 <div className="flex justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center h-44 lg:h-48 rounded-md">
//                     <div className="flex flex-col items-center">
//                         <div className="flex flex-row gap-4 sm:gap-8 justify-center items-start">
//                             <div className="border-l-4 h-20 mt-4 border-[#800000]"></div>
//                             <div>
//                                 <div className="text-gray-600 text-6xl lg:text-8xl mt-4">{occupancyRate}%</div>
//                                 <p className="text-gray-500 pt-2 text-sm sm:text-base">Increase in Occupancy Rate</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Second stat */}
//                 <div className="flex justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center h-44 lg:h-48 rounded-md">
//                     <div className="flex flex-col items-center">
//                         <div className="flex flex-row gap-4 sm:gap-8 justify-center items-start">
//                             <div className="border-l-4 h-20 mt-4 border-[#800000]"></div>
//                             <div>
//                                 <div className="text-gray-600 text-6xl lg:text-8xl mt-4">{repeatCustomerRate}%</div>
//                                 <p className="text-gray-500 pt-2 text-sm sm:text-base">Increase in Repeat Customer Rate</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Third stat */}
//                 <div className="flex justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center h-44 lg:h-48 rounded-md">
//                     <div className="flex flex-col items-center">
//                         <div className="flex flex-row gap-4 sm:gap-8 justify-center items-start">
//                             <div className="border-l-4 h-20 mt-4 border-[#800000]"></div>
//                             <div>
//                                 <div className="text-gray-600 text-6xl lg:text-8xl mt-4">{customerSatisfaction}%</div>
//                                 <p className="text-gray-500 pt-2 text-sm sm:text-base">Increase in Customer Satisfaction</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default NumberStats;


















// 'use client'
// import React from 'react';
// import Image from 'next/image';
// import IMAGES from '@/public';

// const NumberStats = () => {

//     return (
//         <div className='w-[100%] mb-20'>
//             <div className='w-full flex flex-col justify-center items-center mt-4'>
//                 <div className='flex flex-row w-[80%] pb-5 gap-16'>
//                     <div className='w-[40%]'>
//                         <div className='ml-4'>
//                             <p className='font-bold text-4xl tracking-wide'>Hello we are,</p>
//                             <p className='font-bold text-4xl tracking-wide'>{"KRAFITECHER'S"}</p>
//                         </div>
//                         <div className='bg-[#f9e3e3] rounded-xl p-4 w-[100%] h-[80%] mt-4'>
//                             <p className='text-gray-600 tracking-wider'>We are thrilled to have you here. With <span className='text-red-900 font-bold'>Kamini Singh</span>, our esteemed owner, who brings with her a wealth of knowledge and experience in the field of hospitality, we are confident in delivering exceptional software solutions tailored specifically for this industry.</p>
//                             <p className='text-gray-600 mt-8 tracking-wider'>Our passion for hospitality has been the driving force behind our commitment to creating innovative software that enhances the guest experience and streamlines operations for hotels, resorts, restaurants, and other hospitality establishments.</p>
//                         </div>
//                     </div>
//                     <div className='w-[30%]'>
//                         <Image
//                             width={200}
//                             height={200}
//                             src={IMAGES.mampic}
//                             alt="header"
//                             className='object-fill rounded-xl mt-28 h-[76%] w-full'
//                         />
//                     </div>
//                 </div>

//                 <div className='flex flex-row w-[75%] pb-5 gap-16'>
//                     <div className='w-[47%]'>
//                         <Image
//                             width={1500}
//                             height={1500}
//                             src={IMAGES.section3}
//                             alt="header"
//                             className='object-fill rounded-xl h-full w-full'
//                         />
//                     </div>
//                     <div className='w-[40%]'>
//                         <div className='bg-[#f9e3e3] rounded-xl p-4 w-[100%] h-[100%] mt-4'>
//                             <p className='text-gray-600 tracking-wider'>At <span className='text-red-900 font-bold'>Krafitech Hospitality</span>, we understand the unique challenges and demands of the hospitality sector. With Kamini Singh&apos;s three years of hands-on hospitality experience, we possess an in-depth understanding of the industry&apos;s nuances, intricacies, and customer expectations. This expertise allows us to developed software solutions that address the specific needs of our clients, helping them improve guest satisfaction, optimize workflows, and ultimately drive their business growth.</p>
//                             <p className='text-gray-600 mt-8 tracking-wider'>By partnering <span className='text-red-900 font-bold'>with Krafitech Hospitality</span>, you can expect a customer-centric approach, where we work closely with you to understand your unique requirements and challenges. We believe in fostering strong, long-term relationships with our clients, providing ongoing support and maintenance to ensure the smooth functioning of our software solutions.</p>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//             <div className='hidden lg:block w-[100%]'>
//                 <div className="bg-gray-100 p-4 w-72 rounded-md ml-40">
//                     {/* Name and Separator */}
//                     <div className="flex items-center text-black font-semibold text-lg">
//                         <span>KAMINI SINGH</span>
//                         <span className="flex-grow border-t border-black mx-2"></span>
//                         <span className="text-black">•</span>
//                     </div>
//                     {/* Role */}
//                     <p className="text-gray-500 text-xs mt-1 tracking-wider">OWNER</p>

//                     {/* Experience Section */}

//                 </div>
//                 <div className="flex items-center ml-40 mt-4">
//                     <div className="text-8xl font-bold text-yellow-600 font-sans">3</div>
//                     <div className="ml-2">
//                         <p className="text-xl font-bold text-blue-700 uppercase">Years of</p>
//                         <p className="text-xl font-bold text-blue-700">Hospitality Experience</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='lg:hidden w-[100%]'>
//                 <div className="bg-gray-100 p-4 w-72 rounded-md">
//                     {/* Name and Separator */}
//                     <div className="flex items-center text-black font-semibold text-lg">
//                         <span>KAMINI SINGH</span>
//                         <span className="flex-grow border-t border-black mx-2"></span>
//                         <span className="text-black">•</span>
//                     </div>
//                     {/* Role */}
//                     <p className="text-gray-500 text-xs mt-1 tracking-wider">OWNER</p>

//                     {/* Experience Section */}

//                 </div>
//                 <div className="flex items-center ml-2">
//                     <div className="text-8xl font-bold text-yellow-600 font-sans">3</div>
//                     <div className="ml-2">
//                         <p className="text-xl font-bold text-blue-700 uppercase">Years of</p>
//                         <p className="text-xl font-bold text-blue-700">Hospitality Experience</p>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     );
// };

// export default NumberStats;
























'use client'
import React from 'react';
import Image from 'next/image';
import IMAGES from '@/public';

const NumberStats = () => {

    return (
<div className="w-full mb-20 px-4 md:px-8">
  <div className="w-full flex flex-col justify-center items-center mt-4">
    <div className="flex flex-col md:flex-row w-full md:w-[90%] pb-5 gap-8 md:gap-16">
      {/* Left Section */}
      <div className="w-full md:w-[40%]">
        <div className="ml-2 md:ml-4">
          <p className="font-bold text-3xl md:text-4xl tracking-wide">Hello we are,</p>
          <p className="font-bold text-3xl md:text-4xl tracking-wide">{"KRAFITECHER'S"}</p>
        </div>
        <div className="bg-[#f9e3e3] rounded-xl p-4 w-full h-auto md:h-[80%] mt-4">
          <p className="text-gray-600 tracking-wider">
            We are thrilled to have you here. With <span className="text-red-900 font-bold">Kamini Singh</span>, our esteemed owner, who brings with her a wealth of knowledge and experience in the field of hospitality, we are confident in delivering exceptional software solutions tailored specifically for this industry.
          </p>
          <p className="text-gray-600 mt-4 md:mt-8 tracking-wider">
            Our passion for hospitality has been the driving force behind our commitment to creating innovative software that enhances the guest experience and streamlines operations for hotels, resorts, restaurants, and other hospitality establishments.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[30%] flex justify-center md:block">
        <Image
          width={200}
          height={200}
          src={IMAGES.mampic}
          alt="header"
          className="object-fill rounded-xl mt-10 md:mt-28 h-[76%] w-full max-w-sm md:max-w-none"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row w-full md:w-[75%] pb-5 gap-8 md:gap-16">
      {/* Left Image */}
      <div className="w-full md:w-[47%]">
        <Image
          width={1500}
          height={1500}
          src={IMAGES.section3}
          alt="header"
          className="object-fill rounded-xl h-full w-full"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[40%]">
        <div className="bg-[#f9e3e3] rounded-xl p-4 w-full h-auto md:h-full mt-4">
          <p className="text-gray-600 tracking-wider">
            At <span className="text-red-900 font-bold">Krafitech Hospitality</span>, we understand the unique challenges and demands of the hospitality sector. With Kamini Singh&apos;s three years of hands-on hospitality experience, we possess an in-depth understanding of the industry&apos;s nuances, intricacies, and customer expectations. This expertise allows us to develop software solutions that address the specific needs of our clients, helping them improve guest satisfaction, optimize workflows, and ultimately drive their business growth.
          </p>
          <p className="text-gray-600 mt-4 md:mt-8 tracking-wider">
            By partnering <span className="text-red-900 font-bold">with Krafitech Hospitality</span>, you can expect a customer-centric approach, where we work closely with you to understand your unique requirements and challenges. We believe in fostering strong, long-term relationships with our clients, providing ongoing support and maintenance to ensure the smooth functioning of our software solutions.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Desktop View */}
  <div className="hidden lg:block w-full">
    <div className="bg-gray-100 p-4 w-72 rounded-md ml-40">
      <div className="flex items-center text-black font-semibold text-lg">
        <span>KAMINI SINGH</span>
        <span className="flex-grow border-t border-black mx-2"></span>
        <span className="text-black">•</span>
      </div>
      <p className="text-gray-500 text-xs mt-1 tracking-wider">OWNER</p>
    </div>
    <div className="flex items-center ml-40 mt-4">
      <div className="text-8xl font-bold text-yellow-600 font-sans">3</div>
      <div className="ml-2">
        <p className="text-xl font-bold text-blue-700 uppercase">Years of</p>
        <p className="text-xl font-bold text-blue-700">Hospitality Experience</p>
      </div>
    </div>
  </div>

  {/* Mobile & Tablet View */}
  <div className="lg:hidden w-full flex flex-col items-center">
    <div className="bg-gray-100 p-4 w-72 rounded-md">
      <div className="flex items-center text-black font-semibold text-lg">
        <span>KAMINI SINGH</span>
        <span className="flex-grow border-t border-black mx-2"></span>
        <span className="text-black">•</span>
      </div>
      <p className="text-gray-500 text-xs mt-1 tracking-wider">OWNER</p>
    </div>
    <div className="flex items-center mt-4">
      <div className="text-8xl font-bold text-yellow-600 font-sans">3</div>
      <div className="ml-2">
        <p className="text-xl font-bold text-blue-700 uppercase">Years of</p>
        <p className="text-xl font-bold text-blue-700">Hospitality Experience</p>
      </div>
    </div>
  </div>
</div>


    );
};

export default NumberStats;
