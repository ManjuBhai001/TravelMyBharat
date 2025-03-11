"use client"; // ✅ Required for Next.js client components

import Link from "next/link";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const toursData = [
  {
    id: 1,
    title: "Valley Of Flowers Trekking Package in Uttaranchal",
    nights: "5 Night – 6 Days",
    price: "INR 9,000",
    image: "/images/Valley-Of-Flower.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 2,
    title: "Chandrashila Trek With Chopta and Tungnath in Uttarakhand",
    nights: "4 Night – 5 Days",
    price: "INR 10,000",
    image: "/images/treckingchandrashila.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 3,
    title: "Roopkund Trek in Uttarakhand",
    nights: "7 Nights – 8 Days",
    price: "INR 13,000",
    image: "/images/Roopkundtrek.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 4,
    title: "Uttarakhand Trail | Haridwar Rishikesh Dehradun Mussoorie",
    nights: "4 Night – 5 Days",
    price: "INR 16,000",
    image: "/images/Mussoorie.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 5,
    title: "Char Dham Group Tour From Haridwar",
    nights: "2 Night – 3 Days",
    price: "INR 22,000",
    image: "/images/kedarnath.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 6,
    title: "Chardham By Helicopter from Dehradun",
    nights: "5 Night – 6 Days",
    price: "INR 2,20,000",
    image: "/images/pilgrimageair.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 7,
    title: "Haridwar Rishikesh | FREE River Rafting Experience",
    nights: "2 Night – 3 Days",
    price: "INR 19,500",
    image: "/images/navdropimg5.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 8,
    title: "Jim Corbett Wildlife Tour with Mussoorie",
    nights: "6 Night – 7 Days",
    price: "INR 23,000",
    image: "/images/wildlifemussorie.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 9,
    title: "Jim Corbett And Nainital Tour From Delhi",
    nights: "4 Night – 4 Days",
    price: "INR 14,500",
    image: "/images/wildlifejimcorbettdelhi.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
  {
    id: 10,
    title: "Dehradun Mussoorie Rishikesh | FREE Excursion to Tehri Dam",
    nights: "5 Night – 6 Days",
    price: "INR 22,000",
    image: "/images/tehri-dam.jpg",
    sale: "MONSOON SALE",
    discount: "SAVE UPTO 15%",
  },
];

export default function UttarakhandPage() {
  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);
  // Optimize state update with requestAnimationFrame
  const toggleExpand = useCallback(() => {
    requestAnimationFrame(() => setIsExpanded((prev) => !prev));
  }, []);
  return (
    <>
      <div className="relative w-full min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] lg:h-[65vh] flex items-center justify-center before:absolute before:inset-0 before:bg-black before:mix-blend-multiply">
          {/* Background Image */}
          <Image
            src="/images/uttarakhand-b.webp"
            alt="Uttarakhand Mountains"
            priority
            fill
            className="absolute object-cover brightness-75"
          />

          {/* Dark Overlay (placed before text for proper layering) */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

          {/* Text Content */}
          <div className="relative z-10 text-start text-white px-4 lg:-ms-96">
            <h1 className="text-3xl md:text-[35px] font-bold">
              Uttarakhand Tour Packages 2024
            </h1>
            <p className="mt-2 text-sm md:text-[14px]">
              Check out exciting Uttarakhand tour packages that include
              itineraries, hotels, and instant prices!
            </p>
            <button
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg"
              onClick={() => router.push("/contact")}
            >
              Plan Your Trip Now!
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 md:px-16 py-10 bg-white text-gray-800 text-center">
          <p className="text-lg leading-relaxed">
            Uttarakhand is one of the most popular states in India for adventure
            and religion. It is known for its many religious sites. Rishikesh,
            Badrinath, Kedarnath, and Haridwar are the top religious places
            where Hindu pilgrims come from all over the world. Uttarakhand also
            has some of the best hill stations in India, like Nainital,
            Dehradun, Mussoorie, and Auli. In winter, you can see beautiful
            snowfall in places like Chakrata, Auli, and Dhanaulti. You can also
            enjoy fun activities like skiing, trekking, ice skating, and
            paragliding in the hills.
          </p>

          {/* Collapse Button */}
          {/* Collapse Button */}
          {/* Collapse Button */}
          <button
            onClick={toggleExpand}
            className="flex items-center justify-center gap-2 text-lg font-semibold text-black hover:text-blue-600 transition-all mt-4"
            aria-expanded={isExpanded}
            aria-controls="collapse-content"
            tabIndex={0}
          >
            {isExpanded ? "Collapse" : "Read More"}
            {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
          </button>

          {/* Animated Collapse Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                id="collapse-content"
                initial={{ opacity: 0, clipPath: "inset(0 50% 100% 50%)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                exit={{ opacity: 0, clipPath: "inset(0 50% 100% 50%)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-4 text-gray-700 overflow-hidden"
                aria-live="polite"
              >
                <p className="text-[16px] mb-4">
                  Uttarakhand is a place of stunning natural beauty, with lush
                  green forests and majestic mountains. It’s one of the best
                  honeymoon destinations in India. You can enjoy breathtaking
                  views of the Himalayas in Mussoorie, where Mall Road is a
                  popular tourist spot. Nainital is famous for its beautiful
                  lakes and offers amazing views from Snow View Point. Other
                  well-known hill stations include Almora, Mukteshwar, Kanatal,
                  and Ranikhet.
                </p>
                <p>
                  For a peaceful experience, visit the holy sites of Haridwar
                  and Rishikesh. Don’t miss the famous Ganga Aarti in Haridwar
                  or the chance to take a holy dip in the Ganges. The people of
                  Uttarakhand are friendly and take pride in their rich culture,
                  celebrating many festivals such as Basant Panchami, Phool Dei,
                  and Harela.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Collapse feature ends of data uttarakhand */}
      </div>
      {/* the new cards  */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-start">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Uttarakhand
          </h2>
          <p className="text-gray-600 text-lg">
            Experiential journeys will give you stories to share.
          </p>
          <div className="w-3/6 h-[2px] bg-orange-500 mt-1"></div>
        </div>

        {/* Region Selection Buttons */}

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 mt-6">
          {toursData.map((tour) => (
            <div
              key={tour.id}
              className="w-full md:w-[345px] flex flex-col items-center shadow-lg rounded-xl overflow-hidden"
            >
              {/* Image */}
              <Image
                src={tour.image}
                alt={`Tour: ${tour.title}`}
                width={345}
                height={345}
                className="rounded-xl w-full h-[260px] md:h-[345px] object-cover brightness-90 hover:brightness-100"
              />

              {/* Tour Info */}
              <div className="flex items-center gap-2 mt-2">
                <p className="text-gray-500 text-xs">{tour.nights}</p>
                {tour.sale && (
                  <span
                    className="bg-pink-500 text-white text-[10px] px-2 py-1 rounded-full"
                    aria-label={`Sale: ${tour.sale}`}
                  >
                    {tour.sale}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium mt-1">{tour.title}</h3>

              {/* Price & Discount */}
              <div className="flex items-center gap-2 mt-1">
                <p className="text-base font-bold text-gray-800">
                  Starting From {tour.price}
                </p>
                {tour.discount && (
                  <span
                    className="bg-green-500 text-white text-[10px] px-2 py-1 rounded-full"
                    aria-label={`Discount: ${tour.discount}`}
                  >
                    {tour.discount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
