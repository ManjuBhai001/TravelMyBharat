"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const policies = [
  {
    title: "More On Delhi Tourism",
    links: [
      "Delhi Tour Package",
      "Things to do in Delhi",
      "Places to visit in Delhi",
    ],
  },
  {
    title: "Confirmation Policy",
    content: [
      "The customer receives a confirmation voucher via email within 24 hours of successful booking.",
      "In case the preferred slots are unavailable, an alternate schedule of the customer’s preference will be arranged and a new confirmation voucher will be sent via email.",
      "Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.",
    ],
  },
  {
    title: "Refund Policy",
    content: [
      "The applicable refund amount will be processed within 10 business days.",
      "All applicable refunds will be done in the form of either Coupon or back to the same source of payment mode according to the eligibility.",
    ],
  },
  {
    title: "Cancellation Policy",
    content: [
      "If cancellation is made 30 days or more before the date of travel, 25.0% of total booking cost will be charged as cancellation fees.",
      "If cancellation is made between 15 days to 30 days before the date of travel, 50.0% of total booking cost will be charged as cancellation fees.",
      "If cancellation is made within 15 days before the date of travel, total booking cost will be charged as cancellation fees.",
      "In the event of unforeseen weather conditions, union issues, government restrictions, or any other circumstances beyond human control, certain trips or activities may be cancelled. In such cases, alternate feasible options will be provided. However, a cash refund will not be available.",
    ],
  },
  {
    title: "Payment Term Policy",
    content: [
      "The applicable refund amount will be processed within 10 business days.",
      "All applicable refunds will be done in the form of either Coupon or back to the same source of payment mode according to the eligibility.",
    ],
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {policies.map((policy, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="flex justify-between items-center w-full py-4 text-lg font-semibold text-gray-900"
            onClick={() => toggleAccordion(index)}
          >
            {policy.title}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && policy.content && (
            <div className="p-4 bg-gray-100 rounded-lg">
              {policy.content.map((text, i) => (
                <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                  <span className="text-orange-500">🔖</span>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          )}
          {openIndex === index && policy.links && (
            <div className="p-4 bg-gray-100 rounded-lg flex gap-4">
              {policy.links.map((link, i) => (
                <a key={i} href="#" className="text-pink-500 underline">
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
