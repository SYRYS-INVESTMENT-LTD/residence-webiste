import React, { useState } from "react";
import usflag from "../Assets/Icons/USFlag.png";
import ricon from "../Assets/Icons/ResidentIcon2.svg";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="h-10 md:p-10 py-10 px-4 flex justify-between items-center">
        <Link to="/">
          <div>
            <img src={ricon} alt="Resident" className="h-6" />
          </div>
        </Link>
        <div className="hidden md:flex space-x-12 items-center">
          <Link to="/">
            <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
              Home
            </div>
          </Link>
          <Link to="/listings">
            <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
              Listings
            </div>
          </Link>
          <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
            Our Services
          </div>
          <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
            About Us
          </div>
          <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
            Contact
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
          >
            <img src={usflag} alt="language" className="h-6" />
            <MdKeyboardArrowDown size={24} />
          </div>

          <MdOutlineMenu
            size={24}
            className="cursor-pointer md:hidden"
            onClick={handleMenuToggle}
          />
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent border-white b-1 text-gray-300 flex flex-col items-center space-y-4 py-4 left-0 " >
          <Link to="/">
            <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
              Home
            </div>
          </Link>
          <Link to="/listings">
            <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
              Listings
            </div>
          </Link>
          <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
            Our Services
          </div>
          <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
            About Us
          </div>
          <div className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
            Contact
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;