import React from 'react'
import usflag from '../Assets/Icons/USFlag.png'
import ricon from "../Assets/Icons/ResidentIcon.svg"
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className='h-10 flex justify-between items-center md:p-10 py-10 px-4'>
      <Link to={'/'}>
      <div>
      <img src={ricon} alt='Resident' className='h-6' />
      </div>
      </Link>
        <div>
          <ul className='md:flex hidden space-x-12 items-center'>
            <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>Home</li>
            <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>Our Services</li>
            <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>About Us</li>
            <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>Contact</li>
          </ul>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <img src={usflag} alt='language' className='h-6' />
            <MdKeyboardArrowDown size={24} />
          </div>

          <MdOutlineMenu size={24} className='md:hidden cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
