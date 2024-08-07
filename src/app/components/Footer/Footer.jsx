import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#5001a0] w-full h-auto pb-20 ">
        <div className=" flex  items-center ml-28">
          <div className="grid gap-32 grid-cols-2">
            <div className="">
              <h1 className="heading  text-white pt-20 text-2xl">Sachhsoft</h1>
              <h1 className="lg:text-md pt-24   text-xs font-medium text-gray-400 uppercase tracking-wider">
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
            <div className="pt-20 ">
                <div className="bg-white  w-full rounded-l-3xl h-full">

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
