"use client"; // ✅ Required for Next.js client components

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import RequestCallback from "@/components/ui/RequestCallback"; // ✅ Import the form component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

const toursData = {
  "South India": [
    {
      id: 1,
      title: "Coorg Tour Package",
      nights: "2 Nights – 3 Days",
      price: "INR 25,000",
      image: "/images/Coorghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 2,
      title: "Andaman Tour Package",
      nights: "5 Nights – 6 Days",
      price: "INR 25,500",
      image: "/images/Andamanhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 3,
      title: "Kerala Tour Package",
      nights: "4 Nights – 5 Days",
      price: "INR 19,500",
      image: "/images/Kerelahomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 4,
      title: "Tirupati Kanchipuram Tour",
      nights: "5 Nights – 6 Days",
      price: "INR 16,500",
      image: "/images/Tirupatihomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 5,
      title: "Mysore, Ooty & Kodaikanal",
      nights: "5 Nights – 6 Days",
      price: "INR 14,000",
      image: "/images/Mysorehomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
  ],
  "North India": [
    {
      id: 6,
      title: "Shimla Manali Tour",
      nights: "5 Nights – 6 Days",
      price: "INR 19,500",
      image: "/images/Shimlahomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 7,
      title: "Kashmir Tour",
      nights: "5 Nights – 6 Days",
      price: "INR 19,500",
      image: "/images/Kashmirhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 8,
      title: "Spiti Valley Tour",
      nights: "6 Nights – 7 Days",
      price: "INR 20,000",
      image: "/images/Spitihomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 9,
      title: "Char Dham Package From Delhi",
      nights: "11 Nights – 12 Days",
      price: "INR 39,000",
      image: "/images/Chardhamhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 10,
      title: "Auli Rishikesh Tour From Delhi",
      nights: "5 Nights – 6 Days",
      price: "INR 18,000",
      image: "/images/Aulihomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
  ],
  "Central India": [
    {
      id: 11,
      title: "Golden Triangle India | Free Taj Mahal Visit",
      nights: "5 Nights – 6 Days",
      price: "INR 22000",
      image: "/images/Goldenhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/destination/GoldenTriangleTajMahal",
    },
    {
      id: 12,
      title: "Khajuraho and Bandhavgarh Tour",
      nights: "3 Nights – 4 Days",
      price: "INR 18,000",
      image: "/images/Khajurahohomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 13,
      title: "Omkareshwar Maheshwar Mandu",
      nights: "1 Nights – 2 Days",
      price: "INR 9,000",
      image: "/images/Omkareshwarhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 14,
      title: "Auli Rishikesh Tour From Delhi",
      nights: "05 Nights – 06 Days",
      price: "INR 18,000",
      image: "/images/Auli2homebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 15,
      title: "Statue of Unity Tour Package",
      nights: "3 Nights – 4 Days",
      price: "INR 25,000",
      image: "/images/Statuehomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
  ],
  "North East India": [
    {
      id: 16,
      title: "Darjeeling & Gangtok Tour Package",
      nights: "6 Nights – 7 Days",
      price: "INR 25000",
      image: "/images/Darjeelinghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 17,
      title: "Meghalaya Tour Package",
      nights: "3 Nights – 4 Days",
      price: "INR 18,000",
      image: "/images/Meghalayahomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 18,
      title: "Gangtok Tour Package",
      nights: "3 Nights – 4 Days",
      price: "INR 20,000",
      image: "/images/Gangtokhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
    {
      id: 19,
      title: "Dzukou Valley Trekking Trip Package",
      nights: "04 Nights – 05 Days",
      price: "INR 23,000",
      image: "/images/Dzukouhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
      link: "/",
    },
  ],
};

export default function TourCarousel() {
  const [selectedRegion, setSelectedRegion] = useState("South India");
  const [currentIndex, setCurrentIndex] = useState(0);
  const tours = toursData[selectedRegion] || [];
  const [isOpen, setIsOpen] = useState(false); // ✅ Controls form visibility

  // New change Starts
  useEffect(() => {
    if (selectedRegion === "South India") {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tours.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedRegion, currentIndex]);
  // New change Ends

  // Auto-slide for "South India"
  // useEffect(() => {
  //   if (selectedRegion === "South India") {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 3000); // Auto-slide every 3 seconds

  //     return () => clearInterval(interval);
  //   }
  // }, [selectedRegion, currentIndex]);

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % tours.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + tours.length) % tours.length);
  // };

  // ✅ Store form data in parent to persist across modal open/close
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    travelDate: "",
    noOfPerson: "",
    travelDescription: "",
    hotelCategory: "",
    isAuthorized: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(sessionStorage.getItem("formData")) || {};
      setFormData((prev) => ({ ...prev, ...storedData }));
    }
  }, []);
  // const [formData, setFormData] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return (
  //       JSON.parse(sessionStorage.getItem("formData")) || {
  //         name: "",
  //         mobile: "",
  //         email: "",
  //         travelDate: "",
  //         noOfPerson: "",
  //         travelDescription: "",
  //         hotelCategory: "",
  //         isAuthorized: false,
  //       }
  //     );
  //   }
  //   return { name: "", mobile: "", email: "" };
  // });

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-[18px] md:text-[30px] font-bold text-center mt-10">
        Personalized Private Tours Designed Just for You in Bharat!
      </h2>
      <div className="mt-6 border-b pb-2">
        {/* Creates a grid layout for region buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 md:gap-4 justify-items-center">
          {Object.keys(toursData).map((region) => (
            <button
              key={region} // Ensures each button has a unique key
              onClick={() => {
                setSelectedRegion(region); // Updates the selected region
                setCurrentIndex(0); // Resets the carousel index when switching regions
              }}
              className={` text-lg ${
                selectedRegion === region
                  ? "text-orange-600 border-b-2 border-orange-600" // Highlights selected button
                  : "text-gray-600" // Default text color for unselected buttons
              }`}
            >
              {region} {/* Displays the region name on the button */}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      {/* Swiper Carousel */}
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={22} // Increased gap between images
        slidesPerView={1} // Default to 1 slide for mobile
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 22 }, // 2 slides for screens >= 640px
          1024: { slidesPerView: 3, spaceBetween: 52 }, // 3 slides for screens >= 1024px
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="coverflow"
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mt-6"
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id} className="relative mb-5">
            <div className="w-[345px] flex flex-col items-center shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
              <Link href={tour.link} onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  width={345}
                  height={345}
                  className="rounded-xl w-[260px] h-[260px] md:w-[345px] md:h-[345px] object-cover brightness-90 hover:brightness-100 cursor-pointer"
                />
              </Link>

              <div className="flex gap-2 mt-2">
                <p className="text-gray-500">{tour.nights}</p>
                <span className="bg-pink-500 text-white text-[10px] px-2 py-1 rounded-full">
                  {tour.sale}
                </span>
              </div>
              <h3 className="text-lg">{tour.title}</h3>
              <div className="flex gap-2 Poppins-Medium">
                <p className="text-sm">Starting From {tour.price}</p>
                <span className="bg-green-500 text-white text-[10px] px-2 py-1 rounded-full">
                  {tour.discount}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Call Button with Icon */}
      {/* Call Button with Icon */}
      <div className="flex justify-center items-center mb-8 gap-9">
        {/* Phone Icon Button */}
        <a
          href="tel:+9557911144" // Replace with the actual number
          className="w-10 h-10 flex items-center justify-center border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
        >
          <Phone size={18} />
        </a>

        {/* Request Callback Button */}
        <Button
          onClick={() => setIsOpen(true)} // ✅ Opens form on click
          className="mt-2 bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
        >
          <Phone size={18} />
          REQUEST CALLBACK
        </Button>
        {/* ✅ Render Modal When Open */}
        {isOpen && (
          <RequestCallback
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
}
