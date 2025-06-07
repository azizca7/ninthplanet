"use client";

import StarBackground from "@/components/StarBackground";
import SocialLinks from "@/components/ui/SocialLinksYamadzhi";
import { motion } from "framer-motion";
import Image from "next/image";
import Dashboard from "@/components/ui/Dashboard";

export default function YamadzhiPage() {
  return (
    <main className=" text-white">
      <StarBackground />

      <section id="about" className="pt-24 pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-700/40 w-full md:w-[420px] lg:w-[520px] h-[400px] md:h-[500px] sm:w-[500px]"
          >
            <Image
              src="/yamadzhy.jpg"
              alt="Yamadzhi"
              width={520}
              height={520}
              className="object-cover w-full h-full"
              priority
             
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-3 font-bold flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-400 leading-tight tracking-tight">
              Yamadzhi — <span style={{ fontFamily: 'var(--font-roboto)' }}>Музыкальный Продюсер, Архитектор Звука и Стратег</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-roboto)' }} className="text-xl text-gray-300 leading-relaxed">
              Продюсер из Кыргызстана, начавший карьеру в 14 лет. Опыт работы в
              музыкальной индустрии Лос-Анджелеса стал поворотной точкой —
              именно там Yamadzhi принял решение посвятить свою жизнь музыке.
            </p>
            <div style={{ fontFamily: 'var(--font-roboto)' }} className="text-gray-300 text-lg leading-relaxed">
              <p className="mb-2">
                С тех пор он сотрудничал с крупнейшими лейблами —
                <span className="text-indigo-400 font-medium">
                  {" "}
                  Ultra Music
                </span>
                ,
                <span className="text-indigo-400 font-medium">
                  {" "}
                  Warner Music
                </span>
                ,
                <span className="text-indigo-400 font-medium">
                  {" "}
                  The Orchard{" "}
                </span>
                — создавая масштабные проекты как независимый продюсер.
              </p>
              <p>
                Автор платиновых релизов, включая хит
                <span className="text-indigo-400 font-medium"> Minimum </span>
                c более 100 млн прослушиваний.
              </p>
              <p>
                Основатель
                <span className="text-indigo-400 font-medium">
                  {" "}
                  No.9 Music{" "}
                </span>
                — дистрибьюторской компании, помогающей артистам зарабатывать на
                своей музыке.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Dashboard />

      <footer className="py-6 px-4 sm:px-8 border-t border-indigo-900/30">
        <SocialLinks />

        <div style={{ fontFamily: 'var(--font-roboto)' }} className="max-w-6xl mx-auto text-center mt-5">
          <p className="text-gray-400">
              © {new Date().getFullYear()} The Ninth Planet. Все права защищены.
            </p>
        </div>
      </footer>
    </main>
  );
}
