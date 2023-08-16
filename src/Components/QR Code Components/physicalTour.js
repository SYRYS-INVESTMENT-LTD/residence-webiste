import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import rent from "../../Assets/Icons/ForRentIcon.svg";
import money from "../../Assets/Icons/MoneyIcon.svg";
import tourImg from "../../Assets/Icons/TourButton.svg";

function BookingModal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState("");
  const [dateOptions, setDateOptions] = useState([]);
  const [timeOptions, setTimeOptions] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.syrysapp.com/api/maintenance/schedule/formatted")
      .then((response) => {
        setActivities(response.data.activities);
      })
      .catch((error) => {
        console.error("Error fetching available dates:", error);
      });
  }, []);

  useEffect(() => {
    if (activities.length > 0) {
      const propertyViewingActivities = activities["cleaning"];
      const validDates = propertyViewingActivities
        .filter((activity) => {
          const currentDate = new Date();
          const activityDate = new Date(activity.date);
          return (
            activityDate >= currentDate &&
            activityDate <= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 12)
          );
        })
        .map((activity) => activity.date);

      setDateOptions(validDates);
    }
  }, [activities]);

  useEffect(() => {
    if (selectedDate) {
      const selectedActivity = activities["property viewing"].find((activity) => activity.date === selectedDate);
      setTimeOptions(selectedActivity ? selectedActivity.freeTime.map((time) => time.time) : []);
    } else {
      setTimeOptions([]);
    }
  }, [selectedDate, activities]);

  const handleBooking = async () => {
    try {
      setShowModal(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setEmail("");
    } catch (error) {
      console.error("Error booking schedule:", error);
    }
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  console.log("dateOptions:", dateOptions);
  console.log("timeOptions:", timeOptions);
  console.log("activities:", activities);

  return (
    <div>
      <button
        className="bg-green-700 text-white mt-4 px-6 py-2 w-full rounded-md"
        onClick={() => setShowModal(true)}
      >
        Book a Property Viewing
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 p-4 sm:p-10">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:max-w-md overflow-y-auto">
            <div className="text-center">
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
              <h2>
                We'll connect you with a local agent who can give you a
              </h2>
              <h2>personalized tour of the home in person</h2>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <img src={tourImg} alt="For Rent Button" className="w-32 h-32" />
              <div className="flex flex-col flex-grow space-y-2">
                <h1 className="text-[#262626] font-sfprosemibold text-xl">
                  Atoll Park Site
                </h1>
                <div className="flex items-center space-x-2">
                  <img src={money} alt="For Rent Button" className="w-6 h-6" />
                  <h3 className="text-[#262626] font-sfprotext text-lg">
                    $800/month
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <RiMapPinLine color="#000" size={24} className="mr-1" />
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
                      {new Date(date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </button>
                  ))}

                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Select a time</h3>
                {timeOptions.length > 0 ? (
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
                ) : (
                  <p>No available times for the selected date.</p>
                )}
              </div>

            </div>
            <div className="flex mt-6 space-x-4">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md text-[#B5B5B5] focus:outline-none focus:ring border border-[#B5B5B5] border-1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleBooking}
                className="bg-green-700 text-white px-6 py-2 rounded-md mr-2"
              >
                Book Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingModal;
