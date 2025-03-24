"use client";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button, Divider } from "@nextui-org/react";
import { siteConfig } from "@/config/siteconfig";
import { Link } from "@nextui-org/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import IMAGES from "@/public/index";
import { usePathname } from "next/navigation";
import Swal from 'sweetalert2';

export default function Footer() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const iconComponents = {
    Facebook: <Facebook className="size-5" />,
    Instagram: <Instagram className="size-5" />,
    Linkedin: <Linkedin className="size-5" />,
    Youtube: <Youtube className="size-5" />,
  };

  const socialLinks = [
    { href: "https://facebook.com", icon: "Facebook" },
    { href: "https://linkedin.com", icon: "Linkedin" },
    { href: "https://youtube.com", icon: "Youtube" },
    { href: "https://instagram.com", icon: "Instagram" },
  ];

  const pathname = usePathname();

  const itemClasses = {
    base: "w-full",
    title: "text-base xl:text-2xl text-white/60",
    trigger: "px-2 py-0 data-[hover=true]:bg-primary-100 rounded-lg h-14 2xl:h-20 flex items-center",
    indicator: "text-small xl:text-large text-white/60",
    content: "text-small xl:text-medium px-2",
  };

  const handleSubmit = async () => {

    console.log("Data", email, fullName, phoneNumber)

    const formData = {
      name: fullName,
      mobile: phoneNumber,
      email: email,
      message: "Contact",
    }


    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: "serviceContact",
        formValues: formData,
      }),
    });
    if (response.ok) {
      Swal.fire({
          
                          title: "Form submitted successfully!",
          
                          text: "Team connect with you soon",
          
                          icon: "success"
          
                      }).then((result) => {
          
          
                      });
      setFullName("");
      setEmail("");
      setPhoneNumber("");
    }

  };


  return (
    <>

      {/* <div className="w-full bg-white mb-7 mt-14">
        <div className="w-[90%] lg:w-[80%] mx-auto flex items-center justify-between py-2">
          <div className="md:flex items-center md:justify-between gap-4">
            <Link href="/" className="flex justify-center items-center gap-5">
            <img
            src={IMAGES.mainLogo}
            alt="Krafitech-logo"
            className="w-52 h-12 object-contain"
          />
 
            </Link>

          </div>
          <div className="flex lg:mt-0 justify-between items-center gap-4 text-gray-500 ">

            <Link href="/contact-us" className="flex">
              <Button variant="shadow" color="default" className="bg-purple-300 text-black font-bold tracking-wide" radius="full" size="md">
                Let&apos;s Get Started
              </Button>
            </Link>

          </div>
        </div>
      </div> */}

      <footer className="w-full h-fit relative bg-red-100 text-gray-500 mt-0">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          {/* <Divider className="w-full" /> */}

          <div className="flex w-full mx-auto flex-col lg:flex-row py-5 text-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[0.25rem]">
              <div className="p-3 px-0 flex flex-col gap-2">
                <p className="font-semibold tracking-wider text-black">OUR OFFICE</p>
                <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                <p className="text-black tracking-wide text-sm">
                  Office No.1006
                  Juhi Niharika Mirage, 274, Kopra Rd, Sector 10, Kharghar, Navi Mumbai, Maharashtra 410210.
                </p>
                <a href="https://maps.app.goo.gl/LQZzRHKRaVXkZrc59" target="_blank" rel="noopener noreferrer" className="font-semibold text-themeColor">
                  Locate Us
                </a>

              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold tracking-wider text-black">CALL US</h4>
                <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                <p className="text-gray-400">
                  Request a quote or just chat about your next vacation
                </p>
                <p className="text-black tracking-wide">7021719016</p>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold tracking-wider text-black">WRITE TO US</h4>
                <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                <p className="text-gray-400">
                  Be it an inquiry, feedback, or a simple suggestion.
                </p>
                <Link href="mailto:admin@Krafitechahospitality.com" className="mt-1 text-black tracking-wide">
                  admin@krafitechahospitality.com
                </Link>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <p className="font-semibold tracking-wider text-black">CONNECT WITH US:</p>
                <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                <div className="flex space-x-4 mt-4 md:mt-0 text-themeColor ">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="bg-purple-500 text-white hover:text-black hover:bg-purple-300 p-2 rounded-full"
                    >
                      {iconComponents[link.icon]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full mx-auto flex-col lg:flex-row py-5 text-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[0.25rem]">
              <div className="p-3 px-0 flex flex-col gap-3">
                <h4 className="font-semibold tracking-wider text-black uppercase">Sales</h4>
                <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                <Link href="mailto:admin@Krafitechahospitality.com" className="text-gray-400 text-sm">
                  admin@krafitechahospitality.com
                </Link>
                <p className="text-themeColor font-semibold">Phone no. - +91 70217 19016</p>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold tracking-wider text-black uppercase">Support</h4>
                <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                <Link href="mailto:admin@Krafitechahospitality.com" className="text-gray-400 text-sm">
                  admin@krafitechahospitality.com
                </Link>
                <p className="text-themeColor font-semibold">Phone no. - +91 70217 19016</p>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold tracking-wider text-black uppercase">Tech Support</h4>
                <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                <Link href="mailto:admin@Krafitechahospitality.com" className="text-gray-400 text-sm">
                  tech@krafitechahospitality.com
                </Link>
                <p className="text-themeColor font-semibold">Phone no. - +91 70217 19016</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex w-full mx-auto flex-col lg:flex-row py-5 lg:py-10 border-b-2 border-gray-300 gap-[0.75rem]">
              <div className="flex-1">
                <div className="w-full lg:w-[80%] flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold tracking-wider text-black uppercase">
                    GET IN TOUCH!
                  </h2>
                  <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                  <p className="text-gray-600">
                    Subscribe to our newsletter to find great offers in your
                    inbox.
                  </p>

                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="flex justify-between gap-5 flex-col lg:flex-row">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border flex-1 p-3 rounded-xl font-normal"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email ID"
                          className="border flex-1 p-3 rounded-xl font-normal"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between gap-5 flex-col lg:flex-row">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="border flex-1 p-3 rounded-xl font-normal"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="border flex-1 p-3 rounded-xl bg-purple-500 text-white font-medium"
                          onClick={() => handleSubmit()}
                        >
                          Get a call back!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-5 p-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 place-content-center">
                  {/* <div>
                  <h3 className="font-semibold mb-4">Main Links</h3>
                  <ul className="space-y-1 text-gray-600 flex flex-col">
                    {siteConfig.ServicesItems.map((item) => (
                      <div key={item.href}>
                        <Link
                          className={`link ${pathname === item.href
                            ? "text-primary font-extralight"
                            : "text-white font-extralight text-sm"
                            }`}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div> */}

                  <div>
                    <h3 className="font-semibold tracking-wider text-black uppercase mb-4">Support</h3>
                    <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                    <ul className="space-y-1 text-gray-600 flex flex-col">
                      {siteConfig.navItems.map((item) => (
                        <div key={item.href}>
                          <Link
                            className={`link ${pathname === item.href
                              ? "text-[#800000] font-semibold"
                              : "text-gray-500 font-extralight text-sm"
                              }`}
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold tracking-wider text-black uppercase mb-4">Quick Links</h3>
                    <div className="border-b-2 w-4 h-0 border-purple-500 mb-3"></div>
                    <ul className="space-y-1 text-gray-600 flex flex-col">
                      {siteConfig.PoliciesItems.map((item) => (
                        <div key={item.href}>
                          <Link
                            className={`link ${pathname === item.href
                              ? "text-[#800000] font-semibold"
                              : "text-gray-500 font-extralight text-sm"
                              }`}
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Divider className="w-full" /> */}
          <div className="w-full flex flex-col md:flex-row justify-between pt-4">
            <p className="mt-4 pb-10 text-sm text-gray-400 font-semibold">
              &copy; Copyright 2024. All Rights Reserved by Krafitech Hospitality
              Pvt. Ltd.
            </p>
            <div className="flex gap-4 items-center">
              <Image
                src={IMAGES.isologo}
                alt="isologo"
                width={60}
                height={60}
                className="rounded-xl"
              />
              <p className="text-gray-400 font-semibold">An ISO certified Company</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
