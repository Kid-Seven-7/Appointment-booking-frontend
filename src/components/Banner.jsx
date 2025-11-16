import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import React from 'react'

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col pb-5 mb-5 md:flex-row flex-wrap bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20'>
      <div className='fle-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl mb-5 sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            <p>Book Appointment</p>
            <p className='mt-4'>Serveral branches</p>
        </div>
        <button onClick={()=>navigate('/login')} className='hover:cursor-pointer flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-110 hover:text-blue-600 transition-all duration-300'>
            Create account
        </button>
      </div>
    </div>
  )
}

export default Banner
