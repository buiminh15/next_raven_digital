import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMAGES } from "src/constants";

function Footer() {
  return (
    <div className="grid grid-cols-2 justify-center gap-5 px-5 py-10 sm:grid-cols-1 lg:px-36">
      <div className="grid grid-cols-1 gap-5 text-center">
        <div className="flex md:justify-center">
          <Link href={"#"}>
            <Image src={IMAGES.icon} alt="" className="block max-w-full" />
          </Link>
        </div>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          necessitatibus.
        </p>
      </div>
      <div>
        <ul className="grid grid-cols-2 justify-center gap-4 text-center md:grid-cols-4 md:px-32">
          <li>Lorem.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
        </ul>
      </div>

      <div className="col-span-2 text-center sm:col-span-1">
        <span className="text-sm text-slate-500">
          Copyright © 2021. Raven Digital. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
