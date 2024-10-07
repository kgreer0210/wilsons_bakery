"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activeProduct]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">What We Make</h2>
      <div className="flex justify-center mb-6 flex-wrap">
        {products.map((product) => (
          <button
            key={product.id}
            className={`m-2 px-4 py-2 rounded-full ${
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
        <div className="md:flex md:items-stretch">
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={activeProduct.images[currentImageIndex].src}
                alt={activeProduct.images[currentImageIndex].alt}
                className="max-w-full max-h-96 object-contain rounded-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {activeProduct.name}
              </h3>
              <p className="text-gray-600 mb-4">{activeProduct.description}</p>
              <div className="mb-4">
                <ul className="list-disc list-inside">
                  {activeProduct.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="w-full bg-indigo-800 hover:bg-indigo-900 text-white py-3 px-4 rounded-full flex items-center justify-center transition duration-300">
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
