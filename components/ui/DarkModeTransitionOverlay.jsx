"use client";
import { useEffect, useState } from "react";

export default function DarkModeTransitionOverlay() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
    };
    window.addEventListener("theme-transition", handler);
    return () => window.removeEventListener("theme-transition", handler);
  }, []);

  if (!isTransitioning) return null;
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="w-full h-full animate-darkmode-transition bg-gradient-to-tr from-[#0454BE] via-[#3561e7] to-[#6fa8ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80"></div>
    </div>
  );
}