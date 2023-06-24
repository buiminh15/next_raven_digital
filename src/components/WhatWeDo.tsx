import React from "react";
import WeDoCard from "./WeDoCard";
import Button from "./Button";

function WhatWeDo() {
  return (
    <div className="">
      <h3 className="mb-6 text-center text-[28px] font-bold xl:bottom-[30%] xl:text-[48px]">
        What we do
      </h3>
      <div className="grid auto-rows-fr grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:px-36 xl:grid-cols-4">
        {Array(5)
          .fill(0)
          .map((el, index) => (
            <WeDoCard key={index} />
          ))}
        <div className="flex flex-col gap-6 p-10 md:col-span-2">
          <h4 className="text-[32px] font-bold md:w-[50%]">
            Lorem ipsum dolor sit. Lorem, ipsum.
          </h4>
          <p className="font-normal text-slate-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            eaque!
          </p>
          <Button text="Learn more" className="self-start" />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
