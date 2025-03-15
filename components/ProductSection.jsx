"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState(products[0].category);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const product = products.find((p) => p.category === activeCategory);
    setActiveProduct(product);
    setCurrentImageIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % activeProduct.images.length
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [activeProduct]);

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        What We Make
      </h2>

      {/* Category buttons - scrollable on mobile */}
      <div className="flex justify-start sm:justify-center mb-4 sm:mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {products.map((product) => (
          <button
            key={product.id}
            className={`flex-shrink-0 mx-1 sm:m-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base whitespace-nowrap ${
              activeCategory === product.category
                ? "bg-indigo-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveCategory(product.category)}
          >
            {product.category}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {/* Product image - full width on mobile */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full h-64 sm:h-80 md:h-full flex items-center justify-center p-4">
              <Image
                src={activeProduct.images[currentImageIndex].src}
                alt={activeProduct.images[currentImageIndex].alt}
                className="max-w-full max-h-64 sm:max-h-80 md:max-h-96 object-contain rounded-md"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product details */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {activeProduct.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {activeProduct.description}
              </p>
              <div className="mb-4">
                <ul className="list-disc list-inside">
                  {activeProduct.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-600 text-sm sm:text-base mb-1"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="w-full bg-indigo-800 hover:bg-indigo-900 text-white py-2 sm:py-3 px-4 rounded-full flex items-center justify-center transition duration-300 text-sm sm:text-base">
              <ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
