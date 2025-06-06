"use client";

import Image from "next/image";
import { ThumbsUp, Eye, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const aboutContent = {
    description:
      "Devix adalah komunitas pengembang teknologi yang menyatukan berbagai keahlian, latar belakang, dan minat untuk menciptakan solusi yang inovatif. Nama Devix berasal dari singkatan Developer Mix, yang mencerminkan keberagaman anggotanya dan semangat kolaborasi untuk menghadirkan dampak positif di dunia teknologi.",
    imagePrimary: "/frontend/logo/Logo-Primary.svg",
    imageSecondary: "/frontend/logo/Logo-Secondary.svg",
    alt: "Logo Devix",
  };

  const visions = [
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
  ];

  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <Eye className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
      case 2:
        return <Target className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
      default:
        return <ThumbsUp className="text-blue-500 dark:text-blue-400 group-hover:text-white" />;
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        className="w-60 h-60 md:w-80 md:h-80 relative mb-0 md:mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={isDarkMode ? aboutContent.imageSecondary : aboutContent.imagePrimary}
          alt={aboutContent.alt}
          layout="fill"
          objectFit="contain"
          className="object-contain"
          priority
        />
      </motion.div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className=" flex flex-col items-center w-full">
          {/* Tentang */}
          <motion.div
            className="w-full md:w-4/5 lg:w-3/4 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-6xl mx-auto">
              {aboutContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div id="services" className="py-8 text-center">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Visi Misi */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true }}
          >
            {visions.map((vision) => (
              <motion.div
                key={vision.id}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col relative transition-colors duration-300 hover:bg-blue-500 dark:hover:bg-blue-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="absolute top-5 rounded-full">
                  {getIcon(vision.id)}
                </div>
                <h3 className="text-lg text-left ml-10 font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-white">
                  {vision.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-left transition-colors duration-300 group-hover:text-white">
                  {vision.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;