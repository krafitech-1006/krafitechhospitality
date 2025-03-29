"use client";
import "@/app/styles/globals.css";
import NavBar from "@/_components/NavBar/NavBar";
import Footer from "@/_components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { Providers } from "@/app/providers";
import { motion } from "framer-motion";
import Lenis from 'lenis'

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

  // useEffect( () => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  return (
    <Providers>
      {loading1 && (
        <div>
          <div className="hidden fixed inset-0 z-50 md:flex flex-col items-center justify-center bg-black">
            <div className="fixed top-[42%] left-[51%] transform -translate-x-1/2 text-white text-3xl font-bold tracking-widest">
              Krafitech Hospitality
            </div>

            <motion.div
              className="w-full h-[2px] bg-white z-50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "linear" }}
              style={{ transformOrigin: "left" }}
              onAnimationComplete={() => setLoading1(false)} // Hide after animation completes
            />

            <div className="mb-[-15px]">
              <motion.div className="fixed top-[50%] left-1/2 w-5 h-5 bg-white rounded-full z-10" />
            </div>


            <motion.div
              className="fixed top-[52%] left-[51%] transform -translate-x-1/2 text-white text-2xl font-semibold"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading...
            </motion.div>
          </div>

          <div className="flex fixed inset-0 z-50 md:hidden flex-col items-center justify-center bg-black">
            <div className="w-full flex justify-center items-start text-center fixed top-[42%] left-[51%] transform -translate-x-1/2 text-white text-xl font-bold tracking-widest">
              Krafitech Hospitality
            </div>

            <motion.div
              className="w-full h-[2px] bg-white z-50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "linear" }}
              style={{ transformOrigin: "left" }}
              onAnimationComplete={() => setLoading1(false)} // Hide after animation completes
            />

            <div className="mb-[-15px]">
              <motion.div className="fixed top-[50%] left-1/2 w-5 h-5 bg-white rounded-full z-10" />
            </div>


            <motion.div
              className="fixed top-[52%] left-[51%] transform -translate-x-1/2 text-white text-lg font-semibold"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading...
            </motion.div>
          </div>
        </div>

      )}

      {/* Page Transition Animation */}
      {loading && !loading1 && (
        <div>
          <div className="hidden fixed inset-0 z-50 lg:flex flex-col">
            {/* Top Half */}
            <motion.div
              initial={{ height: "50vh", y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="bg-black w-full"
              onAnimationComplete={() => setLoading(false)} // Hide after animation completes
            />

            {/* Bottom Half */}
            <motion.div
              initial={{ height: "50vh", y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="bg-black w-full"
            />
          </div>

          <div className="flex fixed inset-0 z-50 lg:hidden flex-col">
            {/* Top Half */}
            <motion.div
              initial={{ height: "50vh", y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="bg-black w-full"
              onAnimationComplete={() => setLoading(false)}
            />

            {/* Bottom Half */}
            <motion.div
              initial={{ height: "50vh", y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="bg-black w-full"
            />
          </div>
        </div>


      )}

      {/* Show NavBar only after animations complete */}
      {!loading && <NavBar />}
      <div>{children}</div>
      <Footer />
    </Providers>
  );
}
