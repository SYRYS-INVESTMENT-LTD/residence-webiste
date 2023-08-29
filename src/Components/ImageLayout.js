import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import h2 from "../Assets/Images/photo1apt.jpg";
import h3 from "../Assets/Images/photo2apt.jpg";
import bp from "../Assets/Icons/blueprintIcon.svg";
import bi from "../Assets/Icons/buildingIcon.svg";
import ti from "../Assets/Icons/trackIcon.svg";
import { format } from "date-fns";
import rent from "../Assets/Icons/ForRentIcon.svg";
import money from "../Assets/Icons/MoneyIcon.svg";
import tourImg from "../Assets/Icons/TourButton.svg";
import mapPin from "../Assets/Icons/mapLocation.svg";
import { MdOutlineClose } from "react-icons/md";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs"
import { RiMapPinLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { Navigation, Thumbs, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GalleryLayout from "./QR Code Components/GalleryLayout";
import ApartmentPricing from "./QR Code Components/ApartmentPricing";
import { slide_images } from "../Components/data";
import { similarListingData } from "../Components/data";


function ImageLayout() {
  const [showModal, setShowModal] = useState(false);
  const [inspectionActivities, setInspectionActivities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleBookPhysicalTour = () => {
    setShowModal(true);

    // Set default selected date to the first available date
    if (activitiesWithTimes.length > 0) {
      setSelectedDate(activitiesWithTimes[0].date);

      // Set default selected time to the first available time slot of the first date
      setSelectedTime(activitiesWithTimes[0].freeTime[0].time);
    }
  }

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://api.syrysapp.com/api/maintenance/schedule/formatted")
      .then((response) => response.json())
      .then((data) => {
        // Set inspection activities from the API response
        setInspectionActivities(data.activities.cleaning);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  // Function to handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Set default selected time to the first available time slot for the selected date
    const selectedActivity = activitiesWithTimes.find(activity => activity.date === date);
    setSelectedTime(selectedActivity.freeTime[0].time);
  };

  // Function to handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Filter activities that have available times
  const activitiesWithTimes = inspectionActivities.filter(
    (activity) => activity.freeTime.length > 0
  );

  // To prevent bg from scrolling
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [showModal]);

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

  return (
    <div className="md:p-10 sm:p-2">
      <GalleryLayout/>

      <div className="px-2">
        {/*Apartment Description*/}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col font-aeonikmedium md:flex-grow space-y-2">
              <p className="mt-6 text-2xl font-aeonik text-[#262626]">
                Atoll Park Site
              </p>
              <p className="text-xl text-[#262626]">$40,000,000</p>
            </div>
            <div className="flex items-center md:ml-auto">
              <RiMapPinLine color="#000" size={18} className="mr-1" />
              <p>Kardesler sokak, Edremit Kyrenia</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-6 text-[#262626] sm:space-y-2">
            <div className="flex md:items-start space-x-4 md:space-x-2 md:space-y-2 items-baseline">
              <img src={bi} alt="Building Icon" className="h-6" />
              <p className="md:text-left md:mb-2">200 units</p>
            </div>
            <div className="flex items-center md:items-start space-x-4 md:space-x-2 md:space-y-2 items-baseline">
              <img src={ti} alt="Pets Icon" className="h-6" />
              <p className="md:text-left">Pets allowed</p>
            </div>
            <div className="flex items-center md:items-start space-x-4 md:space-x-2 md:space-y-2 text-baseline">
              <img src={bp} alt="Blueprint Icon" className="h-6" />
              <p className="md:text-left">2,000 Sqft</p>
            </div>
            <div className="flex items-center md:items-end space-x-4 md:space-x-2 md:space-y-2 text-baseline">
              <BsPerson color="#000" size={20} className="mr-2" />
              <p className="md:text-right">Apartment management</p>
            </div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row mt-2">
          <div className="md:w-3/5 flex flex-col md:space-y-2 mb-4">
            <div className="w-full mb-2">
              <div>
                <h2 className="text-lg font-aeonik text-[262626]">
                  Description
                </h2>
                <span className="text-sm sm:px-2 font-aeonik text-[#5A5A5A]">
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
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-lg font-aeonikmedium">Site details</h2>
              <div className="mt-4 md:flex-row font-aeonik">
                <div className="flex border-b border-[#808080]">
                  <h3 className="flex items-center py-2 flex-grow text-[#5A5A5A]">
                    Parking
                  </h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-[#808080]">
                  <h3 className="flex items-center py-2 flex-grow text-[#5A5A5A]">
                    Parking
                  </h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-[#808080]">
                  <h3 className="flex items-center py-2 flex-grow text-[#5A5A5A]">
                    Parking
                  </h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-[#808080]">
                  <h3 className="flex items-center py-2 flex-grow text-[#5A5A5A]">
                    Parking
                  </h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
                <div className="flex border-b border-[#808080]">
                  <h3 className="flex items-center py-2 flex-grow text-[#5A5A5A]">
                    Parking
                  </h3>
                  <h3 className="flex items-center py-2">Yes</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 flex flex-col md:space-y-4 sm:mt-4 md:mx-20 md:px-7 ml-auto w-full">
            <div className="flex-row">
              <div className="bg-[#FAF2F0] text-[#262626] p-4 px-3 rounded-lg">
                <h2 className="text-2xl text-center font-aeonikmedium">
                  VIRTUAL TOUR
                </h2>
                <p className="text-lg text-center font-aeonik text-[#808080]">
                  Experience your dream properties
                </p>
                <div className="relative mt-4">
                  <img
                    src={h2}
                    alt="Virtual Tour"
                    className="w-full h-auto opacity-80"
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
                <button className="bg-[#199978] text-white mt-4 px-6 py-2 w-full rounded-md font-aeonik">
                  Book A Virtual Tour
                </button>
              </div>
            </div>
            <div className="bg-[#FAF2F0] p-6 rounded-lg shadow-lg flex-row font-aeonik">
              <h2 className="text-2xl text-center font-aeonikmedium">
                BOOK A PHYSICAL TOUR
              </h2>
              <p className="text-lg text-center text-[#808080]">
                Experience a world unknown
              </p>
              <div>
                <button
                  className="bg-[#199978] text-white mt-4 px-6 py-2 w-full rounded-md"
                  onClick={handleBookPhysicalTour}
                >
                  Book a Physical tour
                </button>
                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 p-4 sm:p-10">
                    <div className="bg-white p-6 sm:p-6 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[80vw] lg:w-[70%] xl:w-[50%] overflow-y-auto">
                      <div className="h-full overflow-y-auto">
                        <div className="text-center">
                          <div>
                            <div className="flex items-center justify-between">
                              <h2 className="text-3xl text-center font-aeoniksemibold flex-grow">
                                BOOK A TOUR
                              </h2>
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
                          </div>
                          <h2 className="font-aeonik font-lg">
                            We'll connect you with a local agent who can give you a
                          </h2>
                          <h2 className="font-aeonik font-lg">personalized tour of the home in person</h2>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                          <img
                            src={tourImg}
                            alt="For Rent Button"
                            className="w-32 h-32"
                          />
                          <div className="flex flex-col flex-grow space-y-2">
                            <h1 className="text-[#262626] font-aeonikmedium text-xl">
                              Atoll Park Site
                            </h1>
                            <div className="flex items-center space-x-2">
                              <img
                                src={money}
                                alt="For Rent Button"
                                className="w-6 h-6"
                              />
                              <div>
                                <h3 className="text-[#262626] font-aeonikmedium text-xl" style={{ display: 'inline' }}>
                                  $800
                                </h3>
                                <h3 className="text-[#262626] font-aeonik" style={{ display: 'inline' }}>
                                  /month
                                </h3>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <img src={mapPin} alt="Map Pin" className="h-6 mr-1 " />
                              <h3 className="text-[#262626] font-aeonik ">
                                Kardesleer sokak, Edremit Kyrenia
                              </h3>
                            </div>
                          </div>
                          <div className="ml-auto">
                            <img src={rent} alt="For Rent Button" className="h-6" />
                          </div>
                        </div>
                        <div>
                          {/*The Select a day and select a time*/}
                          <div className="mt-6">
                            <h3 className="text-lg font-aeonikmedium">Select a date</h3>
                            <div className="grid grid-cols-3 gap-6 mt-2 md:grid-cols-6">
                              {activitiesWithTimes.map((inspectionActivity, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleDateSelect(inspectionActivity.date)}
                                  className={`w-full h-14 px-2 py-2 rounded-md ${selectedDate === inspectionActivity.date
                                    ? "text-green-700 border border-gray-300 border-1 p-3"
                                    : "border border-gray-300 border-1 p-6"
                                    }`}
                                >
                                  {format(new Date(inspectionActivity.date), "eeee MMM d")}
                                </button>
                              ))}
                            </div>
                          </div>
                          {selectedDate && (
                            <div className="mt-6">
                              <h3 className="text-lg font-aeonikmedium">Select a time</h3>
                              <div className="grid grid-cols-3 gap-2 mt-2 md:grid-cols-6">
                                {activitiesWithTimes.find(
                                  (activity) => activity.date === selectedDate
                                ).freeTime.map((timeSlot, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleTimeSelect(timeSlot.time)}
                                    className={`w-full h-12 px-2 py-2 rounded-full ${selectedTime === timeSlot.time
                                      ? "text-green-700 border border-gray-300 border-1 "
                                      : "border border-gray-300 border-1"
                                      }`}
                                  >
                                    {timeSlot.time}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex mt-6 md:space-x-24 sm:space-x-10 mt-4">
                          <input
                            type="email"
                            id="email"
                            className="w-[60%] px-4 py-2 rounded-md text-[#B5B5B5] focus:outline-none focus:ring border border-[#B5B5B5] border-1"
                            placeholder="Enter your email"
                          />
                          <button
                            onClick={() => {
                              setShowModal(false);
                              setSelectedDate(null);
                              setSelectedTime(null);
                            }}
                            className="bg-[#199976] mr-auto text-white px-6 py-2 rounded-md mr-2"
                            style={{ display: 'inline' }}
                          >
                            Book A Tour
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
       <ApartmentPricing/>
      </div>
      <div>
        {/*Similar Listing*/}
        <div className="flex">
          <h1 className="font-inter text-xl flex text-[#262626]">
            Similar Listing
          </h1>
          <h2 className="flex text-[#068965] font-inter ml-auto">
            <Link to="/listings">See more</Link>
          </h2>
        </div>
        <div className="mt-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarListingData.map((apartment) => (
                <ApartmentCard key={apartment.id} {...apartment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLayout;
