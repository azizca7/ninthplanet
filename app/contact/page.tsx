"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, AlertCircle } from "lucide-react";
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
      newErrors.name = "Имя обязательно";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Сообщение обязательно";
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
      const templateID = "template_jerbulr";
      const publicKey = "vY89uYzfYbcUPZTGK";

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject || "Без темы",
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
      console.error("Ошибка при отправке формы:", error);
      setSubmitError(
        "Не удалось отправить сообщение. Пожалуйста, попробуйте позже."
      );
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
    <div style={{ fontFamily: 'var(--font-roboto)' }} className="min-h-screen text-white">
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
              Свяжитесь с нами
            </h1>
            <p className="text-gray-400 mx-auto">
              Есть вопросы, идеи проектов или хотите сотрудничать? Обратитесь в
              The Ninth Planet, и давайте создадим что-то космическое вместе.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              {!isSubmitted ? (
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-xl">
                  <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
                    Отправить сообщение
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Ваше имя
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
                        placeholder="Введите ваше имя"
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
                        Email адрес
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
                        placeholder="Введите ваш email"
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
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Сообщение
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
                        placeholder="Ваше сообщение здесь..."
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
                          <span>Отправка...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Отправить сообщение</span>
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
                        Ошибка отправки
                      </h2>
                      <p className="text-gray-300 mb-6">{submitError}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                        <Send className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2 text-white">
                        Сообщение отправлено!
                      </h2>
                      <p className="text-gray-300 mb-6">
                        Спасибо за ваше обращение. Мы ответим вам как можно
                        скорее.
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
                    {submitError
                      ? "Попробовать снова"
                      : "Отправить новое сообщение"}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
                  Контактная информация
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-400">
                      numberninemusiclabel@gmail.com
                      </p>
                      <a
                        href="mailto:numberninemusiclabel@gmail.com"
                        className="text-indigo-400 hover:text-indigo-300 text-sm inline-flex items-center mt-1"
                      >
                        Написать email <Send className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4">
                      <FaTelegram className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                      Телеграм / WhatsApp:
                      </h3>
                      <a href="tel:+998907776450" className="text-gray-400">
                    +998 (90) 777 64 50
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4">
                      <MessageSquare className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Время ответа
                      </h3>
                      <p className="text-gray-400">
                        Обычно мы отвечаем в течение 24-48 часов
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
                  Подпишитесь на нас
                </h2>
                <p className="text-gray-400 mb-6">
                  Будьте на связи с The Ninth Planet в социальных сетях, чтобы
                  получать последние обновления, релизы и закулисный контент.
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
                  Ищем сотрудничества
                </h2>
                <p className="text-gray-300">
                  The Ninth Planet всегда открыт для новых творческих
                  коллабораций с артистами, продюсерами и визуальными
                  художниками.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div className="mt-20" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Часто задаваемые вопросы
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  Вы предлагаете услуги музыкального продюсирования?
                </h3>
                <p className="text-gray-400">
                  Да, мы предоставляем полный цикл услуг музыкального
                  продюсирования, включая композицию, запись, сведение и
                  мастеринг.
                </p>
              </div>
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  Вы доступны для живых выступлений?
                </h3>
                <p className="text-gray-400">
                  Мы выступаем на различных площадках и мероприятиях. Свяжитесь
                  с нами с деталями вашего мероприятия для информации о
                  бронировании.
                </p>
              </div>
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  Как я могу лицензировать вашу музыку?
                </h3>
                <p className="text-gray-400">
                  Для запросов на лицензирование, пожалуйста, свяжитесь с нами
                  напрямую через форму, указав детали вашего проекта.
                </p>
              </div>
              <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/30">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">
                  Вы предлагаете менторство для новых продюсеров?
                </h3>
                <p className="text-gray-400">
                  Мы периодически проводим менторские сессии и воркшопы.
                  Подпишитесь на нас в соцсетях для получения анонсов.
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
              © {new Date().getFullYear()} The Ninth Planet. Все права защищены.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
