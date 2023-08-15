import React, { useState } from "react";
import fa from "../Assets/Icons/ForwardArrow.jpg";
import ri from "../Assets/Icons/ResidentIcon2.svg";

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
    "Property and Site Management on the Resident platform allows you to manage your properties and sites with ease. It provides a comprehensive overview of each property, including contract details, utility payment information, and payment history.",

    "The Resident platform is open to all property owners, landlords, and tenants looking to streamline property management, access additional services, and enhance communication with the management company.",

    "Yes, the features on the Resident platform can be tailored and expanded upon to meet your individual needs.The Services Section offers additional services beyond regular maintenance. Users can browse available services, select desired options, and make service requests, ensuring convenience and personalized solutions.",

    "Yes, Resident can accessed and managed through our mobile app which is available on the App Store and Google Play.",

    "The support system facilitates direct communication with the management company. You can report maintenance issues, seek assistance, and make inquiries, fostering seamless and efficient support.",

    "The property inspection feature, currently in BETA mode, allows you to conduct property inspections, perform checks, and provide feedback on your property's condition, further enhancing property management efficiency.",
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-20 md:mx-20 mb-20 mx-10">
      <h1 className="text-xl font-generalsansmedium text-[#262626]">FAQS</h1>
      <div className="flex mt-6">
        <div className="md:w-[50%]">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`md:cursor-pointer md:mb-8 ${index < questions.length - 1 ? "pb-2 border-b p-4" : "p-4"
                } ${activeIndex === index
                  ? "rounded-lg border border-[#199976] p-4"
                  : ""
                }`}
              onClick={() => handleQuestionClick(index)}
            >
              <div className="flex items-center justify-between space-y-2">
                <h1
                  className={`font-generalsans text-base items-center justify-center ${activeIndex === index ? "text-[#199976]" : "text-[#262626] hover:text-[#199976]"
                    }`}
                >
                  {question}
                </h1>
                {activeIndex === index ? (
                  <img src={fa} alt="Forward Icon" className="ml-4 justify-center" />
                ) : null}
              </div>
            </div>
          ))}
        </div>


        <div className="md:w-[50%] flex text-left mx-10 rounded-md justify-center">
          <div
            style={{ boxShadow: "3px 3px 8px -1px #0000003D" }}
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
      </div>
    </div>
  );
}

export default FAQ;
