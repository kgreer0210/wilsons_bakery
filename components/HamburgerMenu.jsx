"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/order", label: "Order Online" },
  { href: "/contact", label: "Contact Us" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-background text-xl mb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
