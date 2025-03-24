"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { Button } from '@nextui-org/react';
import { ChevronRight } from "lucide-react"
import { useRouter } from 'next/navigation';

const RMS = () => {

  const bookingSections = [
    {
      image: IMAGES.r1,
      alt: "New Reservation",
      text: [
        {
          question: "What is Restaurant Management?",
          text: "Restaurant management entails overseeing daily operations, including finances, growth, marketing, workforce, and customer satisfaction. Managers balance business needs, provide leadership, set objectives, and ensure smooth departmental functioning. Utilizing effective strategies and restaurant management software, the goal is to lead the restaurant towards long-term success."
        },
        {
          question: "What is a Restaurant Management System?",
          text: "A restaurant management system is specialized software designed for the restaurant industry, aiding managers in essential tasks. It can encompass various functionalities, including point-of-sale, workforce and inventory management, and booking systems. While some systems offer comprehensive all-in-one solutions, others focus on specific areas of restaurant management."
        }
      ],
      imageFirst: false,
    },
    {
      image: IMAGES.r2,
      alt: "Booking History ",
      text: [
        {
          question: "What Are the Benefits of Restaurant Management Systems?",
          text: "Restaurant management systems offer benefits in automating processes and enhancing the customer experience by delivering fast and frictionless service. These solutions consolidate various operations, including payment processing, financial management, sales tracking, performance monitoring, and personnel management, into a single platform. They serve as crucial restaurant technology, streamlining operations and improving overall efficiency."
        }
      ],
      imageFirst: true, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.r3, // Path to the image
      alt: "Online Booking",
      text: [
        {
          question: "What Are the Key Features of a Good Restaurant Management System?",
          text: "The best restaurant management systems will share similar traits and features, including the following:"
        },
        {
          question: "Cloud-Based:-",
          text: "Cloud-based restaurant management software offers remote access, continuous data updates and backups, and minimized start-up costs through predictable subscription fees. It requires continuous internet access but provides greater security and compatibility with similar applications."
        },
        {
          question: "Reporting & Analytics:-",
          text: "CRM functionality in restaurant management systems consolidates customer communication, facilitating easy access to accommodate special requests, dietary questions, and complaints. Integrated marketing software enables control over online advertising, content strategy, promotions, and marketing emails."
        }
      ],
      imageFirst: false, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.r4, // Path to the image
      alt: "Booking History ",
      text: [
        {
          question: "Additional Integrations:-",
          text: "Seamless integration is vital for restaurant management software, enabling smooth data flow between applications. Customization options and integration with CRM, revenue management, and POS systems ensure efficient operations and meet specific business requirements."
        },
        {
          question: "Technical Support:-",
          text: "A reliable restaurant management system should offer comprehensive technical support, including live chat, ticketing systems, and built-in help resources. Quick access to troubleshooting and tutorials ensures efficient problem-solving for uninterrupted business operations."
        }
      ],
      imageFirst: true, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.r5, // Path to the image
      alt: "Property Master",
      text: [
        {
          question: "Most Important Types of a Restaurant Management System:-",
          text: "There are several different categories of restaurant management systems or components that combine to make up the entire system, and you can learn about five of the most significant of these below:."
        },
        {
          question: "POS System:-",
          text: "A restaurant POS system serves as a central hub for sales-related tasks, including payment processing, billing, and receipt printing. It seamlessly integrates with comprehensive company data for efficient operations. Cloud-based POS systems are compatible with mobile phones, iPads, and tablets, revolutionizing point-of-sale processes by enabling portable devices for payments and multitasking."
        }
      ],
      imageFirst: false, // Determines whether the image appears first or last
    },
    {
      image: "", // Path to the image
      alt: "New Reservation",
      text: [
        {
          question: "Restaurant Management Software:-",
          text: "Restaurant management software streamlines tasks like consolidating bookings, automating guest communication, and providing detailed reports for performance insights. It offers a comprehensive overview of the restaurant's status through a dashboard."
        }
      ],
      imageFirst: true, // Determines whether the image appears first or last
    },
    {
      image: IMAGES.r6, // Path to the image
      alt: "New Reservation",
      text: [
        {
          question: "Order Management Software :-",
          text: "Order management software in restaurant management systems handles customer and supplier orders, automatically updating stock levels as customers place orders. It allows easy access to past and current orders, ensuring accurate food delivery to guests. The software facilitates monitoring and reordering of specific products or ingredients based on stock levels, providing insights into purchasing patterns."
        },
        {
          question: "Employee Management Software :-",
          text: "The employee management component in restaurant management systems enables workforce management, including creating work schedules based on business needs and employee availability. It provides attendance monitoring, tracks holidays and authorized absences, and facilitates payroll management. Additionally, this component may offer communication features, HR functions, and employee benefits management."
        }
      ],
      imageFirst: false, // Determines whether the image appears first or last
    },
  ]

const router = useRouter()

    const handleNavigation = (action) => {
      if (action === "back") {
        router.push('/ourproducts/cloudbasedsystem/pms')
      }
  
      // if (action === "next") {
      //   router.push('/ourproducts/cloudbasedsystem/rms')
      // }
  
    }

  return (
    <div>
      <div className='hidden lg:block relative w-full bg-neutral-200 py-56 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>

          <div className='font-bold tracking-widest text-3xl uppercase'>KRAFITECH RESTAURANT MANAGEMENT SYSTEM (RMS)</div>

          <div className='flex flex-row justify-center items-center mt-8'>
            <div>
              <div className='w-[100%] h-full justify-items-center'>
                <Image src={IMAGES.rms} alt='rms' height={1500} width={1500} className='w-[70%] h-[70%] object-scale-down' />
              </div>
            </div>


          </div>
          <div>
            <Button className='border-white border bg-[#eba022] rounded-full border-opacity-70 p-6 shadow-2xl' onPress={(e) => {
                router.push('/support/contact')
              }}>
              <div className='rounded-full bg-black p-2'>
                <ChevronRight className='size-4 text-white' />
              </div>
              <p className='tracking-widest text-black font-bold ml-4 uppercase'>Book a Demo</p>
            </Button>
          </div>
          <div className='font-bold tracking-wider text-black mb-5 text-3xl mt-16'>BOOKING</div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-16'>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>What is Restaurant Management?</p>
                <p className='mt-4'>Restaurant management entails overseeing daily operations, including finances, growth, marketing, workforce, and customer satisfaction. Managers balance business needs, provide leadership, set objectives, and ensure smooth departmental functioning. Utilizing effective strategies and restaurant management software, the goal is to lead the restaurant towards long-term success.</p>
              </div>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>What is a Restaurant Management System?</p>
                <p className='mt-4'>A restaurant management system is specialized software designed for the restaurant industry, aiding managers in essential tasks. It can encompass various functionalities, including point-of-sale, workforce and inventory management, and booking systems. While some systems offer comprehensive all-in-one solutions, others focus on specific areas of restaurant management.</p>
              </div>
            </div>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.r1} alt='r1' height={1500} width={1500} className='w-[80%] h-[80%]' />
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-16'>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.r2} alt='r2' height={1500} width={1500} className='w-[80%] h-[80%]' />
            </div>
            <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
              <p className='font-semibold'>What Are the Benefits of Restaurant Management Systems?</p>
              <p className='mt-4'>Restaurant management systems offer benefits in automating processes and enhancing the customer experience by delivering fast and frictionless service. These solutions consolidate various operations, including payment processing, financial management, sales tracking, performance monitoring, and personnel management, into a single platform. They serve as crucial restaurant technology, streamlining operations and improving overall efficiency.</p>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-[5rem]'>
              <div className='flex flex-col gap-2'>
                <p>
                  What Are the Key Features of a Good Restaurant Management System?
                </p>
                <p>
                  The best restaurant management systems will share similar traits and features, including the following:
                </p>
              </div>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>Cloud-Based:-</p>
                <p className='mt-4'>Cloud-based restaurant management software offers remote access, continuous data updates and backups, and minimized start-up costs through predictable subscription fees. It requires continuous internet access but provides greater security and compatibility with similar applications.</p>
              </div>
            </div>

            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.r3} alt='r3' height={1500} width={1500} className='w-[80%] h-[80%]' />
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
              <p className='font-semibold'>Reporting & Analytics:-</p>
              <p className='mt-4'>CRM functionality in restaurant management systems consolidates customer communication, facilitating easy access to accommodate special requests, dietary questions, and complaints. Integrated marketing software enables control over online advertising, content strategy, promotions, and marketing emails.</p>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.r4} alt='r4' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
            <div className='flex flex-col gap-4'>

              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>Additional Integrations:-</p>
                <p className='mt-4'>Seamless integration is vital for restaurant management software, enabling smooth data flow between applications. Customization options and integration with CRM, revenue management, and POS systems ensure efficient operations and meet specific business requirements.</p>
              </div>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>Technical Support:-</p>
                <p className='mt-4'>A reliable restaurant management system should offer comprehensive technical support, including live chat, ticketing systems, and built-in help resources. Quick access to troubleshooting and tutorials ensures efficient problem-solving for uninterrupted business operations.</p>
              </div>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='flex flex-col gap-2'>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>Most Important Types of a Restaurant Management System:-</p>
                <p className='mt-4'>There are several different categories of restaurant management systems or components that combine to make up the entire system, and you can learn about five of the most significant of these below:</p>
              </div>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>POS System:-</p>
                <p className='mt-4'>A restaurant POS system serves as a central hub for sales-related tasks, including payment processing, billing, and receipt printing. It seamlessly integrates with comprehensive company data for efficient operations. Cloud-based POS systems are compatible with mobile phones, iPads, and tablets, revolutionizing point-of-sale processes by enabling portable devices for payments and multitasking.</p>
              </div>
            </div>

            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.r5} alt='r5' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
          </div>

          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
              <p className='font-semibold'>Restaurant Management Software:-</p>
              <p className='mt-4'>Restaurant management software streamlines tasks like consolidating bookings, automating guest communication, and providing detailed reports for performance insights. It offers a comprehensive overview of the restaurant&apos;s status through a dashboard.</p>
            </div>
          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='w-[50%] h-full justify-items-center'>
              <Image src={IMAGES.r6} alt='r6' height={1500} width={1500} className='w-[100%] h-[100%]' />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>Order Management Software :-</p>
                <p className='mt-4'>Order management software in restaurant management systems handles customer and supplier orders, automatically updating stock levels as customers place orders. It allows easy access to past and current orders, ensuring accurate food delivery to guests. The software facilitates monitoring and reordering of specific products or ingredients based on stock levels, providing insights into purchasing patterns.</p>
              </div>
              <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
                <p className='font-semibold'>Employee Management Software :-</p>
                <p className='mt-4'>The employee management component in restaurant management systems enables workforce management, including creating work schedules based on business needs and employee availability. It provides attendance monitoring, tracks holidays and authorized absences, and facilitates payroll management. Additionally, this component may offer communication features, HR functions, and employee benefits management.</p>
              </div>
            </div>


          </div>


          <div className='flex flex-row justify-start items-start mt-8'>
            <div className='rounded-lg bg-[#eba022] text-black p-2 w-[35rem] tracking-wider'>
              <p className='font-semibold'>CRM & Marketing Software :-</p>
              <p className='mt-4'>Restaurant management systems with CRM functionality consolidate customer communication for easy access, addressing special requests and complaints. Integrated marketing software allows control over promotions, online advertising, and marketing strategies.</p>
            </div>
          </div>


          <div className='mt-8'>
            <div className='flex flex-row justify-start items-start gap-2'>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
              {/* <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button> */}
            </div>
          </div>
        </div>
      </div>




      <div className='block lg:hidden relative w-full bg-neutral-200 pt-56 pb-32 '>
        <div className='w-[90%] lg:w-[80%] m-auto '>

          <div className="text-center">
            {/* Title */}
            <div className="font-bold tracking-widest text-xl sm:text-2xl md:text-3xl uppercase">
              KRAFITECH RESTAURANT MANAGEMENT SYSTEM (RMS)
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center justify-center mt-6">
              <div className="w-full flex justify-center">
                <Image
                  src={IMAGES.rms}
                  alt="rms"
                  height={1500}
                  width={1500}
                  className="w-[80%] max-w-[500px] h-auto object-scale-down"
                />
              </div>
            </div>
          </div>
          <div>
            <Button className='border-white border bg-[#eba022] rounded-full border-opacity-70 p-6 shadow-2xl' onPress={(e) => {
                router.push('/support/contact')
              }}>
              <div className='rounded-full bg-black p-2'>
                <ChevronRight className='size-4 text-white' />
              </div>
              <p className='tracking-widest text-black font-bold ml-4 uppercase'>Book a Demo</p>
            </Button>
          </div>
          <div className='font-bold tracking-wider text-black mb-5 text-3xl mt-16'>BOOKING</div>


          {/** Booking Sections **/}
          {bookingSections.map((section, index) => (
            <div className='flex flex-col justify-start items-start mt-8' key={index}>
              {section.imageFirst && (
                section.image
                  ? <div className='h-full justify-items-center'>
                    <Image src={section.image} alt={section.alt} height={1500} width={1500} className='w-[100%] h-[100%]' />
                  </div>
                  : ""
              )}
              <div className='flex flex-col gap-2'>
                {section.text.map((item, index) => {
                  return (
                    <div key={index} className='rounded-lg bg-[#eba022] text-black p-2 m-auto tracking-wider'>
                      <p className='font-semibold'>{item.question}</p>
                      <p className='mt-4'>{item.text}</p>
                    </div>
                  )
                })}
              </div>
              {!section.imageFirst && (
                <div className='h-full justify-items-center'>
                  <Image src={section.image} alt={section.alt} height={1500} width={1500} className='w-[100%] h-[100%]' />
                </div>
              )}
            </div>
          ))}


          <div className='mt-8'>
            <div className='flex flex-row justify-start items-start gap-2'>
              <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg' onPress={(e) => handleNavigation("back")}>Back</Button>
              {/* <Button className='bg-white tracking-widest uppercase text-black py-7 px-11 font-semibold border border-gray-300 shadow-lg'>Next</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RMS
