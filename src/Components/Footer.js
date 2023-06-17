import React from 'react'
import { MdMail } from 'react-icons/md'

function Footer() {
  return (
    <div className='bg-[#262626] p-14 flex justify-between items-start'>
      <div>
        <h1 className='font-sfprobold text-xl text-white'>RESIDENCE</h1>

        <p className='font-sfproregular text-sm mt-4 text-white'>Experience hassle-free property</p>
        <p className='font-sfproregular text-sm text-white'>management like never before</p>
      </div>

      <div>
        <h1 className='text-xs font-sfproregular text-white'>CONTACT</h1>
        <div className='flex items-center space-x-3 mt-4'>
        <MdMail color='#fff'/>
          <h1 className='font-sfproregular text-white text-xs'>support@syrysapp.com</h1>
        </div>
        <div className='flex items-center space-x-3 mt-4'>
        
          <h1 className='font-sfproregular text-white text-xs'>Linkedin</h1>
        </div>
        <div className='flex items-center space-x-3 mt-4'>
          <h1 className='font-sfproregular text-white text-xs'>Facebook</h1>
        </div>
        <div className='flex items-center space-x-3 mt-4'>
          <h1 className='font-sfproregular text-white text-xs'>Instagram</h1>
        </div>
      </div>

      <div className='items-end justify-end flex flex-col'>
      <h1 className='font-sfpromedium text-xs underline text-white underline-offset-1'>ABOUT US</h1>
      <h1 className='font-sfpromedium text-xs underline text-white underline-offset-1 mt-6'>OUR SERVICES</h1>
      </div>
    </div>
  )
}

export default Footer
