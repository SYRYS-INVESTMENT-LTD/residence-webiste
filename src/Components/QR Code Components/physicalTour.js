import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import rent from "../../Assets/Icons/ForRentIcon.svg";
import money from "../../Assets/Icons/MoneyIcon.svg";
import tourImg from "../../Assets/Icons/TourButton.svg";
import { MdOutlineClose } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";

function BookingModal() {
  const [showModal, setShowModal] = useState(false);
  const [inspectionActivities, setInspectionActivities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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
    if (selectedDate === date) {
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  // Function to handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Filter activities that have available times
  const activitiesWithTimes = inspectionActivities.filter(
    (activity) => activity.freeTime.length > 0
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 p-4 sm:p-10">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[50%] overflow-y-auto">
        <div className="text-center">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl text-center font-semibold flex-grow">
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
          <h2 className="font-generalsans font-lg">
            We'll connect you with a local agent who can give you a
          </h2>
          <h2 className="font-generalsans font-lg">personalized tour of the home in person</h2>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <img
            src={tourImg}
            alt="For Rent Button"
            className="w-32 h-32"
          />
          <div className="flex flex-col flex-grow space-y-2">
            <h1 className="text-[#262626] font-generalsansmedium text-xl">
              Atoll Park Site
            </h1>
            <div className="flex items-center space-x-2">
              <img
                src={money}
                alt="For Rent Button"
                className="w-6 h-6"
              />
              <div>
                <h3 className="text-[#262626] font-generalsansmedium text-xl" style={{ display: 'inline' }}>
                  $800
                </h3>
                <h3 className="text-[#262626] font-generalsans" style={{ display: 'inline' }}>
                  /month
                </h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RiMapPinLine color="#000" size={18} className="mr-1 " />
              <h3 className="text-[#262626] font-generalsans ">
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
            <h3 className="text-lg font-semibold">Select a date</h3>
            <div className="grid grid-cols-3 gap-6 mt-2 md:grid-cols-6">
              {activitiesWithTimes.map((inspectionActivity, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(inspectionActivity.date)}
                  className={`w-full h-12 px-2 py-2 rounded-md ${selectedDate === inspectionActivity.date
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
              <h3 className="text-lg font-semibold">Select a time</h3>
              <div className="grid grid-cols-3 gap-2 mt-2 md:grid-cols-6 font-generalsansmedium">
                {activitiesWithTimes.find(
                  (activity) => activity.date === selectedDate
                ).freeTime.map((timeSlot, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSelect(timeSlot.time)}
                    className={`w-full h-12 px-2 py-2 rounded-full ${selectedTime === timeSlot.time
                      ? "bg-green-700 text-white"
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
        <div className="flex mt-6 space-x-24 mt-4">
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
  );
}

export default BookingModal;


