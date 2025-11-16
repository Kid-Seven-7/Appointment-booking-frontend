import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { branches } from '../assets/assets'

const Branches = () => {

  const { name } = useParams();
  const [filterBranch,setFilterBranch] = useState([])
  const navigate = useNavigate()

const applyFilter = () => {
  if (name){
    console.log('name is here')
    setFilterBranch(branches.filter(branch => branch.name === name))
  }else{
    console.log('no name is here')
    setFilterBranch(branches)
  }
}

useEffect(()=>{
applyFilter()
},[branches,name])

  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        filterBranch.map((item,index)=>(
          <div onClick={()=>navigate(`/appointments/${item.name}`)} key={index}>
            <div className='p-4 shadow h-70 sm:h-50 rounded hover:translate-y-[-10px] transition-all duration-500 hover:bg-gray-100'>
              <p className='text-gray-600 text-2xl'>{item.name}</p>
              <p className='text-gray-600 '>{item.location}</p>
              <p className='text-gray-600 '>{item.street}</p>
              <p className='text-gray-600 '>{item.suburb}</p>
              <p className='text-gray-600 '>{item.city}</p>
              <p className='text-gray-600 text-xs'>{item.code}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Branches
