"use client";
import { useState, useEffect, memo, useCallback } from "react";
import Image from "next/image";
import { IoPaperPlaneOutline } from "react-icons/io5"; // Import the icon
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center text-white text-center px-4">
      {/* Dark overlay */}
      <Image
        src="/images/background-body.jpg"
        alt="Hawa Mahal at sunset"
        width={1200}
        height={650}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px" // Serve optimized images
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Search Bar */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            See the Real Bharat With Us
          </h1>

          {/* Search Bar Container */}
          <div className="flex flex-col items-center text-center space-y-6 px-4 w-full">
            {/* Heading */}

            {/* Search Bar Container */}
            <div className="relative flex w-full max-w-3xl">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search your next Destination..."
                aria-label="Search destination"
                autoComplete="off"
                className="w-full px-5 md:px-6 py-3 md:py-4 border border-gray-300 rounded-full focus:outline-none 
       focus:ring-1 focus:ring-orange-400 text-sm md:text-lg shadow-sm transition-all duration-200 
       placeholder-gray-500 focus:border-orange-500 text-black"
              />

              {/* Search Button */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-md text-sm md:text-lg"
                aria-label="Search Tours"
              >
                Search
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-xl font-medium text-white">
              Get ready to enjoy your dream vacation now!
            </p>
          </div>
        </div>
      </div>

      {/* that whatsapp icons which is visible only on desktops and is there at the bottom right corner  */}
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-[9999] sm:block hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>

      {/* WhatsApp Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-16 right-4 bg-white shadow-lg p-4 w-80 border border-gray-200 z-[9999] sm:block hidden"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-green-600">
              WhatsApp Us
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={20} />
            </button>
          </div>
          <p className="mt-2 text-gray-600">
            Book your tour hassle-free with us on WhatsApp. One of our
            representatives is here to help!
          </p>
          <a
            href="https://wa.me/+919557911144"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center bg-green-500 text-white py-4 hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" /> Chat Now
          </a>
        </motion.div>
      )}
    </section>
  );
}
