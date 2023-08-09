import React, { useState, useEffect } from "react";
//import h1 from "../Assets/Images/House1.svg";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { similarListingData } from "../Components/data";
import slide_image_1 from "../Assets/Images/photo1apt.jpg";
import slide_image_2 from "../Assets/Images/photo2apt.jpg";
import slide_image_3 from "../Assets/Images/photo3apt.jpg";
import slide_image_4 from "../Assets/Images/photo4apt.jpg";
import slide_image_5 from "../Assets/Images/photo5apt.jpg";
import slide_image_6 from "../Assets/Images/photo6apt.jpg";
import slide_image_7 from "../Assets/Images/House.png";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function ImageLayout() {
  // State to control modal(for Book a Tour) visibility and user selections
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

  //To handle galley dispaly
  //Function to handle gallery display
  const [showGallery, setShowGallery] = useState(false);
  const handleCloseGallery = () => {
    setShowGallery(false);
  };
  const handleGalleryDisplay = () => {
    setShowGallery(true);
  };

  useEffect(() => {
    if (showGallery) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [showGallery]);

  const ApartmentCard = ({ name, price, location, image }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md bg-whites relative">
        <button className="bg-white text-green-600 font-bold py-2 px-4 rounded-full top-6 left-5 absolute font-generalsansmedium">
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

  //To handle, Linking thumbnails to images
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  return (
    <div className="md:p-10 sm:p-2">
      <div className={`md:py-5 ${showGallery ? "bg-opacity-75" : ""}`}>
        <div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-5">
            {/*Apartment Display and DirectorList Gallery*/}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={h2}
                alt="House 1"
                className="w-full h-[36rem] object-cover cursor-pointer"
              />
              <div className="md:hidden lg:hidden absolute flex justify-end items-end bottom-4 right-4">
                <div
                  className="text-white font-bold rounded-full bg-black bg-opacity-60 p-2 font-generalsansmedium text-sm cursor-pointer"
                  onClick={handleGalleryDisplay}
                >
                  25+ photos
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col space-y-2">
              <div className="bg-blue-500 flex-1 aspect-w-1 aspect-h-1 hidden sm:block">
                <img
                  src={h2}
                  alt="House 2"
                  className="w-full h-[18rem] object-cover cursor-pointer"
                />
              </div>

              <div className="bg-yellow-500 flex-1 aspect-w-1 aspect-h-1 hidden sm:block cursor-pointer relative">
                <img
                  src={h3}
                  alt="House 3"
                  className="w-full h-[18rem] object-cover"
                />
                <div className="absolute flex justify-end items-end bottom-4 right-4">
                  <div
                    className="text-white font-bold rounded-full bg-black bg-opacity-60 p-2 font-generalsansmedium text-sm cursor-pointer"
                    onClick={handleGalleryDisplay}
                  >
                    25+ photos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showGallery && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 focus:outline-none container"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="mr-8  relative">
              <button
                onClick={handleCloseGallery}
                className="px-3 py-2 rounded-md justify-center flex items-center absolute top-16 right-16"
              >
                <MdOutlineClose size={24} className="mr-1" color="white" />
              </button>

              <div
                className="swiper-container relative"
                style={{
                  width: "625px",
                  height: "28rem",
                  position: "relative",
                  top: "115px",
                  left: "408px",
                }}
              >
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  pagination={{ el: ".swiper-pagination", clickable: true }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper_container"
                  onSlideChange={(swiper) => {
                    setCurrentSlideIndex(swiper.activeIndex);
                  }}
                >
                  <SwiperSlide className="h-[36rem]">
                    <img
                      src={slide_image_1}
                      alt="slide_image"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="h-[28rem]">
                    <img
                      src={slide_image_2}
                      alt="slide_image"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="h-[36rem]">
                    <img
                      src={slide_image_3}
                      alt="slide_image"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="h-[28rem]">
                    <img
                      src={slide_image_4}
                      alt="slide_image"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="h-[28rem]">
                    <img
                      src={slide_image_5}
                      alt="slide_image"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="h-[28rem]">
                    <img
                      src={slide_image_6}
                      alt="slide_image"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="h-[28rem]">
                    <img
                      src={slide_image_7}
                      alt="slide_image"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                      <FaChevronLeft className="text-2xl" />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <FaChevronRight className="text-2xl" />
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="text-black w-14 font-bold rounded-full px-12 py-3 justify-center bg-white font-generalsansmedium text-sm absolute right-20 cursor-pointer">
              <button>{currentSlideIndex + 1}/7</button>
            </div>
            {/* Displaying the images at the bottom of the carousel */}
            <div className="gap-[20px] bottom-0 left-0 fixed flex justify-center mt-4 space-x-4">
              {[
                slide_image_1,
                slide_image_2,
                slide_image_4,
                slide_image_5,
                slide_image_6,
                slide_image_7,
                slide_image_3,
              ].map((imagePath, index) => (
                <img
                  key={index}
                  src={imagePath}
                  alt="thumbnail"
                  style={{
                    width: "175px",
                    height: "120px",
                    border: "5px solid transparent",
                  }}
                  className={`thumbnail h-20 ${currentSlideIndex === index ? "active" : ""
                    } group group-hover:border-199976`}
                  onClick={() => setCurrentSlideIndex(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-2">
        {/*Apartment Description*/}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col font-sfprotext font-semibold md:flex-grow space-y-2">
              <p className="mt-6 text-2xl font-generalsans text-[#262626]">
                Atoll Park Site
              </p>
              <p className="text-xl">$40,000,000</p>
            </div>
            <div className="flex items-center md:ml-auto">
              <RiMapPinLine color="#000" size={18} className="mr-1" />
              <p>Kardesler sokak, Edremit Kyrenia</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-y-3 justify-between md:my-6">
            <div className="flex items-center flex-grow space-x-4">
              <img src={bi} alt="Building Icon" className="h-6" />
              <p>200 units</p>
            </div>
            <div className="flex items-center flex-grow space-x-4">
              <img src={ti} alt="Pets Icon" className="h-6" />
              <p>Pets allowed</p>
            </div>
            <div className="flex items-center flex-grow space-x-4">
              <img src={bp} alt="Blueprint Icon" className="h-6" />
              <p>2,000 Sqft</p>
            </div>
            <div className="flex items-center flex-grow space-x-4">
              <BsPerson color="#000" size={18} className="mr-2" />
              <p>Apartment management</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-2">
          <div className="md:w-3/5 md:mr-3 flex flex-col md:space-y-2 mb-4">
            <div className="w-full">
              <div>
                <h2 className="text-lg font-generalsansmedium">Description</h2>
                <span className="text-sm sm:px-2 font-generalsans">
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
            <div className="mt-4">
              <h2 className="text-lg font-generalsansmedium">Site details</h2>
              <div className="mt-4 md:flex-row font-generalsans">
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

          <div className="md:w-2/5 flex flex-col md:space-y-4 sm:mt-4 md:mx-20 md:px-7">
            <div className="flex-row">
              <div className="bg-[#F5EEEB] p-4 px-3 rounded-lg shadow-lg">
                <h2 className="text-xl text-center font-generalsansmedium">
                  VIRTUAL TOUR
                </h2>
                <p className="text-lg text-center font-generalsans">
                  Experience your dream properties
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
                <button className="bg-green-700 text-white mt-4 px-6 py-2 w-full rounded-md font-generalsans">
                  Book A Virtual Tour
                </button>
              </div>
            </div>
            <div className="bg-[#F5EEEB] p-6 rounded-lg shadow-lg flex-row font-generalsans">
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
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 p-4 sm:p-10">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:max-w-md overflow-y-auto">            
                  <div className="text-center">
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl text-center font-semibold flex-grow">
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
                    <h2>
                      We'll connect you with a local agent who can give you a
                    </h2>
                    <h2>personalized tour of the home in person</h2>
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
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
                  <div>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold">Select a date</h3>
                      <div className="grid grid-cols-3 gap-2 mt-2 md:grid-cols-6">
                        {dateOptions.map((date, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectDate(date)}
                            className={`w-full h-12 px-2 py-2 rounded-md ${selectedDate === date
                              ? "bg-green-700 text-white"
                              : "border border-gray-300 border-1"
                              }`}
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold">Select a time</h3>
                      <div className="grid grid-cols-3 gap-2 mt-2 md:grid-cols-6">
                        {timeOptions.map((time, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectTime(time)}
                            className={`w-full h-12 px-2 py-2 rounded-full ${selectedTime === time
                              ? "bg-green-700 text-white"
                              : "border border-gray-300 border-1"
                              }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                  <div className="flex mt-6 space-x-4">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md text-[#B5B5B5] focus:outline-none focus:ring border border-[#B5B5B5] border-1"
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

            <div className="mt-10 ">
              <h1 className="font-generalsansmedium text-xl">
                Apartment Prices and availability
              </h1>
              <div className="flex items-center flex-shrink-0 whitespace-nowrap overflow-hidden overflow-x-auto overflow-y-hidden space-x-4 mt-10 mb-4 md:space-x-4">
                <div className="bg-[#BBBBBB33] px-4 flex items-center justify-center py-3 rounded-full border border-[#262626] md:w-[12%]">
                  <p className="text-xs font-generalsans text-[#262626]">
                    Bachelor
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-generalsans text-[#5A5A5A]">
                    Studio
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-generalsans text-[#5A5A5A]">
                    Duplex
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-generalsans text-[#5A5A5A]">
                    Loft
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-generalsans text-[#5A5A5A]">
                    loft
                  </p>
                </div>
                <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                  <p className="text-xs font-generalsans text-[#5A5A5A]">
                    loft
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-8 mb-6">
              <div className="py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]">
                <div className="flex space-x-6">
                  <img
                    src={apartment}
                    alt="apartment"
                    className="h-24 md:h-100"
                  />
                  <div className="md:space-y-8 space-y-4">
                    <h1 className="font-generalsansmedium text-sm">
                      Block 13, Number 5
                    </h1>
                    <div className="flex items-center md:hidden">
                      <h1 className="text-base font-generalsansmedium">$800</h1>
                      <p className="font-generalsanslight text-sm text-[#545454]">
                        /month
                      </p>
                    </div>
                    <div className="flex md:hidden items-center space-x-3">
                      <div className="flex items-center space-x-2 text-center">
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <h1 className=" font-generalsans text-xs text-green-400">
                        Available
                      </h1>
                    </div>
                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bath} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bath
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bp} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          635 sqft
                        </p>
                      </div>
                    </div>
                    <h1 className="md:flex hidden font-generalsans text-xs text-green-400">
                      Available
                    </h1>
                  </div>
                </div>
                <div className="md:flex items-center hidden">
                  <h1 className="text-base font-generalsansmedium">$800</h1>
                  <p className="font-generalsanslight text-sm text-[#545454]">
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
                    <h1 className="font-generalsans text-sm">
                      Block 13, Number 5
                    </h1>
                    <div className="flex items-center md:hidden">
                      <h1 className="text-base font-generalsansmedium">$800</h1>
                      <p className="font-generalsans text-sm text-[#545454]">
                        /month
                      </p>
                    </div>
                    <div className="flex md:hidden items-center space-x-3">
                      <div className="flex items-center space-x-2 text-center">
                        <img src={bp} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          635 sqft
                        </p>
                      </div>
                      <h1 className=" font-generalsans text-xs text-green-400">
                        Available
                      </h1>
                    </div>
                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bath} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bath
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <p className="font-generalsans text-[#545454] text-xs">
                          <img src={bp} alt="Blueprint Icon" className="h-6" />
                          635 sqft
                        </p>
                      </div>
                    </div>
                    <h1 className="md:flex hidden font-generalsans text-xs text-green-400">
                      Available
                    </h1>
                  </div>
                </div>
                <div className="md:flex items-center hidden">
                  <h1 className="text-base font-generalsansmedium">$800</h1>
                  <p className="font-generalsans text-sm text-[#545454]">
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
                    <h1 className="font-generalsans text-sm">
                      Block 13, Number 5
                    </h1>
                    <div className="flex items-center md:hidden">
                      <h1 className="text-base font-generalsansmedium">$800</h1>
                      <p className="font-generalsans text-sm text-[#545454]">
                        /month
                      </p>
                    </div>
                    <div className="flex md:hidden items-center space-x-3">
                      <div className="flex items-center space-x-2 text-center">
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <h1 className=" font-generalsans text-xs text-green-400">
                        Available
                      </h1>
                    </div>
                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bed} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bed
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bath} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          One Bath
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={bp} alt="Blueprint Icon" className="h-6" />
                        <p className="font-generalsans text-[#545454] text-xs">
                          635 sqft
                        </p>
                      </div>
                    </div>
                    <h1 className="md:flex hidden font-generalsans text-xs text-green-400">
                      Available
                    </h1>
                  </div>
                </div>
                <div className="md:flex items-center hidden">
                  <h1 className="text-base font-generalsansmedium">$800</h1>
                  <p className="font-generalsans text-sm text-[#545454]">
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
          <h1 className="font-inter text-xl flex">Similar Listing</h1>
          <h2 className="flex text-green-700 font-semibold ml-auto">
            <Link to="/listings">See more</Link>
          </h2>
        </div>

        <div className="mt-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
