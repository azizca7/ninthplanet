"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<
    Array<{
      x: string;
      y: string;
      opacity: number;
      scale: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.3,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 20 + 10,
    }));

    setParticles(newParticles);
  }, []);

  if (particles.length === 0) {
    return null; 
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          animate={{
            y: [null, `${Math.random() * 100}%`],
            opacity: [null, Math.random() * 0.5 + 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
