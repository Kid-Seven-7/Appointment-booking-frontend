import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Appointments from 'pages/appointments';
import Branches from 'pages/Branches';
import Home from 'pages/Home';
import Login from 'pages/login';
import MyAppointments from 'pages/MyAppointments';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/appointments/:name' element={<Appointments/>}/>
        <Route path='/branches/:name' element={<Branches/>}/>
        <Route path='/branches' element={<Branches/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
