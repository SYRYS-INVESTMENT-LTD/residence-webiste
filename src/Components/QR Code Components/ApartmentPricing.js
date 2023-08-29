import React from "react";
import bed from "../../Assets/Icons/bedIcon.svg";
import bath from "../../Assets/Icons/bath-tubIcon.svg";
import apartment from "../../Assets/Images/apartment.png";
import bp from "../../Assets/Icons/blueprintIcon.svg";


function ApartmentPricing() {
    return (
        <div>
            <div className="mb-16">
                {/*SITE INFORMATION*/}
                <div>
                    {/*APARTMENT PRICES AND AVAILABILITY*/}
                    <div className="mt-10 ">
                        <h1 className="font-aeonikmedium text-xl">
                            Apartment Prices and availability
                        </h1>
                        <div className="flex items-center flex-shrink-0 whitespace-nowrap overflow-hidden overflow-x-auto overflow-y-hidden space-x-4 mt-10 mb-4 md:space-x-4">
                            <div className="bg-[#BBBBBB33] px-4 flex items-center justify-center py-3 rounded-full border border-[#262626] md:w-[12%]">
                                <p className="text-xs font-aeonik text-[#262626]">
                                    Bachelor
                                </p>
                            </div>
                            <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                                <p className="text-xs font-aeonik text-[#5A5A5A]">
                                    Studio
                                </p>
                            </div>
                            <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                                <p className="text-xs font-aeonik text-[#5A5A5A]">
                                    Duplex
                                </p>
                            </div>
                            <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                                <p className="text-xs font-aeonik text-[#5A5A5A]">
                                    Loft
                                </p>
                            </div>
                            <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                                <p className="text-xs font-aeonik text-[#5A5A5A]">
                                    loft
                                </p>
                            </div>
                            <div className="px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]">
                                <p className="text-xs font-aeonik text-[#5A5A5A]">
                                    loft
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 space-y-8 mb-6">
                        <div className="py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]">
                            <div className="flex space-x-6">
                                <img
                                    src={apartment}
                                    alt="apartment"
                                    className="md:w-[12rem] h-24 md:h-[8rem]"
                                />
                                <div className="md:space-y-6 space-y-4">
                                    <h1 className="font-aeonikmedium text-xl">
                                        Block 13, Number 5
                                    </h1>
                                    <div className="flex items-center md:hidden">
                                        <h1 className="text-base font-aeonikmedium">$800</h1>
                                        <p className="font-aeonik text-sm text-[#545454]">
                                            /month
                                        </p>
                                    </div>
                                    <div className="flex md:hidden items-center space-x-3">
                                        <div className="flex items-center space-x-2 text-center">
                                            <img src={bed} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bed
                                            </p>
                                        </div>
                                        <h1 className=" font-aeonikmedium text-[#1FA41C]">
                                            Available
                                        </h1>
                                    </div>
                                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bed} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bed
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bath} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bath
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bp} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                635 sqft
                                            </p>
                                        </div>
                                    </div>
                                    <h1 className="md:flex hidden font-aeonik text-xs text-[#1FA41C]">
                                        Available
                                    </h1>
                                </div>
                            </div>
                            <div className="md:flex items-center hidden">
                                <h1 className="text-base font-aeonikmedium">$800</h1>
                                <p className="font-aeoniklight text-sm text-[#545454]">
                                    /month
                                </p>
                            </div>
                        </div>
                        <div className="py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]">
                            <div className="flex space-x-6">
                                <img
                                    src={apartment}
                                    alt="apartment"
                                    className="md:w-[12rem] h-24 md:h-[8rem]"
                                />
                                <div className="md:space-y-6 space-y-4">
                                    <h1 className="font-aeonikmedium text-xl">
                                        Block 13, Number 5
                                    </h1>
                                    <div className="flex items-center md:hidden">
                                        <h1 className="text-base font-aeonikmedium">$800</h1>
                                        <p className="font-aeonik text-sm text-[#545454]">
                                            /month
                                        </p>
                                    </div>
                                    <div className="flex md:hidden items-center space-x-3">
                                        <div className="flex items-center space-x-2 text-center">
                                            <img src={bp} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                635 sqft
                                            </p>
                                        </div>
                                        <h1 className=" font-aeonik text-xs text-[#1FA41C]">
                                            Available
                                        </h1>
                                    </div>
                                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bed} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bed
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bath} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bath
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                <img src={bp} alt="Blueprint Icon" className="h-6" />
                                                635 sqft
                                            </p>
                                        </div>
                                    </div>
                                    <h1 className="md:flex hidden font-aeonik text-xs text-[#1FA41C]">
                                        Available
                                    </h1>
                                </div>
                            </div>
                            <div className="md:flex items-center hidden">
                                <h1 className="text-base font-aeonikmedium">$800</h1>
                                <p className="font-aeonik text-sm text-[#545454]">
                                    /month
                                </p>
                            </div>
                        </div>
                        <div className="py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]">
                            <div className="flex space-x-6">
                                <img
                                    src={apartment}
                                    alt="apartment"
                                    className="md:w-[12rem] h-24 md:h-[8rem]"
                                />
                                <div className="md:space-y-6 space-y-4">
                                    <h1 className="font-aeonikmedium text-xl">
                                        Block 13, Number 5
                                    </h1>
                                    <div className="flex items-center md:hidden">
                                        <h1 className="text-base font-aeonikmedium">$800</h1>
                                        <p className="font-aeonik text-sm text-[#545454]">
                                            /month
                                        </p>
                                    </div>
                                    <div className="flex md:hidden items-center space-x-3">
                                        <div className="flex items-center space-x-2 text-center">
                                            <img src={bed} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bed
                                            </p>
                                        </div>
                                        <h1 className=" font-aeonik text-xs text-[#1FA41C]">
                                            Available
                                        </h1>
                                    </div>
                                    <div className="hidden md:flex items-center md:space-x-8 space-x-4">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bed} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bed
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bath} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                One Bath
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <img src={bp} alt="Blueprint Icon" className="h-6" />
                                            <p className="font-aeonik text-[#545454] text-xs">
                                                635 sqft
                                            </p>
                                        </div>
                                    </div>
                                    <h1 className="md:flex hidden font-aeonik text-xs text-[#1FA41C]">
                                        Available
                                    </h1>
                                </div>
                            </div>
                            <div className="md:flex items-center hidden">
                                <h1 className="text-base font-aeonikmedium">$800</h1>
                                <p className="font-aeonik text-sm text-[#545454]">
                                    /month
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApartmentPricing;

