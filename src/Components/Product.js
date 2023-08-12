import React from "react";
import { RiMapPinLine } from "react-icons/ri";

export default function Product(props) {
  return (
    <div className="relative p-4 h-[28rem]">
      <div className="relative cursor-pointer">
        <div className=" overflow-hidden">
          <img
            className="object-cover h-[26rem] w-full"
            src={props.url}
            alt={`${props.name} - ${props.location}`}
          />
        </div>
        <div className="absolute bottom-6 left-0 w-full h-auto px-4 py-3 text-white rounded-b-lg">
          <div className="font-generalsans text-xl mb-1 rounded-md">
            {props.name}
          </div>
          <div className="rounded-md flex items-baseline">
            <RiMapPinLine size={16} color="#fff" className="mr-1" />
            <div>{props.location}</div>
          </div>
        </div>
        <div className="absolute top-4 left-4 text-white font-generalsansmedium px-2 py-1 rounded-3xl border border-white">
          Apartment
        </div>
        <div className="absolute bottom-16 font-generalsanssemibold right-2 bg-white text-[#199976] px-2 py-1 rounded-3xl text-xs">
          For Rent
        </div>
      </div>
    </div>
  );
}
