"use client";
import {
  FaMapMarkedAlt,
  FaHotel,
  FaEnvelopeOpenText,
  FaClipboardList,
  FaBookmark,
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";

const itineraryData = [
  {
    day: 1,
    title: "Arrival in Delhi | Delhi Sightseeing Tour",
    description:
      "Upon arrival, board your transfer to the hotel and check-in. Later, get assisted for a sightseeing tour of Delhi and explore attractions like Rashtrapati Bhawan, India Gate, National War Memorial, etc. Later, get transferred back to the hotel for an overnight stay.",
    transport: "Transfer in Sedan",
    locations: [
      { icon: "🚉", text: "Railway Station / Airport" },
      { icon: "🏨", text: "Standard Hotel in Delhi" },
    ],
    experiences: [
      { id: 1, name: "India Gate", image: "/images/IndiagateUk.jpg" },
      { id: 2, name: "Rajpath", image: "/images/RajpathUk.jpg" },
      { id: 3, name: "Rashtrapati Bhavan", image: "/images/RashtrapatiUK.jpg" },
      { id: 4, name: "Qutub Minar", image: "/images/QutubminarUk.jpg" },
      {
        id: 5,
        name: "National War Memorial",
        image: "/images/WarmemorialUK.jpg",
      },
    ],
  },
  {
    day: 2,
    title: "Delhi Sightseeing Tour with Lotus Temple",
    description:
      "Board your transfer from the hotel for a sightseeing tour of Delhi. Explore the famous Red Fort, Qutub Minar, Humayun’s Tomb, etc. Also, see the beautiful Lotus Temple, followed by a visit to Jantar Mantar. Later, get assisted back to the hotel for an overnight stay.",
    transport: "Transfer in Sedan",
    locations: [
      { icon: "🏨", text: "Standard Hotel in Delhi" },
      { icon: "🏛", text: "Historical Sightseeing Tour Of Delhi" },
      { icon: "🏨", text: "Standard Hotel in Delhi" },
    ],
    experiences: [
      {
        id: 6,
        name: "Lotus Temple",
        image: "/images/LotusUk.jpg",
      },
      { id: 7, name: "Red Fort", image: "/images/RedfortUk.jpg" },
      {
        id: 8,
        name: "Jantar Mantar Delhi",
        image: "/images/JantarMantarUk.jpg",
      },
      { id: 9, name: "Qutub Minar", image: "/images/QutubminarUk.jpg" },
      { id: 10, name: "Humayun Tomb", image: "/images/HumayunTombUk.jpg" },
      { id: 11, name: "Rajghat", image: "/images/RajghatUk.jpg" },
    ],
  },
  {
    day: 3,
    title: "Arrival in Agra | Sikandra & Taj Mahal Sightseeing Tour",
    description:
      "Check-out from the hotel and board your transfer to Agra. Upon arrival, check-in at the hotel. Later, get transferred for a sightseeing tour of Agra. Visit Akbar’s Tomb at Sikandra, followed by a visit to the wonderful Taj Mahal. Later, get assisted back to the hotel for an overnight stay.",
    transport: "Transfer in Sedan",
    locations: [
      { icon: "🏨", text: "Standard Hotel in Delhi" },
      { icon: "🏨", text: "Standard Hotel in Agra" },
    ],
    experiences: [
      { id: 12, name: "Taj Mahal", image: "/images/TajUk.jpg" },
      { id: 13, name: "Akbar's Tomb", image: "/images/AkbarTombUK.jpg" },
    ],
  },
  {
    day: 4,
    title: "Agra Fort & Fatehpur Sikri Sightseeing Tour | Arrival in Jaipur",
    description:
      "Check-out and board your transfer for a city sightseeing tour. Visit Agra Fort and Fatehpur Sikri. Continue your journey to the hotel in Jaipur for check-in. Then, get transferred to see Hawa Mahal and explore the nearby areas. Later, get assisted back to the hotel for an overnight stay. ",
    transport: "Transfer in Sedan",
    locations: [
      { icon: "🏨", text: "Standard Hotel in Agra" },
      { icon: "🏨", text: "Standard Hotel in Jaipur" },
    ],
    experiences: [
      { id: 14, name: "Agra Fort", image: "/images/AgraFort.jpg" },
      { id: 15, name: "Buland Darwaja", image: "/images/BulandDarwaja.jpg" },
    ],
  },
  {
    day: 5,
    title: "Jaipur Sightseeing Tour",
    description:
      "Board your transfer for a sightseeing tour of Jaipur. Visit the famous forts of Jaipur such as Ajmer Fort, Jaigarh Fort, and Nahargarh . Continue your tour visiting some more attractions like , Birla Temple, and Jal Mahal. Later, get transferred back to the hotel for an overnight stay.",
    transport: "Transfer in Sedan",
    locations: [
      { icon: "🏨", text: "Standard Hotel in Agra" },
      { icon: "🏨", text: "Standard Hotel in Jaipur" },
    ],
    experiences: [
      { id: 16, name: "Amer Fort", image: "/images/Amer.jpg" },
      { id: 17, name: "Jaigarh Fort", image: "/images/Jaigarh.jpg" },
      { id: 18, name: "Jal Mahal", image: "/images/Jal MahalUk.jpg" },
      { id: 19, name: "Nahargarh Fort", image: "/images/NahargarhUk.jpg" },
      { id: 20, name: "Birla Mandir", image: "/images/BirlaUk.jpg" },
    ],
  },
  {
    day: 6,
    title: "Departure Day",
    description:
      "After breakfast, check-out from the hotel and get transferred to Jaipur Airport/Railway Station. This is where your trip ends.",
    transport: "Transfer in Sedan",
    locations: [
      { icon: "🏨", text: "Standard Hotel in Delhi" },
      { icon: "🚆/✈️ ", text: "Railway Station / Airport" },
    ],
    experiences: [
      { id: 21, name: "Amer Fort", image: "/images/Amer.jpg" },
      { id: 22, name: "Jaigarh Fort", image: "/images/Jaigarh.jpg" },
      { id: 23, name: "Jal Mahal", image: "/images/Jal MahalUk.jpg" },
      { id: 24, name: "Nahargarh Fort", image: "/images/NahargarhUk.jpg" },
      { id: 25, name: "Birla Mandir", image: "/images/BirlaUk.jpg" },
    ],
  },
  // Add similar objects for other days...
];

const hotels = [
  { id: 1, name: "India Gate", image: "/images/IndiagateUk.jpg" },
  { id: 2, name: "Rajpath", image: "/images/RajpathUk.jpg" },
  { id: 3, name: "Rashtrapati Bhavan", image: "/images/RashtrapatiUK.jpg" },
  { id: 4, name: "Qutub Minar", image: "/images/QutubminarUk.jpg" },
  {
    id: 5,
    name: "National War Memorial",
    image: "/images/WarmemorialUK.jpg",
  },
];

const pricingOptions = [
  {
    type: "Standard Stay",
    price: "₹ 22,000",
    discount: "Save Upto 20%",
    image: "/images/Goldenhomebody.jpg", // Replace with the actual image path
  },
  {
    type: "Premium Stay",
    price: "₹ 35,000",
    discount: "Save Upto 32%",
    image: "/images/Goldenhomebody.jpg", // Replace with the actual image path
  },
];

const ScrollNavigation = () => {
  const [openDay, setOpenDay] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };
  const [isOpen, setIsOpen] = useState(false);

  const tips = [
    "Carry a valid ID proof, as it may be required for entry to certain attractions or accommodations.",
    "Any breakage or damage of any items at the hotels/resorts/camps will be charged at actuals.",
    "It is wise to carry enough cash in the Indian Rupee (INR) currency when visiting tourist monuments and when buying in shops.",
    "Keep the surroundings clean by using designated bins and avoiding littering, especially in natural areas and protected zones.",
    "Respect local customs and traditions, especially when visiting religious sites and monuments.",
  ];

  const highlights = [
    "Explore India’s Golden Triangle with Delhi’s historic monuments, Agra’s famous landmarks, and Jaipur’s rich culture.",
    "Enjoy visiting the Qutub Minar, a UNESCO World Heritage Site, known for its detailed architecture dating back to the 13th century.",
    "Visit one of the seven wonders of the world, the Taj Mahal, and admire its beautifully symmetrical Islamic architecture.",
    "Admire the beauty of Jaipur’s skyline and the scenic Aravalli Hills as you visit the Nahargarh Fort.",
  ];

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-4 md:gap-8">
      {/* Left Content */}
      <div className="md:w-2/3">
        {/* Navigation Buttons */}
        <div className="sticky  top-12 md:top-20 bg-white z-10 shadow-md py-4 flex justify-center gap-6 mb-6">
          <button
            onClick={() => scrollToSection("itinerary")}
            className="flex flex-col items-center justify-center 
             w-[75px] h-[52px] md:w-[164px] md:h-[75px] 
             border-2 border-orange-500 rounded-lg 
             text-orange-500 hover:bg-orange-500 hover:text-white transition p-2 md:p-2"
          >
            <FaMapMarkedAlt className="text-3xl md:text-4xl" />
            <span className="mt-2 font-semibold text-[10px] md:text-[15px]">
              Itinerary
            </span>
          </button>

          <button
            onClick={() => scrollToSection("hotels")}
            className="flex flex-col items-center justify-center w-[75px] h-[52px] md:w-[164px] md:h-[75px] 
            p-2 md:p-2 border-2
             border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 
            hover:text-white transition"
          >
            <FaHotel className="text-3xl md:text-4xl" />
            <span className="mt-2 font-semibold text-[10px] md:text-[15px]">
              Hotels
            </span>
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="flex flex-col items-center justify-center  w-[75px] h-[52px] md:w-[164px] md:h-[75px] p-2 md:p-2 border-2 border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            <FaEnvelopeOpenText className="text-3xl md:text-4xl" />
            <span className="mt-2 font-semibold text-[10px] md:text-[15px]">
              Pricing
            </span>
          </button>
          <button
            onClick={() => scrollToSection("inclusion")}
            className="flex flex-col items-center justify-center w-[75px] h-[52px] md:w-[164px] md:h-[75px] p-2 md:p-2 border-2 border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            <FaClipboardList className="text-3xl md:text-4xl" />
            <span className="mt-2 font-semibold text-[10px] md:text-[15px]">
              Inclusion
            </span>
          </button>
        </div>

        {/* Trip Highlights Section */}
        <div className="max-w-3xl mx-auto p-6">
          <h2 className="text-2xl font-semibold mb-4">Trip Highlights</h2>
          <ul className="space-y-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start space-x-3">
                <FaBookmark className="text-orange-500 text-xl mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Itinerary Section */}
        <div id="itinerary" className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Itinerary</h2>
          {itineraryData.map(
            ({
              day,
              title,
              description,
              transport,
              locations,
              experiences,
            }) => (
              <div key={day} className="mb-4 border rounded-lg overflow-hidden">
                {/* Day Button */}
                <button
                  className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 font-semibold text-lg focus:outline-none"
                  onClick={() => toggleDay(day)}
                  aria-expanded={openDay === day}
                >
                  <span className="text-orange-600 font-bold">
                    Day {day} - {title}
                  </span>
                  {openDay === day ? <ChevronUp /> : <ChevronDown />}
                </button>

                {/* Dropdown Content */}
                {openDay === day && (
                  <div className="p-4 bg-white border-t">
                    <p className="mb-2">{description}</p>

                    {/* Transport Info */}
                    <div className="mt-3 font-semibold">Private Transfer</div>
                    <p className="text-gray-600">{transport}</p>

                    {/* Locations */}
                    {locations.map((loc, index) => (
                      <div key={index} className="flex items-center gap-2 mt-2">
                        <span className="text-orange-500 text-xl">
                          {loc.icon}
                        </span>
                        <span>{loc.text}</span>
                      </div>
                    ))}

                    {/* Experiences Carousel */}
                    <h3 className="mt-4 font-semibold">
                      You'll be covering these amazing experiences
                    </h3>
                    <Swiper
                      slidesPerView={2} // Default for mobile
                      spaceBetween={10}
                      breakpoints={{
                        1024: { slidesPerView: 3 }, // 3 slides for desktop
                      }}
                      autoplay={{
                        delay: 3000, // 3 seconds auto-slide
                        disableOnInteraction: false,
                      }}
                      pagination={{ clickable: true }}
                      modules={[Autoplay, Pagination]}
                      className="mt-2"
                    >
                      {experiences.map(({ id, name, image }) => (
                        <SwiperSlide key={id} className="p-2">
                          <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={name}
                              className="w-[144px] h-[186px] sm:w-[200px] sm:h-[260px] object-cover mx-auto"
                            />
                            <p className="p-2 text-center font-semibold">
                              {id}. {name}
                            </p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Itenary Ends Here */}
        {/* Hotel Starts Here */}

        <div id="hotels" className="bg-white shadow-md p-6 mt-5 rounded-lg">
          <h2 className="text-2xl font-semibold">Hotels</h2>
          <hr className="my-2" />
          <p className="font-semibold">
            Stays will be allocated based on availability or similar category
          </p>
          <Swiper
            slidesPerView={2} // Default for mobile
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 3 }, // Show 3 slides on desktop
            }}
            autoplay={{
              delay: 3000, // Auto-slide every 3 seconds
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mt-2"
          >
            {hotels.map(({ id, name, image }) => (
              <SwiperSlide key={id} className="p-2">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-[144px] h-[186px] md:w-[231px] md:h-[153px] object-cover mx-auto"
                  />
                  <p className="p-2 text-center font-semibold">{name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hotel ends here */}
        {/* pricing starts here */}
        <div
          id="pricing"
          className="bg-white p-6 rounded-xl shadow-lg border mt-5 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <hr className="my-3 border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingOptions.map(({ type, price, discount, image }, index) => (
              <div
                key={index}
                className="border-2 border-orange-400 rounded-xl p-4 text-center shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{type}</h3>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <img
                    src={image}
                    alt={type}
                    className="rounded-md fill w-[220px] h-[140px] md:w-[235px] md:h-[200px] mx-auto"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-gray-600 text-sm">Starting From</p>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md">
                    {discount}
                  </span>
                </div>
                <p className="text-xl text-left font-bold mt-1">{price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* pricing ends here  */}

        <div className="flex justify-center my-8">
          <img
            src="/images/end-of-the-trip.png" // Replace with your actual image path
            alt="End of Trip"
            className="w-[320px] h-[50px] md:w-[776px] md:h-[70px] object-contain"
          />
        </div>

        {/* inclusion section starts here */}

        <div
          id="inclusion"
          className="bg-white shadow-md rounded-lg p-6 border"
        >
          <h2 className="text-xl font-semibold text-center mb-4">
            What’s inside the package?
          </h2>
          <hr className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Inclusions</h3>
              <ul className="space-y-2">
                {[
                  "2 night of stays in Delhi",
                  "1 night stay in Agra",
                  "2 night of stays in Jaipur",
                  "Historical Sightseeing Tour of Delhi on a Private basis",
                  "Agra Sightseeing Tour | Agra Fort & Fatehpur Sikri on a Private basis",
                  "Jaipur Forts Tour with City Palace & Birla Temple on a Private basis",
                  "Half-Day Delhi Sightseeing Tour on a Private basis",
                  "Agra Sightseeing Tour | Taj Mahal & Sikandra on a Private basis",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Exclusions</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Expenses of a personal nature.",
                  "Meals not mentioned in the itinerary or inclusions",
                  "Entrance fees of all sightseeing places to be visited",
                ].map((item, index) => (
                  <li key={index} className="leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* inclusion section ends here */}

          {/* Know before you go starts */}
          <div className="w-full max-w-2xl mx-auto">
            {/* Dropdown Header */}
            <div
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer border shadow-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="text-lg font-semibold">Know Before You Go</h2>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Smooth Expanding Dropdown Content */}
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {isOpen && (
                <div className="bg-white shadow-md border rounded-b-lg p-4 space-y-3">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-orange-500 text-lg">🔖</span>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
          {/* know before you go ends */}
        </div>
      </div>

      {/* Right Form Section */}
    </div>
  );
};

export default ScrollNavigation;
