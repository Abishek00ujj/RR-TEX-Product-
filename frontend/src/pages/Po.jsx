import React from 'react'
import { useState,useRef } from 'react'
import Navbar from '../components/Navbar'
const Po = () => {
    const [Podata,setPodata]=useState({});
    const poRef=useRef(null);
    const gstInRef=useRef(null);
    const poDateRef=useRef(null);


    const [hide1,setHide1]=useState(true);


    const HandlePo=()=>{
        const PO=poRef.current.value;
        const PoDate=poDateRef.current.value;
        const GstIn=gstInRef.current.value;
        setPodata({
            PO,
            PoDate,
            GstIn
        });
        setHide1(true);
    }
    console.table(Podata);
  return (
    <>
      <Navbar/>
      <div className='w-screen h-screen flex flex-col justify-center items-center space-y-5'>
        {
            hide1?(
               <> 
               <div className='max-sm:w-[80%] w-[700px] text-white bg-black space-y-6 flex flex-col p-5 7 rounded-[10px] '>
                  <table>
                    <thead>
                        <tr className='border-amber-200'>
                            <th className='border-amber-200'>
                                PO NO
                            </th>
                            <th>
                                PO DATE
                            </th>
                            <th>
                                GST IN
                            </th>
                            <th>
                                Edit
                            </th>
                        </tr>
                        <tr>
                            <td>
                               {/* {Podata.PO}   */}wfegrhtj
                            </td>
                            <td>
                                {/* {Podata.PoDate} */}fegrhtfy
                            </td>
                            <td>
                                {/* {Podata.GstIn} */}dsafdgdhgfjhj
                            </td>
                            <td>
                                <div className = "w-[100px] h-[40px] flex justify-center items-center">
                                    <div className='w-full h-full bg-red-500 justify-center items-center text-black font-bold flex rounded-[10px]'>
                                       edit
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </thead>
                  </table>
               </div>
               </>
            ):
            (
              <>
            <div className='max-sm:w-[80%] w-[700px] bg-black space-y-6 flex flex-col p-5 7 rounded-[10px] '>
             <input ref={poRef} className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='PO NUMBER' type="" />
             <input ref={poDateRef} className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='PO DATE' type="" />
             <input ref={gstInRef} className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='GSTIN' type="" />
             <div className='w-full flex justify-end'>
                <div onClick={HandlePo} className='bg-green-400 text-black font-bold rounded-[10px] w-[100px] h-[40px] flex justify-center items-center'>
                       SAVE
                </div>
             </div>
             </div>
              </>
            )
        }

             <div className='max-sm:w-[80%] w-[700px] bg-black space-y-6 flex flex-col p-5 7 rounded-[10px] '>
             <input className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='' type="" />
             <input className='text-black bg-gray-500 p-2 4 rounded-2xl' type="" />
             <input className='text-black bg-gray-500 p-2 4 rounded-2xl' type="" />
             <input className='text-black bg-gray-500 p-2 4 rounded-2xl' type="" />
             <input className='text-black bg-gray-500 p-2 4 rounded-2xl' type="" />
             <input className='text-black bg-gray-500 p-2 4 rounded-2xl' type="" />
             </div>
      </div>
    </>
  )
}

export default Po
