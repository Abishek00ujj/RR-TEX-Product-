import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Po = () => {
    const navigate=useNavigate();
    const [Podata, setPodata] = useState({ PO: '', PoDate: '', GstIn: '' });
    const poRef = useRef(null);
    const gstInRef = useRef(null);
    const poDateRef = useRef(null);

    const [hide1, setHide1] = useState(true);

    const notify = (message, icon = "X") =>
        toast.error(message, {
            position: 'top-center',
            icon,
        });

        const handleNext=()=>{

        }

    const handlePo = () => {
        const PO = poRef.current.value.trim();
        const PoDate = poDateRef.current.value.trim();
        const GstIn = gstInRef.current.value.trim();

        if (PO.length <= 1 || PoDate.length <= 1 || GstIn.length <= 1) {
            notify("Please fill all the fields!");
            return;
        }

        setPodata({ PO, PoDate, GstIn });
        setHide1(true);
    };

    const toggleNow1 = () => {
        setHide1(!hide1);
    };

    console.table(Podata);

    return (
        <>
            <Toaster />
            <Navbar />
            <div className='w-screen h-screen flex flex-col justify-center items-center space-y-5 text-black'>
                {
                    hide1 ? (
                        <>
                            <div className='max-sm:w-[80%] w-[700px] space-y-6 flex flex-col p-5 7 rounded-[10px]'>
                                <table className=''>
                                    <thead className='w-full'>
                                        <tr className='border-black border-[1px]'>
                                            <th className='border-black border-[1px] p-2 4'>
                                                NAME
                                            </th>
                                            <th className='border-black border-[1px] p-2 4'>
                                                VALUES
                                            </th>
                                        </tr>
                                        <tr className='border-black border-[1px] p-2 4'>
                                            <td className='border-black border-[1px] text-center p-2 4'>
                                                PO
                                            </td>
                                            <td className='border-black border-[1px] text-center p-2 4'>
                                                {Podata.PO}
                                            </td>
                                        </tr>
                                        <tr className='border-black border-[1px] p-2 4'>
                                            <td className='border-black border-[1px] text-center p-2 4'>
                                                PO DATE
                                            </td>
                                            <td className='border-black border-[1px] text-center p-2 4'>
                                                {Podata.PoDate}
                                            </td>
                                        </tr>
                                        <tr className='border-black border-[1px] p-2 4'>
                                            <td className='border-black border-[1px] text-center p-2 4'>
                                                GST IN
                                            </td>
                                            <td className='border-black border-[1px] text-center p-2 4'>
                                                {Podata.GstIn}
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                                <div className='w-full flex justify-end gap-3'>
                                    <div className="w-[75px] h-[35px] flex justify-center items-center">
                                        <div className='w-full h-full bg-red-500 justify-center items-center text-black font-bold flex rounded-[10px]' onClick={toggleNow1}>
                                            EDIT
                                        </div>
                                    </div>
                                    <div className="w-[75px] h-[35px] flex justify-center items-center">
                                        <div className='w-full h-full bg-green-500 justify-center items-center text-black font-bold flex rounded-[10px]' onClick={handleNext}>
                                            SAVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='max-sm:w-[80%] w-[700px] bg-black space-y-6 flex flex-col p-5 7 rounded-[10px] '>
                                <div className='text-white text-2xl font-bold w-full flex justify-start'>
                                    ADD PO DETAILS
                                </div>
                                <input ref={poRef} defaultValue={Podata.PO} className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='PO NUMBER' type="text" />
                                <input ref={poDateRef} defaultValue={Podata.PoDate} className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='PO DATE' type="text" />
                                <input ref={gstInRef} defaultValue={Podata.GstIn} className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='GSTIN' type="text" />
                                <div className='w-full flex justify-end'>
                                    <div onClick={handlePo} className='bg-green-400 text-black font-bold rounded-[10px] w-[100px] h-[40px] flex justify-center items-center'
                                    >
                                        SAVE
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default Po;
