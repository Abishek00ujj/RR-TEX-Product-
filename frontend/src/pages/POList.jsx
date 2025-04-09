import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const POList = () => {
    const navigate = useNavigate();
    const [poDataList, setPoDataList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch PO Data from backend
    useEffect(() => {
        const fetchPOs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/pos');
                setPoDataList(response.data);
            } catch (error) {
                console.error('Error fetching PO data:', error);
            }
        };
        fetchPOs();
    }, []);

    const handlePOClick = (poData) => {
        navigate('/viewPo', { state: poData });
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPOs = poDataList.filter(po =>
        po.poData?.PO?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-screen-xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Purchase Orders List</h2>

            <div className="flex justify-between mb-4">
                <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                    Back
                </button>
            </div>

            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-lg">
                    <input 
                        type="text" 
                        placeholder="Search Purchase Orders..." 
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full p-4 pl-10 pr-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                    <div className="absolute left-3 top-3 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6m-6-6l-6 6" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPOs.length === 0 ? (
                    <div className="col-span-full text-center text-gray-600">No purchase orders found.</div>
                ) : (
                    filteredPOs.map((po, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer"
                            onClick={() => handlePOClick(po)}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Po No: {po.poData?.PO || 'N/A'}</h3>
                            </div>
                            <p className="text-gray-600">
                                <strong>PO Date:</strong> {po.poData?.PoDate || 'N/A'}
                            </p>
                            <p className="text-gray-600">
                                <strong>Status:</strong> {po.status || "Pending"}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default POList;
