import React from 'react'
import { MdMail } from 'react-icons/md'
import rb from "../Assets/Icons/ResidentWhiteIcon2.svg"
import Instagram from '../Assets/Icons/Instagram.png'
import Facebook from '../Assets/Icons/Facebook.png'
import Linkedin from '../Assets/Icons/Linkedin.png'

function Footer() {
  return (
    <div className='bg-[#0A0A0A] py-14 px-4 md:p-14 md:flex justify-between items-start md:space-y-0 space-y-10'>
      <div>
        <img src={rb} alt='Resident' className='h-9' />
        <p className='font-generalsans text-sm mt-4 text-white'>Experience hassle-free property management </p>
        <p className='font-generalsans text-sm text-white'>like never before</p>
      </div>

      <div>
        <h1 className='text-xs font-generalsans text-white'>CONTACT</h1>
        <div className='flex items-center space-x-3 mt-4'>
        <MdMail color='#fff' size={26}/>
          <h1 className='font-generalsans text-white '>support@syrysapp.com</h1>
        </div>
        <div className='flex items-center space-x-3 mt-4'>
          <img src={Linkedin} alt='Linkedin' className='h-6'/>
          <h1 className='font-generalsans text-white '>Linkedin</h1>
        </div>
        <div className='flex items-center space-x-3 mt-4'>
        <img src={Facebook} alt='Facebook' className='h-6'/>
          <h1 className='font-generalsans text-white'>Facebook</h1>
        </div>
        <div className='flex items-center space-x-3 mt-4'>
        <img src={Instagram} alt='Instagram' className='h-6'/>
          <h1 className='font-generalsans text-white '>Instagram</h1>
        </div>
      </div>

      <div className='justify-end flex flex-col text-right'>
      <h1 className='font-sfpromedium text-xs underline text-white underline-offset-1'>ABOUT US</h1>
      <h1 className='font-sfpromedium text-xs underline text-white underline-offset-1 mt-6'>OUR SERVICES</h1>
      </div>
    </div>
  )
}

export default Footer
