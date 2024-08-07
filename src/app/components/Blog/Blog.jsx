"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "Navigating the future with mobility services",
      date: "March 20, 2023",
      readTime: "2 min read",
      img: "https://assets.lummi.ai/assets/QmbCtCnGsUx6tRJCNPdjnXhokZCLXCTG8DVd4HJFg7p87f?auto=format&w=1500",
    },
    {
      id: 2,
      title: "Transforming digital experiences with cutting-edge solutions",
      date: "April 15, 2023",
      readTime: "3 min read",
      img: "https://assets.lummi.ai/assets/QmPyE61giemv5kg6Gm2vHENrri4j9FJX4ws1C6FbQC4261?auto=format&w=1500",
    },
    {
      id: 3,
      title: "Embracing innovation: Key trends in technology",
      date: "May 5, 2023",
      readTime: "4 min read",
      img: "https://assets.lummi.ai/assets/QmQzuP8ipascQ5aaprncVZCnC58BEhK8auzyRSio2ykk4Z?auto=format&w=1500",
    },
    // Add more blog posts as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isMobile = window.innerWidth < 1024;

  const handlers = isMobile
    ? useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      })
    : {};

  return (
    <div className="bg-[#150b1d] py-20 lg:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <h1 className="lg:text-lg text-xs text-center font-medium text-gray-400 uppercase tracking-wider">
              Blog
            </h1>
            <h1 className="mt-3 heading text-center text-2xl lg:text-4xl text-gray-100">
              Explore insights through our <br className="hidden lg:block" />
              knowledge-share blogs
            </h1>
          </div>
          <div className="col-span-1 hidden lg:block">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden" {...handlers}>
          {isMobile ? (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 w-full lg:w-[60vw] p-4 mt-6"
                >
                  <div className="relative shadow-md rounded-lg cursor-pointer overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-[80svh] opacity-65 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-40 text-white p-4 rounded-b-lg bg-gradient-to-t from-black to-transparent">
                      <h1 className="lg:text-2xl text-xl heading font-semibold">
                        {post.title}
                      </h1>
                      <p className="mt-2 small">
                        {post.date} <span className="px-2">|</span>{" "}
                        {post.readTime}
                      </p>
                      <div className="flex justify-end">
                        <img
                          src="buttonarrow.svg"
                          alt="arrow"
                          className="w-10 h-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 mt-12 gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative shadow-md rounded-lg cursor-pointer overflow-hidden"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-[80svh] opacity-65 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-40 text-white p-4 rounded-b-lg bg-gradient-to-t from-black to-transparent">
                    <h1 className="text-2xl heading font-semibold">
                      {post.title}
                    </h1>
                    <p className="mt-2 small">
                      {post.date} <span className="px-2">|</span>{" "}
                      {post.readTime}
                    </p>
                    <div className="flex justify-end">
                      <img
                        src="buttonarrow.svg"
                        alt="arrow"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isMobile && (
            <div className="mt-6 flex gap-2 justify-center">
              {blogPosts.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-[#9747ff]" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
          <div className="flex  items-center justify-center mt-10">
          <button
              type="button"
              className="text-white small uppercase border-2 border-[#8d49e4] font-medium rounded-3xl text-md px-4 py-2 text-center "
            >
             View All
              <img
                src="/buttonarrow.svg"
                alt="arrow"
                className="w-5 h-5 inline-block ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
