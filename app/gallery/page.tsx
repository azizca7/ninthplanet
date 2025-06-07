"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Instagram, Music } from "lucide-react";
import Image from "next/image";
import StarBackground from "@/components/StarBackground";
import SocialLinks from "@/components/ui/SocialLinksYamadzhi";
const galleryItems = [
  {
    src: "/yamadzh.jpg",
    alt: "Ямаджи",
    category: "портреты",
    description: "Ямаджи в студии",
    social: "@yamadzhi",
  },
  {
    src: "/furcade1.jpg",
    alt: "Фуркад",
    category: "портреты",
    description: "Фуркад работает над новым треком",
    social: "@furcade",
  },
  {
    src: "/yamdzhi.jpg",
    alt: "Выступление Ямаджи",
    category: "выступления",
    description: "Живое выступление на музыкальном фестивале 2023",
    social: "@yamadzhi",
  },
  {
    src: "/furcade2.jpg",
    alt: "Фуркад в студии",
    category: "студия",
    description: "Закулисье записи",
    social: "@furcade",
  },
  {
    src: "/yamadzhi3.jpg",
    alt: "Концерт Ямаджи",
    category: "выступления",
    description: "Главное выступление на сцене",
    social: "@yamadzhi",
  },
  {
    src: "/furcade3.jpg",
    alt: "DJ-сет Фуркада",
    category: "выступления",
    description: "DJ-сет в Underground Club",
    social: "@furcade",
  },
  {
    src: "/yamadzhi4.jpg",
    alt: "Концерт Ямаджи",
    category: "выступления",
    description: "Главное выступление на сцене",
    social: "@yamadzhi",
  },
  {
    src: "/furcade4.jpg",
    alt: "Фуркад в студии",
    category: "студия",
    description: "Закулисье записи",
    social: "@furcade",
  },
];

const categories = ["все", "портреты", "выступления", "студия"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("все");

  const filteredImages =
    activeCategory === "все"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setSelectedImage(newIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateImage(-1);
    if (e.key === "ArrowRight") navigateImage(1);
  };

  return (
    <div
    style={{ fontFamily: 'var(--font-roboto)' }}
      className="min-h-screen text-white px-6 py-12"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <StarBackground />

      <motion.div
  className="max-w-6xl mx-auto mb-12 text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-500">
    Наша галерея
  </h1>
  <p className="text-gray-400 text-center ml-6  mx-auto">
    Исследуйте визуальное путешествие <span style={{ fontFamily: 'var(--font-beba)' }} className="text-lg">The Ninth Planet</span> – от студийных
    сессий до живых выступлений, запечатлев моменты, которые определяют
    нашу музыкальную вселенную.
  </p>
</motion.div>


      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/30"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-[400px] overflow-hidden cursor-pointer">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-top object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{item.alt}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
              {selectedImage > 0 && (
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {selectedImage < filteredImages.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              )}

              <div className="relative w-full h-[70vh]">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="bg-zinc-900/80 backdrop-blur-sm p-4 rounded-b-xl">
                <h3 className="text-xl font-medium text-white">
                  {filteredImages[selectedImage].alt}
                </h3>
                <p className="text-gray-300 mt-1">
                  {filteredImages[selectedImage].description}
                </p>
                <div className="flex items-center mt-3 text-gray-400">
                  <Instagram size={16} className="mr-1" />
                  <span className="text-sm">
                    {filteredImages[selectedImage].social}
                  </span>
                  <Music size={16} className="ml-4 mr-1" />
                  <span className="text-sm">The Ninth Planet</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <footer style={{ fontFamily: 'var(--font-beba)' }} className="py-6 mt-10 px-4 sm:px-8 border-t border-indigo-900/30">
              <SocialLinks />
      
              <div style={{ fontFamily: 'var(--font-roboto)' }} className="max-w-6xl mx-auto text-center mt-5">
                <p className="text-gray-400 text-lg">
                  © {new Date().getFullYear()} Yamadzhi. Все права защищены.
                </p>
              </div>
            </footer>
    </div>
  );
}
