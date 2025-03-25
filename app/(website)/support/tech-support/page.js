import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public'

const page = () => {

  const reasons = [
    {
      id: 1,
      image: IMAGES.agent, // Replace with the actual image path
      title: 'Real-time agent chat experience',
      desc: `Be proud to work with one of the top hospitality technology companies worldwide. We make a difference by powering 100+ hotels in state with effective cloud and on-`
    },
    {
      id: 2,
      image: IMAGES.streamlined, // Replace with the actual image path
      title: 'Creates a streamlined communication channel',
      desc: `We offer excellent benefits including comprehensive health and wellness schemes, facilitating remote working and promoting a great work-life balance.`
    },
    {
      id: 3,
      image: IMAGES.knowledge, // Replace with the actual image path
      title: 'Knowledge centre providing instant support resources',
      desc: `We are on a journey of continued learning and growth, and diversity is what makes us stronger and more innovative. At Krafitech Hospitality, you can expect to`
    },
  ];


  const reasonsnew = [
    {
      id: 1,
      title: "One-on-one support for all queries",
      desc: "",
      image: IMAGES.wtspchat,
    },
    {
      id: 2,
      title: "Real-time direct connect with support agent",
      desc: "",
      image: IMAGES.customersupport,
    },
    {
      id: 3,
      title: "Enhanced customer engagement",
      desc: "Treating all stakeholders, including employees, customers, suppliers, and the community, with dignity, fairness, and empathy, valuing diverse perspectives and fostering inclusivity.",
      image: IMAGES.customerengagement,
    },
  ];

  const cultureData = [
    {
      id: 1,
      title: "Anytime",
      description:
        "By fostering innovation, we strive to push the boundaries and unlock new possibilities for our company's advancement.",
      image: IMAGES.sevensupport,
    },
    {
      id: 2,
      title: "Omni-channel",
      description:
        "We prioritize equity to ensure everyone has equal opportunities, breaking down barriers and fostering a more just society.",
      image: IMAGES.omnichannel,
    },
    {
      id: 3,
      title: "Instant",
      description:
        "With passion as our compass, we are inspired to go beyond limits and create a lasting legacy. beyond limits and create a lasting",
      image: IMAGES.paperplane,
    },
  ];

  return (
    <div className='bg-white'>
      <div className='bg-neutral-200 w-full flex flex-col justify-center items-center h-full pt-32 pb-32 lg:pt-48 lg:pb-40'>
        <div className='w-[90%] lg:w-[80%]'>
          <div className='font-bold tracking-wider text-3xl lg:text-7xl'>
          24/7 Tech Support
          </div>
          <div className='flex flex-col lg:flex-row gap-1'>
            <div className='w-full lg:w-[50%] flex flex-col justify-between'>
              <div className='p-2 rounded-lg bg-[#c14ac178] mt-8 text-lg'>
                <p>Krafitech strives not to simply supply products, but to create solutions to elevate the hospitality industry. This is why we have developed an ecosystem of support to assist our customers anywhere, anytime. Our dedicated support teams will ensure that all our customers have the knowledge and training required to gain the maximum from our world-class products.</p>
                
              </div>
              <div className='tracking-widest mt-8'>
              SCROLL DOWN
            </div>
            </div>
            <div className='w-full lg:w-[50%]'>
              <Image
                height="1500"
                width="1500"
                alt="image"
                src={IMAGES.customercaredesk}
                className="w-full h-full object-scale-down" />
            </div>
            
          </div>
     
        </div>
      </div>


      <div className='flex w-full flex-col justify-center items-center'>
        <div className='w-[90%] lg:w-[80%] pt-32 pb-10'>
          <div className='flex flex-col justify-start items-start w-[100%] lg:w-[100%] gap-4'>
            <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[30%]">
              <span className="text-black ml-1">•</span>
              <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
              <span className='text-sm tracking-widest text-gray-600 uppercase'>Krafitech Hospitality</span>
            </div>
            <div className='font-extrabold tracking-wide text-3xl lg:text-5xl'>
              <p>Here are some key aspects</p>
              <p>we Offerings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-40 w-full lg:w-[85%] mt-16">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="bg-[#dec3ff] p-8 rounded-lg shadow-lg flex flex-col items-center w-full h-full lg:w-[22rem] lg:h-[23rem]"
                >
                  {reason.image && (
                    <Image src={reason.image} alt={reason.title} width={800} height={800} className='w-full h-full lg:w-[60%] lg:h-[60%]'/>
                  )}
                  <h3 className="text-2xl tracking-widest font-semibold text-black text-center mt-4">{reason.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      <div className='flex w-full flex-col justify-center items-center'>
        <div className='w-[90%] lg:w-[80%] pb-10'>
          <div className='flex flex-col justify-start items-start w-[100%] lg:w-[100%] gap-4'>
            <div className='font-bold tracking-wide text-3xl lg:text-[42px] w-full'>
              <p>Connect with us through integrated WhatsApp chat</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-40 w-full lg:w-[85%] mt-8">
              {reasonsnew.map((reason) => (
                <div
                  key={reason.id}
                  className="bg-[#dec3ff] p-8 rounded-lg shadow-lg flex flex-col items-center w-full h-full lg:w-[22rem] lg:h-[23rem]"
                >
                  {reason.image && (
                    <Image src={reason.image} alt={reason.title} width={800} height={800} className='w-full h-full lg:w-[60%] lg:h-[60%]'/>
                  )}
                  <h3 className="text-2xl tracking-widest font-semibold text-black text-center mt-4">{reason.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full flex-col justify-center items-center'>
        <div className='w-[90%] lg:w-[80%] pb-32'>
          <div className='flex flex-col justify-start items-start w-[100%] lg:w-[100%] gap-4'>
            <div className='font-bold tracking-wide text-3xl lg:text-[42px] w-full'>
              <p>Connect with us through integrated WhatsApp chat</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-40 w-full lg:w-[85%] mt-8">
              {cultureData.map((reason) => (
                <div
                  key={reason.id}
                  className="bg-[#dec3ff] p-8 rounded-lg shadow-lg flex flex-col items-center w-full h-full lg:w-[22rem] lg:h-[23rem]"
                >
                  {reason.image && (
                    <Image src={reason.image} alt={reason.title} width={800} height={800} className='w-full h-full lg:w-[60%] lg:h-[60%]'/>
                  )}
                  <h3 className="text-2xl tracking-widest font-semibold text-black text-center mt-4">{reason.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page