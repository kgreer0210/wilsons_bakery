"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import BusinessHours from "./BusinessHours";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About Us" },
  { href: "products", label: "Our Products" },
  { href: "donation", label: "Donation Request" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {isOpen ? (
        <X onClick={() => setIsOpen(false)} className="text-background" />
      ) : (
        <Menu onClick={() => setIsOpen(true)} className="text-primary" />
      )}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-primary flex flex-col items-center justify-center z-50">
          <X
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-background"
          />
          <div className="mb-6 bg-background/10 p-3 rounded-lg">
            <BusinessHours />
          </div>
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className="text-background text-xl mb-4"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
