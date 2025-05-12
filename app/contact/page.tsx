"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MessageSquare,

  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import StarBackground from "@/components/StarBackground";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const serviceID = "service_4xan7s7";
      const templateID ="template_jerbulr";
      const publicKey ="vY89uYzfYbcUPZTGK";

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject || "No subject",
          message: formState.message,
        },
        publicKey
      );

      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram className="h-5 w-5" />,
      href: "https://instagram.com/theninthplanet.uz",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="h-5 w-5" />,
      href: "https://youtube.com/@yamadzhixfeydzhi",
      color: "hover:text-red-500",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="h-5 w-5" />,
      href: "https://t.me/yamadzhi",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <StarBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-500">
              Contact Us
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question, project idea, or want to collaborate? Reach out
              to The Ninth Planet and let&apos;s create something cosmic
              together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              {!isSubmitted ? (
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-xl">
                  <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-zinc-800/50 border ${
                          errors.name ? "border-red-500" : "border-zinc-700"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-zinc-800/50 border ${
                          errors.email ? "border-red-500" : "border-zinc-700"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="booking">Booking</option>
                        <option value="production">Music Production</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-zinc-800/50 border ${
                          errors.message ? "border-red-500" : "border-zinc-700"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                        placeholder="Your message here..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <div className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        {submitError}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-indigo-900/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              ) : (
                <motion.div
                  className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-xl text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {submitError ? (
                    <>
                      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                        <AlertCircle className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2 text-white">
                        Sending Failed
                      </h2>
                      <p className="text-gray-300 mb-6">{submitError}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                        <Send className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2 text-white">
                        Message Sent!
                      </h2>
                      <p className="text-gray-300 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you
                        as soon as possible.
                      </p>
                    </>
                  )}
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError("");
                    }}
                    className="py-2 px-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {submitError ? "Try Again" : "Send Another Message"}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-400">
                        contact@theninthplanet.com
                      </p>
                      <a
                        href="mailto:contact@theninthplanet.com"
                        className="text-indigo-400 hover:text-indigo-300 text-sm inline-flex items-center mt-1"
                      >
                        Send an email <Send className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4">
                      <MessageSquare className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Response Time
                      </h3>
                      <p className="text-gray-400">
                        We typically respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
                  Follow Us
                </h2>
                <p className="text-gray-400 mb-6">
                  Stay connected with The Ninth Planet on social media for the
                  latest updates, releases, and behind the scenes content.
                </p>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors ${link.color}`}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-8 rounded-2xl border border-indigo-800/30 shadow-xl">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  Looking for collaborations
                </h2>
                <p className="text-gray-300">
                  The Ninth Planet is always open to new creative collaborations
                  with artists, producers, and visual creators.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div className="mt-20" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  Do you offer music production services?
                </h3>
                <p className="text-gray-400">
                  Yes, we provide full-cycle music production services including
                  composition, recording, mixing, and mastering.
                </p>
              </div>
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  Are you available for live performances?
                </h3>
                <p className="text-gray-400">
                  We perform at various venues and events. Contact us with your
                  event details for booking information.
                </p>
              </div>
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  How can I license your music?
                </h3>
                <p className="text-gray-400">
                  For licensing inquiries, please contact us directly through
                  the form with details about your project.
                </p>
              </div>
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  Do you offer mentoring for new producers?
                </h3>
                <p className="text-gray-400">
                  We occasionally offer mentoring sessions and workshops. Follow
                  us on social media for announcements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-20 text-center text-gray-500 text-sm"
            variants={itemVariants}
          >
            <p>
              © {new Date().getFullYear()} The Ninth Planet. All rights
              reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
