"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaTripadvisor,
  FaInstagram,
  FaLinkedin,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import RequestCallback from "@/components/ui/RequestCallback"; // ✅ Import the form component

import { FaBookmark } from "react-icons/fa";

const MobileCollapsibleMenu = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className="md:hidden w-full border-t  border-gray-300">
        {/* About Travel My Bharat */}
        <div className="border-b border-gray-300">
          <button
            className="w-full flex justify-between text-[14px] items-center px-4 py-3 font-semibold"
            onClick={() => toggleSection("about")}
          >
            About Travel My Bharat
            {openSections["about"] ? (
              <FaMinus className="text-orange-500" />
            ) : (
              <FaPlus className="text-black" />
            )}
          </button>
          {openSections["about"] && (
            <div className="px-4 py-3 bg-gray-100 text-gray-700">
              <p className="text-[12px]">
                Travel My Bharat is your travel management company that creates
                personalized tours to India and the Subcontinent, tailored to
                your needs, time, and budget. Discover the real Bharat with us.
              </p>
              <div className="flex justify-start gap-4 mt-4">
                {[
                  { icon: FaFacebook, link: "#" },
                  { icon: FaXTwitter, link: "#" },
                  { icon: FaTripadvisor, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaLinkedin, link: "#" },
                ].map(({ icon: Icon, link }, index) =>
                  Icon ? ( // Check if Icon is defined
                    <a
                      key={index}
                      href={link}
                      className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full text-gray-700 text-2xl hover:text-orange-500 hover:border-orange-500 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center px-4 py-3 font-semibold text-[14px]"
            onClick={() => toggleSection("quickLinks")}
          >
            Quick Links
            {openSections["quickLinks"] ? (
              <FaMinus className="text-orange-500" />
            ) : (
              <FaPlus className="text-black" />
            )}
          </button>
          {openSections["quickLinks"] && (
            <div className="px-4 py-3 bg-gray-100 text-gray-700 space-y-2 text-[12px]">
              {[
                "About us",
                "Our Team",
                "Guest Reviews",
                "Photo Gallery",
                "Pay Now",
                "Blogs",
                "Contact Us",
                "Careers",
                "Terms of Use",
                "Privacy Policy",
                "FAQ",
              ].map((link, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    link === "Pay Now"
                      ? "bg-orange-500 text-white px-2 py-1 rounded"
                      : ""
                  }`}
                >
                  <FaBookmark className="text-orange-500" />
                  {link}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Why Travel My Bharat */}
        <div className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center px-4 py-3 font-semibold text-[14px]"
            onClick={() => toggleSection("whyTravel")}
          >
            Why Travel My Bharat{" "}
            {openSections["whyTravel"] ? (
              <FaMinus className="text-orange-500" />
            ) : (
              <FaPlus className="text-black" />
            )}
          </button>
          {openSections["whyTravel"] && (
            <div className="px-4 py-3 bg-gray-100 text-gray-700 text-[12px]">
              {[
                "Our Promise",
                "100% Tailor Made",
                "100% Value Guarantee",
                "Expert Consultant",
                "Ground Support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaBookmark className="text-orange-500" />
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trending @ Travel My Bharat */}
        <div className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center px-4 py-3 font-semibold text-[14px]"
            onClick={() => toggleSection("trending")}
          >
            Trending @ Travel My Bharat{" "}
            {openSections["trending"] ? (
              <FaMinus className="text-orange-500" />
            ) : (
              <FaPlus className="text-black" />
            )}
          </button>
          {openSections["trending"] && (
            <div className="px-4 py-3 bg-gray-100 text-gray-700 text-[12px]">
              {[
                "Kerala Tour Package | Golden Triangle Package",
                "Goa Tour Package | Shimla Package",
                "Kashmir Tour Package | Shimla Package",
                "Auli Tour Package | Manali Tour Package",
                "Ladakh Tour Package | Coorg Tour Package",
              ].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </div>

        {/* Package by Theme */}
        <div className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center px-4 py-3 font-semibold text-[14px]"
            onClick={() => toggleSection("themePackages")}
          >
            Package by Theme{" "}
            {openSections["themePackages"] ? (
              <FaMinus className="text-orange-500" />
            ) : (
              <FaPlus className="text-black" />
            )}
          </button>
          {openSections["themePackages"] && (
            <div className="px-4 py-3 bg-gray-100 text-gray-700 text-[14px]">
              {[
                "Family Tour Package | Golden Triangle Package",
                "Honeymoon Tour Package | Wildlife Tours Package",
                "Pilgrimage Tour Package | Cultural Tour Package",
                "Trekking Package | Yoga Tour India",
              ].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileCollapsibleMenu;
