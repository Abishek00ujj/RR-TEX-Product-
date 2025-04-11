import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const POList = () => {
    const navigate = useNavigate();
    const [poDataList, setPoDataList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
        <div className="min-h-screen bg-gradient-to-br from-teal-100 to-lime-200 p-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Purchase Orders List</h2>

                <div className="flex justify-between mb-6">
                    <button
                        onClick={() => navigate("/home")}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        ← Back
                    </button>
                </div>

                <div className="mb-6">
                    <div className="relative w-full max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Search Purchase Orders by PO Number..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="shadow appearance-none border rounded w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div className="absolute left-3 top-3.5 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPOs.length === 0 ? (
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-500">No purchase orders found matching your search.</p>
                        </div>
                    ) : (
                        filteredPOs.map((po, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer border-2 border-green-200"
                                onClick={() => handlePOClick(po)}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-3">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold text-green-600">PO No: {po.poData?.PO || 'N/A'}</h3>
                                    </div>
                                    <p className="text-gray-600">
                                        <strong className="text-green-700">PO Date:</strong> {po.poData?.PoDate || 'N/A'}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-green-700">Status:</strong> {po.status || "Pending"}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default POList;