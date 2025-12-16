"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const messages = [
  "ENVÍO GRATIS EN COMPRAS MAYORES A $999",
  "PRODUCTOS DE LA MEJOR CALIDADORIGINALES",
];

const CarouselTextBanner = () => {
  return (
    <div className="w-full bg-black text-white py-3 text-center text-sm sm:text-base relative">
      <Carousel className="max-w-4xl mx-auto">
        <CarouselContent>
          {messages.map((msg, index) => (
            <CarouselItem key={index}>
              <p className="py-2">{msg}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
