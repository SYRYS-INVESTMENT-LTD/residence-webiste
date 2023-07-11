import React from "react";
import residentlogo from "../Assets/Icons/ResidentsCircular.png";
import services1 from "../Assets/Images/services1.svg";
import services2 from "../Assets/Images/services2.svg";

function RedesignServices() {
  return (
    <div className="md:m-20 mt-10 mx-6">
      <div className="flex items-center justify-between">
        <h1 className="font-sfpromedium text-lg font-bold tracking-wide">OUR SERVICES</h1>
        <img src={residentlogo} alt="residents" className="md:h-16 h-10" />
      </div>
      <div className="flex flex-col p-3 space-y-12">
       
        <ServiceCard
          image={services2}
          title="Efficient Property Management"
          description="At Residence, we offer comprehensive property management services to homeowners, landlords, and investors. Our experienced team handles tenant screening, rent collection, maintenance, financial reporting, and legal compliance. We maximize your property's value while minimizing your stress."
          reverse
          fullWidthOnMedium
        />

       
        <ServiceCard
          image={services1}
          title="Comprehensive Property Inspection"
          description="At Residence, our experienced inspectors provide thorough property inspections for informed decision-making. We offer pre-purchase, routine maintenance, tenant move-in/out, and compliance inspections. Our detailed reports help identify issues, facilitate proactive maintenance, and ensure compliance."
          fullWidthOnMedium
        />

        
        <ServiceCard
          image={services2}
          title="Rental and Sales Services"
          description="At Residence, we offer comprehensive rental and sales services. Whether you're looking to rent a property or sell your existing one, our dedicated team is here to assist you. With extensive property listings, tenant screening, strategic pricing, and professional representation, we ensure a smooth and successful rental or sales process."
          fullWidthOnMedium
        />
      </div>
    </div>
  );
}

function ServiceCard({ image, title, description, reverse, fullWidthOnMedium }) {
  // To remove redundancy, reverse makes the image appear first
  const cardClasses = `flex flex-col md:w-1/2 md:mr-4 ${
    reverse ? "md:flex-row-reverse" : ""
  } ${fullWidthOnMedium ? "w-full md:w-auto" : ""}`;

  const imageClasses = `md:w-1/2 ${reverse ? "md:ml-2" : "md:mr-2"}`;
  const contentClasses = `md:w-1/2 ${reverse ? "md:mr-2" : "md:ml-2"}`;

  return (
    <div className={cardClasses}>
      <div className="md:flex items-center mb-2 md:space-y-0 space-y-12">
        {!reverse && (
          <div className={imageClasses}>
            <img src={image} alt="service" className="h-auto" />
          </div>
        )}
        <div className={contentClasses}>
          <div className="flex flex-col">
            <span className="text-[#5A5A5A] text-xs font-bold md:text-base mb-1">
              {title}
            </span>
            <span className="text-xs text-[#5A5A5A] font-sfproregular md:text-sm sm:text-xs">
              {description}
            </span>
          </div>
        </div>
        {reverse && (
          <div className={imageClasses}>
            <img src={image} alt="service" className="h-auto" />
          </div>
        )}
      </div>
    </div>
  );
}

export default RedesignServices;
