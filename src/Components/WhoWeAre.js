import React from "react";
import ai from "../Assets/Images/appsImage.svg";
import appstore from "../Assets/Icons/AppStoreGreen.svg";
import playstore from "../Assets/Icons/PlayStoreGreen.svg";
import ri from "../Assets/Icons/ResidentBlackIcon.svg";

function WhoWeAre() {
  return (
    <div className="bg-who bg-cover mt-10 md:p-10 pt-10 px-6 pb-5">
      <div className="flex space-x-2 justify-center">
        <img src={ri} alt="greem" className="h-8 flex-col" />
        <h1 className="font-sfprobold text-2xl flex-col">We are Resident!</h1>
      </div>
      <div className="md:flex md:space-x-20 items-start mt-10">
        <div>
          <div className="flex items-start space-x-4">
            <div className= "mt-2">
              <p className="font-sfproregular text-[#5A5A5A] mt-1">
                We use technology to build efficiency and delight in property
                management and life. No barriers to an organized and happy life.
                Our expertise focuses on a guaranteed return on investment,
                property longevity, and a gratifying experience.
              </p>
              <p className="font-sfproregular text-[#5A5A5A] mt-8">
                Our team is fast-paced, result-driven, and enjoys creative
                freedom. With years of experience in the industry, we strive to
                give everyone access to a well-managed and enjoyable life. Join
                the Resident family today!
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 md:space-x-8 space-x-4 justify-center">
            <a
              href="https://apps.apple.com/ng/app/residents/id1669505527"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appstore} alt="greem" className="h-10 cursor-pointer" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.syrysdevelopers.syrysresidents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playstore}
                alt="greem"
                className="h-10 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <div className="h-90 w-80">
            <img
              className="object-contain h-full w-full"
              src={ai}
              alt="Apps_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
