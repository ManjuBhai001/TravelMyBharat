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
import {
  FaMountain,
  FaTree,
  FaHeart,
  FaChurch,
  FaHome,
  FaSun,
  FaPaperPlane,
} from "react-icons/fa";

const toursData = {
  Wildlife: {
    icon: FaTree,
    tours: [
      {
        id: 1,
        title: "Jim Corbett And Nainital Tour From Delhi",
        nights: "4 Night – 4 Days",
        price: "INR 14,500",
        image: "/images/wildlifejimcorbettdelhi.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
        link: "/tours/jim-corbett-nainital", // Add the routing link here to nainital page
      },
      {
        id: 2,
        title: "Jim Corbett Wildlife Tour with Mussoorie",
        nights: "6 Night – 7 Days",
        price: "INR 23,000",
        image: "/images/wildlifemussorie.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
        link: "/", // Add the routing link back to the homepage
      },
      {
        id: 3,
        title: "Meghalaya and Kaziranga | FREE Jeep Safari",
        nights: "5 Night – 6 Days",
        price: "INR 21,500",
        image: "/images/wildlifemeghalaya.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 4,
        title: "Wildlife Tour to Bandhavgarh National Park",
        nights: "2 Night – 3 Days",
        price: "INR 12,999",
        image: "/images/Corbet.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 5,
        title: "Tour to Kanha National Park",
        nights: "2 Night – 3 Days",
        price: "INR 23,000",
        image: "/images/wildlifekanha.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
    ],
  },
  Trecking: {
    icon: FaMountain,
    tours: [
      {
        id: 6,
        title: "Kashmir Great Lakes Trek",
        nights: "6 Night – 7 Days",
        price: "INR 16,500",
        image: "/images/treckingkashmir.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 7,
        title: "Tarsar Marsar Trek, Jammu and Kashmir",
        nights: "5 Night – 6 Days",
        price: "INR 16,500",
        image: "/images/treckingjammu.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 8,
        title: "Hampta Pass Trek, Manali",
        nights: "4 Night – 5 Days",
        price: "INR 7,500",
        image: "/images/treckinghampta.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 9,
        title: "Chandrashila Trek With Chopta and Tungnath in Uttarakhand",
        nights: "4 Night – 5 Days",
        price: "INR 10,000",
        image: "/images/treckingchandrashila.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 10,
        title: "Valley Of Flowers Trekking Package in Uttaranchal",
        nights: "5 Night – 6 Days",
        price: "INR 9,000",
        image: "/images/Valley-Of-Flower.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 11,
        title: "Har Ki Dun Trek, Uttarakhand",
        nights: "6 Night – 7 Days",
        price: "INR 9,500",
        image: "/images/Trekking.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
    ],
  },
  FamilyTour: {
    icon: FaHome,
    tours: [
      {
        id: 12,
        title: "Mahabaleshwar With Panchgani Tour Package",
        nights: "3 Night – 4 Days",
        price: "INR 25,000",
        image: "/images/Carousalmahabaleshwar.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 13,
        title: "Darjeeling and Gangtok Tour Package",
        nights: "6 Night – 7 Days",
        price: "INR 25,500",
        image: "/images/Darjeelinghomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 14,
        title: "Mysore, Ooty and Kodaikanal Tour Package",
        nights: "5 Night – 6 Days",
        price: "INR 14,000",
        image: "/images/Mysorehomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 15,
        title: "Kerala Tour Package",
        nights: "4 Night – 5 Days",
        price: "INR 19,500",
        image: "/images/Kerelahomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 16,
        title: "Andaman Tour Package",
        nights: "5 Night – 6 Days",
        price: "INR 25,500",
        image: "/images/Andamanhomebody.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
    ],
  },
  "Golden Triangle": {
    icon: FaChurch,
    tours: [
      {
        id: 17,
        title: "Golden Triangle with Ranthambore | FREE Jungle Safari",
        nights: "7 Night – 8 Days",
        price: "INR 24,000",
        image: "/images/goldenrantham.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 18,
        title: "5 Day Golden Triangle Tour",
        nights: "4 Night – 5 Days",
        price: "INR 16,000",
        image: "/images/golden5days.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 19,
        title: "Golden Triangle with Ranthambore | FREE Jungle Safari",
        nights: "7 Night – 8 Days",
        price: "INR 24,000",
        image: "/images/goldenjungle.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 20,
        title: "Golden Triangle India | Free Taj Mahal Visit",
        nights: "5 Night – 6 Days",
        price: "INR 22,000",
        image: "/images/Golden-Triangl.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 21,
        title: "Golden Triangle Tour with Ajmer",
        nights: "7 Night – 8 Days",
        price: "INR 24,000",
        image: "/images/goldenajmer.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
    ],
  },
  "Hill Station": {
    icon: FaMountain,
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
  Honeymoon: {
    icon: FaHeart,
    tours: [
      {
        id: 26,
        title: "Kashmir Honeymoon Tour Package | FREE Excursion to Gulmarg",
        nights: "5 Night – 6 Days",
        price: "INR 20,000",
        image: "/images/Kashmir.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 27,
        title: "Kerala Honeymoon Package",
        nights: "3 Night – 4 Days",
        price: "INR 13,000",
        image: "/images/honeymoonkerela.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 28,
        title: "Goa Honeymoon Package For 5 Days",
        nights: "4 Night – 5 Days",
        price: "INR 15,000",
        image: "/images/honeymoongoa.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 29,
        title: "Shimla Kullu Manali Honeymoon Package",
        nights: "5 Night – 6 Days",
        price: "INR 16,000",
        image: "/images/packagesdropdownShimla.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 30,
        title: "Romantic Getaway to Mussoorie | Honeymoon Tour Package",
        nights: "4 Night – 5 Days",
        price: "INR 22,000",
        image: "/images/honeymoonmussorie.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 31,
        title: "Honeymoon Escape to Andaman | Honeymoon Tour Package",
        nights: "5 Night – 6 Days",
        price: "INR 25,000",
        image: "/images/honeymoonandaman.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
    ],
  },
  Pilgrimage: {
    icon: FaSun,
    tours: [
      {
        id: 32,
        title: "Vaishno Devi Tour from Jammu",
        nights: "2 Night – 3 Days",
        price: "INR 15,000",
        image: "/images/packagesdropdown4.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 33,
        title: "Char Dham Group Tour From Haridwar",
        nights: "2 Night – 3 Days",
        price: "INR 22,000",
        image: "/images/kedarnath.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 34,
        title: "Amarnath Yatra Package from Delhi",
        nights: "4 Night – 5 Days",
        price: "INR 14,000",
        image: "/images/pilgrimageamarnathji.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 35,
        title: "Mathura Vrindavan Tour Package",
        nights: "2 Night – 3 Days",
        price: "INR 8,000",
        image: "/images/pilgrimagemathura.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 36,
        title: "Kailash Mansarovar Inner Parikrama 2024",
        nights: "2 Night – 3 Days",
        price: "Get Price on Call",
        image: "/images/pilgrimagekailash.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 37,
        title: "Chardham By Helicopter from Dehradun",
        nights: "5 Night – 6 Days",
        price: "INR 2,20,000",
        image: "/images/pilgrimageair.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
      {
        id: 38,
        title: "Delhi to Tirupati Balaji Tour Package by Flight",
        nights: "2 Night – 3 Days",
        price: "INR 12,000",
        image: "/images/pilgrimagetirupatiji.jpg",
        sale: "MONSOON SALE",
        discount: "SAVE UPTO 15%",
      },
    ],
  },
};

const tours = [
  {
    name: "Kashmir Tours",
    image: "/images/navdropimg1.jpg",
    gridArea: "kashmir",
  },
  {
    name: "Goa Tours",
    image: "/images/CarousalGoa.jpg",
    gridArea: "goa",
  },
  {
    name: "Kerala Tours",
    image: "/images/CarousalKerela.jpg",
    gridArea: "kerala",
  },
  {
    name: "Coorg Tours",
    image: "/images/Coorg.jpg",
    gridArea: "coorg",
  },
  {
    name: "Spiti Tours",
    image: "/images/Spitihomebody.jpg",
    gridArea: "spiti",
  },
  {
    name: "Ladakh Tours",
    image: "/images/CarousalLadakh.jpg",
    gridArea: "ladakh",
  },
  {
    name: "Rishikesh Tours",
    image: "/images/rishikesh.jpg",
    gridArea: "rishikesh",
  },
  {
    name: "Auli Tours",
    image: "/images/Auli.jpg",
    gridArea: "auli",
  },
  {
    name: "Mahabaleshwar Tours",
    image: "/images/Mahabaleshwartour.jpg",
    gridArea: "Mahabaleshwar",
  },
];

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
      <div className="relative z-10 w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 10 }, // Mobile (3 regions)
            640: { slidesPerView: 3, spaceBetween: 15 }, // Tablet (3 regions)
            1024: { slidesPerView: 6, spaceBetween: 20 }, // Desktop (6 regions)
          }}
          className="pb-4"
        >
          {Object.keys(toursData).map((region) => {
            const Icon = toursData[region].icon || FaHome;
            return (
              <SwiperSlide key={region}>
                <div
                  onClick={() => handleScrollToRegion(region)}
                  className="flex flex-col items-center gap-2 py-3 px-6 border border-orange-500 rounded-xl text-orange-500 hover:bg-orange-200 transition-all cursor-pointer text-center shadow-md hover:shadow-lg"
                >
                  <Icon size={28} />
                  <span className="text-[8px] md:text-[12px]">{region}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

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
        {/* starts */}

        {/* 🎉 NEW: Trip Planning Banner (AFTER CAROUSEL) */}
        <div className="relative w-full max-w-screen-xl mx-auto h-[400px] md:h-[500px]">
          {/* Background Image */}
          <Image
            src="/images/trip-banner.jpg"
            alt="Trip Planning Banner"
            layout="fill"
            objectFit="cover"
            priority={true}
            className="w-full h-full rounded-lg"
          />

          {/* Overlay Content */}
          {/* Overlay Content */}
          <div
            className="absolute inset-0 bg-black/60 text-white flex flex-col justify-center p-6 md:p-12 
            md:w-[50%] md:rounded-r-lg md:text-left text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Want a trip that's perfectly planned for you?
            </h2>
            <p className="mt-3 text-lg">
              Our tour expert is always ready to help you plan your next
              unforgettable adventure!
            </p>

            {/* Button (Visible on Mobile & Desktop) */}
            <button
              className="mt-4 md:mt-24 md:mx mx-auto md:mx-0 flex items-center gap-2 px-6 py-3 bg-white text-orange-600 
               border border-orange-500 shadow-md hover:bg-orange-500 hover:text-white 
               transition md:absolute md:left-[18%] md:top-1/2 md:-translate-y-1/2"
            >
              Plan Your Trip <FaPaperPlane className="text-sm" />
            </button>
          </div>
        </div>

        {/* ends */}

        {/* new starts */}
        <div className="py-4 flex justify-center">
          <div className="w-[354px] md:w-auto">
            <h2 className="text-center text-2xl font-bold mb-6">
              Experience the Real Bharat
            </h2>

            <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-3 md:grid-rows-3 gap-1 md:gap-4">
              {tours.slice(0, 9).map((tour) => (
                <div
                  key={tour.name}
                  className="relative flex items-center justify-center text-center overflow-hidden transition-transform duration-300 w-[118px] h-[123px] md:w-[379px] md:h-[379px]"
                >
                  {tour.image && (
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      width={379}
                      height={379}
                      className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  )}
                  <span className="relative text-white font-KaushanScript-Regular text-sm font-semibold italic z-10">
                    {tour.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* new ends */}
      </div>
    </div>
  );
}
