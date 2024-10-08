"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "react-responsive";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

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
    {
      id: 3,
      heading: "Outstanding support",
      content:
        "We received outstanding support from Sachhsoft. Their team is always available to help us with our needs.",
      author: "Bob Johnson",
      role: "COO, DEF Ltd",
      img: "https://assets.lummi.ai/assets/QmVuyaCTASHonXegRPnVh856MrGU5KHQpYmiRN5KbGtqtH?auto=format&w=1500",
    },
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

  const handlers = isMobile
    ? useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      })
    : {};

  return (
    <div className="bg-[#150b1d] lg:pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3">
          <div className="col-span-2">
            <h1 className="lg:text-lg text-center lg:text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Testimonials
            </h1>
            <h1 className="mt-3 heading text-center lg:text-left text-2xl lg:text-4xl text-gray-100">
              Hear from our valued partners
            </h1>
          </div>
          <div className="col-span-1 hidden lg:block">
            <div className="flex justify-end items-center h-full">
              <button
                onClick={handleNext}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                onClick={handlePrev}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative max-w-7xl mx-auto mt-10 overflow-hidden ${isMobile ? "" : "hidden lg:flex"}`}
        {...handlers}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 33)}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 ${isMobile ? "w-full" : "lg:w-[60vw]"} pt-6 px-3 lg:px-0 lg:pr-6`}
            >
              <div className="bg-[#211033] p-6 h-72 flex flex-col justify-center rounded-3xl">
                <h1 className="text-lg heading text-white">{testimonial.heading}</h1>
                <p className="mt-6 text-gray-200 tracking-wider text-md lg:text-xl italic small">
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
                    <p className="text-gray-400 text-sm small">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile && (
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? "bg-[#9747ff]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;
