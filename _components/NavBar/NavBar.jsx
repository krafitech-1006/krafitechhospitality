"use client";
import IMAGES from "@/public";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const pathname = usePathname(); // Get the current path

  const handleMouseEnter = (index) => setActiveDropdown(index);


  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleSubmenuEnter = (subIndex) => setActiveSubmenu(subIndex);
  const handleSubmenuLeave = () => setActiveSubmenu(null);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown((prev) => (prev === index ? null : index));
  };

  const isLinkActive = (link) => {
    if (link.sublinks) {
      return link.sublinks.some((sublink) => pathname === sublink.url);
    }
    return pathname === link.url;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };



  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 bg-transparent">
      <div className="py-4 w-[90%] lg:w-[95%] mx-auto flex items-center gap-56">
        <Link href="/" className="flex justify-center items-center gap-5">
          <img
            src={IMAGES.mainLogo}
            alt="Krafitech-logo"

            className="w-52 h-12 object-contain"
          />
          {/* <div className="flex flex-col">
            <span className="text-[#800000] font-semibold leading-tight">
              Krafitech
            </span>
            <span className="font-semibold text-gray-400 leading-tight">
              Hospitality
            </span>
          </div> */}
        </Link>

        {/* Hamburger icon for small devices */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-500 text-3xl focus:outline-none"
          >
            {isMenuOpen ? <X /> : <Menu />} {/* Menu open/close icon */}
          </button>
        </div>

        <div className="space-x-8 hidden lg:flex">
      {links.map((link, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={link.url || "#"}
            className={`p-2 ${pathname === link.url
              ? "text-blue-300 font-bold text-sm"
              : "text-blue-300 font-semibold hover:text-black text-sm"
              }`}
          >
            {link.name}
          </Link>

          {link.sublinks && activeDropdown === index && (
            <div className="absolute left-0 top-full mt-1 bg-white shadow-lg p-2 w-[215px]">
              {link.sublinks.map((sublink, subIndex) => (
                <div
                  key={subIndex}
                  className="relative"
                  onMouseEnter={() => handleSubmenuEnter(subIndex)}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <Link
                    href={sublink.url}
                    className={`block p-2 ${pathname === sublink.url
                      ? "text-blue-300 font-bold text-sm uppercase tracking-wide"
                      : "text-blue-300 font-semibold hover:text-black text-sm uppercase tracking-wide"
                      }`}
                  >
                    {sublink.name}
                  </Link>

                  {sublink.sublinks && activeSubmenu === subIndex && (
                    <div className="absolute left-full top-0 ml-2 bg-white shadow-lg p-2 w-[215px]">
                      {sublink.sublinks.map((subSubLink, subSubIndex) => (
                        <Link
                          key={subSubIndex}
                          href={subSubLink.url}
                          className="block p-2 text-blue-300 font-semibold hover:text-black text-sm uppercase tracking-wide"
                        >
                          {subSubLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

        {/* <Link href="/contact-us" className="hidden lg:flex">
          <Button
            radius="full"
            className="bg-[#800000] text-white font-semibold px-4 tracking-wider "
          >
            Let’s Get Started!
          </Button>
        </Link> */}
      </div>

      {/* Mobile menu links (only visible when menu is open) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white py-4 space-y-4 absolute z-50 top-16 left-0 w-full h-screen">
          {links1.map((link, index) => (
            <div key={index} className="relative w-full text-start">
              {link.sublinks ? (
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className={`p-2 w-full text-start px-5 flex justify-between items-center ${isLinkActive(link) ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                    }`}
                >
                  {link.name}
                  {/* Chevron icon to indicate open/close state (only for sublinks) */}
                  <span>
                    {activeMobileDropdown === index ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                  </span>
                </button>
              ) : (
                <Link
                  href={link.url}
                  onClick={handleLinkClick} // Close the menu and navigate
                  className={`p-2 w-full text-start px-5 ${pathname === link.url ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                    }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Mobile Dropdown */}
              {link.sublinks && activeMobileDropdown === index && (
                <div className="flex flex-col items-center mt-2 border bg-gray-200 m-2">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.url}
                      onClick={handleLinkClick}
                      className={`block p-2 w-full text-start px-5 ${pathname === sublink.url ? "text-black font-bold" : "text-gray-500 font-semibold hover:text-black"
                        }`}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact button for small devices */}
          <Link href="/contact-us" className="w-full flex justify-start pt-5 px-5 ">
            <Button radius="full" className="bg-[#800000] text-white font-semibold px-4 tracking-wider">
              Let’s Get Started!
            </Button>
          </Link>
        </div>
      )}

    </div>
  );
};

export default NavBar;

const links = [
  { name: "HOME", url: "/HOME" },
  { name: "SUCCESS STORY", url: "/successstory" },
  {
    name: "OUR PRODUCTS",
    url: "/ourproducts",
    sublinks: [{ name: "CLOUD BASED SYSTEM", url: "/services/cloudbasedsystem" }],
  },
  {
    name: "OUR SERVICES",
    url: "/services",
    sublinks: [
      {
        name: "Revenue Management",
        url: "/services/revenue-management",
        sublinks: [
          { name: "Virtual Front Office", url: "/services/revenue-management/virtual-front-office" },
          { name: "ota's registration", url: "/services/revenue-management/ota-registration" },
          { name: "ota's sales optimization", url: "/services/revenue-management/ota-sales-optimization" },
          { name: "rate management", url: "/services/revenue-management/rate-management" },
          { name: "promo code management", url: "/services/revenue-management/promo-code-management" },
          { name: "online reputation optimization", url: "/services/revenue-management/online-reputation-optimization" },
          { name: "payment followup", url: "/services/revenue-management/payment-followup" },
          { name: "sales oriented content writing", url: "/services/revenue-management/sales-oriented-content-writing" },
          { name: "growth report", url: "/services/revenue-management/growth-report" },
          { name: "property audit", url: "/services/revenue-management/property-audit" },
          { name: "b2b partnership", url: "/services/revenue-management/b2b-partnership" },
          { name: "dealing with travel partner", url: "/services/revenue-management/dealing-with-travel-partner" },
          { name: "hotel renovation and beautification", url: "/services/revenue-management/hotel-renovation-and-beautification" },
          { name: "hotel maintenance", url: "/services/revenue-management/hotel-maintenance" },
          { name: "hotel operations", url: "/services/revenue-management/hotel-operations" },
        ],
      },
      { name: "Digital Marketing", url: "/services/digital-marketing",
        sublinks: [
          { name: "digital brand building", url: "/services/revenue-management/pricing-strategy" },
          { name: "social media marketing", url: "/services/revenue-management/yield-management" },
          { name: "photography & video marketing content", url: "/services/revenue-management/yield-management" },
          { name: "search engine optimization", url: "/services/revenue-management/yield-management" },
          { name: "productive email", url: "/services/revenue-management/yield-management" },
        ],
       },
      { name: "Web Development", url: "/services/web-development",
        sublinks: [
          { name: "website designing", url: "/services/revenue-management/pricing-strategy" },
          { name: "website audits", url: "/services/revenue-management/yield-management" },
          { name: "hotel website development", url: "/services/revenue-management/yield-management" },
        ],
       },
      { name: "Booking Engine", url: "/services/bookingengine" },
    ],
  },
  { 
    name: "COMPANY", 
    url: "/COMPANY",
    sublinks: [{ name: "About Us", url: "/aboutus" }, { name: "Life at krafitech", url: "/aboutus" }], 
  },
  { name: "RESOURCES", url: "/testimonials", sublinks: [{ name: "Blogs", url: "/aboutus" }] },
  { name: "SUPPORT", url: "/blogs", sublinks: [{ name: "24/7 Tech support", url: "/aboutus" }, { name: "Life at krafitech", url: "/aboutus" }],  },
];

const links1 = [
  { name: "HOME", url: "/HOME" },
  { name: "SUCCESS STORY", url: "/successstory" },
  {
    name: "OUR PRODUCTS",
    url: "/ourproducts",
    sublinks: [{ name: "CLOUD BASED SYSTEM", url: "/services/cloudbasedsystem" }],
  },
  {
    name: "OUR SERVICES",
    url: "/services",
    sublinks: [
      {
        name: "Revenue Management",
        url: "/services/revenue-management",
        sublinks: [
          { name: "Virtual Front Office", url: "/services/revenue-management/virtual-front-office" },
          { name: "ota's registration", url: "/services/revenue-management/ota-registration" },
          { name: "ota's sales optimization", url: "/services/revenue-management/ota-sales-optimization" },
          { name: "rate management", url: "/services/revenue-management/rate-management" },
          { name: "promo code management", url: "/services/revenue-management/promo-code-management" },
          { name: "online reputation optimization", url: "/services/revenue-management/online-reputation-optimization" },
          { name: "payment followup", url: "/services/revenue-management/payment-followup" },
          { name: "sales oriented content writing", url: "/services/revenue-management/sales-oriented-content-writing" },
          { name: "growth report", url: "/services/revenue-management/growth-report" },
          { name: "property audit", url: "/services/revenue-management/property-audit" },
          { name: "b2b partnership", url: "/services/revenue-management/b2b-partnership" },
          { name: "dealing with travel partner", url: "/services/revenue-management/dealing-with-travel-partner" },
          { name: "hotel renovation and beautification", url: "/services/revenue-management/hotel-renovation-and-beautification" },
          { name: "hotel maintenance", url: "/services/revenue-management/hotel-maintenance" },
          { name: "hotel operations", url: "/services/revenue-management/hotel-operations" },
        ],
      },
      { name: "Digital Marketing", url: "/services/digital-marketing",
        sublinks: [
          { name: "digital brand building", url: "/services/revenue-management/pricing-strategy" },
          { name: "social media marketing", url: "/services/revenue-management/yield-management" },
          { name: "photography & video marketing content", url: "/services/revenue-management/yield-management" },
          { name: "search engine optimization", url: "/services/revenue-management/yield-management" },
          { name: "productive email", url: "/services/revenue-management/yield-management" },
        ],
       },
      { name: "Web Development", url: "/services/web-development",
        sublinks: [
          { name: "website designing", url: "/services/revenue-management/pricing-strategy" },
          { name: "website audits", url: "/services/revenue-management/yield-management" },
          { name: "hotel website development", url: "/services/revenue-management/yield-management" },
        ],
       },
      { name: "Booking Engine", url: "/services/bookingengine" },
    ],
  },
  { 
    name: "COMPANY", 
    url: "/COMPANY",
    sublinks: [{ name: "About Us", url: "/aboutus" }, { name: "Life at krafitech", url: "/aboutus" }], 
  },
  { name: "RESOURCES", url: "/testimonials", sublinks: [{ name: "Blogs", url: "/aboutus" }] },
  { name: "SUPPORT", url: "/blogs", sublinks: [{ name: "24/7 Tech support", url: "/aboutus" }, { name: "Life at krafitech", url: "/aboutus" }],  },
];



