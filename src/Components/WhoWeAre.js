import React from 'react'
import ai from "../Assets/Images/appsImage.svg"

function WhoWeAre() {
  return (
    <div className='bg-who bg-cover mt-10 md:p-20 pt-10 px-6 pb-10'>

    <h1 className='font-sfprobold text-2xl'>WHO ARE</h1>
      <div className='md:flex md:space-x-20 items-start'>
        <div>
          <div className='flex items-start space-x-4'>

            <h1 className='font-sfprobold text-2xl'>WE?</h1>

            <div>
              <p className='font-sfproregular text-[#5A5A5A] text-xs mt-1'>At Residence, we understand the unique needs of both tenants and landlords. With years of experience in the industry, we have honed our expertise in delievring comprehensive property management solutions that prioritize efficiency, transparency and customer satisfaction.</p>
              <p className='font-sfproregular text-[#5A5A5A] text-xs mt-12'>Our mission is to alleviate the stress  and complexities often associated with property management. whether you are a tenant seeking a comfortable and well-maintained living spaceor a landlord</p>
            </div>

          </div>
        </div>

        <div className='flex items-start space-x-4 mt-6'>
          <div className='bg-[#F2F2F2] w-56 h-64'></div>
          <div>
          <div className='bg-[#F2F2F2] w-48 h-28'></div>
          <div className='bg-[#F2F2F2] w-48 h-28 mt-8'></div>
          </div>
        </div>
      </div>

      <div className='bg-white px-4 py-3 items-center justify-center flex w-40 md:mx-20 mt-6' >
      <h1 className='text-[#A1852A] font-sfproregular text-xs'>Join Residence</h1>
      </div>
    </div>
  )
}

export default WhoWeAre
