import Link from "next/link";
import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

function WeDoCard() {
  return (
    <div className="group relative aspect-square cursor-pointer bg-secondary px-5 py-10">
      <div className="relative z-10 flex flex-col gap-6">
        <h4 className="text-[24px] font-extrabold">Lorem, ipsum.</h4>
        <p className="truncate font-normal text-slate-400 xl:whitespace-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          repellendus ducimus ut nisi id excepturi ipsum provident dolorem
          consequatur placeat saepe, rerum quos quo atque, omnis similique
          ratione vel modi?
        </p>
        <Link href={"#"} className="underline">
          Contact us
        </Link>
      </div>
      <div className="absolute bottom-0 right-0  h-28 w-36 rounded-tl-[70px] bg-primary shadow-xl shadow-white/10 transition-all duration-500 ease-in group-hover:h-[94%] group-hover:w-[94%] group-hover:rounded-tl-full">
        <BeakerIcon className="absolute bottom-8 right-10 aspect-square w-12 text-blue-500" />
      </div>
    </div>
  );
}

export default WeDoCard;
