"use client";

import Image from "next/image";
import RequestCallback from "@/components/ui/RequestCallback"; // ✅ Import the form component
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Tour package data
const tourPackages = [
  {
    id: "ladakh",
    title: "Ladakh Tours",
    packages: 6,
    src: "/images/CarousalLadakh.jpg",
    bg: "bg-red-500",
  },
  {
    id: "kashmir",
    title: "Kashmir Tours",
    packages: 5,
    src: "/images/CarousalKashmir.jpg",
    bg: "bg-blue-400",
  },
  {
    id: "himachal",
    title: "Himachal Tours",
    packages: 5,
    src: "/images/CarousalManali.jpg",
    bg: "bg-pink-500",
  },
  {
    id: "uttarakhand",
    title: "Uttarakhand Tours",
    packages: 7,
    src: "/images/CarousalUttarakhand.jpg",
    bg: "bg-red-600",
  },
  {
    id: "kerala",
    title: "Kerala Tours",
    packages: 7,
    src: "/images/CarousalKerela.jpg",
    bg: "bg-blue-600",
  },
  {
    id: "goa",
    title: "Goa Tours",
    packages: 8,
    src: "/images/CarousalGoa.jpg",
    bg: "bg-yellow-500",
  },
];

// Duplicate items for seamless looping
const duplicatedSlides = [...tourPackages, ...tourPackages];

const Carousel = () => {
  // Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trim",
  });

  // Scroll handlers
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // Reinitialize Embla on mount
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Left Button */}
      {/* <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 to-gray-600 text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
      >
        <ChevronLeft className="h-6 w-6" />
      </button> */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 p-2 top-1/2 bg-orange-600 rounded-full shadow-md z-40"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden relative z-30 -mt-20" ref={emblaRef}>
        <div className="flex gap-0 md:gap-10 pr-0 will-change-transform">
          {duplicatedSlides.map((item, index) => (
            <div key={index} className="relative flex-shrink-0 w-[200px]">
              <Link href={`/packages/${item.id}`} className="block">
                {/* Image Section */}
                <div className="relative w-[140px] h-[120px] md:w-[200px] md:h-[200px] overflow-hidden rounded-t-2xl z-999">
                  <Image
                    src={item.src}
                    alt={item.title}
                    layout="fill"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {/* Package Details */}
                <div
                  className={`text-white text-center w-[140px] h-[120px] md:w-[200px] md:h-[70px] rounded-b-2xl ${item.bg} p-2 relative z-40`}
                >
                  <p className="text-sm font-semibold ">
                    {item.packages} Packages
                  </p>
                  <h3 className="text-lg italic font-KaushanScript-Regular">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      {/* <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-l from-gray-900 to-gray-600 text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}
      <button
        onClick={scrollNext}
        className="absolute right-4 p-2 top-1/2 bg-orange-600 rounded-full shadow-md z-40"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
