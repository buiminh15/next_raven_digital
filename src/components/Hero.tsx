import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMAGES, LINKS } from "src/constants";
import Button from "./Button";

function Hero() {
  return (
    <div
      className="relative flex h-screen grid-cols-2 flex-col gap-10 lg:grid lg:h-[70%] "
      style={{ gridAutoRows: "1fr" }}
    >
      <div className="flex h-[50%] lg:h-[70%]">
        <ul className=" flex h-full w-20 items-center justify-center gap-10 border-r-[0.25px] border-gray-400 vertical-rl">
          {LINKS.reverse().map((link) => (
            <li
              key={`social-link-${link.id}`}
              className="relative z-10 rotate-180 transform px-3 text-xs"
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="relative z-10 flex flex-col items-start justify-center gap-10 p-5 lg:pl-28">
          <h2 className=" text-[55px] font-medium uppercase 2xl:text-[75px] 2xl:font-bold">
            we are <br /> digital agency
          </h2>
          <p className=" text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            reprehenderit doloremque omnis impedit adipisci necessitatibus
            voluptates fugiat blanditiis ut dolores!
          </p>
          <Button text="Learn more" className=" " />
        </div>
      </div>
      <div className="flex h-[50%] p-5 lg:h-[70%] lg:p-0">
        <Image
          src={IMAGES.company}
          alt="company banner"
          priority
          className="block h-full self-center rounded-tl-3xl object-cover 2xl:self-end"
        />
      </div>
      <div
        className="absolute bottom-0 w-full lg:h-[70%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(12, 17, 23, 0) 0%, #000 77.08%)",
        }}
      />
    </div>
  );
}

export default Hero;
