import React from "react";
import services1 from "../Assets/Images/services2.png";
import services2 from "../Assets/Images/services1.png";
import services3 from "../Assets/Images/services3.png";

function RedesignServices() {

  const isMobileScreen = window.innerWidth < 741;
  return (
    <div className="">
      <div>
        {window.innerWidth < 741 ? (
          <>
            <div className="items-center mt-20 ">
              <div className="flex flex-col">
                <h1 className="font-aeonikmedium text-2xl">
                  Efficient Property Management
                </h1>
                <div className="">
                  <img src={services2} className="w-96" alt="greemily" />
                </div>
                <p className="font-aeonik text-[#5a5a5a] mt-3">
                  We use technology to ease communication and management for
                  homeowner, landlords and investors. Our experienced team handles
                  tenants screening, rent collection, maintenance, and much more.
                  Watch your property's value increase and your stress reduce.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>

            <div className="md:flex items-center mt-20 justify-center md:space-x-24">
              <div className="md:w-[50%] flex flex-col">
                <h1 className="font-aeonikmedium text-2xl">
                  Efficient Property Management
                </h1>
                <p className="font-aeonik text-[#5a5a5a] mt-3">
                  We use technology to ease communication and management for
                  homeowner, landlords and investors. Our experienced team handles
                  tenants screening, rent collection, maintenance, and much more.
                  Watch your property's value increase and your stress reduce.
                </p>
              </div>
              <div className="">
                <img src={services2} className="w-96" alt="greemily" />
              </div>
            </div>
          </>
        )}
      </div>

      <div>
        {window.innerWidth < 741 ? (
          <>
            <div className="md:flex items-center mt-20 justify-center md:space-x-24 sm:flex">
              <div className="flex flex-col">
                <h1 className="font-aeonikmedium text-2xl">
                  All-inclusive Property Inspection
                </h1>
                <div>
                  <img src={services1} className="h-100 w-80 " alt="greemily" />
                </div>
                <p className="font-aeonik text-[#5a5a5a] md:mt-3">
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
        ) : (
          <>
            <div className="md:flex items-center mt-20 justify-center md:space-x-32 sm:flex row-reverse">
              <div>
                <img src={services1} className="h-100 w-80 " alt="greemily" />
              </div>
              <div className="md:w-[50%] flex flex-col text-right">
                <h1 className="font-aeonikmedium text-3xl">
                  All-inclusive Property Inspection
                </h1>
                <p className="font-aeonik text-[#5a5a5a] mt-1">
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

      <div>
        {window.innerWidth < 741 ? (
          <>
            <div className="md:flex items-center mt-20 justify-center md:space-x-32 ">
              <div className="flex flex-col">
                <h1 className="font-aeonikmedium text-3xl">
                  Rental and Sales Services
                </h1>
              <div >
                <img src={services3} className="sm:mt-2 h-100 w-80" alt="greemily" />
              </div>
                <p className="font-aeonik text-[#5a5a5a] mt-1">
                  Looking to rent or sell a property? Our dedicated team is here to
                  assist you. With extensive property listings, tenant screening,
                  strategic pricing, and professional representation, we ensure a
                  smooth process. Finding your ideal property or achieving a
                  successful sale has never been easier.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="md:flex items-center mt-20 justify-center md:space-x-32 ">
              <div className="md:w-[50%] flex flex-col">
                <h1 className="font-aeonikmedium text-3xl">
                  Rental and Sales Services
                </h1>
                <p className="font-aeonik text-[#5a5a5a] mt-1">
                  Looking to rent or sell a property? Our dedicated team is here to
                  assist you. With extensive property listings, tenant screening,
                  strategic pricing, and professional representation, we ensure a
                  smooth process. Finding your ideal property or achieving a
                  successful sale has never been easier.
                </p>
              </div>
              <div >
                <img src={services3} className="sm:mt-2 h-100 w-80" alt="greemily" />
              </div>
            </div>
          </>
        )}
      </div>
 
    </div>
  );
}

export default RedesignServices;


