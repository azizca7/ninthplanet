"use client";

import { motion } from "framer-motion";

export default function SocialButton({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}
