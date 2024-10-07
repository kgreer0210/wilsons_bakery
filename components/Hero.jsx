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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Left image placeholder */}
      <div className="absolute left-0 top-0 w-24 h-24">
        {/* Add your left image here */}
      </div>

      {/* Right image placeholder */}
      <div className="absolute right-0 top-0 w-24 h-24">
        {/* Add your right image here */}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/logo.png"
          alt="Wilson's Bakery"
          className="mx-auto mb-4"
          height={400}
          width={400}
        />
        <p className="text-xl text-gray-600 mb-8">
          Serving Middle Georgia for over 60 years! <br />
          Home of the famous FINGERNUT COOKIES™ <br />
          Please come see us!
          <br />
          1719 Watson Blvd, Warner Robins, GA 31093
        </p>
        <Link href="/order">
          <Button className="bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-3 px-6 rounded-full text-lg">
            Order Now
            <span className="ml-2">→</span>
          </Button>
        </Link>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <div className="relative w-full h-[475px]">
          <Image
            src={images[currentImageIndex]}
            alt="Bakery showcase"
            fill={true}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
