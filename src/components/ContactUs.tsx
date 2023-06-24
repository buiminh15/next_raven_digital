"use client";

import React, { useState } from "react";
import Button from "./Button";
import { BeakerIcon, MapIcon, XMarkIcon } from "@heroicons/react/24/solid";
import GoogleMapReact from "google-map-react";

const defaultProps = {
  center: {
    lat: 55.7558,
    lng: 37.6173,
  },
  zoom: 11,
};

function ContactUs() {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="relative p-5 lg:px-36">
      <h3 className="mb-6 text-center text-[28px] font-bold xl:bottom-[30%] xl:text-[48px]">
        Contact us
      </h3>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-5 lg:gap-52">
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name here"
              style={{
                all: "unset",
                borderBottom: "1px solid #ccc",
                paddingBlock: 10,
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="lastName">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name here"
              style={{
                all: "unset",
                borderBottom: "1px solid #ccc",
                paddingBlock: 10,
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Name here"
              style={{
                all: "unset",
                borderBottom: "1px solid #ccc",
                paddingBlock: 10,
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message here"
              style={{
                all: "unset",
                borderBottom: "1px solid #ccc",
                paddingBlock: 10,
              }}
            />
          </div>
          <Button text="Send message" className="self-start" />
        </form>

        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div>
              <BeakerIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Mobile number</h4>
              <div className="flex items-center gap-5">
                <span className="font-medium text-slate-500">
                  +1 252-937-3762
                </span>
                <Button text="Call" className="py-1" />
              </div>
              <div className="flex items-center gap-5">
                <span className="font-medium text-slate-500">
                  +1 252-937-3762
                </span>
                <Button text="Call" className="py-1" />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <BeakerIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Email</h4>
              <span className="text-slate-500">sample@example.com</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <BeakerIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Address</h4>
              <span className="text-slate-500">
                5 Indian Spring Dr. Mundelein, IL 60060
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 right-0 hidden h-20 w-20 cursor-pointer place-items-center rounded-tl-3xl bg-primary lg:grid"
        onClick={() => setShowMap(!showMap)}
      >
        {showMap ? (
          <XMarkIcon className="h-10 w-10 " />
        ) : (
          <MapIcon className="h-10 w-10 " />
        )}
      </div>

      {showMap && (
        <div className={`mt-10 h-96`}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.NEXT_PUBLIC_MAP_KEY as string,
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
          ></GoogleMapReact>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
