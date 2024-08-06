"use client";
import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      heading: "Incredible tech solutions",
      content:
        "Sachhsoft has truly transformed the way we do business. Their innovative solutions have helped us reach new heights.",
      author: "John Doe",
      role: "CEO, XYZ Company",
      img: "https://assets.lummi.ai/assets/QmVuyaCTASHonXegRPnVh856MrGU5KHQpYmiRN5KbGtqtH?auto=format&w=1500",
    },
    {
      id: 2,
      heading: "Exceptional service",
      content:
        "The team at Sachhsoft provides exceptional service and support. They are our go-to for all tech solutions.",
      author: "Jane Smith",
      role: "CTO, ABC Corp",
      img: "https://assets.lummi.ai/assets/QmVuyaCTASHonXegRPnVh856MrGU5KHQpYmiRN5KbGtqtH?auto=format&w=1500",
    },
    // Add more testimonials as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#150b1d] pt-24">
      <div className="max-w-7xl  mx-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="lg:text-lg text-xs font-medium text-gray-400 uppercase tracking-wider">
              Testimonials
            </h1>
            <h1 className="mt-3 heading text-4xl text-gray-100">
              Hear from our valued partners
            </h1>
          </div>
          <div className="col-span-1">
            <div className="flex justify-end items-center h-full">
              <button
                onClick={handlePrev}
                className="text-gray-400 border rounded-full p-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path
                    d="M6 12H18M6 12L11 7M6 12L11 17"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="text-gray-400 ml-4 border rounded-full p-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ml-20 mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 65}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 p-6"
              style={{ width: "60vw", marginRight: "20px" }}
            >
              <div className="bg-[#211033] p-6 h-auto rounded-3xl">
                <h1 className="text-lg heading text-white">
                  {testimonial.heading}
                </h1>
                <p className="mt-6 text-gray-200 tracking-wider text-xl italic small">
                  {testimonial.content}
                </p>
                <div className="mt-8 flex items-center">
                  <img
                    src={testimonial.img}
                    alt=""
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                  <div className="ml-4">
                    <h1 className="text-sm small text-gray-100">
                      {testimonial.author}
                    </h1>
                    <p className="text-gray-400 text-sm small">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
