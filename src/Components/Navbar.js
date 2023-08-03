import React, { useState } from "react";
import usflag from "../Assets/Icons/USFlag.png";
import ricon from "../Assets/Icons/ResidentIcon.svg";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="h-10 flex justify-between items-center md:p-10 py-10 px-4">
        <Link to="/">
          <div>
            <img src={ricon} alt="Resident" className="h-6" />
          </div>
        </Link>
        <div className="relative">
          <ul
            className={`md:flex ${
              isMenuOpen ? "flex flex-col md:flex-row" : "hidden md:flex"
            } space-x-12 items-center`}
          >
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
            <li className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
              Our Services
            </li>
            <li className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
              About Us
            </li>
            <li className="font-sfpromedium text-[#262626] hover:text-green-700 text-sm cursor-pointer">
              Contact
            </li>
          </ul>

          {/* Overlay for the menu */}
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-60 mt-2 justify-right"
              onClick={handleMenuToggle}
            />
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleMenuToggle}
            // Add ARIA label for accessibility
            aria-label="Toggle Menu"
          >
            <img src={usflag} alt="language" className="h-6" />
            <MdKeyboardArrowDown size={24} />
          </div>

          <MdOutlineMenu
            size={24}
            className="md:hidden cursor-pointer"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
