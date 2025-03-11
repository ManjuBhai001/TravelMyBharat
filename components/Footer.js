"use client"; // ✅ Required for Next.js client components
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5"; // Import the icon
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useState, useEffect, memo, useCallback } from "react";
import RequestCallback from "@/components/ui/RequestCallback"; // ✅ Import the form component
import { Button } from "@/components/ui/button";

// Travel destinations data
const destinationsImages = [
  { src: "/images/navdropimg1.jpg", alt: "Kashmir Tours" },
  { src: "/images/navdropimg2.jpg", alt: "Ladakh Tours" },
  { src: "/images/navdropimg3.jpg", alt: "Dehradun Tours" },
  { src: "/images/navdropimg4.jpg", alt: "Kerala Tours" },
  { src: "/images/navdropimg5.jpg", alt: "Rishikesh Tours" },
  { src: "/images/navdropimg6.jpg", alt: "Golden Triangle" },
  { src: "/images/navdropimg7.jpg", alt: "Mussorie Tours" },
  { src: "/images/navdropimg8.jpg", alt: "Corbett Tours" },
  { src: "/images/navdropimg9.jpg", alt: "Manali Tours" },
];

const certifications = [
  { src: "/images/atulyabharat.jpg", alt: "Incredible India" },
  { src: "/images/mtc.jpg", alt: "Ministry of Tourism" },
  { src: "/images/mca.jpg", alt: "Ministry of Corporate Affairs" },
  { src: "/images/asta.jpg", alt: "ASTA" },
  { src: "/images/uttarakhand.jpg", alt: "Uttarakhand Tourism" },
];

const FooterTravelMyBharat = () => {
  const phoneNumber = "9557911144"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello! I would like to chat with you."); // Optional default message

  const [isOpen, setIsOpen] = useState(false); // ✅ Controls form visibility
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
  return (
    <>
      <footer className="hidden md:block mt-20 mb-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-start text-start p-6">
            {/* Logo */}
            <img
              src="/images/LOGO.png"
              alt="Travel My Bharat Logo"
              className="w-44 -mt-8 mb-4"
            />

            {/* Description */}
            <p className="text-gray-700 max-w-md">
              Travel My Bharat is your travel management company that creates
              personalized tours to India and the Subcontinent, tailored to your
              needs, time, and budget. Discover the real Bharat with us.
            </p>

            {/* Divider */}
            <div className="w-72 border-t-2 border-orange-500 my-4"></div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, link: "#", label: "Facebook" },
                { icon: FaTripadvisor, link: "#", label: "Tripadvisor" },
                { icon: FaInstagram, link: "#", label: "Instagram" },
                { icon: FaLinkedin, link: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  aria-label={`Visit our ${label} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full text-gray-700 text-2xl hover:text-orange-500 hover:border-orange-500 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <nav aria-label="Quick Links">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 text-gray-700">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Guest Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <button
                    className="mt-2 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all"
                    aria-label="Make a payment"
                  >
                    Pay Now
                  </button>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 cursor-pointer">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Right Section */}
          <section aria-labelledby="travel-destinations-title">
            {/* Section Title */}
            <div className="text-center">
              <h2
                id="travel-destinations-title"
                className="text-2xl mb-4 font-semibold text-gray-800"
              >
                Travel Destinations
              </h2>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-3 gap-1 max-w-4xl mx-auto">
              {destinationsImages.map((destination, index) => (
                <div
                  key={index}
                  className="relative w-[111px] h-[99px] flex items-center justify-center overflow-hidden group"
                >
                  <Image
                    src={destination.src}
                    alt={`Destination: ${destination.alt}`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <h1 className="text-white text-xs text-center font-semibold font-KaushanScript-Regular">
                      {destination.alt}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </footer>

      <div className="bg-gray-100 py-12 text-center">
        {/* Line Divider */}
        <div className="w-full flex justify-center mb-4">
          <div className="w-96 border-t-2 border-orange-500"></div>
        </div>

        {/* Section Title */}
        <div className="relative">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wide">
            Certified By
          </h2>
          {/* <div className="w-24 border-t-4 border-orange-500 mx-auto mt-2"></div> */}
        </div>

        {/* Logos Grid */}
        <div className="flex justify-center gap-6 flex-wrap mt-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 w-[180px] h-[110px] mb-10 flex items-center justify-center
            transition-all transform hover:scale-105 hover:shadow-xl border border-gray-200"
            >
              <img src={cert.src} alt={cert.alt} className="max-h-full" />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-gray-600 text-sm font-medium hidden sm:block">
          © 2024 All rights reserved | Made with{" "}
          <span className="text-red-500">❤️</span> in Bharat
        </p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white shadow-lg md:hidden z-50">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Call Button */}
          <a href="tel:+91-9557911144">
            <button className="bg-white border border-orange-500 p-3 rounded-full shadow-sm">
              <PhoneCall size={24} className="text-orange-500" />
            </button>
          </a>

          {/* Request Callback Button */}
          {/* <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition" >
            Request Callback
          </button> */}
          <Button
            onClick={() => setIsOpen(true)} // ✅ Opens form on click
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            <Phone size={18} />
            Request Callback
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

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      <div>
        {/* send Enquiry */}
        {/* Vertical Send Inquiry Button */}
        {/* <button
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-l-md
    hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center space-x-2
    hidden md:flex"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        <IoPaperPlaneOutline
          className="text-lg ml-2"
          style={{ transform: "rotate(80deg)" }} // Rotating the icon by 80 degrees
        />
        <span className="ms-2 me-3"> SEND ENQUIRY</span>
      </button> */}
        <button
          onClick={() => setIsOpen(true)} // ✅ Opens form on click
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-3 
             rounded-l-lg hover:bg-orange-600 transition-all transform hover:-translate-x-1 
             shadow-lg items-center justify-center space-x-2 hidden md:flex"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg) translateZ(0)", // Added translateZ(0) for GPU acceleration
            willChange: "transform, opacity", // Improves rendering efficiency
          }}
        >
          <IoPaperPlaneOutline
            className="text-lg"
            style={{ transform: "rotate(80deg) translateZ(0)" }} // Improves animation rendering
          />
          <span className="text-sm font-semibold tracking-wide">
            SEND ENQUIRY
          </span>
        </button>
        {isOpen && (
          <RequestCallback
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </>
  );
};

export default FooterTravelMyBharat;
