import Image from "next/image";
import React from "react";
import { IMAGES } from "src/constants";

const IMAGES_DATA = [
  {
    id: 1,
    img: IMAGES.mango,
  },
  {
    id: 2,
    img: IMAGES.microsoft,
  },
  {
    id: 3,
    img: IMAGES.nike,
  },
  {
    id: 4,
    img: IMAGES.amazon,
  },
  {
    id: 5,
    img: IMAGES.mango,
  },
  {
    id: 6,
    img: IMAGES.mango,
  },
  {
    id: 7,
    img: IMAGES.mango,
  },
];

function Clients() {
  return (
    <div className="p-5 lg:p-36">
      <h3 className="mb-6 text-[28px] font-bold xl:bottom-[30%] xl:text-[48px]">
        Clients
      </h3>
      <div className="grid grid-cols-2 place-items-center gap-5 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:justify-between">
        {IMAGES_DATA.map((item) => (
          <Image
            key={`clients-icon-${item.id}`}
            src={item.img}
            alt=""
            className="block w-28 max-w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Clients;
