import React, { useState } from "react";
import fa from "../Assets/Icons/ForwardArrow.jpg";
import ri from "../Assets/Icons/ResidentIcon2.svg";
import { BsArrowDown } from "react-icons/bs";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    "What is property and site management on the Resident platform?",
    "Who can use the Resident platform?",
    "Can the features be customized based on my preferences?",
    "Can resident app be accessed.",
    "How does the support system work?",
    "What is property inspection?",
  ];

  const answers = [
    "Property and Site Management on the Resident platform allows you to manage your properties and sites with ease...",
    "The Resident platform is open to all property owners, landlords, and tenants looking to streamline property management...",
    "Yes, the features on the Resident platform can be tailored and expanded upon to meet your individual needs...",
    "Yes, Resident can be accessed and managed through our mobile app which is available on the App Store and Google Play...",
    "The support system facilitates direct communication with the management company. You can report maintenance issues...",
    "The property inspection feature, currently in BETA mode, allows you to conduct property inspections, perform checks...",
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(index);
  };

  const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed

  return (
    <div className="mt-20 md:mx-20 mb-20 mx-10">
      <h1 className="text-2xl font-generalsansmedium text-[#262626]">FAQS</h1>
      <div className={`flex mt-2 md:mt-8 ${isMobile ? "flex-col" : ""}`}>
        {isMobile ? (
          questions.map((question, index) => (
            <div
              key={index}
              className={`cursor-pointer mb-2 py-6 px-2 pb-2 border-b ${
                activeIndex === index ? "" : ""
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              <div className="flex items-center justify-between">
                <h1
                  className={`font-generalsans text-base mb-2 ${
                    activeIndex === index
                      ? "text-[#199976]"
                      : "text-[#262626] hover:text-[#199976]"
                  }`}
                >
                  {question}
                </h1>
                {activeIndex === index ? (
                  <BsArrowDown className="ml-auto" size={18} color="green-600" />
                ) : null}
              </div>
              {activeIndex === index && (
                <p className="text-base font-generalsans text-[#5A5A5A] mt-2">
                  {answers[index]}
                </p>
              )}
            </div>
          ))
        ) : (
          <>
            <div className="md:w-[50%]">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className={`cursor-pointer md:mb-8 ${
                    index < questions.length - 1 ? "pb-2 border-b p-4" : "p-4"
                  } ${
                    activeIndex === index
                      ? "rounded-lg border border-[#199976] p-4"
                      : ""
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className="flex items-center justify-between space-x-2 relative md:h-[4rem]">
                    <h1
                      className={`font-generalsans text-base ${
                        activeIndex === index
                          ? "text-[#199976]"
                          : "text-[#262626] hover:text-[#199976]"
                      }`}
                    >
                      {question}
                    </h1>
                    {activeIndex === index ? (
                      <img
                        src={fa}
                        alt="Forward Icon"
                        className="h-5 ml-2 self-center"
                      />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-[50%] flex text-left mx-10 rounded-md justify-center">
              <div
                style={{ boxShadow: "0px 3px 8px -1px #0000000D" }}
                className="px-4"
              >
                <div className="md:ml-8 md:mt-4">
                  <div className="flex flex-col items-center">
                    <img
                      src={ri}
                      alt="Resident Icon Green"
                      className="justify-center items-center mt-2"
                    />
                    <div className="justify-center">
                      {activeIndex !== null && (
                        <div className="space-y-2">
                          <p className="text-lg mt-4 font-generalsans">
                            {questions[activeIndex]}
                          </p>
                          <p className="text-base font-generalsans text-[#5A5A5A]">
                            {answers[activeIndex]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FAQ;
