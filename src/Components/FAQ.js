import React, { useState } from "react";
import { MdArrowForward, MdOutlineArrowDropDown } from "react-icons/md";
import ri from "../Assets/Icons/ResidentIcon.svg";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "How can I search for available properties?",
    "Question 2",
    "Question 3",
    "Question 4",
  ];

  const answers = [
    "Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Answer 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Answer 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Answer 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-20 md:mx-20 mb-20 mx-10">
      <h1 className="text-xl font-sfprosemibold">FAQS</h1>
      <div className="flex items-center space-x-2">
        <p className="text-xs font-sfpromedium underline ml-auto">Read More</p>
        <MdArrowForward size={14} />
      </div>
      <div className="flex mt-4">
        <div className="md:w-[50%]">
          {questions.map((question, index) => (
            <div
              key={index}
              className="md:cursor-pointer md:mb-8"
              onClick={() => handleQuestionClick(index)}
            >
              <div className="flex items-center justify-between m-3 space-y-2">
                <h1 className="font-sfproregular text-[#262626] text-base">
                  {" "}
                  {/* Increased font size */}
                  {question}
                </h1>
                <MdOutlineArrowDropDown />
              </div>
              <div
                className={`h-0.5 bg-[#e3e3e3] w-[100%] mt-4 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="md:w-[50%] flex items-center">
          {" "}
          {/* Added flex class */}
          <div className="md:ml-8 md:mt-4">
            <img src={ri} alt="Resident Icon Green" className="text-center" />
            {activeIndex !== null && (
              <div>
                <p className="text-lg mt-4 font-semibold">
                  {" "}
                  {/* Increased font size */}
                  {questions[activeIndex]}
                </p>
                <p className="text-base">{answers[activeIndex]}</p>{" "}
                {/* Increased font size */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
