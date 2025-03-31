import React, { useEffect,useRef,useState } from 'react'
import Navbar from '../components/Navbar'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Index = () => {
    const navigate=useNavigate();
    const userIdRef=useRef(null);
    const userPassRef=useRef(null);
    
    const [redirect,Setredirect]=useState(false);

    const Login=()=>{
        const UserId=userIdRef.current.value;
        const Pass=userPassRef.current.value;

        try{
            if(UserId==Pass)
            {
               notify("Login successfully!");
               Setredirect(true);
            }
            else{
                notifyError("Wrong credentials!");
            }
        }
        catch(err)
        {
            notifyError("Wrong credentials!");
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            Login();
        }
    }
    const notify = (message, icon = "✅") =>
        toast(message, {
          position: 'top-center',
          icon,
        });
        const notifyError = (message, icon = "⭕") =>
            toast.error(message, {
              position: 'top-center',
              icon,
        });

        if(redirect)
        {
            navigate('/home');
        }
  return (
    <>
    <Toaster/>
    <Navbar/>
    <div className='bg-[#d8cfcf] w-screen h-screen flex flex-col'>
       <div className='w-screen flex justify-center items-start'>
             <div className='flex flex-col'>
             <div className='text-center text-black font-bold text-3xl'>
                 RR - TEX   
              </div>  
              <div className=' text-center text-black font-bold'>
                 <p>A Garments manifacturing company</p>
              </div>  
             </div>    
       </div>
       <div className='w-screen h-screen flex text-white justify-center items-center'>
          <div className='max-sm:w-[80%] w-[600px] h-[300px] bg-blue-950 rounded-2xl transition-transform ease-in-out flex flex-col gap-10'>
               <div className='w-full  flex font-bold items-center justify-center text-2xl'>
                   Owner Login
               </div>
               <div className='flex flex-col w-full items-center justify-center gap-5'>
                   <input onKeyDown={handleKeyDown} ref={userIdRef} placeholder='ID' className=' font-bold text-white w-[80%] bg-gray-500 mt-2 p-2 4 rounded-[10px]' type="text" />
                   <input onKeyDown={handleKeyDown} ref={userPassRef} placeholder='Password' className='font-bold text-white w-[80%] bg-gray-500 mt-2 mb-2 p-2 4 rounded-[10px]' type="text" />
                   <button onClick={Login} className='w-[80%] bg-green-500 h-[40px]'>
                   Login
                </button>
       </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default Index
