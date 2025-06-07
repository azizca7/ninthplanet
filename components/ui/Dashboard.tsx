"use client";

import { motion } from "framer-motion";
import { Music, Users, Award, Headphones } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      name: "Прослушивания",
      value: "100M+",
      icon: Headphones,
      color: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    },
    {
      name: "Подписчики",
      value: "500K+",
      icon: Users,
      color: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    },
    {
      name: "Релизы",
      value: "50+",
      icon: Music,
      color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Платиновые хиты",
      value: "5",
      icon: Award,
      color: "bg-gradient-to-br from-amber-500/20 to-pink-500/20",
    },
  ];

  return (
    <section style={{ fontFamily: 'var(--font-roboto)' }} className="py-16 font-bold px-4 sm:px-8 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12"
        >
          Статистика и Достижения
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-zinc-800/80 hover:border-zinc-700 transition-all duration-300"
            >
              <div
                className={`p-3 rounded-full ${stat.color} mb-4 backdrop-blur-md`}
              >
                <stat.icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="w-full rounded-xl overflow-hidden">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0PELm2?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}