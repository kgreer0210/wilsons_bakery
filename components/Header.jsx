"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About Us" },
  { href: "products", label: "Our Products" },
  { href: "order", label: "Order Online" },
  { href: "contact", label: "Contact Us" },
];

export default function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative mb-4">
      {/* Awning */}
      <div className="bg-secondary h-24 md:h-24 rounded-b-[50%] shadow-md"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 right-0 px-4 py-2 md:py-4 flex justify-around items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-4xl font-display text-background"
        >
          <Image src="/Logo.png" alt="Logo" width={120} height={120} />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-foreground">
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-background">
          <HamburgerMenu />
        </button>
      </div>
    </header>
  );
}
