"use client";

import {
  ShoppingCart,
  MessageSquare,
  ThumbsUp,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message =
    "Halo, saya ingin konsultasi lebih lanjut mengenai layanan yang *DEVIX* tawarkan. Bisa bantu saya untuk mendapatkan informasi lebih detail? Terima kasih!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const features = [
    {
      id: 1,
      icon: ShoppingCart,
      text: "Tingkatkan penjualan Anda secara optimal dengan website berkualitas tinggi.",
    },
    {
      id: 2,
      icon: MessageSquare,
      text: "Setiap website yang kami desain adalah karya eksklusif yang disesuaikan dengan kebutuhan dan visi bisnis Anda.",
    },
    {
      id: 3,
      icon: ThumbsUp,
      text: "Website profesional dengan harga yang ramah di kantong.",
    },
  ];

  return (
    <div
      id="contact"
      className="w-full py-16 px-4 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="w-full">
        <motion.section
          id="contact"
          className="bg-gradient-to-br from-[#1e3987] via-[#3561e7] to-[#6fa8ff] dark:from-black dark:via-gray-950 dark:to-gray-900 rounded-3xl py-16 px-4 mx-auto max-w-6xl shadow-2xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <motion.div
              className="space-y-8 text-white"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
                Bawa Bisnis Anda ke Dunia Digital dengan Website Modern
              </h2>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 18,
                      delay: 0.15 + index * 0.08,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="bg-white dark:bg-[#1e3987] p-2 rounded-xl shadow-md flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#1e3987] dark:text-white" />
                    </div>
                    <p className="text-base md:text-lg">{feature.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Contact Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  delay: 0.2,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 8px 32px 0 rgba(30,57,135,0.18)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center justify-center px-7 py-3 border-2 border-white text-white font-semibold rounded-xl bg-[#1e3987]/70 hover:bg-white hover:text-[#1e3987] transition-all duration-200 shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" /> Hubungi Kami
                  </motion.button>
                </Link>
                <Link
                  href="mailto:devixtech.solutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 8px 32px 0 rgba(30,57,135,0.18)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center justify-center px-7 py-3 border-2 border-white text-white font-semibold rounded-xl bg-[#1e3987]/70 hover:bg-white hover:text-[#1e3987] transition-all duration-200 shadow-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" /> Email
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="flex justify-end items-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                delay: 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
                <Image
                  src="/frontend/contact/contact.png"
                  alt="Contact"
                  width={400}
                  height={400}
                  className="shadow-md rounded-2xl hover:scale-105 transition-transform duration-1000 ease-in-out"
                  priority
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 bg-white/30 rounded-full blur-md" />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactSection;
