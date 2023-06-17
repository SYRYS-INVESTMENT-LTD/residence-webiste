import React from 'react'
import residentlogo from '../Assets/Icons/ResidentsCircular.png'
import { MdArrowForward } from "react-icons/md";

function OurServices() {
  return (
    <div className='m-20'>
      <div className='flex items-center justify-between'>
        <h1 className='font-sfpromedium text-lg tracking-wide'>OUR SERVICES</h1>
        <img src={residentlogo} alt='residents' className='h-16' />
      </div>

      <div className='flex items-center justify-between mt-8'>
        <div className='space-y-4 w-[48%]'>
          <div className='bg-[#F2F2F2] h-48 w-[100%]'>

          </div>

          <div className='flex items-center space-x-4'>
           <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
           <h1 className='text-white text-xs font-sfproregular scale-75'>Landlords</h1>
           </div>
           <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
           <h1 className='text-white text-xs font-sfproregular scale-75'>Tenants</h1>
           </div>
          </div>

          <h1 className='font-sfpromedium tracking-normal text-sm text-[#262626]'>PROPERTY MANAGEMENT</h1>
          <p className='text-xs text-[#5A5A5A] font-sfproregular'>Residence takes care of all aspects of property management, including tenants screening, lease agreements, rent collection, and handling maintenance and repair requests.</p>
          <div className='flex item-center space-x-1'>
          <h1 className='font-sfpromedium tracking-normal text-xs text-[#1F1F1F] underline'>Read More </h1>
          <MdArrowForward size={16}/>
          </div>
        </div>
        <div className='space-y-4 w-[48%]'>
        <div className='bg-[#F2F2F2] h-48 w-[100%]'>

        </div>

        <div className='flex items-center space-x-4'>
         <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
         <h1 className='text-white text-xs font-sfproregular scale-75'>Landlords</h1>
         </div>
         <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
         <h1 className='text-white text-xs font-sfproregular scale-75'>Tenants</h1>
         </div>
        </div>

        <h1 className='font-sfpromedium tracking-normal text-sm text-[#262626]'>MAINTENANCE REPAIR</h1>
        <p className='text-xs text-[#5A5A5A] font-sfproregular'>Residence takes care of all aspects of property management, including tenants screening, lease agreements, rent collection, and handling maintenance and repair requests.</p>
        <div className='flex item-center space-x-1'>
        <h1 className='font-sfpromedium tracking-normal text-xs text-[#1F1F1F] underline'>Read More </h1>
        <MdArrowForward size={16}/>
        </div>
      </div>
      </div>
      <div className='flex items-center justify-between mt-20'>
      <div className='space-y-4 w-[48%]'>
        <div className='bg-[#F2F2F2] h-48 w-[100%]'>

        </div>

        <div className='flex items-center space-x-4'>
         <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
         <h1 className='text-white text-xs font-sfproregular scale-75'>Landlords</h1>
         </div>
         <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
         <h1 className='text-white text-xs font-sfproregular scale-75'>Tenants</h1>
         </div>
        </div>

        <h1 className='font-sfpromedium tracking-normal text-sm text-[#262626]'>PROPERTY MANAGEMENT</h1>
        <p className='text-xs text-[#5A5A5A] font-sfproregular'>Residence takes care of all aspects of property management, including tenants screening, lease agreements, rent collection, and handling maintenance and repair requests.</p>
        <div className='flex item-center space-x-1'>
        <h1 className='font-sfpromedium tracking-normal text-xs text-[#1F1F1F] underline'>Read More </h1>
        <MdArrowForward size={16}/>
        </div>
      </div>
      <div className='space-y-4 w-[48%]'>
      <div className='bg-[#F2F2F2] h-48 w-[100%]'>

      </div>

      <div className='flex items-center space-x-4'>
       <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
       <h1 className='text-white text-xs font-sfproregular scale-75'>Landlords</h1>
       </div>
       <div className='bg-[#FFB662] items-center rounded-full justify-center px-2 py-1'>
       <h1 className='text-white text-xs font-sfproregular scale-75'>Tenants</h1>
       </div>
      </div>

      <h1 className='font-sfpromedium tracking-normal text-sm text-[#262626]'>MAINTENANCE REPAIR</h1>
      <p className='text-xs text-[#5A5A5A] font-sfproregular'>Residence takes care of all aspects of property management, including tenants screening, lease agreements, rent collection, and handling maintenance and repair requests.</p>
      <div className='flex item-center space-x-1'>
      <h1 className='font-sfpromedium tracking-normal text-xs text-[#1F1F1F] underline'>Read More </h1>
      <MdArrowForward size={16}/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default OurServices