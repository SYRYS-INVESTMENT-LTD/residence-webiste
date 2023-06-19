import React from 'react'
import appstore from "../Assets/Icons/AppStore.png"
import playstore from "../Assets/Icons/GooglePlay.png"

import homescreen from '../Assets/Images/Rmobileapp.png'
import payscreen from '../Assets/Images/Rpayscreen.png'

function HeroSection() {
  return (
    <div className='itms-center justify-center text-center mt-16'>
      <h1 className='font-sfprobold md:text-2xl text-base text-[#262626]'>UNLOCKING SEAMLESS PROPERTY</h1>
      <h1 className='font-sfprobold md:text-2xl text-base text-[#262626]'>MANAGEMENT SOLUTIONS</h1>
      <div className='md:mx-60 mx-4'>
      <p className='font-sfproregular text-xs scale-95 md:text-sm mt-6 text-[#5A5A5A]'>Experience hassle-free property management like never before with Residence. Our comprehensive suite of services bridges the gap between tenants and landlords, offering a seamless experience for all.</p>
      </div>
      <div className='flex items-center mt-10 md:space-x-8 space-x-4 justify-center'>
       <img src={appstore} alt='greem' className='h-10 cursor-pointer'/>
       <img src={playstore} alt='greem' className='h-10 cursor-pointer'/>
      </div>

      <div className='flex items-center mt-20 space-x-8 justify-center'>
      <img src={homescreen} alt='greem' className='md:h-72 h-40'/>
      <img src={payscreen} alt='greem' className='md:h-72 h-40'/>
     </div>
    </div>
  )
}

export default HeroSection
