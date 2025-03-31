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
      <div className='w-screen h-screen bg-[#d8cfcf]'>
        <div className='w-full flex justify-center items-center gap-3 mt-10'>
           <input type="text" className='min-sm:w-[600px] w-[60%] p-2 4 rounded-[10px] bg-gray-500 text-white'  placeholder='Search Po'/>
           <button className='p-2 4 bg-orange-500 text-white rounded-[10px]'>
            Search
           </button>
        </div>
          <div className='w-screen flex flex-col mt-5 justify-center items-center gap-10'>
              <div className='text-2xl bg-green-400 p-4 5 rounded-2xl'>
                New PO
              </div>
              <div className='text-2xl bg-green-400 p-4 5 rounded-2xl'>
                manage PO
              </div>
              <div className='text-2xl bg-green-400 p-4 5 rounded-2xl'>
                Add Employee
              </div>
              <div className='text-2xl bg-green-400 p-4 5 rounded-2xl'>
                Manage Employee
              </div>

          </div>
      </div>
    </>
  )
}

export default Home
