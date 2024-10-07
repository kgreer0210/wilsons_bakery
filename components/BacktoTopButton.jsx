"use client";

import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function BacktoTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //hide button when user is at the top of the page

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-indigo-800 hover:bg-indigo-900 text-white p-2 rounded-full transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
