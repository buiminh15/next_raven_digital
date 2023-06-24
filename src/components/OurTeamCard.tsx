import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { IMAGES } from "src/constants";

function OurTeamCard() {
  return (
    <div className="group relative cursor-pointer overflow-hidden">
      <Image src={IMAGES.person1} alt="" className="block " />
      <div className="absolute inset-0 flex translate-y-[100%] flex-col justify-between bg-primary px-5 py-14 text-center transition duration-500 ease-in group-hover:translate-y-0 group-hover:transition group-hover:duration-500 group-hover:ease-in-out">
        <div>
          <h4 className="text-lg font-medium">Lorem, ipsum.</h4>
          <h5 className="mt-4 text-base font-medium">Company / CEO</h5>
        </div>

        <p className=" text-stone-400 md:break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab
          explicabo porro corrupti velit adipisci odit quo accusantium
        </p>
        <div className="flex items-center justify-center gap-10">
          <Link href={"#"}>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
          </Link>
          <Link href={"#"}>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
          </Link>
          <Link href={"#"}>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurTeamCard;
