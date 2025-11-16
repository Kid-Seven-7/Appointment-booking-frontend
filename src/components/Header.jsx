import { assets } from '../assets/assets'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book an appointment <br /> with a banker</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <p>Simply choose a branch and a time that best suits you</p>
        </div>
        <button className='hover:cursor-pointer flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-110 hover:text-blue-600 transition-all duration-300' onClick={()=>{
            const element = document.getElementById('branchPreview');
            element?.scrollIntoView({behavior: 'smooth'})
        }}>
                Book now
        </button>
      </div>
    </div>
  )
}

export default Header
