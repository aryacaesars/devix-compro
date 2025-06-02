"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Load dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setIsDark(true);
  }, []);

  // Dark mode handler
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const header = document.querySelector("header");
    if (header) {
      const fixedNav = header.getBoundingClientRect().top;
      setIsFixed(window.pageYOffset > fixedNav);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Smooth scrolling
  const handleSmoothScroll = useCallback(
    (e, targetId) => {
      e.preventDefault();
      if (pathname !== "/") {
        router.push(`/#${targetId}`);
      } else {
        const target = document.getElementById(targetId);
        if (target) {
          const yOffset = -50;
          const yPosition =
            target.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: yPosition, behavior: "smooth" });
        }
      }
    },
    [pathname, router]
  );

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div>
      <header
        className={`absolute top-0 left-0 w-full flex items-center z-50 dark:bg-gray-900 bg-white transition-colors duration-300 ${
          isFixed ? "navbar-fixed" : ""
        }`}
      >
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex items-center justify-between relative">
            <Link href="/">
              <div className="flex items-center">
                {/* Logo untuk light mode */}
                <Image
                  src="/frontend/logo/Logo-Primary.png"
                  alt="DEVIX Logo"
                  width={100}
                  height={50}
                  className="py-4 ml-3 block dark:hidden"
                />
                {/* Logo untuk dark mode */}
                <Image
                  src="/frontend/logo/Logo-Secondary.png"
                  alt="DEVIX Logo"
                  width={100}
                  height={50}
                  className="py-4 ml-3 hidden dark:block"
                />
              </div>
            </Link>
            <div className="flex items-center px-4 gap-2">
              {/* Hamburger Button */}
              <button
                id="hamburger"
                type="button"
                className={`block lg:hidden ${
                  isMenuOpen ? "hamburger-active" : ""
                }`}
                onClick={handleToggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="nav-menu"
                aria-label="Toggle navigation"
              >
                <span
                  className={`hamburger-line dark:bg-white ${
                    isMenuOpen ? "rotate-45" : ""
                  } origin-top-left transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`hamburger-line dark:bg-white ${
                    isMenuOpen ? "scale-0" : ""
                  } transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`hamburger-line dark:bg-white ${
                    isMenuOpen ? "-rotate-45" : ""
                  } origin-bottom-left transition duration-300 ease-in-out`}
                ></span>
              </button>

              {/* Navigation Menu */}
              <nav
                id="nav-menu"
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } absolute py-5 bg-white dark:bg-gray-900 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:dark:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link
                      href="/"
                      className="text-base text-dark dark:text-white py-2 mx-8 flex group-hover:text-blue-900"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      onClick={(e) => handleSmoothScroll(e, "services")}
                      className="text-base text-dark dark:text-white py-2 mx-8 flex group-hover:text-blue-950"
                    >
                      Layanan
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      onClick={(e) => handleSmoothScroll(e, "package")}
                      className="text-base text-dark dark:text-white py-2 mx-8 flex group-hover:bg-gradient-to-r from-blue-950 to-purple-950 group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      Paket
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      onClick={(e) => handleSmoothScroll(e, "projects")}
                      className="text-base text-dark dark:text-white py-2 mx-8 flex group-hover:bg-gradient-to-r from-blue-900 to-purple-900 group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      Portofolio
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      onClick={(e) => handleSmoothScroll(e, "contact")}
                      className="text-base text-dark dark:text-white py-2 mx-8 flex group-hover:text-purple-800"
                    >
                      Kontak
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      onClick={(e) => handleSmoothScroll(e, "faq")}
                      className="text-base text-dark dark:text-white py-2 mx-8 flex group-hover:text-purple-700"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark((v) => !v)}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
