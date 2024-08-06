import React from "react";

const HeroCard2 = () => {
  return (
    <div >
      <div className="bg-[#1e1a2b] w-40  lg:w-80 h-80 lg:h-36 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2 ">
            <h1 className="small text-center tracking-wide text-lg mt-7 text-white">
              You <span className="font-bold">dream</span> it,
            </h1>
            <h1 className="small text-center tracking-wide text-lg  text-white">
              We <span className="font-bold">build</span> it.
            </h1>
            <p className="text-white mt-4 text-xs text-center">
              - Team Sachhsoft
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <img src="/man.png" alt="" className="w-28 h-28 mt-14 lg:mt-4" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroCard2;
