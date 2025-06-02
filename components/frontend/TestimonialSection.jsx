"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sani Rifky",
    position: "Owner, Sanydressline",
    message:
      "Tim Devix sangat profesional dan hasil websitenya melebihi ekspektasi kami. Dabestt!",
    image: "/frontend/clients/foto/sany.PNG",
  },
  {
    id: 2,
    name: "Andri Ulus",
    position: "NPI",
    message:
      "Proses pengembangan yang sangat transparan dan hasil akhir yang luar biasa. Recommended banget!",
    image: "/frontend/clients/foto/hendra.jpg",
  },
  {
    id: 3,
    name: "Hasbi Kosasih",
    position: "Owner, UNDAGI",
    message:
      "Website kami telah meningkatkan penjualan sebesar 200%. Sangat puas dengan layanan mereka.",
    image: "/frontend/clients/foto/undagi.PNG",
  },
];

// Variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="p-10 text-center bg-gradient-to-br from-[#e9f0ff] to-[#f6f9ff] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3987] dark:text-blue-300 mb-4 drop-shadow">
            Testimoni Klien Kami
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto">
            Apa yang klien kami katakan tentang layanan yang kami berikan.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="w-full flex flex-wrap items-center justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative bg-white dark:bg-gray-950 w-full md:w-[350px] h-auto p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.18 }}
            >
              {/* Header (Foto + Nama + Jabatan/Perusahaan) */}
              <div className="flex items-center gap-4 mb-4 text-left">
                {/* Client Image */}
                <div className="w-16 h-16 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-2 border-[#1e3987] dark:border-blue-700 shadow-sm transition-all duration-500"
                  />
                </div>
                {/* Nama & Jabatan */}
                <div>
                  <h3 className="text-lg font-bold text-[#1e3987] dark:text-blue-500">{testimonial.name}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{testimonial.position}</p>
                </div>
              </div>

              {/* Testimonial Message */}
              <div className="relative flex justify-center">
                <p className="text-gray-600 dark:text-gray-300 text-base italic group-hover:text-[#1e3987] dark:group-hover:text-gray-100 transition-colors duration-500 text-center">
                  {testimonial.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;