import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="relative">
      {/* Awning */}
      <div className="bg-primary h-16 md:h-24 rounded-b-[50%] shadow-md"></div>

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
        <nav className="hidden md:flex space-x-6 text-background">
          <Link href="/about" className="hover:text-accent transition-colors">
            About Us
          </Link>
          <Link
            href="/products"
            className="hover:text-accent transition-colors"
          >
            Our Products
          </Link>
          <Link href="/order" className="hover:text-accent transition-colors">
            Order Online
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-background">
          <Menu size={24} />
        </button>
      </div>

      {/* Scalloped Edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 bg-background"
        style={{
          maskImage:
            "radial-gradient(circle at 1px -8px, transparent 16px, black 17px)",
          maskSize: "32px 32px",
        }}
      ></div>
    </header>
  );
};

export default Header;
