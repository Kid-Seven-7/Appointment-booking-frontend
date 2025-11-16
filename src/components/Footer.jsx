import { assets } from '../assets/assets'
import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className=' flex flex-col sm:grid grid-cols-[4fr_1fr_1fr] gap-5 my-10 mt-20 text-sm'>
        <div>
            <p className='text-xl font-medium mb-5'>
                APPOINTMENT BOOKING
            </p>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor orci, commodo nec ultrices in, ullamcorper vitae lacus. Mauris eget neque ex. Sed sed risus pulvinar, fringilla metus at, tristique augue. Praesent ultrices orci sed velit porttitor, et sollicitudin urna luctus.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
                COMPANY
            </p>
            <ul className='flex flex-col gap-2'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-2'>
                <li> +27 11 123 4567</li>
                <li> info@eamil.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'> Copyright 2024 Appointment Booking - All Rights Resevered</p>
      </div>
    </div>
  )
}

export default Footer
