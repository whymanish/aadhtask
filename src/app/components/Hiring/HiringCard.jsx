import React from "react";

const HiringCard = ({title,detail,vacancy}) => {
  return (
    <div>
      <div className="bg-[#1e1a2b] p-8 w-full h-32 rounded-md border-l-8 border-[#5001a0] mt-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="heading flex items-center text-xl lg:text-2xl text-gray-300">
              {title}
              <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-gray-100 bg-gray-600 rounded-full">
                {vacancy}
              </span>
            </h1>
            <h1 className="small mt-2 text-gray-300 tracking-wide">
              {detail}
            </h1>
          </div>
          <div className="flex items-end">
            <button className=" text-white  rounded-md">
              <img src="/buttonarrow.svg" alt="arrow" className="lg:w-10 w-8 h-8 lg:h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringCard;
