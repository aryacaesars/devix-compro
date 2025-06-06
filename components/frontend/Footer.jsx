"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { id: 1, name: "Beranda", href: "/" },
    { id: 2, name: "Layanan", href: "#services" },
    { id: 3, name: "Paket", href: "#package" },
    { id: 4, name: "Portofolio", href: "#projects" },
    { id: 5, name: "Kontak", href: "#contact" },
    { id: 6, name: "FAQs", href: "#faq" },
  ];

  const navTentang = [
    { id: 1, name: "Tentang", href: "/tentang" },
    { id: 2, name: "Layanan", href: "/tentang" },
    { id: 3, name: "Visi Misi", href: "/tentang" },
  ];

  // Smooth scrolling
  const handleNavigation = useCallback(
    (e, href) => {
      e.preventDefault();

      if (href.startsWith("#")) {
        if (pathname !== "/") {
          router.push(`/${href}`);
        } else {
          const target = document.getElementById(href.substring(1));
          if (target) {
            const yOffset = -50;
            const yPosition =
              target.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: yPosition, behavior: "smooth" });
          }
        }
      } else {
        router.push(href);
      }
    },
    [pathname, router]
  );

  return (
    <footer className="bg-gradient-to-b from-[#0454BE] to-[#3561e7] md:bg-gradient-to-r md:from-[#0454BE] md:to-[#3561e7] text-white dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 md:dark:bg-gradient-to-r md:dark:from-gray-950 md:dark:to-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Column 1 */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <Image
                src="/frontend/logo/Logo-Secondary.svg"
                alt="DEVIX Logo"
                width={150}
                height={100}
              />
            </div>
            <p className="mt-4 md:mt-8 text-gray-300">
              Kota Tasikmalaya, Jawa Barat, Indonesia
            </p>
            <p className="text-gray-300">
              Telp: +62 895 2439 6489
            </p>
            <p className="text-gray-300">
              Email: info@devix.tech
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {navTentang.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/devixtech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/devixsolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-300 transition-colors">
          &copy; 2025 DEVIX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
