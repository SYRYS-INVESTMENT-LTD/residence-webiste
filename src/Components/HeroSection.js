import React from 'react'
import appstore from "../Assets/Icons/AppStore.png"
import playstore from "../Assets/Icons/GooglePlay.png"

import homescreen from '../Assets/Images/Rmobileapp.png'
import payscreen from '../Assets/Images/Rpayscreen.png'

function HeroSection() {
  return (
    <div className='itms-center justify-center text-center mt-16'>
      <h1 className='font-sfprobold text-2xl text-[#262626]'>UNLOCKING SEAMLESS PROPERTY</h1>
      <h1 className='font-sfprobold text-2xl text-[#262626]'>MANAGEMENT SOLUTIONS</h1>
      <p className='font-sfproregular text-sm mt-6 text-[#5A5A5A]'>Experience hassle-free property management like never before with Residence.</p>
      <p className='font-sfproregular text-sm text-[#5A5A5A]'>Our comprehensive suite of services bridges the gap between tenants and</p>
      <p className='font-sfproregular text-sm text-[#5A5A5A]'>landlords, offering a seamless experience for all.</p>
      <div className='flex items-center mt-10 space-x-8 justify-center'>
       <img src={appstore} alt='greem' className='h-10'/>
       <img src={playstore} alt='greem' className='h-10'/>
      </div>

      <div className='flex items-center mt-20 space-x-8 justify-center'>
      <img src={homescreen} alt='greem' className='h-72'/>
      <img src={payscreen} alt='greem' className='h-72'/>
     </div>
    </div>
  )
}

export default HeroSection
