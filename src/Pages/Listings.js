import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import usflag from "../Assets/Icons/USFlag.png";
import ricon from "../Assets/Icons/ResidentIcon2.svg";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { studioData, semiDetachedData } from "../Components/data";


const ApartmentCard = ({ name, price, location, image }) => {
  return (
    <div className="border rounded-lg p-4 bg-whites relative">
      <button className="bg-white text-green-600 font-aeonik py-1 px-4 rounded-full top-8 left-8 absolute">
        For Rent
      </button>
      <img src={image} alt={name} className="w-full h-50 object-cover mb-4" />
      <div className="mb-4 space-y-2">
        <h2 className="text-xl font-aeonik">{name}</h2>
        <p className="font-aeonik">{price}</p>
        <p className="font-aeonik">{location}</p>
      </div>
    </div>
  );
};

function Listings() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div
        className="bg-listbg2 bg-cover bg-opacity-30"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div>
         <Navbar whitelinks={true}/>
        </div>
        <div className="items-center justify-center text-center py-20">
          <h1 className="font-aeonikmedium text-3xl md:text-2xl text-white leading-10 tracking-tight">
            EXPLORE OUR PROPERTIES
          </h1>
          <h1 className="font-aeonik text-xl md:text-xl text-white leading-8 tracking-tight mt-1">
            Experience guaranteed returns a quality lifestyle with Resident
          </h1>
        </div>
      </div>
      <div className="mt-10 md:mx-16 mx-4">
        <div className="justify-center flex items-center flex-shrink-0 overflow-x-auto space-x-4 mt-10 mb-4 md:space-x-4">
          <div className="bg-[#BBBBBB33] flex-shrink-0 px-4 flex items-center justify-center py-3 rounded-full border border-[#262626] md:w-[12%]">
            <p className="text-xs font-aeonik text-[#262626]">
              Studio Apartments
            </p>
          </div>
          <div className="px-4 flex-shrink-0 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
            <p className="text-xs font-aeonik text-[#5A5A5A]">
              Semi-detached
            </p>
          </div>
          <div className="px-4 flex flex-shrink-0 items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
            <p className="text-xs font-aeonik text-[#5A5A5A]">
              Penthouse
            </p>
          </div>
          <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
            <p className="text-xs font-aeonik text-[#5A5A5A]">Duplex</p>
          </div>
        </div>
      </div>

      <div className="md:p-10 sm-p-5">
        <div className="container mx-auto p-8">
          <h1 className="mb-6 text-2xl font-aeonikmedium">Studio Apartments</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {studioData.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:p-10 sm-p-5">
        <div className="container mx-auto p-8">
          <h1 className="mb-6 text-2xl font-aeonikmedium">Semi-detached</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
