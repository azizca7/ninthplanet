"use client";

import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import StarBackground from "@/components/StarBackground";
import Particles from "@/components/Particles";
import SocialButton from "@/components/ui/SocialButton";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="mt-8 text-white overflow-hidden relative">
      <div className="fixed inset-0 z-[-1]">
        <StarBackground />
      </div>

      <div className="fixed top-1/4 left-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="fixed bottom-1/4 right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="flex flex-col justify-center items-center text-center px-4 py-24 md:py-32 max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={item}
            className="text-6xl md:text-9xl font-extrabold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent mt-5 bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-500">
              The Ninth Planet
            </span>
          </motion.h1>

          

          <motion.p
            variants={item} 
            className={`text-3xl md:text-4xl tracking-wide font-extrabold text-gray-200`} style={{ fontFamily: 'var(--font-roboto)' }}
          >
           Музыка будущего — сегодня.
          </motion.p>

<motion.div
  variants={item}
  style={{
    fontFamily: 'var(--font-roboto)',
   
  }}
  className="relative mt-7 backdrop-blur-xs bg-black/20 p-6 rounded-2xl border border-white/10 mb-10 max-w-2xl"
>
  <p className="text-2xl font-bold text-gray-300 leading-relaxed">
    <span style={{ fontFamily: 'var(--font-beba)' }}>The Ninth Planet</span> — это продюсерский дуэт <span style={{ fontFamily: 'var(--font-beba)' }}>Yamadzhi</span> и <span style={{ fontFamily: 'var(--font-beba)' }}>Furcade</span>, объединяющий два мира, два взгляда и два опыта в один сильный голос
  </p>

  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-indigo-500"></div>
  <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-purple-500"></div>
</motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link href="/portfolio">
              <motion.button
                className="relative group cursorPointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span style={{ fontFamily: 'var(--font-roboto)' }} className="relative cursor-pointer block bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg">
                Портфолио 
                </span>
              </motion.button>
            </Link>

            <motion.div variants={item} className="flex gap-4 mt-6 sm:mt-0">
              <div className="hover:text-pink-700">
                <SocialButton
                  icon={<FaInstagram className="size-5 " />}
                  href="https://www.instagram.com/theninthplanet.uz"
                />
              </div>
              <div className="hover:text-red-600">
                <SocialButton
                  icon={<FaYoutube className="size-5 " />}
                  href="https://www.youtube.com/@yamadzhixfeydzhi"
                />
              </div>
              <div className="hover:text-green-600">
                <SocialButton
                  icon={<FaSpotify className="size-5" />}
                  href="https://open.spotify.com/artist/1vhOS1zU5F96OtQUoMT47i"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Particles />
    </main>
  );
}
