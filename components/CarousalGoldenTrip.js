"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import RequestCallback from "@/components/ui/RequestCallback"; // ✅ Import the form component
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";
import { FaHome } from "react-icons/fa";

const toursData = {
  "Check our related products": {
    tours: [
      {
        id: 22,
        title: "Coorg Tour Package",
        nights: "2 Night – 3 Days",
        price: "INR 25,000",
        image: "/images/Coorghomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 23,
        title: "Shimla Manali From Delhi Tour",
        nights: "5 Night – 6 Days",
        price: "INR 19,500",
        image: "/images/Shimlahomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 24,
        title: "Uttarakhand Trail | Haridwar Rishikesh Dehradun Mussoorie",
        nights: "4 Night – 5 Days",
        price: "INR 16,000",
        image: "/images/Mussoorie.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 25,
        title: "Spiti Valley Tour",
        nights: "6 Night – 7 Days",
        price: "INR 20,000",
        image: "/images/Spitihomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 26,
        title: "Auli Rishikesh Tour From Delhi",
        nights: "5 Night – 6 Days",
        price: "INR 18,000",
        image: "/images/Aulihomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
    ],
  },
};

export default function TourCarousel() {
  const sectionRefs = useRef({});

  const handleScrollToRegion = (region) => {
    sectionRefs.current[region]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full max-w-6xl h-full mx-auto flex flex-col">
      {/* Auto-Scrolling Region Carousel (6 Slides Visible) */}
      {/* Region Carousel - Ensuring Visibility */}

      {/* Tour Sections */}
      <div className="w-full flex flex-col">
        {Object.keys(toursData).map((region) => {
          const Icon = toursData[region].icon || FaHome;
          return (
            <section
              key={region}
              ref={(el) => {
                if (el) sectionRefs.current[region] = el;
              }}
              id={region}
              className="my-8 p-4 rounded-lg relative z-[1]"
            >
              {/* Region Title */}
              <h2 className="text-2xl font-bold text-orange-600 flex items-center">
                <Icon size={28} className="mr-2" />
                {region}
              </h2>
              {/* yes starts */}
              {/* Sub-carousel for Tours */}
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={1} // Ensures only 1 slide on mobile
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 22 }, // 2 slides for tablets
                  1024: { slidesPerView: 3, spaceBetween: 52 }, // 3 slides for desktops
                }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="mt-4 w-full h-full"
                grabCursor={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
              >
                {toursData[region].tours.map((tour) => (
                  <SwiperSlide key={tour.id}>
                    <div className="rounded-lg p-2">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        width={345}
                        height={345}
                        className="rounded-md w-[260px] h-[260px] md:w-[345px] md:h-[345px] mx-6 md:mx-0  object-cover"
                      />

                      {/* Tour Info Section */}
                      <div className="flex justify-between items-center w-full mt-2 text-start">
                        <p className="text-gray-700 text-sm bg-gray-100 px-3 py-1 rounded-lg shadow-sm">
                          {tour.nights}
                        </p>
                        {tour.sale && (
                          <span
                            className="px-4 py-1 text-[8px] font-extrabold uppercase tracking-wider text-white rounded-full shadow-xl 
              bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
              hover:from-orange-600 hover:via-red-600 hover:to-pink-600 
              transition-all duration-1600 ease-in-out 
              animate-pulse ring-2 ring-orange-300/50"
                          >
                            {tour.sale}
                          </span>
                        )}
                      </div>

                      {/* Tour Title */}
                      <h3 className="text-lg font-bold">{tour.title}</h3>

                      {/* Pricing & Discount */}
                      <div className="flex justify-between items-center w-full font-[Poppins-Medium] mt-2">
                        <p className="text-gray-800 text-sm font-semibold bg-gray-100 px-3 py-1 rounded-lg shadow-sm">
                          Starting From {tour.price}
                        </p>
                        {tour.discount && (
                          <span
                            className="px-2 py-1 text-[8px] uppercase tracking-wider text-green-900 rounded-full shadow-xl 
              bg-gradient-to-r from-green-400 via-green-500 to-green-600 
              hover:from-green-500 hover:via-green-600 hover:to-green-700 
              transition-all duration-1500 ease-in-out 
              animate-pulse ring-2 ring-green-300/50"
                          >
                            {tour.discount}
                          </span>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* yes ends */}
            </section>
          );
        })}
      </div>
    </div>
  );
}
