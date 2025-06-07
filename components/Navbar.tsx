"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
 
  { label: "Yamadzhi", href: "/yamadzhi" },
  { label: "Furcade", href: "/furcade" },
  { label: "Contact", href: "/contact" },
 
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-lg text-white shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
      
        <Link href="/" className="cursorPointer flex items-center space-x-3">
          <Image
            src="/logo2.png"
            alt="The Ninth Planet"
            width={70}
            height={70}
            className=" rounded-full object-cover"
          />
          <span className=" text-xl font-bold tracking-wide">
            The Ninth Planet
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-indigo-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="flex flex-col space-y-4 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-indigo-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
