"use client";

import React from "react";
import { ThumbsUp, Lightbulb, Gem, ShieldEllipsis, Users } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Innovation",
      description:
        "Kami berkomitmen untuk terus menghadirkan inovasi melalui solusi terbaru dan terbaik dalam pengembangan website. Dengan memanfaatkan teknologi terkini, kami menciptakan platform yang relevan, modern, dan sesuai dengan kebutuhan pengguna.",
    },
    {
      id: 2,
      title: "Quality",
      description:
        "Kualitas adalah prioritas utama kami. Setiap proyek yang kami kerjakan dilaksanakan dengan penuh dedikasi, memperhatikan setiap detail untuk memastikan hasil akhir yang sempurna dan memuaskan.",
    },
    {
      id: 3,
      title: "Integrity",
      description:
        "Kejujuran dan tanggung jawab adalah fondasi utama dalam setiap langkah kerja kami. Kami percaya bahwa transparansi dalam setiap proses adalah kunci untuk membangun kepercayaan jangka panjang dengan klien.",
    },
    {
      id: 4,
      title: "Client Focus",
      description:
        "Kami memahami bahwa setiap klien memiliki kebutuhan yang unik. Oleh karena itu, kami selalu berusaha memberikan solusi yang personal, mendengarkan setiap masukan, dan memastikan bahwa hasil yang diberikan melampaui harapan mereka.",
    },
  ];

  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <Lightbulb className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
      case 2:
        return <Gem className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
      case 3:
        return <ShieldEllipsis className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
      case 4:
        return <Users className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
      default:
        return <ThumbsUp className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
    }
  };

  return (
    <section id="services" className="py-12 text-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="w-full flex justify-center mb-6">
          <div className="w-16 h-1 bg-[#1e3987] dark:bg-blue-400 rounded-xl transition-colors"></div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3987] dark:text-blue-300 mb-4 transition-colors">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Memberikan Inovasi, Kualitas, dan Kepercayaan dalam Setiap Proyek
          </p>
        </div>

        {/* Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col relative transition-colors duration-300 hover:bg-blue-500 dark:hover:bg-blue-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute top-5 rounded-full">{getIcon(service.id)}</div>
              <h3 className="text-lg text-left ml-10 font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-left transition-colors duration-300 group-hover:text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;