import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public'

const page = () => {

  const reasons = [
    {
      id: 1,
      image: IMAGES.l1, // Replace with the actual image path
      title: 'Real-time agent chat experience',
      desc: `Be proud to work with one of the top hospitality technology companies worldwide. We make a difference by powering 100+ hotels in state with effective cloud and on-`
    },
    {
      id: 2,
      image: IMAGES.l2, // Replace with the actual image path
      title: 'Creates a streamlined communication channel',
      desc: `We offer excellent benefits including comprehensive health and wellness schemes, facilitating remote working and promoting a great work-life balance.`
    },
    {
      id: 3,
      image: IMAGES.l3, // Replace with the actual image path
      title: 'Knowledge centre providing instant support resources',
      desc: `We are on a journey of continued learning and growth, and diversity is what makes us stronger and more innovative. At Krafitech Solution, you can expect to`
    },
  ];


  const reasonsnew = [
    {
      id: 1,
      title: "Accountability",
      desc: "Taking responsibility for actions, decisions, and their consequences, while fostering a culture of individual and collective accountability throughout the organization.",
      image: IMAGES.acountaibility, // Replace with actual image path
    },
    {
      id: 2,
      title: "Integrity",
      desc: "Upholding the highest standards of honesty, transparency, and moral principles in all business practices and interactions.",
      image: IMAGES.integrate,
    },
    {
      id: 3,
      title: "Respect",
      desc: "Treating all stakeholders, including employees, customers, suppliers, and the community, with dignity, fairness, and empathy, valuing diverse perspectives and fostering inclusivity.",
      image: IMAGES.respect,
    },
  ];

  const cultureData = [
    {
      title: "INNOVATION",
      description:
        "By fostering innovation, we strive to push the boundaries and unlock new possibilities for our company's advancement.",
      image: IMAGES.c1,
    },
    {
      title: "EQUALITY",
      description:
        "We prioritize equity to ensure everyone has equal opportunities, breaking down barriers and fostering a more just society.",
      image: IMAGES.c2,
    },
    {
      title: "PASSION",
      description:
        "With passion as our compass, we are inspired to go beyond limits and create a lasting legacy. beyond limits and create a lasting",
      image: IMAGES.c3,
    },
  ];

  return (
    <div className='bg-white'>
      <div className='bg-neutral-200 w-full flex flex-col justify-center items-center h-full pt-48 pb-40'>
        <div className='w-[80%]'>
          <div className='font-bold tracking-wider text-7xl'>
          24/7 Tech Support
          </div>
          <div className='flex flex-row gap-1'>
            <div className='w-[50%] flex flex-col justify-between'>
              <div className='p-2 rounded-lg bg-[#c14ac178] mt-8 text-lg'>
                <p>Krafitech strives not to simply supply products, but to create solutions to elevate the hospitality industry. This is why we have developed an ecosystem of support to assist our customers anywhere, anytime. Our dedicated support teams will ensure that all our customers have the knowledge and training required to gain the maximum from our world-class products.</p>
                
              </div>
              <div className='tracking-widest mt-8'>
              SCROLL DOWN
            </div>
            </div>
            <div className='w-[50%]'>
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
        <div className='w-[80%] py-32'>
          <div className='flex flex-col justify-start items-start w-[100%] lg:w-[100%] gap-4'>
            <div className="flex items-center text-black font-semibold text-lg w-[85%] lg:w-[30%]">
              <span className="text-black ml-1">•</span>
              <span className="flex-grow border-t-2 border-gray-300 mr-2"></span>
              <span className='text-sm tracking-widest text-gray-600 uppercase'>Krafitech Hospitality</span>
            </div>
            <div className='font-extrabold tracking-wide text-5xl'>
              <p>Here are some key aspects</p>
              <p>we Offerings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-[85%] mt-16">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="bg-[#e5e5e5] p-6 rounded-lg shadow-lg border-t-4 border-green-500 flex flex-col items-center"
                >
                  {reason.image && (
                    <Image src={reason.image} alt={reason.title} width={50} height={50} />
                  )}
                  <h3 className="text-lg font-semibold text-[#999] mt-4">{reason.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full flex-col justify-center items-center'>
        <div className='w-[80%] pb-32'>
          <div className='flex flex-col gap-7'>
            <p className='font-bold text-5xl tracking-wide'>Krafitech Ethos</p>
            <p className='text-gray-500'>What makes us stronger as a workforce are the values and principles we encourage within the organisation.</p>
            <p className='mt-1 font-bold text-xl'>The AIR we breathe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-rows-3 gap-6 w-full mt-8">
            {reasonsnew.map((reason) => (
              <div
                key={reason.id}
                className="bg-blue-200 p-6 rounded-lg shadow-lg border-2 border-orange-500 flex flex-row items-center transition-all duration-300 hover:scale-105 gap-8"
              >
                <Image src={reason.image} alt={reason.title} width={1500} height={1500} className='size-28' />
                <div className='flex flex-col w-full gap-2'>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 text-start">{reason.title}</h3>
                  <p className="text-base text-gray-800 mt-2 text-start">{reason.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center items-center">
      <div className="w-[80%] pb-32">
        <section className="text-start">
          <h2 className="text-5xl font-bold">Our Culture</h2>
          <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-8 w-[85%]">
              {cultureData.map((item, index) => (
                <div
                  key={index}
                  className="max-w-xs bg-neutral-50 shadow-lg border-2 border-green-400 border-t-5 p-4  transition duration-300 hover:shadow-xl hover:border-yellow-400 flex flex-col items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={200}
                    width={200}
                    className="w-full h-full object-fill"
                  />
                  <div className='flex justify-center items-center w-full'>
                  <div className='border-2 border-white w-[90%]'></div>
                  </div>
                  
                  <h3 className="mt-4 text-[#999] font-semibold text-lg text-center uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-md text-[#576168] text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>



    </div>
  )
}

export default page