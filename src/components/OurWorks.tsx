import Image from "next/image";
import React from "react";
import { IMAGES } from "src/constants";
import Button from "./Button";

function OurWorks() {
  return (
    <div className="p-5 lg:px-36">
      <h3 className="mb-6  text-[28px] xl:bottom-[30%] xl:text-[48px]">
        Our Works
      </h3>

      <div className="grid auto-rows-fr grid-cols-2 gap-5 lg:grid-cols-12">
        <div className="overflow-hidden rounded lg:col-span-3">
          <Image
            src={IMAGES.person4}
            alt=""
            className="block h-full min-h-full max-w-full object-cover lg:h-0"
          />
        </div>
        <div className="col-span-2 row-start-2 overflow-hidden rounded lg:col-span-6 lg:row-span-1">
          <Image
            src={IMAGES.phone}
            alt=""
            className="block h-full min-h-full w-full max-w-full object-cover lg:h-0"
          />
        </div>
        <div className=" overflow-hidden rounded lg:col-span-3">
          <Image
            src={IMAGES.person4}
            alt=""
            className="block h-full min-h-full max-w-full object-cover lg:h-0"
          />
        </div>

        <div className="flex flex-col gap-6 place-self-center lg:col-span-3 lg:py-20">
          <h4 className="text-[32px] font-bold md:w-[50%]">Lorem, ipsum.</h4>
          <p className="font-normal text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button text="Learn more" className="self-start" />
        </div>
        <div className="overflow-hidden rounded lg:col-span-3">
          <Image
            src={IMAGES.person4}
            alt=""
            className="block h-full min-h-full max-w-full object-cover lg:h-0"
          />
        </div>
        <div className="col-span-2 row-start-4 overflow-hidden rounded lg:col-span-6 lg:row-span-1">
          <Image
            src={IMAGES.phone}
            alt=""
            className="block h-full min-h-full max-w-full object-cover lg:h-0"
          />
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
