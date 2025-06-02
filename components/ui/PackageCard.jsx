"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const PackageCard = ({ name, features, isPopular }) => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = encodeURIComponent(
    `Halo, saya tertarik dengan paket *${name}*. Bisa minta penjelasan lebih lengkap mengenai fitur-fitur dan cara pemesanannya? Terima kasih!`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div
      className={`
        group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col
        transition-all duration-500 ease-in-out
        hover:shadow-2xl hover:bg-gradient-to-b hover:from-[#1e3987] hover:to-blue-500 hover:text-white
        dark:hover:from-blue-900 dark:hover:to-blue-700
      `}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1e3987] text-white text-xs font-bold px-6 py-1 rounded-full shadow-lg z-10 tracking-wide border-2 border-white">
          Populer
        </div>
      )}
      <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#1e3987] dark:text-blue-700 group-hover:text-white transition-colors duration-500 text-center">
        {name}
      </h3>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-base md:text-lg text-left transition-colors duration-500"
          >
            <Check
              className="text-green-500 group-hover:text-white dark:text-green-400 mr-3 transition-colors duration-500"
              size={22}
            />
            <span className="dark:text-gray-200 group-hover:text-white transition-colors duration-500">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block w-full py-3 text-white text-center rounded-xl font-semibold
          bg-[#1e3987] dark:bg-blue-700 shadow-md
          group-hover:bg-white group-hover:text-[#1e3987] group-hover:border-[#1e3987]
          dark:group-hover:bg-white dark:group-hover:text-blue-700 dark:group-hover:border-blue-700
          border-2 border-transparent
          transition-all duration-300 ease-in-out mt-auto
          hover:scale-105 hover:shadow-xl
        "
      >
        Pilih Paket
      </Link>
    </div>
  );
};

export default PackageCard;