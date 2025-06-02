"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const Accordion = ({ children, className }) => {
  return <div className={`accordion ${className}`}>{children}</div>;
};

export const AccordionItem = ({ children, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="accordion-item border-b last:border-b-0 border-gray-200 dark:border-gray-800 transition-all">
      <button
        className="w-full flex justify-between items-center cursor-pointer py-4 px-2 md:px-4 bg-transparent rounded-md dark:bg-gray-700 focus:outline-none text-left text-base md:text-lg font-semibold text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <div className="flex-1 text-left">{children[0]}</div>
        <ChevronDown
          className={`ml-2 w-5 h-5 text-black dark:text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        ref={contentRef}
        style={
          isOpen
            ? { maxHeight: contentRef.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
        className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="py-2">{children[1]}</div>
      </div>
    </div>
  );
};

export const AccordionTrigger = ({ children, className }) => {
  return <div className={`accordion-trigger ${className}`}>{children}</div>;
};

export const AccordionContent = ({ children, className }) => {
  return <div className={`accordion-content ${className}`}>{children}</div>;
};