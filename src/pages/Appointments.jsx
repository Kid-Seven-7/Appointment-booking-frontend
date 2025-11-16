import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {branches} from '../assets/assets'

const Appointments = () => {

  const {name} = useParams()
  const navigate = useNavigate()
  const dow = ['SUN','MON','TUE','WED','THU','FRI','SAT',]
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const [branchInfo,setBranchInfo] = useState(null)
  const [branchSlots,setBranchSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState(0)
  
  const fetchBranchInfo = async () => {
    const branchInfo = branches.find(branch => branch.name === name)
    setBranchInfo(branchInfo)
  }

  const getAvailableSlots = async () => {    

    let today = new Date()

    for(let i = 0; i < 14; i++){
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(17,0,0,0)

      if (today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours > 9 ? currentDate.getHours() + 1 : 9)
        currentDate.setMinutes(currentDate.getMinutes > 30 ? 30 : 0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){       
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })
  
        currentDate.setMinutes(currentDate.getMinutes() + 30)
  
      }
      setBranchSlots(prev => ([...prev, timeSlots]))      
    }
  }



  useEffect(()=>{
    getAvailableSlots()
  },[branchInfo])

  return (
    <div>
      {
        name
        ? 
        <div>
          <p className='text-2xl'>
            {name} appointments
          </p>
        </div>
        :<p className='text-2xl'>
          No appointments to show
        </p>  
  
      }
      <div className='sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            branchSlots.length && branchSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 w-30 gap-8 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-600 text-white': 'border border-gray-600'}`} key={index}>
                <p>{item[0] && dow[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
                <p>{item[0] && month[item[0].datetime.getMonth()]}</p>
              </div>
            ))
          }
        </div>
        <div className='grid grid-cols-5 gap-4 overflow-x-scroll mt-4'>
          {branchSlots.length && branchSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-center text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-600 text-white': 'text-gray-600 border border-gray-600'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
      </div>
      <div className='sm:pl-4 pt-5'>
        <button onClick={()=>navigate('/login')} className='text-center text-sm font-light flex-shrink-0 px-5 py-2 rounded-full hover:cursor-pointer hover:scale-110 transition-all duration-300 bg-blue-600 text-white'>Book appointment</button>
      </div>
    </div>
  )
}

export default Appointments