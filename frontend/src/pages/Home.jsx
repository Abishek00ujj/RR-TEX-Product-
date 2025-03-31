import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();


    const notify = (message, icon = "✅") =>
        toast(message, {
          position: 'top-center',
          icon,
        });


        useEffect(()=>{
           notify("Welcome Owner!");
        },[]);
  return (
    <>
      <Navbar/>
      <div>
          
      </div>
    </>
  )
}

export default Home
