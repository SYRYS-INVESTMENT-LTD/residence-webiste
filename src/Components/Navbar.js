import React, { useState } from "react";
import usflag from "../Assets/Icons/USFlag.png";
import ricon from "../Assets/Icons/ResidentBlackIcon.png";
import rgreen from "../Assets/Icons/ResidentIcon2.svg"
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { BiUser, BiChevronDown } from "react-icons/bi"
import { useLocation, Link } from "react-router-dom";

function Navbar({ whitelinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="h-10 md:p-10 py-10 px-4 flex justify-between items-center">
        <Link to="/">
          <div>
            <img src={whitelinks ? rgreen : ricon} alt="Resident" className="h-6" />
          </div>
        </Link>
        <div className="hidden md:flex space-x-12 items-center">
          <Link
            to="/listings"
            className={`font-aeonik text-sm cursor-pointer ${location.pathname === "/listings"
              ? "text-green-700"
              : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}
          >
            Apartment Listing
          </Link>
          <Link
            to=""
            className={`font-aeonik text-sm cursor-pointer ${location.pathname === ""
              ? "text-green-700"
              : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}
          >
            Projects
          </Link>
          <Link
            to=""
            className={`font-aeonik text-sm cursor-pointer ${location.pathname === ""
              ? "text-green-700"
              : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}
          >
            CRM
          </Link>
          <Link
            to="/"
            className={`font-aeonik text-sm cursor-pointer ${location.pathname === "/" ? "text-green-700" : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}
          >
            Property Management
          </Link>
          <Link
            to=""
            className={`font-aeonik text-sm cursor-pointer ${location.pathname === "" ? "text-green-700" : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}
          >
            Pricing
          </Link>
          <Link
            to=""
            className={`font-aeonik text-sm cursor-pointer ${location.pathname === "" ? "text-green-700" : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}
          >
            Affliate
          </Link>
          <Link to="/contact">
            <div className={`font-aeonik text-sm cursor-pointer ${location.pathname === "/contact" ? "text-green-700" : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}>
              Contact Us
            </div>
          </Link>
          <Link to="">
            <div className={`font-aeonik text-sm cursor-pointer ${location.pathname === "" ? "text-green-700" : "text-[#262626]"
              } ${whitelinks ? "text-white" : ""}`}>
              Blog
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="flex items-center space-x-2 cursor-pointer p-2 hidden md:flex"
          >
            <div
              className="inline-flex p-2 justify-center items-center"
              style={{
                borderRadius: '13px',
                background: 'var(--secondary-2, #FAF2F0)',
                boxShadow: '0px 2.21429px 5.90476px -0.7381px rgba(0, 0, 0, 0.05), 0px 0px 0.7381px 0px rgba(0, 0, 0, 0.24)',
              }}
            >
              <img
                src={usflag}
                alt="language"
                className="h-6 "
              />
              <MdKeyboardArrowDown size={24} color={whitelinks ? 'white' : undefined} />
            </div>
          </div>

          <div
            className="flex items-center space-x-2 cursor-pointer p-2 hidden md:flex"
          >
            <div
              className="inline-flex p-2 justify-center items-center"
              style={{
                borderRadius: '13px',
                background: 'var(--secondary-2, #FAF2F0)',
                boxShadow: '0px 2.21429px 5.90476px -0.7381px rgba(0, 0, 0, 0.05), 0px 0px 0.7381px 0px rgba(0, 0, 0, 0.24)',
              }}
            >
              <BiUser size={24} color={whitelinks ? 'white' : undefined} />
              <MdKeyboardArrowDown size={24} color={whitelinks ? 'white' : undefined} />
            </div>
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
        <div className="md:hidden bg-transparent border-white b-1 text-gray-300 flex flex-col items-center space-y-4 py-4 left-0">
          <Link to="/">
            <div className="font-aeonik text-[#262626] text-sm cursor-pointer">
              Property Management
            </div>
          </Link>
          <Link to="/listings">
            <div className="font-aeonik text-[#262626] text-sm cursor-pointer">
              Listings
            </div>
          </Link>
          <div className="font-aeonik text-[#262626] text-sm cursor-pointer">
            Our Services
          </div>
          <div className="font-aeonik text-[#262626] text-sm cursor-pointer">
            About Us
          </div>
          <div className="font-aeonik text-[#262626] text-sm cursor-pointer">
            Contact
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
