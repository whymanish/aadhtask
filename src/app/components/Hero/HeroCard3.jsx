import React from "react";

const HeroCard3 = () => {
  return (
    <div>
      <div >
        <div className="bg-[#e7680f] p-6  w-40 lg:w-[28svw] h-80 lg:h-36 rounded-xl">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-20">
            <div className="col-span-1 ">
              <h1 className="text-4xl  font-bold heading text-[#0c0c0c]">10+</h1>
              <h1 className="small mt-3 tracking-wide uppercase ">
                Industry<br/>Years
              </h1>
            </div>
            <div className="col-span-2">
            <h1 className="text-4xl  font-bold heading text-[#0c0c0c]">$ 10M</h1>
              <h1 className="small tracking-wide  text-justify mt-3 uppercase ">
                Revenue Generated<br/>for clients
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard3;
