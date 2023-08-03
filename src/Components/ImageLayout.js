import React, { useState } from "react";
import h1 from "../Assets/Images/House1.svg";
import h2 from "../Assets/Images/photo1apt.jpg";
import h3 from "../Assets/Images/photo2apt.jpg";
import bp from "../Assets/Icons/blueprintIcon.svg";
import bi from "../Assets/Icons/buildingIcon.svg";
import ti from "../Assets/Icons/trackIcon.svg";
import bed from "../Assets/Icons/bedIcon.svg";
import bath from "../Assets/Icons/bath-tubIcon.svg";
import rent from "../Assets/Icons/ForRentIcon.svg";
import money from "../Assets/Icons/MoneyIcon.svg";
import tourImg from "../Assets/Icons/TourButton.svg";
import apartment from "../Assets/Images/apartment.png";
import { MdOutlineClose } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function ImageLayout() {
  // State to control modal visibility and user selections
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // To prevent bg from scrolling
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [showModal]);

  // Array of time and date options for the modal form
  const dateOptions = [
    "2023-07-01",
    "2023-07-02",
    "2023-07-03",
    "2023-07-01",
    "2023-07-02",
    "2023-07-03",
    "2023-07-01",
    "2023-07-02",
    "2023-07-03",
    "2023-07-01",
    "2023-07-02",
    "2023-07-03",
  ];

  const timeOptions = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];
  // Function to handle the "Book a Physical tour" button click
  const handleBookPhysicalTour = () => {
    setShowModal(true);
  };

  // Function to handle when the user selects a date
  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  // Function to handle when the user selects a time
  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };
  return (
    <div className="md:p-10 ">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-6 md:0.5vh">
        <div className="w-full md:w-1/2 bg-red-500 flex items-center justify-center">
          <img
            src={h1}
            alt="House 1"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-2">
          <div className="bg-blue-500 flex-1 aspect-w-1 aspect-h-1 hidden sm:block">
            <img
              src={h2}
              alt="House 2"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <Link to={"/listings"}>
            <div className="bg-yellow-500 flex-1 aspect-w-1 aspect-h-1 hidden sm:block cursor-pointer relative">
              <img
                src={h3}
                alt="House 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute flex justify-end items-end bottom-4 right-4">
                <div className="text-white font-bold rounded-full bg-black bg-opacity-60 p-2 font-sfpromedium text-sm cursor-pointer">
                  See More
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-2">
        {/*Apartment Description*/}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col font-semibold md:flex-grow">
              <p className="mt-6 text-2xl font-sfproregular text-[#262626]">
                Atoll Park Site
              </p>
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
        <div className="flex flex-col md:flex-row mt-2">
          <div className="md:w-1/2 md:mr-3 flex flex-col md:space-y-2 mb-4">
            <div className="w-full">
              <div>
                <h2 className="text-lg font-semibold">Description</h2>
                <p className="text-sm sm:px-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Suspendisse sed nisi lacus sed viverra tellus in hac
                  habitasse. Sed viverra ipsum nunc aliquet bibendum enim
                  facilisis. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames. Mattis nunc sed blandit libero
                  volutpat sed. Vitae suscipit tellus mauris a diam maecenas sed
                  enim ut. Nullam vehicula ipsum a arcu cursus vitae. Sed enim
                  ut sem viverra aliquet eget sit amet tellus. Tellus orci ac
                  auctor augue mauris augue neque. Et ligula ullamcorper
                  malesuada proin libero nunc consequat interdum. Sit amet
                  tellus cras adipiscing enim eu. Ac felis donec et odio
                  pellentesque diam volutpat. Adipiscing enim eu turpis egestas
                  pretium aenean pharetra magna. Lorem ipsum dolor sit amet
                  consectetur adipiscing. Nibh sit amet commodo nulla facilisi
                  nullam vehicula ipsum a. Pellentesque adipiscing commodo elit
                  at imperdiet dui accumsan.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Site details</h2>
              <div className="mt-4 md:flex-row">
                <div className="flex border-b border-black">
                  <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-black">
                  <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-black">
                  <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-black">
                  <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-black">
                  <h3 className="flex items-center py-2 flex-grow">Parking</h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col md:space-y-4 sm:mt-4 md:mx-20">
            <div className="flex-row">
              <div className="bg-[#F5EEEB] p-4 rounded-lg shadow-lg">
                <h2 className="text-xl text-center font-semibold">
                  VIRTUAL TOUR
                </h2>
                <p className="text-lg text-center">
                  Experience a world unknown
                </p>
                <div className="relative mt-4">
                  <img
                    src={h2}
                    alt="Virtual Tour"
                    className="w-full h-auto opacity-40"
                  />
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
                    <svg
                      width="61"
                      height="60"
                      viewBox="0 0 61 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.0222 55.0009C43.8293 55.0009 55.0221 43.808 55.0221 30.0009C55.0221 16.1938 43.8293 5.00098 30.0222 5.00098C16.2151 5.00098 5.02222 16.1938 5.02222 30.0009C5.02222 43.808 16.2151 55.0009 30.0222 55.0009Z"
                        stroke="white"
                        stroke-width="2.81249"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.9476 30.576V26.401C21.9476 21.201 25.6226 19.076 30.1226 21.676L33.7476 23.776L37.3726 25.876C41.8726 28.476 41.8726 32.726 37.3726 35.3259L33.7476 37.4259L30.1226 39.5259C25.6226 42.1259 21.9476 40.0009 21.9476 34.801V30.576Z"
                        stroke="white"
                        stroke-width="2.81249"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <button className="bg-green-700 text-white mt-4 px-6 py-2 w-full rounded-md">
                  Book A Virtual Tour
                </button>
              </div>
            </div>
            <div className="bg-[#F5EEEB] p-6 rounded-lg shadow-lg flex-row">
              <h2 className="text-xl text-center font-semibold">
                BOOK A PHYSICAL TOUR
              </h2>
              <p className="text-lg text-center">Experience a world unknown</p>
              <button
                className="bg-green-700 text-white mt-4 px-6 py-2 w-full rounded-md"
                onClick={handleBookPhysicalTour}
              >
                Book a Physical tour
              </button>
            </div>
            {/* Modal Form */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-10">
                <div className="bg-white p-6 rounded-lg shadow-lg sm:max-h-[80vh] overflow-y-auto">
                  <div className="text-center">
                    <div>
                      <h2 className="text-xl text-center font-semibold">
                        BOOK A TOUR
                      </h2>
                      <h2>
                        We'll connect you with a local agent who can give you a
                      </h2>
                      <h2>personalized tour of the home in person</h2>
                    </div>
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setSelectedDate(null);
                        setSelectedTime(null);
                      }}
                      className="px-3 py-2 rounded-md justify-center flex items-center ml-auto"
                    >
                      <MdOutlineClose size={20} className="mr-1" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={tourImg}
                      alt="For Rent Button"
                      className="w-32 h-32"
                    />
                    <div className="flex flex-col flex-grow space-y-2">
                      <h1 className="text-[#262626] font-sfprosemibold text-xl">
                        Atoll Park Site
                      </h1>
                      <div className="flex items-center space-x-2">
                        <img
                          src={money}
                          alt="For Rent Button"
                          className="w-6 h-6"
                        />
                        <h3 className="text-[#262626] font-sfprotext text-lg">
                          $800/month
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RiMapPinLine color="#000" size={18} className="mr-1" />
                        <h3 className="text-[#262626] font-sfprotext">
                          Kardesleer sokak, Edremit Kyrenia
                        </h3>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <img src={rent} alt="For Rent Button" className="h-10" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold">Select a date</h3>
                    <div className="flex flex-wrap mt-2 space-x-2 space-y-4">
                      {dateOptions.map((date, index) => (
                        <button
                          key={index}
                          onClick={() => handleSelectDate(date)}
                          className={`w-full h-full px-2 py-2 rounded-md ${
                            selectedDate === date
                              ? "bg-green-700 text-white"
                              : "bg-gray-200"
                          }`}
                          style={{
                            flexBasis: "calc(100% / 7)",
                            maxWidth: "calc(100% / 7)",
                          }}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold">Select a time</h3>
                    <div className="flex flex-wrap mt-2 space-x-2 space-y-4">
                      {timeOptions.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => handleSelectTime(time)}
                          className={`w-full h-full px-2 py-2 rounded-md ${
                            selectedTime === time
                              ? "bg-green-700 text-white"
                              : "bg-gray-200"
                          }`}
                          style={{
                            flexBasis: "calc(100% / 7)",
                            maxWidth: "calc(100% / 7)",
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex mt-6 space-x-2">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your email"
                    />
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setSelectedDate(null);
                        setSelectedTime(null);
                      }}
                      className="bg-green-700 text-white px-6 py-2 rounded-md mr-2"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="mb-16">
          {/*SITE INFORMATION*/}
          <div>
            {/*APARTMENT PRICES AND AVAILABILITY*/}

            <div className="mt-10 md:mx-16 mx-4">
              <h1 className="font-sfprosemibold  text-xl">
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
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
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
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bath} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bath
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bp} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          635 sqft
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
                        <img src={bp} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          635 sqft
                        </p>
                      </div>
                      <h1 className=" font-sfproregular text-xs text-green-400">
                        Available
                      </h1>
                    </div>
                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bath} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bath
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <p className="font-fproregular text-[#545454] text-xs">
                          <img src={bp} alt="Blueprint Icon" className="h-6" />
                          635 sqft
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
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
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
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bath} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          One Bath
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bp} alt="Blueprint Icon" className="h-6" />
                        <p className="font-fproregular text-[#545454] text-xs">
                          635 sqft
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
      <div>
        {/*Similar Listing*/}
        <div className="flex">
          <h1 className="font-sfprosemibold text-xl flex">Similar Listings</h1>
          <h2 className="flex text-green-700 font-semibold ml-auto">
            See more
          </h2>
        </div>
        <div className="flex p-2 space-x-2">
          <div className="flex flex-col items-start my-4 w-full">
            <img
              src={h3}
              alt="House 3"
              className="md:w-full md:h-full  h-16 object-contain cursor-pointer"
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-lg font-semibold">Name of Apartment</h2>
              <h2 className="text-lg">$500/month</h2>
              <h2 className="flex-grow">Kardesler sokak, Edremit Kyrenia</h2>
            </div>
          </div>
          <div className="flex flex-col items-start my-4 w-full">
            <img
              src={h3}
              alt="House 3"
              className="w-full h-full object-contain cursor-pointer"
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-lg font-semibold">Name of Apartment</h2>
              <h2 className="text-lg">$500/month</h2>
              <h2 className="flex-grow">Kardesler sokak, Edremit Kyrenia</h2>
            </div>
          </div>
          <div className="flex flex-col items-start my-4 w-full">
            <img
              src={h3}
              alt="House 3"
              className="w-full h-full object-contain cursor-pointer"
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-lg font-semibold">Name of Apartment</h2>
              <h2 className="text-lg">$500/month</h2>
              <h2 className="flex-grow">Kardesler sokak, Edremit Kyrenia</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLayout;
