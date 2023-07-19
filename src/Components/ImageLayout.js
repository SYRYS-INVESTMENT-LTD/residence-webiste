import React from "react";
import h1 from "../Assets/Images/House1.svg";
import h2 from "../Assets/Images/House.png";
import h3 from "../Assets/Images/House2.svg";
import bp from "../Assets/Icons/blueprintIcon.svg";
import bi from "../Assets/Icons/buildingIcon.svg";
import ti from "../Assets/Icons/trackIcon.svg";
import apartment from "../Assets/Images/apartment.png";
import { MdBed } from "react-icons/md";
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
        <div className="w-1/2">
          <div className="w-full">
            <div>
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
                Sed viverra ipsum nunc aliquet bibendum enim facilisis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames. Mattis nunc sed blandit libero volutpat sed.
                Vitae suscipit tellus mauris a diam maecenas sed enim ut. Nullam
                vehicula ipsum a arcu cursus vitae. Sed enim ut sem viverra
                aliquet eget sit amet tellus. Tellus orci ac auctor augue mauris
                augue neque. Et ligula ullamcorper malesuada proin libero nunc
                consequat interdum. Sit amet tellus cras adipiscing enim eu. Ac
                felis donec et odio pellentesque diam volutpat. Adipiscing enim
                eu turpis egestas pretium aenean pharetra magna. Lorem ipsum
                dolor sit amet consectetur adipiscing. Nibh sit amet commodo
                nulla facilisi nullam vehicula ipsum a. Pellentesque adipiscing
                commodo elit at imperdiet dui accumsan.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Site details</h2>
            <div className="mt-4 md:flex-row">
              <div className="flex border-b border-black">
                <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                <h3 className="flex items-center py-2">Yes</h3>
              </div>
              <div className="flex border-b border-black">
                <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                <h3 className="flex items-center py-2 ">Yes</h3>
              </div>
              <div className="flex border-b border-black">
                <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                <h3 className="flex items-center py-2 ">Yes</h3>
              </div>
              <div className="flex border-b border-black">
                <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                <h3 className="flex items-center py-2 ">Yes</h3>
              </div>
              <div className="flex border-b border-black">
                <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                <h3 className="flex items-center py-2 ">Yes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-16">
          {/*SITE INFORMATION*/}
          <div>
            {/*APARTMENT PRICES AND AVAILABILITY*/}

            <div className="mt-10 md:mx-16 mx-4">
              <h1 className="font-sfprosemibold text-xl">
                Apartment Prices and availability
              </h1>
              <div className="flex items-center flex-shrink-0 whitespace-nowrap overflow-hidden overflow-x-auto overflow-y-hidden space-x-4 mt-10 mb-4 md:space-x-4">
                <div className="bg-[#BBBBBB33] px-4 flex items-center justify-center py-3 rounded-full border border-[#262626] md:w-[12%]">
                  <p className="text-xs font-sfproregular text-[#262626]">
                    Bachelor
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-sfproregular text-[#5A5A5A]">
                    Studio
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-sfproregular text-[#5A5A5A]">
                    Duplex
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-sfproregular text-[#5A5A5A]">
                    Loft
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-sfproregular text-[#5A5A5A]">
                    loft
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-sfproregular text-[#5A5A5A]">
                    loft
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-8 md:mx-16 mx-4 mb-6">
              <div className="py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]">
                <div className="flex space-x-6">
                  <img
                    src={apartment}
                    alt="apartment"
                    className="h-24 md:h-100"
                  />
                  <div className="md:space-y-8 space-y-4">
                    <h1 className="font-sfproregular text-sm">
                      Block 13, Number 5
                    </h1>
                    <div className="flex items-center md:hidden">
                      <h1 className="text-base font-sfpromedium">$800</h1>
                      <p className="font-sfproregular text-sm text-[#545454]">
                        /month
                      </p>
                    </div>
                    <div className="flex md:hidden items-center space-x-3">
                      <div className="flex items-center space-x-2 text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <h1 className=" font-sfproregular text-xs text-green-400">
                        Available
                      </h1>
                    </div>
                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                    </div>
                    <h1 className="md:flex hidden font-sfproregular text-xs text-green-400">
                      Available
                    </h1>
                  </div>
                </div>
                <div className="md:flex items-center hidden">
                  <h1 className="text-base font-sfpromedium">$800</h1>
                  <p className="font-sfproregular text-sm text-[#545454]">
                    /month
                  </p>
                </div>
              </div>
              <div className="py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]">
                <div className="flex space-x-6">
                  <img
                    src={apartment}
                    alt="apartment"
                    className="h-24 md:h-100"
                  />
                  <div className="md:space-y-8 space-y-4">
                    <h1 className="font-sfproregular text-sm">
                      Block 13, Number 5
                    </h1>
                    <div className="flex items-center md:hidden">
                      <h1 className="text-base font-sfpromedium">$800</h1>
                      <p className="font-sfproregular text-sm text-[#545454]">
                        /month
                      </p>
                    </div>
                    <div className="flex md:hidden items-center space-x-3">
                      <div className="flex items-center space-x-2 text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <h1 className=" font-sfproregular text-xs text-green-400">
                        Available
                      </h1>
                    </div>
                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                    </div>
                    <h1 className="md:flex hidden font-sfproregular text-xs text-green-400">
                      Available
                    </h1>
                  </div>
                </div>
                <div className="md:flex items-center hidden">
                  <h1 className="text-base font-sfpromedium">$800</h1>
                  <p className="font-sfproregular text-sm text-[#545454]">
                    /month
                  </p>
                </div>
              </div>
              <div className="py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]">
                <div className="flex space-x-6">
                  <img
                    src={apartment}
                    alt="apartment"
                    className="h-24 md:h-100"
                  />
                  <div className="md:space-y-8 space-y-4">
                    <h1 className="font-sfproregular text-sm">
                      Block 13, Number 5
                    </h1>
                    <div className="flex items-center md:hidden">
                      <h1 className="text-base font-sfpromedium">$800</h1>
                      <p className="font-sfproregular text-sm text-[#545454]">
                        /month
                      </p>
                    </div>
                    <div className="flex md:hidden items-center space-x-3">
                      <div className="flex items-center space-x-2 text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <h1 className=" font-sfproregular text-xs text-green-400">
                        Available
                      </h1>
                    </div>
                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <MdBed />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                    </div>
                    <h1 className="md:flex hidden font-sfproregular text-xs text-green-400">
                      Available
                    </h1>
                  </div>
                </div>
                <div className="md:flex items-center hidden">
                  <h1 className="text-base font-sfpromedium">$800</h1>
                  <p className="font-sfproregular text-sm text-[#545454]">
                    /month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLayout;
