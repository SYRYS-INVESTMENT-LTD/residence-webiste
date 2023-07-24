import React from "react";
import residentlogo from "../Assets/Icons/ResidentsCircular.png";
import services1 from "../Assets/Images/services1.svg";
import services2 from "../Assets/Images/services2.svg";
import services3 from "../Assets/Images/services3.svg";

function RedesignServices() {
  return (
    <div className="md:m-20 mt-10 mx-6">
      <div className="flex items-center justify-between">
        <h1 className="font-sfpromedium text-lg font-bold tracking-wide">
          Explore Our Services
        </h1>
        <img src={residentlogo} alt="residents" className="md:h-16 h-10" />
      </div>
      <div className="flex flex-col p-1 space-y-1">
        <ServiceCard
          image={services2}
          title="Efficient Property Management"
          description="We use technology to ease communication and management for homeowners, landlords, and investors. Our experienced team handles tenant screening, rent collection, maintenance, financial reporting, and legal compliance. Watch your property's value increase and your stress reduce."
          reverseOnMedium
          fullWidthOnMedium
        />
        <ServiceCard
          image={services1}
          title="All-inclusive Property Inspection"
          description="Gain peace of mind with Resident's comprehensive property inspections. Our experienced inspectors provide detailed reports for informed decisions. From pre-purchase evaluations to routine maintenance, tenant move-in/out, and compliance inspections, we have you covered. Stay ahead of potential issues and ensure proactive maintenance and compliance. Your property is in safe hands with Resident."
          fullWidthOnMedium
        />
        <ServiceCard
          image={services3}
          title="Rental and Sales Services"
          description="Looking to rent or sell a property? Our dedicated team is here to assist you. With extensive property listings, tenant screening, strategic pricing, and professional representation, we ensure a smooth process. Finding your ideal property or achieving a successful sale has never been easier."
          reverseOnMedium
          fullWidthOnMedium
        />
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
          <img src={image} alt="service" className="h-auto" />
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
