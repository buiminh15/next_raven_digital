"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IMAGES } from "src/constants";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { createPortal } from "react-dom";

type ModalPortalProps = {
  openMenu: boolean;
  handleCloseMenu: () => void;
};

function ModalPortal({ openMenu, handleCloseMenu }: ModalPortalProps) {
  return (
    <>
      {createPortal(
        <>
          <div
            className={`absolute inset-0 z-50 transform bg-black p-10 duration-300 ease-linear ${
              openMenu ? "translate-y-0" : "translate-y-[-1000px]"
            } transition-transform`}
          >
            <div className="absolute right-10">
              <XMarkIcon
                className="h-8 w-8 cursor-pointer text-white"
                onClick={handleCloseMenu}
              />
            </div>
            <ul className="flex h-full flex-col items-center justify-center gap-5  text-lg font-medium">
              <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
                Home
              </li>
              <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
                About
              </li>
              <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
                Services
              </li>
              <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
                Portfolio
              </li>
              <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
                Testimonials
              </li>
              <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
                News
              </li>
              <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
                Contacts
              </li>
            </ul>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <header className="relative">
      <nav className="flex items-center justify-between p-5 lg:px-36">
        <div className="w-24 ">
          <Link href={"#"}>
            <Image
              src={IMAGES.icon}
              alt="logo"
              className="block w-full max-w-full"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <Bars3Icon
            className="h-8 w-8 cursor-pointer text-white"
            onClick={handleOpenMenu}
          />
        </div>
        <ul className=" hidden h-full items-center justify-center gap-5 font-medium md:flex">
          <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
            Home
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
            About
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
            Services
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
            Portfolio
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
            <Link href={"#testimonial"}>Testimonials</Link>
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
            News
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-out hover:text-primary hover:transition hover:duration-300 hover:ease-in">
            Contacts
          </li>
        </ul>
      </nav>
      <ModalPortal openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
    </header>
  );
}

export default Header;
