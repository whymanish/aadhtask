import React from "react";
import { hiringdata } from "./hiringdata";
import HiringCard from "./HiringCard";
const Hiring = () => {
  return (
    <div className="bg-[#150b1d] pb-20 pt-28 px-2 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:text-lg text-center  text-xs font-medium text-gray-400 uppercase tracking-wider">
          Hiring
        </h1>
        <h1 className="mt-3 heading text-center  text-2xl lg:text-4xl text-gray-100">
          Let's build something <br className="block lg:hidden" />
          great together!
        </h1>
        <div className="px-3">

        
        {hiringdata.map((data, index) => (
          <HiringCard
            key={index}
            title={data.title}
            detail={data.detail}
            vacancy={data.vacancy}
          />
        ))}
        </div>
        <div className="flex  items-center justify-center mt-10">
          <button
            type="button"
            className="text-white small uppercase border-2 border-[#8d49e4] hover:bg-[#8d49e4] duration-500 transition font-medium rounded-3xl text-md px-4 py-2 text-center "
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
  );
};

export default Hiring;
