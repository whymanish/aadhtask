'use client'
import React, { useState } from "react";

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const logos = [
    "/spotify.svg",
    "/spotify.svg",
    "/spotify.svg",
    "/spotify.svg",
  ];
  const totalSlides = logos.length;

  const slideLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const slideRight = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#150b1d] py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:text-lg text-center lg:text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
          Testimonials
        </h1>
        <h1 className="mt-3 heading text-center lg:text-left text-2xl lg:text-4xl text-gray-100">
          Hear from our valued partners
        </h1>

        <section className="relative">
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl overflow-hidden">
            <div className="relative">
              <div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${currentSlide * 25}%)`,
                }}
              >
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex justify-center w-1/4 px-8"
                  >
                    <img className="max-h-28" src={logo} alt="logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
           
            onClick={slideRight}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={slideLeft}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Brands;

