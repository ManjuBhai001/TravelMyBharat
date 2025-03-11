"use client"; // ✅ Required for using useState in Next.js App Router

import { useState, useEffect, useRef } from "react"; // ✅ useState for mobile menu toggle
import Link from "next/link"; // ✅ Link for client-side navigation
import Image from "next/image"; // ✅ Image component for optimized images
import RequestCallback from "@/components/ui/RequestCallback"; // ✅ Import the form component
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Plus, ChevronRight, Phone } from "lucide-react"; // ✅ Importing menu icons from lucide-react
import {
  FaTripadvisor,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

// ✅ Destinations array used for the Bharat Tours dropdown
const destinations = [
  {
    title: "North India",
    places: [
      { name: "Uttarakhand", link: "/destination/uttarakhand" }, // Now an object with a link
      { name: "Himachal Pradesh", link: "/destination/himachal-pradesh" },
      { name: "Jammu & Kashmir", link: "/destination/jammu-kashmir" },
      { name: "Leh Ladakh", link: "/destination/leh-ladakh" },
      { name: "Golden Triangle", link: "/destination/golden-triangle" },
      { name: "Rajasthan", link: "/destination/rajasthan" },
    ],
    link: "/north-india",
  },
  {
    title: "South India",
    places: [
      { name: "Kerala", link: "/destination/Kerala" }, // Now an object with a link
      { name: "Tamil Nadu", link: "/destination/Tamil Nadu" }, // Now an object with a link
      { name: "Andaman Nicobar", link: "/destination/Andaman Nicobar" }, // Now an object with a link
      { name: "Andhra Pradesh", link: "/destination/Andhra Pradesh" }, // Now an object with a link
      { name: "Pondicherry", link: "/destination/Pondicherry" }, // Now an object with a link
    ],
    link: "/south-india",
  },
  {
    title: "North East India",
    places: [
      { name: "Sikkim", link: "/destination/Sikkim" }, // Now an object with a link
      { name: "Assam", link: "/destination/Assam" },
      { name: "Arunachal Pradesh", link: "/destination/Arunachal Pradesh" },
      { name: "Mizoram", link: "/destination/Mizoram" },
      { name: "Nagaland", link: "/destination/Nagaland" },
    ],
    link: "/north-east-india",
  },
  {
    title: "Central & West India",
    places: [
      { name: "Goa", link: "/destination/Goa" }, // Now an object with a link
      { name: "Gujarat", link: "/destination/Gujarat" }, // Now an object with a link
      { name: "Madhya Pradesh", link: "/destination/Madhya Pradesh" },
      { name: "Maharashtra", link: "/destination/Maharashtra" },
    ],
    link: "/central-west-india",
  },
];

// ✅ Destinations array used for the Bharat Tours dropdown
const traveldestinations = [
  {
    title: "Family Tours",
    places: [
      "Shimla Manali From Delhi",
      "Mysore, Ooty and Kodaikanal",
      "Andaman Tour",
      "Mussoorie Tour",
    ],
    link: "/family-tours",
  },
  {
    title: "Hill Station Tours",
    places: [
      "Auli Rishikesh Tour",
      "Spiti Valley Tour",
      "Shimla Manali Tour",
      "Mussoorie Tour",
      "Ladakh Tour",
    ],
    link: "/hill-stations",
  },
  {
    title: "Golden Triangle",
    places: [
      "Golden Triangle Tour with Ajmer",
      "Golden Triangle India Tour",
      "Golden Triangle with Ranthambore Tour",
    ],
    link: "/golden-triangle",
  },
  {
    title: "Honeymoon Tours",
    places: [
      "Goa Honeymoon Tour",
      "Kashmir Honeymoon Tour",
      "Andaman Honeymoon Tour",
    ],
    link: "/honeymoon-tours",
  },
  {
    title: "Pilgrimage Tours",
    places: ["Char Dham Tour", "Kailash Mansarovar Tour"],
    link: "/pilgrimage-tours",
  },
  {
    title: "Wildlife Tours",
    places: [
      "Jim Corbett Wildlife Tour",
      "Meghalaya & Kaziranga Wildlife Tour",
      "Ranthambore Wildlife Tour",
    ],
    link: "/wildlife-tours",
  },
  {
    title: "Trekking Tours",
    places: [
      "Har ki Dun Trek",
      "Valley of Flower Trek",
      "Roopkund Trek",
      "Hampta Pass Trek",
      "Kashmir Great Lakes Trek",
    ],
    link: "/trekking-tours",
  },
];

// ✅ Services array used for the dropdown
const servicesdestinations = [
  "Taxi Booking",
  "Hotels",
  "Homestays & Staycation",
  "Helicopter Booking",
  "Events Planning",
];

// ✅ About Us array used for the dropdown
const aboutusdestinations = [
  "Who We Are",
  "Contact Us",
  "Terms & Conditions",
  "Refund & Cancellation",
  "Privacy Policy",
];

export default function Navbar() {
  // State to toggle mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  // New state to toggle the Bharat Tours dropdown (desktop)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [PackagedropdownOpen, setPackageDropdownOpen] = useState(false);
  const [traveldropdownOpen, settravelDropdownOpen] = useState(false);
  const [servicesdropdownOpen, setservicesDropdownOpen] = useState(false);
  const servicesdropdownTimeoutRef = useRef(null);
  const [aboutusdropdownOpen, setaboutusDropdownOpen] = useState(false);
  const aboutusdropdownTimeoutRef = useRef(null);

  // New state to toggle the Bharat Tours dropdown in mobile view
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileservicesDropdownOpen, setMobileservicesDropdownOpen] =
    useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Track scroll for background change
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSections, setOpenSections] = useState({}); // ✅ Track which section is open

  // ✅ Toggle dropdown of places list
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // ✅ Toggle visibility of places list
  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  // Bharat Navbar opens

  // Ref to store the timeout for delaying dropdown close
  const dropdownTimeoutRef = useRef(null);
  // When mouse enters the entire dropdown container, cancel any pending close and open the dropdown
  const handleContainerMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };
  // When mouse leaves the entire dropdown container, start a timeout to close the dropdown after a delay
  const handleContainerMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 10); // Increased delay: 1000ms (adjust as needed)
  };
  // bharat navbar closes

  // package dropdown
  // package dropdown
  // package dropdown

  // Ref to store the timeout for delaying dropdown close
  const PackagedropdownTimeoutRef = useRef(null);
  // When mouse enters the entire dropdown container, cancel any pending close and open the dropdown
  const handlePackageMouseEnter = () => {
    if (PackagedropdownTimeoutRef.current) {
      clearTimeout(PackagedropdownTimeoutRef.current);
    }
    setPackageDropdownOpen(true);
  };
  // When mouse leaves the entire dropdown container, start a timeout to close the dropdown after a delay
  const handlePackageMouseLeave = () => {
    PackagedropdownTimeoutRef.current = setTimeout(() => {
      setPackageDropdownOpen(false);
    }, 1000); // Increased delay: 1000ms (adjust as needed)
  };

  // travel Navbar opens

  // Ref to store the timeout for delaying dropdown close
  const traveldropdownTimeoutRef = useRef(null);
  // When mouse enters the entire dropdown container, cancel any pending close and open the dropdown
  const handletravelMouseEnter = () => {
    if (traveldropdownTimeoutRef.current) {
      clearTimeout(traveldropdownTimeoutRef.current);
    }
    settravelDropdownOpen(true);
  };
  // When mouse leaves the entire dropdown container, start a timeout to close the dropdown after a delay
  const handletravelMouseLeave = () => {
    traveldropdownTimeoutRef.current = setTimeout(() => {
      settravelDropdownOpen(false);
    }, 10); // Increased delay: 1000ms (adjust as needed)
  };

  // Services dropdown

  // Ref to store the timeout for delaying dropdown close
  // ✅ Handles dropdown open
  const handleservicesMouseEnter = () => {
    if (servicesdropdownTimeoutRef.current) {
      clearTimeout(servicesdropdownTimeoutRef.current);
    }
    setservicesDropdownOpen(true);
  };

  // ✅ Handles dropdown close with delay
  const handleservicesMouseLeave = () => {
    servicesdropdownTimeoutRef.current = setTimeout(() => {
      setservicesDropdownOpen(false);
    }, 500); // Smooth 500ms delay
  };

  // About Us
  // About Us

  // About Us
  // ✅ Handles dropdown open
  const handleaboutusMouseEnter = () => {
    if (aboutusdropdownTimeoutRef.current) {
      clearTimeout(aboutusdropdownTimeoutRef.current);
    }
    setaboutusDropdownOpen(true);
  };

  // ✅ Handles dropdown close with delay
  const handleaboutusMouseLeave = () => {
    aboutusdropdownTimeoutRef.current = setTimeout(() => {
      setaboutusDropdownOpen(false);
    }, 500); // Smooth 500ms delay
  };
  // About Us

  // ✅ Detect screen width
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const checkMobile = () => setIsMobile(window.innerWidth < 768);
  //   checkMobile(); // Initial check
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  // ✅ Handles dropdown open (desktop hover)
  // const handleservicesMouseEnter = () => {
  //   if (!isMobile) {
  //     if (servicesdropdownTimeoutRef.current) {
  //       clearTimeout(servicesdropdownTimeoutRef.current);
  //     }
  //     setservicesDropdownOpen(true);
  //   }
  // };

  // ✅ Handles dropdown close (desktop hover)
  // const handleservicesMouseLeave = () => {
  //   if (!isMobile) {
  //     servicesdropdownTimeoutRef.current = setTimeout(() => {
  //       setservicesDropdownOpen(false);
  //     }, 500);
  //   }
  // };

  // ✅ Toggle dropdown on mobile click
  // const toggleDropdownMobile = () => {
  //   if (isMobile) {
  //     setaboutusDropdownOpen(!servicesdropdownOpen);
  //   }
  // };

  // About Us

  // About Us

  // Distribute destinations into 2 rows x 3 columns, then remaining in next columns
  // Distribute destinations into structured columns
  const travelcolumnCount = 4;
  const travelcolumnData = Array.from({ length: travelcolumnCount }, () => []);

  traveldestinations.forEach((region, index) => {
    if (index < 6) {
      travelcolumnData[index % 3].push(region); // Fill first 3 columns in two rows
    } else {
      travelcolumnData[3].push(region); // Fill 4th column with remaining data
    }
  });
  // travel navbar closes

  // Scroll effect for changing navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinationsImages = [
    { src: "/images/navdropimg1.jpg", alt: "Kashmir Tours" },
    { src: "/images/navdropimg2.jpg", alt: "Ladakh Tours" },
    { src: "/images/navdropimg3.jpg", alt: "Dehradun Tours" },
    { src: "/images/navdropimg4.jpg", alt: "Kerela Tours" },
    { src: "/images/navdropimg5.jpg", alt: "Rishikesh Tours" },
    { src: "/images/navdropimg6.jpg", alt: "Golden Triangle" },
    { src: "/images/navdropimg7.jpg", alt: "Mussorie Tours" },
    { src: "/images/navdropimg8.jpg", alt: "Corbett Tours" },
    { src: "/images/navdropimg9.jpg", alt: "Manali Tours" },
  ];

  const packagestourDestinations = [
    { alt: "Auli", src: "/images/packagesdropdownAuli.jpg" },
    { alt: "Manali", src: "/images/packagesdropdownManali.jpg" },
    { alt: "Dal Lake", src: "/images/packagesdropdownDallake.jpg" },
    { alt: "Tehri", src: "/images/packagesdropdownTehri.jpg" },
    { alt: "Shimla", src: "/images/packagesdropdownShimla.jpg" },
    { alt: "Pangong Lake", src: "/images/packagesdropdownPangonglake.jpg" },
    { alt: "Coorg", src: "/images/packagesdropdownCoorg.jpg" },
    { alt: "Chopta", src: "/images/packagesdropdownChopta.jpg" },
    { alt: "Corbett", src: "/images/packagesdropdownCorbett.jpg" },
    {
      alt: "Valley of Flowers",
      src: "/images/packagesdropdownValleyofflowers.jpg",
    },
    { alt: "Kainchi Dham", src: "/images/packagesdropdownKainchidham.jpg" },
    { alt: "Nainital", src: "/images/packagesdropdownNainital.jpg" },
  ];

  const packagesdestinationsImages = [
    { src: "/images/packagesdropdown1.jpg", alt: "Ladakh Tours" },
    { src: "/images/navdropimg5.jpg", alt: "Rishikesh Tours" },
    { src: "/images/navdropimg7.jpg", alt: "Mussorie Tours" },
    { src: "/images/packagesdropdown4.jpg", alt: "Jammu Tours" },
    { src: "/images/packagesdropdown5.jpg", alt: "Char Dham" },
    { src: "/images/navdropimg6.jpg", alt: "Golden Triangle" },
    { src: "/images/navdropimg7.jpg", alt: "Manali Tours" },
    { src: "/images/navdropimg8.jpg", alt: "Nainital Tours" },
    { src: "/images/navdropimg9.jpg", alt: "Andaman Tours" },
  ];

  const traveldestinationsImages = [
    { src: "/images/navdropimg1.jpg", alt: "Kashmir Tours" },
    { src: "/images/navdropimg2.jpg", alt: "Ladakh Tours" },
    { src: "/images/navdropimg3.jpg", alt: "Dehradun Tours" },
    { src: "/images/navdropimg4.jpg", alt: "Kerela Tours" },
    { src: "/images/navdropimg5.jpg", alt: "Rishikesh Tours" },
    { src: "/images/navdropimg6.jpg", alt: "Golden Triangle" },
    { src: "/images/navdropimg7.jpg", alt: "Mussorie Tours" },
    { src: "/images/navdropimg8.jpg", alt: "Corbett Tours" },
    { src: "/images/navdropimg9.jpg", alt: "Manali Tours" },
  ];

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
    // Navbar container with shadow and full width
    <nav
      className={` fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w mx-auto px-4">
        <div className="relative mx-auto flex items-center justify-between py-3 px-9">
          {/* Logo */}

          <Link href="/">
            <Image
              src="/images/LOGO.jpg"
              alt="My Website Logo - Home"
              width={135}
              height={73}
              className="w-auto h-8 md:h-12 lg:h-16 cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden relative md:flex space-x-12 justify-center">
            {/* Dropdown for Bharat Tours */}

            {/* Bharat Tours Dropdown wrapped in a container */}
            <div
              className="relative inline-block"
              onMouseEnter={handleContainerMouseEnter}
              onMouseLeave={handleContainerMouseLeave}
            >
              {/* Dropdown trigger button */}

              <button className="flex items-center text-black hover:text-orange-500 focus:outline-none">
                <span>Bharat Tours</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {/* Conditionally rendered dropdown menu */}

              {dropdownOpen && (
                <div className="fixed space-x-1 left-0 right-0 mt-5 w-screen bg-white shadow-lg rounded-lg p-8 grid grid-cols-[250px_250px_250px_250px_minmax(900px,1fr)] gap-0 z-50 ">
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {destinations.map((region, index) => (
                    <div key={index}>
                      <h3 className=" text-black">{region.title}</h3>
                      <ul className="mt-4 space-y-2">
                        {region.places.map((place, i) => (
                          <li key={i}>
                            <Link
                              href={place.link} // Now using the object's link property
                              className="relative text-orange-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-500 hover:after:w-full"
                            >
                              {place.name}{" "}
                              {/* Now using name instead of string */}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={region.link}
                        className="mt-4 block text-sm text-black hover:text-orange-500 hover:underline"
                      >
                        ➤ View All {region.title}
                      </Link>
                    </div>
                  ))}
                  {/* Navbar dropdown images */}
                  {/* Navbar dropdown images */}
                  {/* Column 5: Central & West India */}
                  <div className="hidden md:flex flex-col">
                    {/* Heading */}
                    <h4 className="text-orange-500 text-lg   mb-2">
                      Travel Destinations
                    </h4>

                    {/* Grid Container */}
                    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-[370px]">
                      {destinationsImages.map((destinationsImages, index) => (
                        <div
                          key={index}
                          className="relative w-[122px] h-[100px] flex items-center justify-center overflow-hidden group"
                        >
                          <Image
                            src={destinationsImages.src}
                            alt={destinationsImages.alt}
                            fill
                            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125 "
                            priority
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <h1 className="text-white text-xs text-center font-semibold font-KaushanScript-Regular">
                              {destinationsImages.alt}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* div ends here */}
                </div>
              )}
            </div>
            {/* Ends dropdown of bharat */}
            {/* Packages dropdown starts  */}
            <div
              className="relative inline-block"
              onMouseEnter={handlePackageMouseEnter}
              onMouseLeave={handlePackageMouseLeave}
            >
              {/* Dropdown trigger button */}

              <button className="flex items-center text-black hover:text-orange-500 focus:outline-none">
                <span>Packages</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {/* Conditionally rendered dropdown menu */}

              {PackagedropdownOpen && (
                <div className="fixed space-x-1 left-0 right-0 mt-5 w-screen bg-white shadow-lg rounded-lg p-8 grid grid-cols-[920px_minmax(900px,1fr)] gap-0 z-50 ">
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  <div className="md:flex flex-col mt-9 mb-8">
                    {/* Grid Container */}
                    <div className="grid grid-col-3 grid-row-3 md:grid-cols-4 md:grid-rows-3 gap-2 md:gap-4 w-[870px] ">
                      {packagestourDestinations.map(
                        (packagestourDestinations, index) => (
                          <div
                            key={index}
                            className="relative md:w-[210px] md:h-[79px] flex items-center justify-center overflow-hidden group rounded-xl"
                          >
                            <Image
                              src={packagestourDestinations.src}
                              alt={packagestourDestinations.alt}
                              fill
                              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125"
                              priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <h1 className="text-white text-xs text-center font-semibold font-KaushanScript-Regular">
                                {packagestourDestinations.alt}
                              </h1>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Navbar dropdown images */}
                  {/* Navbar dropdown images */}
                  {/* Column 5: Central & West India */}
                  <div className="hidden md:flex flex-col">
                    {/* Heading */}
                    <h4 className="text-orange-500 text-lg   mb-2">
                      Trending Tours
                    </h4>

                    {/* Grid Container */}
                    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-[410px]">
                      {packagesdestinationsImages.map(
                        (packagesdestinationsImages, index) => (
                          <div
                            key={index}
                            className="relative w-[134px] h-[100px] flex items-center justify-center overflow-hidden group"
                          >
                            <Image
                              src={packagesdestinationsImages.src}
                              alt={packagesdestinationsImages.alt}
                              fill
                              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125 "
                              priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <h1 className="text-white text-xs text-center font-semibold font-KaushanScript-Regular">
                                {packagesdestinationsImages.alt}
                              </h1>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* div ends here */}
                </div>
              )}
            </div>
            {/* Packages dropdown ends  */}

            {/* tarvel style dropdown starts */}
            <div
              className="relative inline-block"
              onMouseEnter={handletravelMouseEnter}
              onMouseLeave={handletravelMouseLeave}
            >
              {/* Dropdown trigger button */}

              <button className="flex items-center text-black hover:text-orange-500 focus:outline-none">
                <span>Travel Style</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {/* Conditionally rendered dropdown menu */}

              {traveldropdownOpen && (
                <div className="fixed space-x-1 left-0 right-0 mt-5 w-screen bg-white shadow-lg rounded-lg p-8 grid grid-cols-[250px_250px_250px_250px_minmax(900px,1fr)] gap-0 z-50 ">
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {/* Column 1 to 4th everything in few lines */}
                  {travelcolumnData.map((col, colIndex) => (
                    <div
                      key={colIndex}
                      className="flex flex-col space-y-3 text-sm"
                    >
                      {col.map((region, index) => (
                        <div key={index}>
                          <h3 className="text-black font-bold text-sm">
                            {region.title}
                          </h3>
                          <ul className="space-y-2">
                            {region.places.map((place, i) => (
                              <li key={i}>
                                <Link
                                  href={`/traveldestination/${place
                                    .toLowerCase()
                                    .replace(/ /g, "-")}`}
                                  className="relative text-orange-600 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-500 hover:after:w-full text-sm"
                                >
                                  {place}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={region.link}
                            className="mt-2 block text-xs text-black hover:text-orange-500 hover:underline"
                          >
                            ➤ View All {region.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Navbar dropdown images */}
                  {/* Navbar dropdown images */}
                  {/* Column 5: Central & West India */}
                  <div className="hidden md:flex flex-col">
                    {/* Heading */}
                    <h4 className="text-orange-500 text-lg   mb-2">
                      Special Tours
                    </h4>

                    {/* Grid Container */}
                    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-[370px]">
                      {destinationsImages.map((destinationsImages, index) => (
                        <div
                          key={index}
                          className="relative w-[122px] h-[100px] flex items-center justify-center overflow-hidden group"
                        >
                          <Image
                            src={destinationsImages.src}
                            alt={destinationsImages.alt}
                            fill
                            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125 "
                            priority
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <h1 className="text-white text-xs text-center font-semibold font-KaushanScript-Regular">
                              {destinationsImages.alt}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* div ends here */}
                </div>
              )}
            </div>
            {/* travel style dropdown ends */}

            {/* services Dropdown Starts */}
            {/* services Dropdown Starts */}
            {/* services Dropdown Starts */}
            {/* services Dropdown Starts */}
            {/* services Dropdown Starts */}

            <div
              className="relative inline-block"
              onMouseEnter={handleservicesMouseEnter}
              onMouseLeave={handleservicesMouseLeave}
            >
              {/* Dropdown trigger button */}
              <button className="flex items-center text-black hover:text-orange-500 focus:outline-none">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {/* Dropdown Menu */}
              {servicesdropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200 z-50">
                  {servicesdestinations.map((service, index) => (
                    <Link
                      key={index}
                      href={`/servicesdestination/${service
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* services Dropdown Ends */}

            {/* <Link href="/services" className="text-black hover:text-orange-500">
              Services
            </Link> */}
            <Link href="/blogs" className="text-black hover:text-orange-500">
              Blogs
            </Link>
            {/* About us  Dropdown Starts */}

            <div
              className="relative inline-block"
              onMouseEnter={handleaboutusMouseEnter}
              onMouseLeave={handleaboutusMouseLeave}
            >
              {/* Dropdown trigger button */}
              <button className="flex items-center text-black hover:text-orange-500 focus:outline-none">
                <span>About Us</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {/* Dropdown Menu */}
              {aboutusdropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200 z-50">
                  {aboutusdestinations.map((aboutus, index) => (
                    <Link
                      key={index}
                      href={`/aboutusdestination/${aboutus
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {aboutus}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* <Link href="/about-us" className="text-black hover:text-orange-500">
              About Us
            </Link> */}

            {/* ✅ "Plan Your Trip" Button*/}
            {/* ✅ "Plan Your Trip" Button*/}

            {/* ✅ "Plan Your Trip" Button*/}
            {/* ✅ "Plan Your Trip" Button*/}
            {/* ✅ "Plan Your Trip" Button*/}
            {/* ✅ "Plan Your Trip" Button*/}

            <Button
              onClick={() => setIsOpen(true)} // ✅ Opens form on click
              className="hidden md:inline-block bg-orange-500 text-white px-6 py-2 rounded-lg
               
             transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500"
            >
              PLAN YOUR TRIP
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

            {/* ✅ "Plan Your Trip" Button ends */}
          </div>

          {/* ✅ Mobile Menu Button (Visible on Small Screens) */}
          <button
            className="relative block  md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Close (X) Icon - Positioned Above */}
            <X
              className={`h-6 w-6 absolute top-2 -right-6 z-[999] ${
                menuOpen ? "block" : "!hidden"
              }`}
            />
            {/* Menu (☰) Icon */}
            <Menu
              className={`h-6 w-6 absolute -right-6 ${
                menuOpen ? "!hidden" : "block"
              }`}
            />
          </button>
        </div>

        {/* ✅ Mobile Dropdown Menu (Appears When Open) */}
        {menuOpen && (
          <div className=" fixed inset-0 md:hidden top-0 left-0 w-full h-full bg-white shadow-md p-4 flex flex-col space-y-4 overflow-y-auto z-50">
            {/* ✅ Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/LOGO.jpg" // ✅ Ensure the image is inside /public/images
                alt="Website Logo"
                width={180}
                height={60}
                className="w-auto h-12"
              />
            </Link>
            {/* ✅ Mobile Dropdown for Bharat Tours */}
            {/* bharat menu mobile dropdown ends here  */}
            <div className="flex flex-col space-y-4">
              {/* ✅ Bharat Tours Main Button */}
              <button
                className="flex items-center justify-start text-black font-semibold uppercase text-lg"
                onClick={() => toggleDropdown("bharat")}
              >
                <span>Bharat Tours</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeDropdown === "bharat" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ✅ Expandable List */}
              {/* {mobileDropdownOpen && ( */}
              {activeDropdown === "bharat" && (
                <div className="flex flex-col space-y-2">
                  {destinations.map((region, index) => (
                    <div key={index} className="border-b pb-2">
                      {/* ✅ Region Title with Expandable "+" */}
                      <button
                        onClick={() => toggleSection(index)}
                        className="flex items-center justify-between w-full text-black font-medium uppercase py-2"
                      >
                        <span>+ {region.title}</span>
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      </button>

                      {/* ✅ Places List (only visible when expanded) */}
                      {openSections[index] && (
                        <ul className="pl-6 mt-2 space-y-1">
                          {region.places.map((place, i) => (
                            <li key={i}>
                              <Link
                                href={place.link}
                                className="block text-orange-600 hover:text-orange-800"
                                onClick={toggleDropdown}
                              >
                                {place.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* bharat menu mobile dropdown ends here  */}
            {/* Package menu mobile dropdown starts here  */}
            <div className="inline-block w-full">
              {/* ✅ package Main Button */}
              <button
                className="flex items-center justify-between text-black font-semibold uppercase text-lg"
                onClick={() => toggleDropdown("packages")}
              >
                <span>Packages</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeDropdown === "packages" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ✅ Expandable List */}
              {/* {mobilepackageDropdownOpen && ( */}
              {activeDropdown === "packages" && (
                <div className="relative left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-full sm:w-auto">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {packagestourDestinations
                      .slice(0, 12)
                      .map((item, index) => (
                        <div
                          key={index}
                          className="relative w-[96px] h-[60px] overflow-hidden"
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover"
                          />
                          {/* Alt text at the bottom */}
                          <div className="absolute bottom-0 w-full text-white text-[14px] text-center font-KaushanScript-Regular p-0.5">
                            {item.alt}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Package menu mobile dropdown ends here  */}
            {/* <Link href="/packages" className="text-black hover:text-orange-500">
              Packages
            </Link> */}
            {/* travel navbar mobile section starts  */}

            <div className=" inline-block w-full">
              {/* ✅ package Main Button */}
              <button
                className="flex items-center justify-between text-black font-semibold uppercase text-lg"
                onClick={() => toggleDropdown("Travel")}
              >
                <span>Travel Style</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeDropdown === "Travel" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ✅ Expandable List */}
              {/* {mobilepackageDropdownOpen && ( */}
              {activeDropdown === "Travel" && (
                <div className="relative  left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-full sm:w-auto">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {traveldestinationsImages.map((item, index) => (
                      <div
                        key={index}
                        className="relative w-[96px] h-[60px] overflow-hidden"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                        />
                        {/* Alt text at the bottom */}
                        <div className="absolute bottom-0 w-full text-white text-[14px] text-center font-KaushanScript-Regular p-0.5">
                          {item.alt}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* travel navbar mobile section ends  */}
            {/* <Link
              href="/travel-style"
              className="text-black hover:text-orange-500"
            >
              Travel Style
            </Link> */}
            {/* servcies section starts  */}
            <div className="inline-block w-full">
              {/* Dropdown trigger button */}
              <button
                className="flex items-center justify-between text-black font-semibold uppercase text-lg"
                onClick={() => toggleDropdown("services")}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === "services" && (
                <div className="flex flex-col  mt-2 bg-white py-2  sm:w-auto">
                  {servicesdestinations.map((service, index) => (
                    <div key={index} className="">
                      {/* Individual Service Item */}
                      <Link
                        href={`/servicesdestination/${service
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block px-4 text-black pb-4 text-sm hover:bg-gray-100"
                      >
                        {service}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* <Link href="/services" className="text-black hover:text-orange-500">
              Services
            </Link> */}

            {/* servcies section ends for mobile   */}

            {/* Blog mobile started  */}
            <div className="inline-block w-full">
              {/* Dropdown trigger button */}
              <button
                className="flex items-center justify-between text-black font-semibold uppercase text-lg"
                onClick={() => toggleDropdown("blog")}
              >
                <span>Blog</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    activeDropdown === "blog" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            {/* <Link href="/blogs" className="text-black hover:text-orange-500">
              Blogs
            </Link> */}

            {/* Blog Ends for mobile  */}
            {/* About us Started  */}
            <div className="inline-block w-full">
              {/* Dropdown trigger button */}
              <button
                className="flex items-center justify-between text-black font-semibold uppercase text-lg"
                onClick={() => toggleDropdown("aboutus")}
              >
                <span>About us</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    activeDropdown === "aboutus" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === "aboutus" && (
                <div className="flex flex-col  mt-2 bg-white py-2  sm:w-auto">
                  {aboutusdestinations.map((aboutus, index) => (
                    <div key={index} className="">
                      {/* Individual Service Item */}
                      <Link
                        href={`/aboutusdestination/${aboutus
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block px-4 text-black pb-4 text-sm hover:bg-gray-100"
                      >
                        {aboutus}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* <Link href="/about-us" className="text-black hover:text-orange-500">
              About Us
            </Link> */}
            {/* About us Ends */}

            {/* <Button
              onClick={() => setIsOpen(true)} // ✅ Opens form on click
              className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-orange-600"
            >
              PLAN YOUR TRIP
            </Button> */}
            {/* ✅ Render Modal When Open */}
            {/* {isOpen && (
              <RequestCallback
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                formData={formData}
                setFormData={setFormData}
              />
            )} */}

            {/* call and social media section starts */}
            <div className="sm:hidden text-center py-6 border-t border-gray-200 bg-gray-50 shadow-md rounded-lg mx-4 mt-4">
              {/* Help Text */}
              <p className="text-gray-600 text-sm font-medium">
                Get Help from our Experts
              </p>

              {/* Phone Section */}
              <div className="flex justify-center items-center space-x-2 mt-2">
                <Phone className="w-6 h-6 text-green-600" />
                <a
                  href="tel:+919259205032"
                  className="font-semibold text-lg text-black hover:text-green-600 transition"
                >
                  +91 92592 05032
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 transition">
                    <FaFacebook className="w-6 h-6 text-gray-700 hover:text-white" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-white rounded-full shadow-md hover:bg-pink-500 transition">
                    <FaInstagram className="w-6 h-6 text-gray-700 hover:text-white" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-white rounded-full shadow-md hover:bg-blue-700 transition">
                    <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-white" />
                  </div>
                </a>
                <a
                  href="https://www.tripadviser.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-white rounded-full shadow-md hover:bg-green-400 transition">
                    <FaTripadvisor className="w-6 h-6 text-gray-700 hover:text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* call and social media section ends  */}
          </div>
        )}
      </div>
    </nav>
  );
}
