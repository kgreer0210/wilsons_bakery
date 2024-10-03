"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCategoryCard from "./ProductCategoryCard";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <Tabs defaultValue={products[0]?.category} className="w-full">
        <TabsList className="mb-6 flex justify-center">
          {products.map((product) => (
            <TabsTrigger key={product.id} value={product.category}>
              {product.category}
            </TabsTrigger>
          ))}
        </TabsList>
        {products.map((product) => (
          <TabsContent key={product.id} value={product.category}>
            <ProductCategoryCard
              category={product.category}
              images={product.images}
              description={{
                main: product.description,
                highlight: product.highlight,
                features: product.features.map((f) => f.text),
              }}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
