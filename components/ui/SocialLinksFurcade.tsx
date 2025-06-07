"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaSpotify, FaTelegram, FaYoutube } from "react-icons/fa";

export default function SocialLinksFurcade() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/furcade",
      iconColor: "text-pink-500 hover:text-gradient-instagram",
      bgColor: "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCrVNUxOUk-Q5UNF2woyPm6g",
      iconColor: "text-red-600 hover:text-red-500",
      bgColor: "bg-gradient-to-r from-red-600 to-red-500 bg-clip-text",
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      href: "https://t.me/furcade",
      iconColor: "text-blue-500 hover:text-blue-400",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text",
    },
    {
      name: "Spotify",
      icon: FaSpotify,
      href: "https://open.spotify.com/artist/47fTetjnzr6GdBrmDxAViu",
      iconColor: "text-green-500 hover:text-green-400",
      bgColor: "bg-gradient-to-r from-green-600 to-green-400 bg-clip-text",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-6 mt-6"
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursorPointer group flex items-center px-2 py-1.5 rounded-full 
              text-white border border-transparent
              transition-all duration-300`}
          >
            <span
              className={`p-2 rounded-full transition-all duration-300 ${link.iconColor}`}
            >
              <link.icon size={24} />
            </span>
            <span
              className={`text-lg md:text-2xl font-semibold transition-all duration-300 relative
                text-blue-100 
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:bg-current after:transition-all after:duration-300
                group-hover:after:w-full`}
            >
              {link.name}
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
