"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Instagram, Video, MoveUpRight } from "lucide-react";
import IMAGES from "@/public/index";
import Image from "next/image";

export default function InstagramReels({ instaFeed }) {

  const jobListings = [
    { title: 'Business Management', opportunities: '10+', avatars: ['https://bootdey.com/img/Content/avatar/avatar1.png', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'https://bootdey.com/img/Content/avatar/avatar3.png'] },
    { title: 'UI Designer', opportunities: '5+', avatars: ['https://bootdey.com/img/Content/avatar/avatar1.png', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'https://bootdey.com/img/Content/avatar/avatar3.png'] },
    { title: 'Software Engineer', opportunities: '10+', avatars: ['https://bootdey.com/img/Content/avatar/avatar1.png', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'https://bootdey.com/img/Content/avatar/avatar3.png'] },
    { title: 'Sales & Marketing', opportunities: '30+', avatars: ['https://bootdey.com/img/Content/avatar/avatar1.png', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'https://bootdey.com/img/Content/avatar/avatar3.png'] },
    { title: 'Data Science', opportunities: '10+', avatars: ['https://bootdey.com/img/Content/avatar/avatar1.png', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'https://bootdey.com/img/Content/avatar/avatar3.png'] },
    { title: 'Content Creator', opportunities: '7', avatars: ['https://bootdey.com/img/Content/avatar/avatar1.png', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'https://bootdey.com/img/Content/avatar/avatar3.png'] }
  ];

  return (
    <div className="flex justify-center items-center w-full bg-red-100 py-20">
      <div className="w-[80%]">

        <div className=" py-12 px-6 text-center">
          <div className="font-bold tracking-wide text-4xl text-start flex justify-between">
            <div>WE ARE HIRING</div>
            <div className="flex justify-end pr-10 text-gray-700 text-sm self-end">Immediate Contact Us!</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-purple-300 rounded-lg p-6 shadow-md flex flex-col items-start text-left"
              >
                <div className="flex -space-x-2 mb-2">
                  {job.avatars.map((avatar, i) => (
                    <Image
                      key={i}
                      src={avatar}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="w-10 h-10 border-2 border-white rounded-full"
                    />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-700">{job.opportunities} Jobs opportunities</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}