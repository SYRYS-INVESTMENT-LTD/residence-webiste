import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { studioData, semiDetachedData } from "../Components/data";

const ApartmentCard = ({ name, price, location, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800">
      <button className="bg-white hover:bg-blue-600 text-green-600 font-bold py-2 px-4 rounded-full top-3 right-2">
        For Rent
      </button>
      <img src={image} alt={name} className="w-full h-40 object-cover mb-4" />

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
      <Navbar />
      <div className="items-center justify-center text-center mt-16 mb-16">
        <h1 className="font-sfprobold md:text-2xl text-base text-[#262626]">
          EXPLORE OUR PROPERTIES
        </h1>
        <h1 className="font-sfprobold md:text-2xl text-base text-[#262626]">
          Experience guaranteed returns a quality lifestyle with Resident
        </h1>
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
