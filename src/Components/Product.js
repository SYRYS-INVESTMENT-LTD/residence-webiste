import React from "react";
import { RiMapPinLine } from "react-icons/ri";

export default function Product(props) {
  return (
    <div className="relative h-[28rem]">
      <div className="relative cursor-pointer">
        <div
          className="overflow-hidden h-[26rem]"
          style={{
            backgroundImage: `url(${props.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            className="hidden object-cover h-full w-full"
            src={props.url}
            alt={`${props.name} - ${props.location}`}
          />
        </div>

        <div className="absolute bottom-6 left-0 w-full h-auto px-4 py-3 text-white rounded-b-lg">
          <div className="font-aeonik text-xl mb-1 rounded-md">
            {props.name}
          </div>
          <div className="rounded-md flex items-baseline">
            <RiMapPinLine size={16} color="#fff" className="mr-1" />
            <div>{props.location}</div>
          </div>
        </div>
        <div className="absolute top-4 left-4 text-white font-aeonikmedium px-2 py-1 rounded-3xl border border-white">
          Apartment
        </div>
        <div className="absolute bottom-16 font-aeonikmedium right-2 bg-white text-[#199976] px-2 py-1 rounded-3xl text-xs">
          For Rent
        </div>
      </div>
    </div>
  );
}