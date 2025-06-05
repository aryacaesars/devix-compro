"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaTools,
  FaGlobe,
  FaRegFileAlt,
  FaCogs,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Landing Page",
      description:
        "Buat landing page yang menarik dan responsif untuk meningkatkan konversi bisnis Anda dengan desain modern dan performa optimal.",
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Company Profile Website",
      description:
        "Tampilkan identitas bisnis Anda secara profesional dengan website company profile yang informatif dan mudah diakses.",
      icon: <FaRegFileAlt className="text-blue-500 text-3xl" />,
    },
    {
      id: 3,
      title: "CMS Website",
      description:
        "Kelola konten website Anda dengan mudah menggunakan Content Management System (CMS) yang fleksibel dan sesuai kebutuhan bisnis Anda.",
      icon: <FaCogs className="text-blue-500 text-3xl" />,
    },
    {
      id: 4,
      title: "Mobile App",
      description:
        "Kami menyediakan solusi pengembangan aplikasi mobile yang responsif dan user-friendly untuk iOS dan Android.",
      icon: <FaMobileAlt className="text-blue-500 text-3xl" />,
    },
    {
      id: 5,
      title: "Custom Web Applications",
      description:
        "Dapatkan aplikasi web khusus yang dikembangkan sesuai kebutuhan bisnis Anda dengan teknologi terkini dan performa tinggi.",
      icon: <FaGlobe className="text-blue-500 text-3xl" />,
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description:
        "Pastikan website Anda selalu optimal dengan layanan pemeliharaan dan dukungan teknis yang andal dan responsif.",
      icon: <FaTools className="text-blue-500 text-3xl" />,
    },
  ];

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <section
      id="services"
      className="py-12 text-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="w-full flex justify-center mb-6">
          <div className="w-16 h-1 bg-[#0454BE] dark:bg-blue-300 rounded-xl"></div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0454BE] dark:text-blue-300 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-5xl mx-auto">
            Kami menyediakan berbagai layanan profesional untuk membangun presence digital Anda.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const message = encodeURIComponent(
              `Halo, saya tertarik dengan layanan *${service.title}*. Bisa minta penjelasan lebih lengkap mengenai layanannya? Terima kasih!`
            );
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <motion.div
                key={service.id}
                className="group bg-white dark:bg-gray-800 flex flex-col justify-between w-full h-full p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:bg-blue-500 dark:hover:bg-[#0454BE]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon dan Judul */}
                <div className="flex space-x-2 items-center mb-1">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-md text-left font-semibold text-gray-900 dark:text-white group-hover:text-white">
                    {service.title}
                  </h3>
                </div>
                {/* Deskripsi */}
                <div className="flex text-left">
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-4 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
                {/* Tombol */}
                <div className="flex justify-end">
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-white px-2 py-2 rounded-lg text-sm font-medium bg-blue-500 dark:bg-[#0454BE] group-hover:bg-white group-hover:text-blue-500 dark:group-hover:bg-white dark:group-hover:text-[#0454BE] transition-colors"
                    >
                      Hubungi Lebih Lanjut
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;