import React from "react";
import services1 from "../Assets/Images/services1.svg";
import services2 from "../Assets/Images/services2.svg";
import services3 from "../Assets/Images/services3.svg";

function RedesignServices() {
  return (
    <div className="">
      <div className="items-center text-center justify-center mt-20 space-y-4">
        <p className="font-sfproregular font-bold text-4xl ">
          COMPREHENSIVE SERVICES TAILORED TO YOUR NEEDS
        </p>
        <p className="font-sfproregular text-[#5a5a5a] text-xl text-center font-semibold">
          Discover a Wide Range of Services for Buying, Selling, and Managing
          Properties
        </p>
      </div>

      <div className="md:flex items-center mt-20 justify-center md:space-x-32">
        <div className="md:w-[50%] flex flex-col">
          <h1 className="font-sfproregular text-sm">
            Efficient Property Management
          </h1>
          <p className="font-sfproregular text-[#5a5a5a] mt-1">
            We use technology to ease communication and management for
            homeowner, landlords and investors. Our experienced team handles
            tenants screening, rent collection, maintenance, and much more.
            Watch your property's value increase and your stress reduce.
          </p>
        </div>
        <div>
          <img src={services1} className="h-100 w-80" alt="greemily" />
        </div>
      </div>
      <div>
        {window.innerWidth < 640 ? (
          <>
            <div className="md:flex items-center mt-20 justify-center md:space-x-32 sm:flex">
              <div className="md:w-[50%] flex flex-col">
                <h1 className="font-sfproregular">
                  All-inclusive Property Inspection
                </h1>
                <p className="font-sfproregular text-[#5a5a5a] mt-1">
                  Gain peace of mind with Resident's comprehensive property
                  inspections. Our experienced inspectors provide detailed
                  reports for informed decisions. From pre-purchase evaluations
                  to routine maintenance, tenant move-in/out, and compliance
                  inspections, we have you covered. Stay ahead of potential
                  issues and ensure proactive maintenance and compliance. Your
                  property is in safe hands with Resident.
                </p>
              </div>
              <div>
                <img src={services2} className="h-100 w-80 " alt="greemily" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="md:flex items-center mt-20 justify-center md:space-x-32 sm:flex">
              <div>
                <img src={services2} className="h-100 w-80 " alt="greemily" />
              </div>
              <div className="md:w-[50%] flex flex-col">
                <h1 className="font-sfproregular">
                  All-inclusive Property Inspection
                </h1>
                <p className="font-sfproregular text-[#5a5a5a] mt-1">
                  Gain peace of mind with Resident's comprehensive property
                  inspections. Our experienced inspectors provide detailed
                  reports for informed decisions. From pre-purchase evaluations
                  to routine maintenance, tenant move-in/out, and compliance
                  inspections, we have you covered. Stay ahead of potential
                  issues and ensure proactive maintenance and compliance. Your
                  property is in safe hands with Resident.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="md:flex items-center mt-20 justify-center md:space-x-32 ">
<div className="md:w-[50%] flex flex-col">
          <h1 className="font-sfproregular">
            Rental and Sales Services
          </h1>
          <p className="font-sfproregular text-[#5a5a5a] mt-1">
            Looking to rent or sell a property? Our dedicated team is here to
            assist you. With extensive property listings, tenant screening,
            strategic pricing, and professional representation, we ensure a
            smooth process. Finding your ideal property or achieving a
            successful sale has never been easier.
          </p>
        </div>
        <div>
          <img src={services3} className="h-100 w-80" alt="greemily" />
        </div>
      </div>
    </div>
  );
}

export default RedesignServices;
