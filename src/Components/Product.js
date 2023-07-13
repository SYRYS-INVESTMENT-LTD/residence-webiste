import React from "react";
import { RiMapPinLine } from "react-icons/ri";

export default function Product(props) {
  return (
    <div className="relative py-4 px-1">
      <div className="relative">
        <img
          className="object-cover h-64 w-full"
          src={props.url}
          alt={`${props.name} - ${props.location}`}
        />
        <div className="absolute bottom-0 left-0 w-full h-auto px-4 py-2 bg-black bg-opacity-40 text-white rounded-b-lg">
          <div className="font-semibold mb-1 rounded-md">{props.name}</div>
          <div className="rounded-md flex items-baseline">
            <RiMapPinLine size={16} color="#fff" className="mr-1" />
            <div>{props.location}</div>
          </div>
        </div>
        <div className="absolute top-2 left-2 bg-black bg-opacity-10 text-white px-2 py-1 rounded-3xl">
          Apartment
        </div>
        <div className="absolute bottom-3 right-2 bg-white text-black px-2 py-1 rounded-3xl">
          For Rent
        </div>
      </div>
    </div>
  );
}
