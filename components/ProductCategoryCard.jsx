"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProductCategoryCard = ({ category, images, description }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          className="w-full max-w-xs mx-auto"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    height={300}
                    width={300}
                    className="rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-4 space-y-2">
          <p>{description.main}</p>
          <p className="font-semibold">{description.highlight}</p>
          <ul className="list-disc list-inside space-y-1">
            {description.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Order Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCategoryCard;
