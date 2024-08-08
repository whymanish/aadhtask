"use client";
import { useState } from "react";

const Foots = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="">
      <section class="min-h-screen py-6 px-4 lg:px-0 bg-[#5001a0] dark:bg-gray-900 lg:flex">
        <div class="flex flex-col justify-center w-full  lg:px-12 xl:px-32 lg:w-1/2">
        <div className="block lg:hidden">
        <h1 className="lg:text-lg pt-4   text-xs font-medium text-gray-400 uppercase tracking-wider">
              Get in touch
            </h1>
            <h1 className="mt-3 heading   text-3xl lg:text-5xl text-gray-100">
              Have a project?
            </h1>
            <h1 className="mt-3 heading   text-3xl lg:text-5xl text-gray-100">
              We would love to help
            </h1>
        </div>
          <div className="hidden lg:block">
            <h1 className="heading uppercase order-last text-white   -mt-9 text-2xl">
              Sachhsoft
            </h1>

            <h1 className="lg:text-lg pt-24   text-xs font-medium text-gray-400 uppercase tracking-wider">
              Get in touch
            </h1>
            <h1 className="mt-3 heading   text-2xl lg:text-5xl text-gray-100">
              Have a project?
            </h1>
            <h1 className="mt-3 heading   text-2xl lg:text-5xl text-gray-100">
              We would love to help
            </h1>

            <h1 className="lg:text-lg pt-60   text-xs font-medium text-gray-200  tracking-wider">
              Chicago, USA
            </h1>
            <h1 className="lg:text-lg mt-1   text-xs font-medium text-gray-200 uppercase tracking-wider">
              +1 (805) 427-3883
            </h1>
            <h1 className="lg:text-lg mt-1   text-xs font-medium text-gray-200  tracking-wider">
              ceo@sachhsoft.com
            </h1>
          </div>
        </div>

        <div class="flex flex-col bg-white my-14  rounded-2xl lg:rounded-none lg:rounded-l-3xl  justify-center w-full pt-0 lg:w-1/2 ">
          <form className="p-6">
            <h1 className="small font-bold mt-4 text-xl tracking-wide">
              I'm interested in...
            </h1>
            <div className="flex flex-wrap gap-2 lg:gap-6">
              <button className="border small lg:text-sm text-xs border-gray-500 text-black rounded-3xl px-4 py-2 mt-4">
                Development
              </button>
              <button className="border small lg:text-sm text-xs border-gray-500 text-black rounded-3xl px-4 py-2 mt-4">
                Web/Product Design
              </button>
              <button className="border small lg:text-sm text-xs border-gray-500 text-black rounded-3xl px-4 py-2 mt-4">
                E-Commerce
              </button>
            </div>
            <div class="flex-1 mt-10 px-2">
              <label class="block mb-2 small text-md text-gray-800">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md "
              />
            </div>
            <div class=" md:items-center mt-6 md:flex">
              <div class="flex-1 px-2">
                <label class="block mb-2 small text-md text-gray-800">
                  Work E-mail
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md "
                />
              </div>

              <div class="flex-1 px-2 mt-6 lg:mt-0  ">
                <label class="block mb-2 small text-md text-gray-800">
                  Contact
                </label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md "
                />
              </div>
            </div>
            <div class="flex-1 mt-6 px-2">
              <label class="block mb-2 small text-md text-gray-800">Tell us about your project</label>
              <textarea
                type="text"
                placeholder="Enter your message"
                class="block w-full px-5 py-3 h-24 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md "
              />
            </div>
            <div className="flex flex-col items-start ">
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button
                className="small flex items-center text-black rounded-3xl py-2 mt-2"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default button action
                  document.getElementById("fileInput").click();
                }}
              >
                <img
                  src="/attachment.svg"
                  alt="arrow"
                  className="w-6 h-6 mr-2"
                />
                Add attachment
              </button>
              {selectedFile && (
                <div className="flex items-center mt-2 ml-4">
                  <img src="/added.svg" alt="arrow" className="w-5 h-5 mr-1" />
                  <p className="small">{selectedFile.name}</p>
                </div>
              )}
            </div>
            <button
              type="button"
              className="text-white small mt-6  bg-[#8d49e4] hover:bg-[#995beb] font-medium rounded-3xl text-md px-4 py-2 text-center "
            >
              Submit
              <img
                src="/buttonarrow.svg"
                alt="arrow"
                className="w-5 h-5 inline-block ml-2"
              />
            </button>
          </form>
        </div>
        <div className="lg:hidden block">
        <h1 className="heading uppercase order-last text-white   text-2xl">
              Sachhsoft
            </h1>
        <h1 className="lg:text-lg text-md  mt-10   font-medium text-gray-200  tracking-wider">
              Chicago, USA
            </h1>
            <h1 className="lg:text-lg text-md  mt-1    font-medium text-gray-200 uppercase tracking-wider">
              +1 (805) 427-3883
            </h1>
            <h1 className="lg:text-lg text-md mt-1    font-medium text-gray-200  tracking-wider">
              ceo@sachhsoft.com
            </h1>
        </div>
      </section>
    </div>
  );
};

export default Foots;
