"use client"; // ✅ Required for Next.js client components

import { useState, useEffect } from "react";
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
import { FaPaperPlane } from "react-icons/fa";

const toursTop = {
  Spring: [
    {
      id: 1,
      title: "Coorg Tour Package from Bangalore",
      nights: "2 Night – 3 Days",
      price: "INR 25,000",
      image: "/images/Coorghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 2,
      title: "Goa Honeymoon Package For 5 Days",
      nights: "4 Night – 5 Days",
      price: "INR 15,000",
      image: "/images/honeymoongoa.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 3,
      title: "Andaman Tour Package",
      nights: "5 Night – 6 Days",
      price: "INR 25,500",
      image: "/images/Andamanhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 4,
      title: "Haridwar Rishikesh | FREE River Rafting Experience",
      nights: "2 Night – 3 Days",
      price: "INR 19,500",
      image: "/images/navdropimg5.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 5,
      title: "Shimla Manali Tour",
      nights: "5 Night – 6 Days",
      price: "INR 19,500",
      image: "/images/Shimlahomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 6,
      title: "Darjeeling and Gangtok Tour Package",
      nights: "6 Night – 7 Days",
      price: "INR 25,500",
      image: "/images/Darjeelinghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 7,
      title: "Mysore, Ooty and Kodaikanal Tour Package",
      nights: "5 Night – 6 Days",
      price: "INR 14,000",
      image: "/images/trip-banner.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
  ],
  Summer: [
    {
      id: 8,
      title: "Kashmir Tour",
      nights: "5 Night – 6 Days",
      price: "INR 21,000",
      image: "/images/Kashmirhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 9,
      title: "Spiti Valley Tour",
      nights: "6 Nights – 7 Days",
      price: "INR 20,000",
      image: "/images/Spitihomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 10,
      title: "Char Dham Package From Delhi",
      nights: "11 Nights – 12 Days",
      price: "INR 39,000",
      image: "/images/Chardhamhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },

    {
      id: 11,
      title: "Darjeeling and Gangtok Tour Package",
      nights: "6 Night – 7 Days",
      price: "INR 25,500",
      image: "/images/Darjeelinghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 12,
      title: "Andaman Tour Package",
      nights: "5 Night – 6 Days",
      price: "INR 25,500",
      image: "/images/Andamanhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 13,
      title: "Dehradun Mussoorie Rishikesh | FREE Excursion to Tehri Dam",
      nights: "5 Night – 6 Days",
      price: "INR 22,000",
      image: "/images/tehri-dam.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
  ],
  Autumn: [
    {
      id: 14,
      title: "Darjeeling and Gangtok Tour Package",
      nights: "6 Night – 7 Days",
      price: "INR 25,500",
      image: "/images/Darjeelinghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 15,
      title: "Char Dham Package From Delhi",
      nights: "11 Nights – 12 Days",
      price: "INR 39,000",
      image: "/images/Chardhamhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 16,
      title: "Omkareshwar Maheshwar Mandu",
      nights: "1 Nights – 2 Days",
      price: "INR 9,000",
      image: "/images/Omkareshwarhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 17,
      title: "Kashmir Tour",
      nights: "5 Night – 6 Days",
      price: "INR 21,000",
      image: "/images/Kashmirhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 18,
      title: "Statue of Unity Tour Package",
      nights: "3 Nights – 4 Days",
      price: "INR 25,000",
      image: "/images/Statuehomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 19,
      title: "Haridwar Rishikesh | FREE River Rafting Experience",
      nights: "2 Night – 3 Days",
      price: "INR 19,500",
      image: "/images/navdropimg5.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 20,
      title: "Kerala Sightseeing Tour -To The Kerala Backwaters",
      nights: "3 Night – 4 Days",
      price: "INR 25,000",
      image: "/images/kerelatrip.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 21,
      title: "8 Days Leh Ladakh Tour Package",
      nights: "7 Night – 8 Days",
      price: "INR 21,000",
      image: "/images/navdropimg2.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
  ],
  Winter: [
    {
      id: 22,
      title: "Golden Triangle with Ranthambore | FREE Jungle Safari",
      nights: "7 Night – 8 Days",
      price: "INR 24,000",
      image: "/images/goldenrantham.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 23,
      title: "Splendid Goa Tour Package",
      nights: "4 Night – 5 Days",
      price: "INR 15,000",
      image: "/images/honeymoongoa.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 24,
      title: "Kerala Sightseeing Tour -To The Kerala Backwaters",
      nights: "3 Night – 4 Days",
      price: "INR 25,000",
      image: "/images/kerelatrip.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 25,
      title: "Dzukou Valley Trekking Trip Package",
      nights: "04 Nights – 05 Days",
      price: "INR 23,000",
      image: "/images/Dzukouhomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 26,
      title: "Haridwar Rishikesh | FREE River Rafting Experience",
      nights: "2 Night – 3 Days",
      price: "INR 19,500",
      image: "/images/navdropimg5.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 27,
      title: "Coorg Tour Package from Bangalore",
      nights: "2 Night – 3 Days",
      price: "INR 25,000",
      image: "/images/Coorghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
    {
      id: 28,
      title: "Darjeeling and Gangtok Tour Package",
      nights: "6 Night – 7 Days",
      price: "INR 25,500",
      image: "/images/Darjeelinghomebody.jpg",
      sale: "MONSOON SALE",
      discount: "SAVE UPTO 15%",
    },
  ],
};

export default function TourCarousel() {
  const [selectedRegion, setSelectedRegion] = useState("Spring");
  const [currentIndex, setCurrentIndex] = useState(0);
  const tours = toursTop[selectedRegion] || [];
  const [isOpen, setIsOpen] = useState(false); // ✅ Controls form visibility
  // ✅ Define the state to track hovered card
  const [hoverIndex, setHoverIndex] = useState(null);

  // New change Starts
  useEffect(() => {
    if (selectedRegion === "Spring") {
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

  // Card Data
  const cards = [
    {
      defaultTitle: "Since 2016",
      defaultText:
        "Over 6+ years online travel service in tailor-made, 1000+ successful happy travel experiences.",
      hoverTitle: "Serving for More than 7 Years",
      hoverText:
        "Providing excellent travel services with 1000+ happy travelers worldwide!",
    },
    {
      defaultTitle: "Expert Consultant",
      defaultText:
        "24/7 online, 1 on 1 private service, over 10 years experience! 100% Value Guaranteed",
      hoverTitle: "Your Travel Expert",
      hoverText:
        "We offer 24/7 private consultations with experts having 10+ years of experience!",
    },
    {
      defaultTitle: "100% Value Guaranteed",
      defaultText:
        "Best value for money. Exceed your expectation and 100% satisfaction!",
      hoverTitle: "Unmatched Value!",
      hoverText:
        "We ensure every trip is worth it with unbeatable offers and top-notch service.",
    },
    {
      defaultTitle: "No Hidden Cost",
      defaultText: "We guarantee there will be no hidden cost during your trip",
      hoverTitle: "Transparent Pricing",
      hoverText:
        "No surprises! Every package is transparent, with no hidden fees.",
    },
  ];

  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-[20px] md:text-[36px] text-start mt-10 font-family:Poppins-Medium ">
          Top Travel Spots: Best Destinations for Each Season
        </h2>

        <div className="mt-6 border-b pb-2">
          {/* Creates a grid layout for region buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
            {Object.keys(toursTop).map((region) => (
              <button
                key={region} // Ensures each button has a unique key
                onClick={() => {
                  setSelectedRegion(region); // Updates the selected region
                  setCurrentIndex(0); // Resets the carousel index when switching regions
                }}
                className={`font-semibold text-lg ${
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
          spaceBetween={22}
          slidesPerView={1} // Only 1 slide per view on mobile
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 52 }, // 3 slides for screens >= 768px
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
              <div className="w-[90%] md:w-[345px] flex flex-col items-center shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 bg-white">
                {/* Image */}
                <img
                  src={tour.image}
                  alt={tour.title}
                  width={345}
                  height={345}
                  className="rounded-xl w-[260px] h-[260px] md:w-[345px] md:h-[345px] object-cover brightness-90 hover:brightness-100"
                />

                {/* Nights & Sale Tag */}
                <div className="flex justify-between items-center w-full px-4 mt-2">
                  <p className="text-gray-500 text-sm">{tour.nights}</p>
                  {tour.sale && (
                    <span className="bg-pink-500 text-white text-[10px] px-2 py-1 rounded-full">
                      {tour.sale}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-center px-4">
                  {tour.title}
                </h3>

                {/* Pricing & Discount */}
                <div className="flex justify-between items-center w-full px-4 mt-1 mb-3">
                  <p className="text-sm font-semibold">
                    Starting From {tour.price}
                  </p>
                  {tour.discount && (
                    <span className="bg-green-500 text-white text-[10px] px-2 py-1 rounded-full">
                      {tour.discount}
                    </span>
                  )}
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
            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 w-[180px] h-[41px] md:w-auto md:h-auto"
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
        </div>
      </div>
      <section className="max-w-6xl mx-auto p-8 space-y-6">
        {/* Row 1: Full-width h2 */}
        <div className="w-full text-start">
          <h2 className="text-[22px] md:text-[32px] font-bold font-family:Poppins-Medium">
            Happy visitors! 😊 We really value what you have to say!
          </h2>
        </div>

        {/* Row 2: Full-width h1 */}
        <div className="w-full text-start ">
          <h1 className="text-[22px] md:text-[32px] mt-24 leading-tight tracking-tight font-family:Poppins-Medium">
            Explore with{" "}
            <span className="text-orange-600">Travel My Bharat</span> - Your
            Personal Tour Guides!
          </h1>
        </div>

        {/* Row 3: Two Columns */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column: Text */}
          <div className="md:w-1/2 space-y-4 ">
            <h3 className="text-[14px] md:text-[16px] ">
              Welcome to Travel My Bharat!
            </h3>
            <p className="text-gray-700 text-base leading-relaxed text-[14px] md:text-[16px]">
              We're here to make your travel dreams come true. As a tour and
              travel agency, we specialize in creating amazing tour packages
              tailored to your destination, interests, and sense of adventure.
            </p>
            <p className="text-gray-700 text-[14px] md:text-[16px]">
              Our tours cover a wide range of places in India, including
              Uttarakhand, Himachal Pradesh, Jammu & Kashmir, and many more. Our
              vision is simple: to give you the best touring experience while
              showing you the real beauty of Bharat.
            </p>
            <p className="text-gray-700 text-[14px] md:text-[16px]">
              We offer a variety of packages to suit every traveler’s needs and
              preferences. Whether you’re looking for a romantic getaway with
              our Honeymoon package, seeking spiritual enlightenment with our
              Pilgrim packages, craving adventure with our Adventure Packages,
              or wanting to explore the wildlife with our Wildlife packages,
              we’ve got you covered.
            </p>
            <p className="text-gray-700 text-[14px] md:text-[16px]">
              And if trekking is your thing, we have Trekking Packages that will
              take you through some of the most stunning landscapes India has to
              offer.
            </p>
            <p className="text-gray-700 text-[14px] md:text-[16px]">
              With Travel My Bharat, you can trust that every detail of your
              journey is taken care of, leaving you free to relax and enjoy the
              experience. So why wait? Let’s start planning your next adventure
              together!
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/travelmybharat.jpg"
              alt="Travel My Bharat"
              className="w-[625px] h-[337px] object-contain"
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Heading (First on Mobile, Second on Desktop) */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 order-1 md:order-2">
          <h2 className="text-[20px] md:text-[36px] font-bold">
            Why Travel My Bharat?
          </h2>
          <p className="text-gray-700 md:text-gray-800">
            Pick Travel My Bharat for an amazing trip that you’ll always
            remember with a smile!
          </p>
          {/* Request Callback Button */}
          <button
            onClick={() => {
              setIsOpen(true);
              document.body.style.overflow = "hidden"; // Prevent scrolling when modal opens
            }}
            aria-label="Plan Your Trip"
            className="flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 
           font-semibold px-6 py-3 rounded-full relative overflow-hidden transition-all 
           duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:ring-2 
           focus:ring-orange-300 focus:outline-none bg-transparent
           before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500 
           before:to-red-500 before:opacity-0 before:transition-opacity before:duration-300 
           hover:before:opacity-100 hover:text-white"
          >
            <span className="relative z-10 transition-colors duration-300">
              Plan Your Trip
            </span>
            <FaPaperPlane className="relative z-10 transition-colors duration-300" />
          </button>

          {/* Render Modal When Open */}
          {isOpen && (
            <RequestCallback
              isOpen={isOpen}
              setIsOpen={(state) => {
                setIsOpen(state);
                if (!state) {
                  document.body.style.overflow = "auto"; // Restore scrolling on modal close
                }
              }}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>

        {/* Feature Cards (Second on Mobile, First on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-1/2 order-2 md:order-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`shadow-xl rounded-2xl p-6 transition-all duration-500 ease-in-out transform 
          hover:scale-105 cursor-pointer 
          ${
            hoverIndex === index
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-800 border border-gray-300"
          }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <h3 className="text-xl font-semibold transition-all duration-300">
                {hoverIndex === index ? card.hoverTitle : card.defaultTitle}
              </h3>
              <p className="mt-2 text-gray-700 md:text-gray-800 transition-all duration-300">
                {hoverIndex === index ? card.hoverText : card.defaultText}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
