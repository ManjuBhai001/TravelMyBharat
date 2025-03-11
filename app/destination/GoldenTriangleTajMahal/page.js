import Image from "next/image";
import { FaHotel, FaUtensils, FaBusAlt, FaStar } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Button } from "@/components/ui/button";

// the button where once clicked will reroute the data to that section of the page

export default function GoldenTriangleTajMahalPage() {
  return (
    <>
      <div className="relative w-full min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] lg:h-[65vh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/images/Tajaa.jpg" // Ensure correct path
            alt="Golden Triangle Taj Mahal"
            priority // Loads immediately for better performance
            fill // Automatically covers the parent div
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* // the data after Agra Fort image and before the carousal thing */}
        <div className="w-full bg-white py-6 px-4 lg:px-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Left Section */}
            <div className="flex-1">
              <h1 className="text-[16px] md:text-[22px] font-Poppins text-gray-900 md:text-center lg:text-left">
                Getaway to Golden Triangle India | FREE Taj Mahal Visit
              </h1>

              {/* Right Section - Mobile Stacked Below h1 */}
              <div className="w-full lg:w-1/3 p-5 rounded-lg text-center lg:text-left order-1 lg:order-none">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
                  <p className="text-3xl font-bold text-gray-900">INR 22,000</p>
                  <div className="flex items-center space-x-1 text-green-500 font-bold text-lg">
                    <FaStar />
                    <span>4.7</span>
                  </div>
                </div>
                <p className="text-gray-400 line-through text-lg">INR 34,000</p>
                <span className="inline-block bg-pink-600 text-white px-3 py-1 text-sm font-bold rounded-md mt-2">
                  MONSOON SALE!
                </span>
                <hr className="my-4" />
                <Button className="hidden md:flex w-full bg-orange-500 text-white py-3 text-lg rounded-lg">
                  Request Callback
                </Button>
              </div>

              {/* Other Content */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-4 mt-4">
                {/* Gradient Badge */}
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow-md">
                  6D/5N
                </span>
                {/* Destination Days */}
                <span className="flex items-center space-x-1">
                  <strong className="text-gray-400 text-3xl font-bold">
                    2
                  </strong>
                  <span className="text-sm text-gray-900 py-1 rounded-md">
                    Days in Delhi
                  </span>
                </span>
                <span className="flex items-center space-x-1">
                  <strong className="text-gray-400 text-3xl font-bold">
                    1
                  </strong>
                  <span className="text-sm text-gray-900 py-1 rounded-md">
                    Day in Agra
                  </span>
                </span>
                <span className="flex items-center space-x-1">
                  <strong className="text-gray-400 text-3xl font-bold">
                    3
                  </strong>
                  <span className="text-sm text-gray-900 py-1 rounded-md">
                    Days in Jaipur
                  </span>
                </span>
              </div>

              <hr className="my-4" />

              <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 mt-4 text-gray-400 text-sm justify-center lg:justify-start">
                <div className="flex items-center space-x-2">
                  <FaHotel className="text-gray-500 text-lg" />
                  <span className="font-medium">Stay Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUtensils className="text-gray-500 text-lg" />
                  <span className="font-medium">Breakfast Included</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <MdRemoveRedEye className="text-gray-500 text-lg" />
                  <span className="font-medium">Sightseeing Included</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <FaBusAlt className="text-gray-500 text-lg" />
                  <span className="font-medium">Transfer Included</span>
                </div>
              </div>

              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div>
      {/* 
    //    */}
    </>
  );
}
