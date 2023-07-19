import React from "react";
import h1 from "../Assets/Images/House1.svg";
import h2 from "../Assets/Images/House.png";
import h3 from "../Assets/Images/House2.svg";
import bp from "../Assets/Icons/blueprintIcon.svg";
import bi from "../Assets/Icons/buildingIcon.svg";
import ti from "../Assets/Icons/trackIcon.svg";
import { RiMapPinLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";

function ImageLayout() {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2 bg-red-500 flex items-center justify-center">
          <img src={h1} alt="House 1" className="max-h-full cursor-pointer" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-2">
          <div className="bg-blue-500 flex-1 aspect-w-1 aspect-h-1">
            <img
              src={h2}
              alt="House 2"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <div className="bg-blue-500 flex-1 aspect-w-1 aspect-h-1">
            <img
              src={h3}
              alt="House 3"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col font-semibold md:flex-grow">
            <p className="scale-95 mt-6 text-2xl">Atoll Park Site</p>
            <p className="text-xl">$40,000,000</p>
          </div>
          <div className="flex items-center md:ml-auto">
            <RiMapPinLine color="#000" size={18} className="mr-1" />
            <p>Kardesler sokak, Edremit Kyrenia</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-y-3">
          <div className="flex items-center flex-grow space-x-3">
            <img src={bi} alt="Building Icon" className="h-6" />
            <p>200 units</p>
          </div>
          <div className="flex items-center flex-grow space-x-3">
            <img src={ti} alt="Pets Icon" className="h-6" />
            <p>Pets allowed</p>
          </div>
          <div className="flex items-center flex-grow space-x-3">
            <img src={bp} alt="Blueprint Icon" className="h-6" />
            <p>2,000 Sqft</p>
          </div>
          <div className="flex items-center flex-grow space-x-3">
            <BsPerson color="#000" size={18} className="mr-2" />
            <p>Apartment management</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Sed
            viverra ipsum nunc aliquet bibendum enim facilisis. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames.
            Mattis nunc sed blandit libero volutpat sed. Vitae suscipit tellus
            mauris a diam maecenas sed enim ut. Nullam vehicula ipsum a arcu
            cursus vitae. Sed enim ut sem viverra aliquet eget sit amet tellus.
            Tellus orci ac auctor augue mauris augue neque. Et ligula
            ullamcorper malesuada proin libero nunc consequat interdum. Sit amet
            tellus cras adipiscing enim eu. Ac felis donec et odio pellentesque
            diam volutpat. Adipiscing enim eu turpis egestas pretium aenean
            pharetra magna. Lorem ipsum dolor sit amet consectetur adipiscing.
            Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.
            Pellentesque adipiscing commodo elit at imperdiet dui accumsan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageLayout;
