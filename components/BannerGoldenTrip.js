export default function BannerGoldenTrip() {
  return (
    <div className="relative w-full">
      {/* Background Image with Gradient Overlay */}
      <div
        className="relative w-full h-52 md:h-64 lg:h-72 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(95, 62, 29, 0.9), rgba(95, 62, 29, 0.7)), url('/group-banner.jpg')",
        }}
      >
        {/* Content */}
        <div className="text-center text-white px-4 md:px-8">
          <h2 className="text-xl md:text-3xl font-bold">
            Bigger Group? Get special offers up to 50% Off!
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base">
            We create unforgettable adventures, customised for your group.
          </p>

          {/* Call-to-Action Button */}
          <button className="mt-4 bg-white text-orange-500 font-semibold py-2 px-5 rounded-full hover:bg-orange-100 transition">
            Get A Callback
          </button>
        </div>
      </div>
    </div>
  );
}
