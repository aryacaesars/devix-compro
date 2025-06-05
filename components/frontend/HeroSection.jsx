"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Listen for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = -50;
      const yPosition =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  const heroContent = [
    {
      id: 1,
      title: "Bangun Website Impian Anda dengan Desain Profesional",
      description:
        "Maksimalkan bisnis Anda dengan website modern, optimalkan untuk setiap perangkat",
      image: "/frontend/hero/hero.png",
      imageDark: "/frontend/hero/hero-dark.png",
      alt: "Professional with laptop",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-16 px-4 py-12 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
          {heroContent.map((content) => (
            <div
              key={content.id}
              className="flex flex-col md:flex-row items-center justify-between w-full"
            >
              {/* Left Column - Animasi masuk dari kiri */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-3/5 space-y-6"
              >
                <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1e3987] dark:text-blue-300">
                  {content.title}
                </h1>
                <p className="text-lg xs:text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl">
                  {content.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Link
                    href="#package"
                    onClick={(e) => handleSmoothScroll(e, "package")}
                  >
                    <button className="w-full sm:w-auto bg-[#1e3987] text-white dark:bg-white dark:text-blue-500 px-8 py-3 rounded-xl font-medium hover:bg-opacity-85 dark:hover:bg-blue-500 dark:hover:text-white transition-colors">
                      Lihat Paket
                    </button>
                  </Link>
                  <Link
                    href="#projects"
                    onClick={(e) => handleSmoothScroll(e, "projects")}
                  >
                    <button className="w-full sm:w-auto border-2 border-[#1e3987] text-[#1e3987] dark:border-blue-300 dark:text-blue-300 px-8 py-3 rounded-xl font-medium hover:bg-[#1e3987]/10 dark:hover:bg-blue-300/10 transition-colors">
                      PORTOFOLIO KAMI
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Animasi masuk dari kanan */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-2/5 mt-12 md:mt-0 relative flex justify-center"
              >
                <div className="relative w-full max-w-[320px] xs:max-w-[360px] h-[180px] xs:h-[220px] sm:max-w-[400px] sm:h-[240px] md:max-w-[512px] md:h-[380px] lg:max-w-[624px] lg:h-[390px]">
                  <Image
                    src={isDarkMode ? content.imageDark : content.image}
                    alt={content.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;