import React from 'react'
import usflag from '../Assets/Icons/USFlag.png'
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <div className='h-10 flex justify-between items-center p-10'>
        <div>
          <h1 className='font-sfprosemibold tracking-wide text-[#262626] text-xl'>RESIDENCE</h1>
        </div>
        <div>
          <ul className='flex space-x-12 items-center'>
          <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>Home</li>
          <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>Our Services</li>
          <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>About Us</li>
          <li className='font-sfpromedium text-[#262626] text-sm cursor-pointer'>Contact</li>
          </ul>
        </div>
        <div className='flex items-center space-x-2'>
          <img src={usflag} alt='language' className='h-6'/>
          <MdKeyboardArrowDown size={24}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
