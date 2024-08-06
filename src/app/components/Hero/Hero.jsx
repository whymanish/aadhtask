import React from "react";
import HeroCard1 from "./HeroCard1";
import HeroCard2 from "./HeroCard2";
import HeroCard3 from "./HeroCard3";

const Hero = () => {
  return (
    <div className="bg-[#190d1f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col  justify-center  lg:h-screen">
          <div className="grid lg:grid-cols-5 lg:mt-0 mt-4 w-full">
            <div className="col-span-3 p-6 lg:p-0">
              <h1 className="lg:text-lg text-xs font-medium text-gray-400 uppercase tracking-wider">
                At Sachhsoft
              </h1>
              <h1 className="lg:text-5xl text-3xl text-white mt-4 heading">
                We revolutionize your technological ideas into reality
              </h1>
              <p className="mt-8 text-gray-200 tracking-wider text-lg lg:text-2xl small">
                Expert IT consulting tailored for empowering
                <br className="lg:block hidden" /> your technical needs
              </p>
              <button className="mt-12 text-white small bg-[#8d49e4] font-medium rounded-3xl text-md px-5 py-3 text-center">
                Get in touch
                <img
                  src="/buttonarrow.svg"
                  alt="arrow"
                  className="w-5 h-5 inline-block ml-2"
                />
              </button>
            </div>
            <div className="col-span-2 flex pl-4 lg:justify-end">
              <HeroCard1 />
            </div>
          </div>
          <div className="flex justify-end p-4 lg:p-0 gap-8 mt-4">
            <HeroCard2 />
            <HeroCard3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
