"use client";

import StarBackground from "@/components/StarBackground";
import SocialLinksFurcade from "@/components/ui/SocialLinksFurcade";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FurcadePage() {
  return (
    <div  className="min-h-screen flex flex-col">
      <section className="text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <StarBackground />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex  justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-700/40 w-full max-w-md h-[400px] sm:h-[500px]">
              <Image
                src="/furcade.jpg"
                alt="Furcade"
                fill
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 font-bold space-y-4 md:space-y-6"
          >
            <h2 className="text-3xl  sm:text-4xl font-bold text-indigo-400 leading-tight   tracking-wide">
              Furcade — <span style={{ fontFamily: 'var(--font-roboto)' }}>бриллиантовое ухо</span> The Ninth Planet
            </h2>

            <div style={{ fontFamily: 'var(--font-roboto)' }} className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Аутентичный гений, родом из Узбекистана. Погружён в музыку с
                самого детства — чувствует её тактильно, на осязательном уровне.
                Музыка для него — это не просто звук, а живая материя, с которой
                он работает руками и интуицией.
              </p>

              <p>
                На раннем этапе своей карьеры проходил продюсерскую школу Бабура
                Умарова, где получил уникальную базу в саунд-инженерии и
                построении звучания. С годами отточил мастерство сведения,
                мастеринга и создания инструменталов до безупречного уровня.
              </p>

              <p>
                Работал с <span style={{ fontFamily: 'var(--font-beba)' }}>Ravva Music</span>, а также с ключевыми артистами СНГ:
                Джонни, Гафур, Андро, Эльман и другими. Его стиль — это
                безошибочное чувство баланса и энергии, нужной треку.
              </p>

              <p>
                Сегодня, как участник дуэта <span style={{ fontFamily: 'var(--font-beba)' }}>The Ninth Planet, Furcade</span> воплощает
                многолетний опыт в уникальных продюсерских работах, где каждая
                деталь — продумана, выверена и звучит в точку.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-indigo-900/30">
        <div className="max-w-7xl mx-auto">
          <SocialLinksFurcade />
          <div className="text-center mt-5">
            <p style={{ fontFamily: 'var(--font-roboto)' }} className="text-gray-400">
              © {new Date().getFullYear()} The Ninth Planet. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
