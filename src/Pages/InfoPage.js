import React from 'react'
import Navbar from '../Components/Navbar'
import house from '../Assets/Images/House.png'
import map from '../Assets/Images/map.png'
import apartment from '../Assets/Images/apartment.png'
import { MdBathtub, MdBed, MdLocationPin, MdOutlineArrowDropDown, MdOutlineCalendarMonth, MdOutlineHouse, MdOutlineLocationOn, MdSupervisedUserCircle } from 'react-icons/md'
import Footer from '../Components/Footer'

function InfoPage() {
    return (
        <div>
            <Navbar />
            <div className='md:mx-10 mb-16'>

                {/*SITE INFORMATION*/}
                <div>
                    <div className='items-center justify-center flex mt-4 md:mx-16 mx-4'>
                        <img src={house} className='w-[100%]' alt='houseimage' />
                    </div>

                    {/*SITE HEADER*/}
                    <div className='md:flex md:justify-between items-center md:mt-10 mt-6 md:mx-16 mx-4'>
                        <h1 className='font-sfpromedium md:text-lg text-sm'>Atoll Development Park</h1>
                        <div className='items-center space-x-2 flex md:mt-0 mt-4'>
                            <MdLocationPin />
                            <p className='font-sfproregular text-xs md:text-sm text-[#262626]'>Kardesler sokak, Edremit Kyrenia</p>
                        </div>
                    </div>

                    <div className='flex items-center md:justify-between mt-14 md:mx-16 mx-4 flex-shrink-0 whitespace-nowrap  md:space-x-0 overflow-hidden overflow-x-auto overflow-y-hidden space-x-10'>
                        <div className='w-40'>
                            <p className='font-sfpromedium text-sm text-[#000] cursor-pointer'>Overview</p>
                        </div>
                        <div className='w-40'>
                            <p className='font-sfproregular text-sm text-[#5A5A5A] cursor-pointer'>Book a tour</p>
                        </div>
                        <p className='font-sfproregular text-sm text-[#5A5A5A] cursor-pointer'>Availability</p>
                        <p className='font-sfproregular text-sm text-[#5A5A5A] cursor-pointer'>Location</p>
                        <p className='font-sfproregular text-sm text-[#5A5A5A] cursor-pointer'>Amenities</p>
                        <p className='font-sfproregular text-sm text-[#5A5A5A] cursor-pointer'>Maintenance</p>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='bg-[#e9e9e9] h-0.5 mt-8 w-[90%] mb-6 '></div>
                    </div>

                    <div className='md:flex items-center md:mx-16 mx-4 justify-between mt-4 md:mt-8 md:space-y-0 space-y-4'>
                        <div className='items-center space-x-2 flex'>
                            <MdLocationPin />
                            <p className='font-sfproregular text-sm text-[#262626]'>Kardesler sokak, Edremit Kyrenia</p>
                        </div>
                        <div className='items-center space-x-2 flex'>
                            <MdSupervisedUserCircle />
                            <p className='font-sfproregular text-sm text-[#262626]'>Pets allowed</p>
                        </div>
                        <div className='items-center space-x-2 flex'>
                            <MdLocationPin />
                            <p className='font-sfproregular text-sm text-[#262626]'>Kardesler sokak, Edremit Kyrenia</p>
                        </div>
                    </div>
                    <div className='md:flex items-center md:mx-16 mx-4 justify-between md:mt-6 mt-4 md:space-y-0 space-y-4'>
                        <div className='items-center space-x-2 flex'>
                            <MdOutlineHouse />
                            <p className='font-sfproregular text-sm text-[#262626]'>200 units</p>
                        </div>
                        <div className='items-center space-x-2 flex'>
                            <MdSupervisedUserCircle />
                            <p className='font-sfproregular text-sm text-[#262626]'>Apartment management</p>
                        </div>
                        <div className='items-center space-x-2 flex'>
                            <p></p>
                        </div>
                    </div>
                    <div className='mt-14 mx-4 md:mx-16'>
                        <h1 className='font-sfprosemibold text-lg'>About Site</h1>
                        <p className='font-sfproregular text-sm mt-3 md:w-[70%] text-[#5A5A5A]'>Eleifend imperdiet cras dui cursus nunc massa faucibus diam. Mauris et non justo a turpis orci. Morbi ullamcorper sed etiam velit iaculis a ut. Leo porta feugiat sed amet bibendum sed sed malesuada. Et pharetra convallis volutpat nisl hac diam ac molestie.</p>
                    </div>


                    <div className='cursor-pointer mt-12 mb-8 md:mx-16 mx-4 justify-center w-[60%] md:w-[20%] py-3 px-6 flex items-center space-x-2 bg-[#A1852A]'>
                        <MdOutlineCalendarMonth color='#fff' />
                        <h1 className='font-sfproregular text-white text-sm'>BOOK A TOUR</h1>
                    </div>

                    {/*APARTMENT PRICES AND AVAILABILITY*/}

                    <div className='mt-10 md:mx-16 mx-4'>
                        <h1 className='font-sfprosemibold text-xl'>Apartment Prices and availability</h1>
                        <div className='flex items-center flex-shrink-0 whitespace-nowrap  md:space-x-0 overflow-hidden overflow-x-auto overflow-y-hidden space-x-4 mt-10 mb-4'>
                            <div className='bg-[#BBBBBB33] px-4 flex items-center justify-center py-3 rounded-full border border-[#262626] md:w-[12%]'>
                                <p className='text-xs font-sfproregular text-[#262626]'>One Bedroom</p>
                            </div>
                            <div className='px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]'>
                                <p className='text-xs font-sfproregular text-[#5A5A5A]'>Two Bedroom</p>
                            </div>
                            <div className='px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]'>
                                <p className='text-xs font-sfproregular text-[#5A5A5A]'>Three Bedroom</p>
                            </div>
                            <div className='px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]'>
                                <p className='text-xs font-sfproregular text-[#5A5A5A]'>Studio</p>
                            </div>
                            <div className='px-4 flex items-center justify-center py-3 rounded-full border border-[#B5B5B5] md:w-[12%]'>
                                <p className='text-xs font-sfproregular text-[#5A5A5A]'>Duplex</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16 space-y-8 md:mx-16 mx-4 mb-6'>
                        <div className='py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]'>
                            <div className='flex space-x-6'>
                                <img src={apartment} alt='apartment' className='h-24 md:h-100' />
                                <div className='md:space-y-8 space-y-4'>
                                    <h1 className='font-sfproregular text-sm'>Block 13, Number 5</h1>
                                    <div className='flex items-center md:hidden'>
                                        <h1 className='text-base font-sfpromedium'>$800</h1>
                                        <p className='font-sfproregular text-sm text-[#545454]'>/month</p>
                                    </div>
                                    <div className='flex md:hidden items-center space-x-3'>
                                        <div className='flex items-center space-x-2 text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <h1 className=' font-sfproregular text-xs text-green-400'>Available</h1>
                                    </div>
                                    <div className='hidden md:flex items-center md:space-x-8 space-x-4'>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                    </div>
                                    <h1 className='md:flex hidden font-sfproregular text-xs text-green-400'>Available</h1>
                                </div>
                            </div>
                            <div className='md:flex items-center hidden'>
                                <h1 className='text-base font-sfpromedium'>$800</h1>
                                <p className='font-sfproregular text-sm text-[#545454]'>/month</p>
                            </div>
                        </div>
                        <div className='py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]'>
                            <div className='flex space-x-6'>
                                <img src={apartment} alt='apartment' className='h-24 md:h-100' />
                                <div className='md:space-y-8 space-y-4'>
                                    <h1 className='font-sfproregular text-sm'>Block 13, Number 5</h1>
                                    <div className='flex items-center md:hidden'>
                                        <h1 className='text-base font-sfpromedium'>$800</h1>
                                        <p className='font-sfproregular text-sm text-[#545454]'>/month</p>
                                    </div>
                                    <div className='flex md:hidden items-center space-x-3'>
                                        <div className='flex items-center space-x-2 text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <h1 className=' font-sfproregular text-xs text-green-400'>Available</h1>
                                    </div>
                                    <div className='hidden md:flex items-center md:space-x-8 space-x-4'>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                    </div>
                                    <h1 className='md:flex hidden font-sfproregular text-xs text-green-400'>Available</h1>
                                </div>
                            </div>
                            <div className='md:flex items-center hidden'>
                                <h1 className='text-base font-sfpromedium'>$800</h1>
                                <p className='font-sfproregular text-sm text-[#545454]'>/month</p>
                            </div>
                        </div>
                        <div className='py-4 px-4 md:flex items-center rounded-md justify-between border border-[#DCDCDC]'>
                            <div className='flex space-x-6'>
                                <img src={apartment} alt='apartment' className='h-24 md:h-100' />
                                <div className='md:space-y-8 space-y-4'>
                                    <h1 className='font-sfproregular text-sm'>Block 13, Number 5</h1>
                                    <div className='flex items-center md:hidden'>
                                        <h1 className='text-base font-sfpromedium'>$800</h1>
                                        <p className='font-sfproregular text-sm text-[#545454]'>/month</p>
                                    </div>
                                    <div className='flex md:hidden items-center space-x-3'>
                                        <div className='flex items-center space-x-2 text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <h1 className=' font-sfproregular text-xs text-green-400'>Available</h1>
                                    </div>
                                    <div className='hidden md:flex items-center md:space-x-8 space-x-4'>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <MdBed />
                                            <p className='font-fproregular text-[#545454] text-xs'>One Bed</p>
                                        </div>
                                    </div>
                                    <h1 className='md:flex hidden font-sfproregular text-xs text-green-400'>Available</h1>
                                </div>
                            </div>
                            <div className='md:flex items-center hidden'>
                                <h1 className='text-base font-sfpromedium'>$800</h1>
                                <p className='font-sfproregular text-sm text-[#545454]'>/month</p>
                            </div>
                        </div>
                    </div>

                    {/*LOCATION AND GOOGLE MAP */}

                    <div className='mt-16 md:mx-16 mx-4'>
                        <h1 className='text-[#232323] text-lg font-sfpromedium'>Location</h1>

                        <div className='items-center space-x-2 flex mt-4'>
                            <MdOutlineLocationOn />
                            <p className='font-sfproregular text-xs text-[#262626]'>Kardesler sokak, Edremit Kyrenia</p>
                        </div>

                        <div>
                            <img src={map} alt='map' className='mt-10 w-[100%]' />
                        </div>
                    </div>

                    {/*Amenities*/}

                    <div className='mt-14 md:mx-16 mx-4'>
                        <h1 className='text-[#232323] text-lg font-sfpromedium'>Amenities</h1>
                        <div className='md:flex md:items-start md:space-x-8 md:space-y-0 space-y-6 mt-10'>
                            <div className='items-center flex-col flex justify-center md:w-[48%]'>
                                <h1 className='text-[#545454] text-sm'>Unit amenities</h1>
                                <div className='flex items-center space-x-4 mt-8'>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 mt-8'>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 mt-8'>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#e8e8e8]  h-80 w-0.5 mt-10 md:flex hidden'>

                            </div>
                            <div className='items-center flex-col flex justify-center md:w-[48%]'>
                                <h1 className='text-[#545454] text-sm'>Site amenities</h1>
                                <div className='flex items-center space-x-4 mt-8'>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 mt-8'>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 mt-8'>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                    <div className='border border-[#c1c1c1] rounded-md py-4 w-[100%] px-8 items-center justify-center text-center flex flex-col'>
                                        <MdBathtub />
                                        <h1 className='text-xs text-[#323232] mt-2'>One Bath</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*PROPERTY MAINTENANCE*/}
                    <div className='mt-14 md:mx-16 mx-4'>
                        <h1 className='text-[#232323] text-lg font-sfpromedium'>Property Maintenance</h1>

                        <div className='md:w-[77%] mt-12'>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-sfproregular text-[#262626] text-sm'>How can i search for available properties?</h1>
                                <MdOutlineArrowDropDown />
                            </div>

                            <div className='h-0.5 bg-[#e3e3e3] w-[100%] mt-4'></div>
                        </div>

                        <div className='md:w-[77%] mt-8'>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-sfproregular text-[#262626] text-sm'>How can i search for available properties?</h1>
                                <MdOutlineArrowDropDown />
                            </div>

                            <div className='h-0.5 bg-[#e3e3e3] w-[100%] mt-4'></div>
                        </div>

                        <div className='md:w-[77%] mt-8'>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-sfproregular text-[#262626] text-sm'>How can i search for available properties?</h1>
                                <MdOutlineArrowDropDown />
                            </div>

                            <div className='h-0.5 bg-[#e3e3e3] w-[100%] mt-4'></div>
                        </div>

                        <div className='md:w-[77%] mt-8'>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-sfproregular text-[#262626] text-sm'>How can i search for available properties?</h1>
                                <MdOutlineArrowDropDown />
                            </div>

                            <div className='h-0.5 bg-[#e3e3e3] w-[100%] mt-4'></div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default InfoPage