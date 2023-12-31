import React from "react";
import ai from "../Assets/Images/appsImage.png";
import sg from "../Assets/Images/Signature.svg";
import appstore from "../Assets/Icons/AppStore.png";
import playstore from "../Assets/Icons/GooglePlay.png";

function WhoWeAre() {
  return (
    <div className="bg-[#F5EEEB] bg-cover mt-10 md:p-10 pt-10 px-4">
      <div className="flex flex-col items-center justify-center space-x-2">
        <h1 className="font-aeonik text-3xl">WE ARE RESIDENT</h1>
        <img src={sg} alt="grimmy signature" className="mt-2 h-7" />
      </div>

      <div className="md:flex md:space-x-20 items-start mt-10">
        <div className="md:w-[50%]">
          <div className="flex items-start space-x-4 md:mt-6">
            <div className="mt-4 space-y-2 text-base leading-[24px]">
              <p className="font-aeonik text-[#5A5A5A] ">
                We use technology to build efficiency and delight in property
                management and life. No barriers to an organized and happy life.
                Our expertise focuses on a guaranteed return on investment,
                property longevity, and a gratifying experience.
              </p>
              <div>
                <p
                  className="font-aeonik text-[#5A5A5A] mt-8"
                  style={{ display: "inline" }}
                >
                  Our team is fast-paced, result-driven, and enjoys creative
                  freedom. With years of experience in the industry, we strive
                  to give everyone access to a well-managed and enjoyable life.
                </p>{" "}
                <span
                  className="font-aeonikmedium"
                  style={{ display: "inline" }}
                >
                  Join the Resident family today!
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-10 md:space-x-8 space-x-4">
            <a
              href="https://apps.apple.com/ng/app/residents/id1669505527"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appstore} alt="greem" className="h-14 cursor-pointer" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.syrysdevelopers.syrysresidents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playstore}
                alt="greem"
                className="h-14 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center md:px-2 md:pl-24">
          <div className="h-[30rem]">
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
