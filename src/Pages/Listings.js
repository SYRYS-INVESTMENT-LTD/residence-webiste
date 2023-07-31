import React from "react";
import Footer from "../Components/Footer";
import usflag from "../Assets/Icons/USFlag.png";
import ricon from "../Assets/Icons/ResidentIcon.svg";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { studioData, semiDetachedData } from "../Components/data";

const ApartmentCard = ({ name, price, location, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-whites relative">
      <button className="bg-white text-green-600 font-bold py-2 px-4 rounded-full top-6 left-5 absolute">
        For Rent
      </button>
      <img src={image} alt={name} className="w-full h-50 object-cover mb-4" />

      <div className="mb-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-700 dark:text-gray-300">{price}</p>
        <p className="text-gray-600 dark:text-gray-400">{location}</p>
      </div>
    </div>
  );
};

function Listings() {
  return (
    <div>
      <div className="bg-listbg2 bg-cover bg-opacity-30" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', backgroundBlendMode: 'multiply'}}>
        <div>
          <div className="h-10 flex justify-between items-center md:p-10 py-10 px-4">
            <Link to={"/"}>
              <div>
                <img src={ricon} alt="Resident" className="h-6" />
              </div>
            </Link>
            <div>
              <ul className="md:flex hidden space-x-12 items-center">
                <Link to={"/"}>
                  <div className="font-sfpromedium text-white hover:text-green-700 text-sm cursor-pointer">
                    Home
                  </div>
                </Link>
                <Link to={"/listings"}>
                  <div className="font-sfpromedium text-white  hover:text-green-700 text-sm cursor-pointer">
                    Listings
                  </div>
                </Link>
                <li className="font-sfpromedium text-white  hover:text-green-700 text-sm cursor-pointer">
                  Our Services
                </li>
                <li className="font-sfpromedium text-white  hover:text-green-700 text-sm cursor-pointer">
                  About Us
                </li>
                <li className="font-sfpromedium text-white  hover:text-green-700 text-sm cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={usflag} alt="language" className="h-6" />
                <MdKeyboardArrowDown size={24} color="fff" />
              </div>

              <MdOutlineMenu size={24} className="md:hidden cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="items-center justify-center text-center py-20">
  <h1 className="font-sfprotext font-semibold text-3xl md:text-2xl text-white leading-10 tracking-tight">
    EXPLORE OUR PROPERTIES
  </h1>
  <h1 className="font-sfprotext font-semibold text-xl md:text-xl text-white leading-8 tracking-tight">
    Experience guaranteed returns a quality lifestyle with Resident
  </h1>
</div>

      </div>
      <div className="mt-10 md:mx-16 mx-4">
        <div className="justify-center flex items-center flex-shrink-0 overflow-x-auto space-x-4 mt-10 mb-4 md:space-x-4">
          <div className="bg-[#BBBBBB33] flex-shrink-0 px-4 flex items-center justify-center py-3 rounded-full border border-[#262626] md:w-[12%]">
            <p className="text-xs font-sfproregular text-[#262626]">
              Studio Apartments
            </p>
          </div>
          <div className="px-4 flex-shrink-0 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
            <p className="text-xs font-sfproregular text-[#5A5A5A]">
              Semi-detached
            </p>
          </div>
          <div className="px-4 flex flex-shrink-0 items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
            <p className="text-xs font-sfproregular text-[#5A5A5A]">
              Penthouse
            </p>
          </div>
          <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
            <p className="text-xs font-sfproregular text-[#5A5A5A]">Duplex</p>
          </div>
        </div>
      </div>

      <div className="md:p-10 sm-p-5">
        <div className="container mx-auto p-8">
          <h1 className="mb-6 text-2xl font-semibold">Studio Apartments</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioData.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:p-10 sm-p-5">
        <div className="container mx-auto p-8">
          <h1 className="mb-6 text-2xl font-semibold">Semi-detached</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {semiDetachedData.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Listings;
