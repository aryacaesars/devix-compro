"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const clients = [
  {
    id: 1,
    src: "/frontend/clients/sanydressline.svg",
    alt: "Logo Sanydressline",
    link: "https://sanydressline.my.id/",
  },
  {
    id: 2,
    src: "/frontend/clients/npi.svg",
    alt: "Logo NPI",
    link: "https://niskala-beryl.vercel.app/",
  },
  {
    id: 3,
    src: "/frontend/clients/undagi.svg",
    alt: "Logo Undagi",
    link: "#",
  },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="p-8 md:p-10 bg-gray-200 dark:bg-gray-800 text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3987] dark:text-blue-300 mb-4">
            Our Clients
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-5xl mx-auto">
            Kami bekerja sama dengan berbagai klien di bidang e-commerce,
            pendidikan, dan layanan profesional, memberikan solusi digital
            inovatif yang mendorong pertumbuhan bisnis mereka
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-20">
            {clients.map((client) => (
              <Link
                key={client.id}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={200}
                  height={200}
                  className="object-contain grayscale hover:grayscale-0 duration-500 dark:invert dark:hover:invert-0 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;