import React from "react";
import appstore from "../Assets/Icons/AppStore.png";
import playstore from "../Assets/Icons/GooglePlay.png";
import homescreen from "../Assets/Images/Rmobileapp.png";
import payscreen from "../Assets/Images/Rpayscreen.png";

function HeroSection() {
  return (
    <div className="items-center justify-center text-center mt-16">
      <h1 className="font-generalsansmedium md:text-4xl text-base text-[#262626]">
        ENJOY A STRESS-FREE LIFE WITH OUR PROPERTY
      </h1>
      <h1 className="font-generalsansmedium md:text-4xl text-base text-[#262626]">
        MANAGEMENT SOLUTIONS
      </h1>
      <div>
        {window.innerWidth < 700 ? (
          <>
            <div className="md:mx-60 mx-4 font-generalsans text-sm scale-95 md:text-sm mt-6 text-[#5A5A5A]">
              <p>
                Experience guaranteed returns and a quality lifestyle with
                Resident. Our comprehensive services bridge the gap between
                tenants and property owners, ensuring efficiency and delight for
                everyone.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="md:mx-60 mx-4 font-generalsans text-2xl scale-95 md:text-sm mt-6 text-[#5A5A5A]">
              <p>
                Experience guaranteed returns and a quality lifestyle with
                Resident. Our comprehensive  
              </p>
              <p>
              services bridge the gap between tenants and
                property owners, ensuring efficiency and 
              </p>
              <p>delight for everyone.</p>
            </div>
          </>
        )}
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
          <img src={playstore} alt="greem" className="h-10 cursor-pointer" />
        </a>
      </div>

      <div className="flex items-center mt-20 space-x-8 justify-center">
        <img src={homescreen} alt="greem" className="md:h-72 h-40" />
        <img src={payscreen} alt="greem" className="md:h-72 h-40" />
      </div>
    </div>
  );
}

export default HeroSection;
