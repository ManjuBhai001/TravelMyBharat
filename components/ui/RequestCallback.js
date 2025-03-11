"use client"; // ✅ Required for Next.js client components
import { useState } from "react";
import { XCircle, PhoneCall } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function RequestCallback({
  isOpen,
  setIsOpen,
  formData,
  setFormData,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedForm = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormData(updatedForm);
    sessionStorage.setItem("formData", JSON.stringify(updatedForm));
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = "+919259205032";
    const message =
      `📢 New Travel Request\nName: ${formData.name} | Mobile: ${formData.mobile}\nEmail: ${formData.email} | Travel Date: ${formData.travelDate}\nNo. of Persons: ${formData.noOfPerson} | Hotel: ${formData.hotelCategory}\nDescription: ${formData.travelDescription}`.replace(
        /\s+/g,
        " "
      );
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
      "_blank"
    );
  };

  const sendEmail = () => {
    const email = "support@travelmybharat.com";
    const subject = "New Travel Request";
    const body = `Name: ${formData.name}\nMobile: ${formData.mobile}\nTravel Date: ${formData.travelDate}`;
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    ) ||
      alert(
        "Unable to open email client. Please manually email support@travelmybharat.com."
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    sendWhatsAppMessage();
    sendEmail();
    setTimeout(() => {
      setFormData({
        name: "",
        mobile: "",
        email: "",
        travelDate: "",
        noOfPerson: "",
        travelDescription: "",
        hotelCategory: "",
        isAuthorized: false,
      });
      sessionStorage.removeItem("formData");
      setIsSubmitting(false);
      alert("Form submitted successfully!");
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center mb-7 md:mb-0 bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/2 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-lg md:rounded-l-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
            Start planning your unforgettable experience today!
          </h2>

          <p className="text-lg font-semibold mb-3 text-orange-600 uppercase tracking-wide">
            How it Works
          </p>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center space-x-2">
              <span className="text-orange-500 text-xl">📌</span>
              <span>Tell us details of your holiday plan.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500 text-xl">📌</span>
              <span>
                Our experts will get back to you within 24 hours with a
                customized package.
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500 text-xl">📌</span>
              <span>Grab the deal and start packing!</span>
            </li>
          </ul>

          <div className="flex space-x-4 my-6">
            <a
              href="#"
              className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition shadow-md"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="#"
              className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition shadow-md"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition shadow-md"
            >
              <PhoneCall size={28} />
            </a>
          </div>

          <div className="mt-6 text-center border-t border-gray-300 pt-4">
            <p className="font-bold text-gray-900 text-lg">
              Call us for More Details
            </p>
            <p className="text-orange-500 text-2xl font-extrabold tracking-wide mt-2">
              +91-9259205032
            </p>
          </div>
        </div>

        <div className="md:w-1/2 bg-white p-8 rounded-b-lg md:rounded-r-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide">
              REQUEST A QUOTE
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 transition duration-200"
              aria-label="Close modal"
            >
              <XCircle size={28} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
            />
            <div className="flex gap-4">
              <input
                type="date"
                name="travelDate"
                min={new Date().toISOString().split("T")[0]}
                value={formData.travelDate}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              />
              <input
                type="number"
                name="noOfPerson"
                min="1"
                placeholder="No of Person"
                value={formData.noOfPerson}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              />
            </div>
            <textarea
              name="travelDescription"
              placeholder="Travel Description"
              value={formData.travelDescription}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
            />
            <select
              name="hotelCategory"
              value={formData.hotelCategory}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
            >
              <option value="">- Select -</option>
              <option value="budget">Budget</option>
              <option value="luxury">Luxury</option>
              <option value="5-star">5-Star</option>
            </select>
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input
                type="checkbox"
                name="isAuthorized"
                checked={formData.isAuthorized}
                onChange={handleChange}
                className="w-5 h-5 accent-orange-500"
              />
              <span>
                I authorize{" "}
                <span className="font-semibold text-gray-900">
                  Travel my Bharat
                </span>{" "}
                to contact me via Call, SMS & Email.
              </span>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg mb-5 font-bold shadow-lg text-lg transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
