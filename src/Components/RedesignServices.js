import React from "react";
import residentlogo from "../Assets/Icons/ResidentsCircular.png";
import services1 from "../Assets/Images/services1.svg";
import services2 from "../Assets/Images/services2.svg";
import services3 from "../Assets/Images/services3.svg";

function RedesignServices() {
  return (
    <div className="mx-20">
      <div className="items-center text-center justify-center mt-20">
        <h1 className="font-sfproregular text-base">
          COMPREHENSIVE SERVICES TAILORED TO YOUR NEEDS
        </h1>
        <p className="font-sfproregular text-[#5a5a5a] text-xs text-center mt-1">
          Discover a Wide Range of Services for Buying, Selling, and Managing
          Properties
        </p>
      </div>

      <div className="md:flex items-center mt-20 justify-center md:space-x-4">
        <div className="w-[50%] flex flex-col">
          <h1 className="font-sfproregular text-sm">
            Efficient Property Management
          </h1>
          <p className="font-sfproregular text-[#5a5a5a] text-xs mt-1">
            We use technology to ease communication and management for
            homeowner, landlords and investors. Our experienced team handles
            tenants screening, rent collection, maintenance, and much more.
            Watch your property’s value increase and your stress reduce.
          </p>
        </div>
        <div>
          <img src={services1} className="h-80 w-80" alt="greemily" />
        </div>
      </div>
      <div className="md:flex items-center mt-20 justify-center md:space-x-4">
        <div className="w-[50%] flex flex-col">
          <h1 className="font-sfproregular text-sm">
            All-inclusive Property Inspection
          </h1>
          <p className="font-sfproregular text-[#5a5a5a] text-xs mt-1">
            Gain peace of mind with Resident's comprehensive property
            inspections. Our experienced inspectors provide detailed reports for
            informed decisions. From pre-purchase evaluations to routine
            maintenance, tenant move-in/out, and compliance inspections, we have
            you covered. Stay ahead of potential issues and ensure proactive
            maintenance and compliance. Your property is in safe hands with
            Resident.
          </p>
        </div>
        <div>
          <img src={services2} className="h-80 w-80 " alt="greemily" />
        </div>
      </div>
      <div className="md:flex items-center mt-20 justify-center md:space-x-4 mx-10">
        <div className="w-[50%] flex flex-col">
          <h1 className="font-sfproregular text-sm">
            Rental and Sales Services
          </h1>
          <p className="font-sfproregular text-[#5a5a5a] text-xs mt-1">
            Looking to rent or sell a property? Our dedicated team is here to
            assist you. With extensive property listings, tenant screening,
            strategic pricing, and professional representation, we ensure a
            smooth process. Finding your ideal property or achieving a
            successful sale has never been easier.
          </p>
        </div>
        <div>
          <img src={services3} className="h-80 w-80" alt="greemily" />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  image,
  title,
  description,
  reverseOnMedium = false,
  fullWidthOnMedium = false,
}) {
  return (
    <div
      className={`flex flex-col md:w-1/2 md:mr-4 ${
        fullWidthOnMedium ? "w-full md:w-auto" : ""
      }`}
    >
      <div className="md:flex items-center mb-2 md:space-y-0 space-y-12 mt-12">
        <div
          className={`md:w-1/2 ${
            reverseOnMedium ? "md:order-2 md:ml-2" : "md:mr-2"
          }`}
        >
          <img src={image} alt="service" className="" />
        </div>
        <div
          className={`md:w-1/2 ${
            reverseOnMedium ? "md:order-1 md:mr-2" : "md:ml-2"
          }`}
        >
          <div className="flex flex-col space-y-3">
            <span className="text-[#5A5A5A] text-3xl font-bold md:text-base mb-1">
              {title}
            </span>
            <span className="text-[#5A5A5A] text-xl font-sfproregular">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedesignServices;
