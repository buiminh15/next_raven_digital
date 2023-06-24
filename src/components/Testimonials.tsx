import Image from "next/image";
import React from "react";
import { IMAGES } from "src/constants";

function Testimonials() {
  return (
    <div
      className="grid gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 lg:px-36"
      id="testimonial"
    >
      <div className="aspect-square overflow-hidden rounded-tr-[90px] lg:col-span-1">
        <Image
          src={IMAGES.person3}
          alt=""
          className="block h-full min-h-full w-full max-w-full object-cover lg:h-0"
        />
      </div>
      <div className="flex items-baseline lg:col-span-2">
        <div className="">
          <h3 className="py-4 text-2xl font-medium">Testimonials</h3>
          <h4 className="text-xl font-medium">Lorem, ipsum.</h4>
          <h4 className="text-xl font-medium text-slate-400">Company / CEO</h4>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            iure nostrum assumenda ducimus ut. Incidunt a rem debitis adipisci
            dolores molestias ducimus quaerat dicta sapiente facilis, sint
            possimus, nam modi?
          </p>
          <p className="mt-2 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quae!
          </p>
        </div>

        <div className="flex h-full flex-col items-center justify-between">
          <span>01</span>
          <div className="relative h-full w-[2px] bg-white before:absolute before:h-1/3 before:w-full before:bg-primary before:content-['']"></div>
          <span>03</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
