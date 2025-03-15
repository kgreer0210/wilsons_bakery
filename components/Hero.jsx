"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  "/woman-wearing-white-shirt.jpg",
  "/old-school-bakery.jpg",
  "/woman-with-two-children.jpg",
  // Add more image paths as needed
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto md:flex md:justify-between md:items-center text-center md:text-left md:gap-12 lg:gap-16">
        <div className="md:w-1/2 lg:w-2/5">
          <Image
            src="/logo.png"
            alt="Wilson's Bakery"
            className="mx-auto mb-2 sm:mb-4 w-48 sm:w-64 md:w-auto"
            height={400}
            width={400}
            priority
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 px-2">
            Serving Middle Georgia for over 60 years! <br />
            Home of the famous FINGERNUT COOKIES™ <br />
            Please come see us!
            <br />
            <Link
              href="https://www.google.com/maps/search/?api=1&query=wilsons+bakery,+warner+robins,+GA"
              target="_blank"
              rel="noopener noreferrer"
            >
              1719 Watson Blvd, Warner Robins, GA 31093
            </Link>
            <br />
            {isMobile ? (
              <a href="tel:478-922-9300">478-922-9300</a>
            ) : (
              <span>478-922-9300</span>
            )}
          </p>
          <Link href="/order">
            <Button className="bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg">
              Order Now
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 lg:w-3/5">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[475px] lg:h-[500px]">
            <Image
              src={images[currentImageIndex]}
              alt="Bakery showcase"
              fill={true}
              className="rounded-lg shadow-lg object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
