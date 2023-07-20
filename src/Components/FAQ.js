import React from "react";
import { MdArrowForward, MdOutlineArrowDropDown } from "react-icons/md";

function FAQ() {
  return (
    <div className="mt-20 md:mx-20 mb-20 mx-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-sfprosemibold">FAQS</h1>
        <div className="flex items-center space-x-2">
          <p className="text-xs font-sfpromedium underline">Read More</p>
          <MdArrowForward size={14} />
        </div>
      </div>
      <div>
        <div className="md:w-[50%] mt-12">
          <div className="flex items-center justify-between">
            <h1 className="font-sfproregular text-[#262626] text-sm">
              How can i search for available properties?
            </h1>
            <MdOutlineArrowDropDown />
          </div>

          <div className="h-0.5 bg-[#e3e3e3] w-[100%] mt-4"></div>
        </div>

        <div className="md:w-[50%] mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-sfproregular text-[#262626] text-sm">
              How can i search for available properties?
            </h1>
            <MdOutlineArrowDropDown />
          </div>

          <div className="h-0.5 bg-[#e3e3e3] w-[100%] mt-4"></div>
        </div>

        <div className="md:w-[50%] mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-sfproregular text-[#262626] text-sm">
              How can i search for available properties?
            </h1>
            <MdOutlineArrowDropDown />
          </div>

          <div className="h-0.5 bg-[#e3e3e3] w-[100%] mt-4"></div>
        </div>

        <div className="md:w-[50%] mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-sfproregular text-[#262626] text-sm">
              How can i search for available properties?
            </h1>
            <MdOutlineArrowDropDown />
          </div>

          <div className="h-0.5 bg-[#e3e3e3] w-[100%] mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
