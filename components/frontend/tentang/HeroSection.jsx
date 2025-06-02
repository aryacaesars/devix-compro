"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  const heroContent = [
    {
      id: 1,
      title: "Transformasi Digital untuk Bisnis Masa Depan",
      description:
        "Kami adalah studio digital yang berfokus pada pengembangan solusi web inovatif dan transformasi digital untuk membantu bisnis Anda berkembang di era digital. ",
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen mt-20 bg-gradient-to-r from-[#1e3987] to-[#1E609A] dark:from-gray-900 dark:to-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto sm:px-4 lg:px-6 flex items-center justify-center w-full">
        {heroContent.map((content) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full text-white text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl font-bold leading-tight mx-auto">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              {content.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
