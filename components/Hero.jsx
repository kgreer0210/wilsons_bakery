"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  {
    src: "/old-school-bakery.jpg",
    alt: "Image of a bakery with people standing in front of building",
  },
  {
    src: "/woman-wearing-white-shirt.jpg",
    alt: "Woman wearing white shirt in bakery",
  },
  {
    src: "/woman-with-two-children.jpg",
    alt: "Woman holding two children in bakery",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row mx-auto justify-evenly">
      {/* Carousel */}
      <div className="relative w-full md:w-1/2 lg:w-2/5 xl:w-1/3 h-[300px] md:min-h-[400px] rounded-lg mx-auto md:mx-8 my-4 md:my-auto overflow-hidden bg-gray-300">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            style={{
              objectFit: "cover",
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 bg-white text-primary p-8 flex flex-col justify-evenly">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={400}
          height={400}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
          className="w-full max-w-[400px] h-auto"
        />
        <p className="text-xl md:text-2xl my-6">
          Serving Middle Georgia's favorite treats since 1953
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Home of the famous Fingernut Cookies™
        </p>
        <Link href="/order">
          <Button>Order Now</Button>
        </Link>
      </div>
    </section>
  );
}
