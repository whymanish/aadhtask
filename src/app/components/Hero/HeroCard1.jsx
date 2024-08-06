import React from "react";

const HeroCard1 = () => {
  return (
    <div >
      <div className="bg-[#5b01b6] p-6 rounded-xl w-full  lg:w-[28svw] h-auto">
        <div className="flex gap-4 items-center">
          <img src="/hamburger.svg" alt="" className="w-8 h-8" />
          <h1 className="text-xl tracking-wide small text-white">
            Our Services
          </h1>
        </div>
        <div className="flex mt-8 gap-4 flex-wrap">
          <h1 className="small text-white border  border-gray-300 px-3 py-1 rounded-3xl">
            E-Commerce
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Marketing
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Enterprise
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Development
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Digital
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Automation
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            UI/UX Design
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Modern Web Services
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            SEO
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Mobility
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Project Management
          </h1>
          <h1 className="small text-white border border-gray-300 px-3 py-1 rounded-3xl">
            Cloud
          </h1>
          <h1 className="small text-white  px-3 py-1 rounded-3xl">
            * many other IT Services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroCard1;
