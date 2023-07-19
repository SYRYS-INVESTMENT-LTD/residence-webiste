import React from "react";
import ai from "../Assets/Images/appsImage.svg";
import appstore from "../Assets/Icons/AppStoreGreen.svg";
import playstore from "../Assets/Icons/PlayStoreGreen.svg";

function WhoWeAre() {
  return (
    <div className="bg-who bg-cover mt-10 md:p-10 pt-10 px-6 pb-10">
      <h1 className="font-sfprobold text-2xl">WHO ARE</h1>
      <div className="md:flex md:space-x-20 items-start">
        <div>
          <div className="flex items-start space-x-4">
            <h1 className="font-sfprobold text-2xl">WE?</h1>
            <div>
              <p className="font-sfproregular text-[#5A5A5A] text-xs mt-1">
                At Resident, we understand the unique needs of both tenants and
                landlords. With years of experience in the industry, we have
                honed our expertise in delivering comprehensive property
                management solutions that prioritize efficiency, transparency,
                and customer satisfaction.
              </p>
              <p className="font-sfproregular text-[#5A5A5A] text-xs mt-8">
                Our mission is to alleviate the stress and complexities often
                associated with property management, whether you are a tenant
                seeking a comfortable and well-maintained living space or a
                landlord.
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
          <div className="h-80 w-80">
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
