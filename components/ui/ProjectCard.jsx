"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectCard({ title, description, images = [], link }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <div
      className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={title}
              width={320}
              height={192}
              sizes="320px"
              className="w-full h-48 object-cover rounded-t-xl transition-all duration-300"
              unoptimized
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#0454BE] dark:text-blue-300 font-medium hover:underline"
        >
          Lihat Project <ExternalLink size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
