"use client";
import React, { useState, useEffect } from "react";

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const logos = [
    "/spotify.svg",
    "/cocacola.svg",
    "/slack.svg",
    "/netflix.svg",
    "/yamaha.svg",
    "/amazon.svg",
    "/ola.svg",
  ];
  const totalSlides = logos.length;
  const visibleSlides = isMobile ? 1 : 4; // 1 logo on mobile, 4 on large screens

  // Check if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideLeft = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideRight = () => {
    setCurrentSlide((prev) =>
      prev < totalSlides - visibleSlides ? prev + 1 : prev
    );
  };

  return (
    <div className="bg-[#150b1d] py-14 px-2">
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:text-lg text-center lg:text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
          Technical Toolset
        </h1>
        <h1 className="mt-3 heading text-center lg:text-left text-2xl lg:text-4xl text-gray-100">
          We assure Quality Development
        </h1>

        <section className="relative">
          <div className="px-8 pt-14 mx-auto md:px-12 lg:px-32 max-w-7xl overflow-hidden">
            <div className="relative">
              <div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${
                    isMobile 
                      ? currentSlide * 14.2 // Mobile version
                      : currentSlide * (100 / visibleSlides) // Large screen version
                  }%)`,
                  width: `${(totalSlides / visibleSlides) * 100}%`,
                }}
              >
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      isMobile ? "w-full" : "w-1/4"
                    } px-8`}
                  >
                    <img className="h-32" src={logo} alt="logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="absolute left-0 top-2/3 transform -translate-y-1/2 text-white p-2 rounded-full"
            onClick={slideLeft}
          >
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </button>
          <button
            className="absolute right-0 top-2/3 transform -translate-y-1/2 text-white p-2 rounded-full"
            onClick={slideRight}
          >
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </section>
        <div className="border border-gray-700 hidden lg:block w-full"></div>
      </div>
    </div>
  );
};

export default Brands;
