"use client";
import React, { useState, useEffect } from "react";

const Process = () => {
  const slides = [
    {
      img: "https://assets.lummi.ai/assets/QmVVDTeaAYZ8QvTdcJFs8LfTsbiFtrpotpZYhPh29TkWdq?auto=format&w=1500",
      heading: "We bring your ideas to life ",
      headingbreak: "through discovery",
      paragraph:
        "We adopt a systematic approach to understand your requirements and then design a solution that is best suited to your needs.",
      step: "01",
    },
    {
      img: "https://assets.lummi.ai/assets/Qmf8CHcMaQFaQFCrxNnzVgpEbowYoAMrgSAGZuC6rh21b8?auto=format&w=1500",
      heading: "We bring your ideas to life ",
      headingbreak: "through design",
      paragraph:
        "Our team works tirelessly to bring the design to reality, ensuring all your requirements are met.",
      step: "02",
    },
    {
      img: "https://assets.lummi.ai/assets/QmU1tGkiYCJjuwoJjDj43E3itUN9hbyFCYfv3bB5im3QQj?auto=format&w=1500",
      heading: "We bring your ideas to life ",
      headingbreak: "through built",
      paragraph:
        "We rigorously test the implementation to ensure it meets our high standards and your expectations.",
      step: "03",
    },
    {
      img: "https://assets.lummi.ai/assets/QmerBKAJLVQi6S5ZtBoR4rdsXYwtHNhoGsJMutSo1Za6iC?auto=format&w=1500",
      heading: "We bring your ideas to life ",
      headingbreak: "through delivery",
      paragraph:
        "We deploy the final product and provide ongoing support to ensure its success.",
      step: "04",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFade(false);
      }, 200); // Duration of the fade-out animation
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-[#150b1d]">
      <div className="max-w-7xl mx-auto flex px-4 flex-col items-center py-10">
        <div className="border border-gray-400 lg:hidden block w-full"></div>
        <div className="border border-gray-400 mt-20 lg:hidden block w-full"></div>

        <div className="grid lg:grid-cols-2 lg:pt-0 pt-10 gap-14 lg:gap-28">
          <div
            className={`transition-opacity duration-500 lg:order-none order-last ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <img
              src={currentSlide.img}
              alt=""
              className="lg:w-[35svw] w-full object-cover rounded-3xl h-[55svh] lg:h-[75svh]"
            />
            <div className="lg:hidden block mt-8 ">
              <h1 className="lg:text-6xl text-5xl text-gray-300 heading">
                {currentSlide.step}
                <span className="lg:text-2xl text-xl ml-1 small">/4</span>
              </h1>
              <p className="lg:mt-2 mt-6 lg:text-lg tracking-wide small text-gray-300">
                {currentSlide.paragraph}
              </p>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-start transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="order-first lg:order-none">
              <h1 className="lg:text-lg text-xs font-medium text-gray-400 uppercase tracking-wider">
                Our Process
              </h1>
              <h1 className="lg:text-4xl text-2xl tracking-wide text-white mt-4 heading">
                {currentSlide.heading}
                <br />
                {currentSlide.headingbreak}
              </h1>
            </div>
            <div className="border border-gray-400 hidden lg:block mt-14 w-full"></div>
            <div className="hidden lg:block">
              <h1 className="text-6xl text-gray-300 heading mt-6">
                {currentSlide.step}
                <span className="text-2xl ml-1 small">/4</span>
              </h1>
              <p className="mt-6 text-lg tracking-wide small text-gray-300">
                {currentSlide.paragraph}
              </p>
            </div>
            <div className="border border-gray-400 hidden lg:block mt-8 w-full"></div>
          </div>
        </div>
        <div className="border border-gray-400 mt-6 lg:hidden block w-full"></div>
        <div className="border border-gray-400 mt-20 lg:hidden block w-full"></div>
      </div>
    </div>
  );
};

export default Process;
