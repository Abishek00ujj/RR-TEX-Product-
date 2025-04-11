import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const notify = (message, icon = "✅") =>
        toast(message, {
            position: 'top-center',
            icon,
        });

    useEffect(() => {
        notify("Welcome Owner!");
    }, []);

    return (
        <>
            <Toaster />
            <Navbar />
            <div className='w-screen h-screen bg-[#f5f5f5] flex flex-col items-center'>
                <div className='w-full flex justify-center items-center gap-3 mt-10'>
                    <input
                        type="text"
                        className='min-sm:w-[600px] w-[60%] p-3 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        placeholder='Search PO'
                    />
                    <button className='p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200'>
                        Search
                    </button>
                </div>
                <div className='w-full flex flex-col mt-8 justify-center items-center gap-6'>
                    <div
                        onClick={() => navigate('/createPo')}
                        className='text-xl bg-green-500 p-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-200 cursor-pointer w-1/2 text-center'
                    >
                        New PO
                    </div>
                    <div
                        onClick={() => navigate('/managePo')}
                        className='text-xl bg-yellow-500 p-4 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-200 cursor-pointer w-1/2 text-center'
                    >
                        Manage PO
                    </div>
                    <div
                        onClick={() => navigate('/add-employee')}
                        className='text-xl bg-blue-500 p-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 cursor-pointer w-1/2 text-center'
                    >
                        Add Employee
                    </div>
                    <div
                        onClick={() => navigate('/manageEmployee')}
                        className='text-xl bg-purple-500 p-4 rounded-lg shadow-lg hover:bg-purple-600 transition duration-200 cursor-pointer w-1/2 text-center'
                    >
                        Manage Employee
                    </div>
                    <div
                        onClick={() => navigate('/manage-salary')}
                        className='text-xl bg-teal-500 p-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-200 cursor-pointer w-1/2 text-center'
                    >
                        Manage Salary
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;