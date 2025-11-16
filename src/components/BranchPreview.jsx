import React from 'react'
import {assets, branches} from '../assets/assets'
import { Link } from 'react-router-dom'

const BranchPreview = () => {
  return (
    <div id="branchPreview" className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Choose a branches</h1>
      <p className='sm:w1/3 text-center text-sm'>Just pick a branch and book your appointment</p>
      <div className='border border-blue-600 rounded w-full grid grid-cols-5 gap-4 pt-5 pb-5 gap-y-6 px-3 sm:px-0'>
        {branches.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/branches/${item.name}`}>
                <img className='w-10 sm:w-24 mb-2' src={assets.bank_icon} />
                <p className='text-wrap'>{item.name}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default BranchPreview
