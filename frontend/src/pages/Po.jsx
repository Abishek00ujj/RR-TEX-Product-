import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import MaterialInfo from '../components/MaterialInfo';

const Po = () => {
    const navigate = useNavigate();
    const [Podata, setPodata] = useState({ PO: '', PoDate: '', GstIn: '' });
    const poRef = useRef(null);
    const gstInRef = useRef(null);
    const poDateRef = useRef(null);

    const [hide1, setHide1] = useState(false);
    const [isPoDetailsSaved, setIsPoDetailsSaved] = useState(false); // Track if PO details are saved

    const notify = (message, icon = "X") =>
        toast.error(message, {
            position: 'top-center',
            icon,
        });

    const handleNext = () => {
        navigate("/nextPage"); // Example: navigate to another page
    };

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
        setIsPoDetailsSaved(true); // Mark PO details as saved
    };

    const toggleNow1 = () => {
        setHide1(!hide1);
    };

    const fields = [
        { label: "PO", value: Podata.PO },
        { label: "PO DATE", value: Podata.PoDate },
        { label: "GST IN", value: Podata.GstIn }
    ];

    const tableRows = fields.map((field, index) => (
        <tr key={index} className="border-b border-gray-300">
            <td className="px-4 py-2 text-center">{field.label}</td>
            <td className="px-4 py-2 text-center">{field.value}</td>
        </tr>
    ));

    return (
        <>
            <Toaster />
            <Navbar />
            <div className="w-screen  flex flex-col justify-center items-center space-y-5 text-black p-4">
                {/* Show the PO details or PO form */}
                {hide1 ? (
                    <div className="max-w-2xl w-full space-y-6 bg-white p-6 rounded-lg shadow-md">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left">NAME</th>
                                    <th className="px-4 py-2 text-left">VALUES</th>
                                </tr>
                            </thead>
                            <tbody>{tableRows}</tbody>
                        </table>
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
                                onClick={toggleNow1}
                            >
                                EDIT
                            </button>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
                                onClick={handleNext}
                            >
                                SAVE
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-2xl w-full bg-black space-y-6 flex flex-col p-6 rounded-lg">
                        <div className="text-white text-2xl font-bold">ADD PO DETAILS</div>
                        <input
                            ref={poRef}
                            defaultValue={Podata.PO}
                            className="w-full p-3 bg-gray-500 text-black rounded-xl"
                            placeholder="PO NUMBER"
                            type="text"
                        />
                        <input
                            ref={poDateRef}
                            defaultValue={Podata.PoDate}
                            className="w-full p-3 bg-gray-500 text-black rounded-xl"
                            placeholder="PO DATE"
                            type="text"
                        />
                        <input
                            ref={gstInRef}
                            defaultValue={Podata.GstIn}
                            className="w-full p-3 bg-gray-500 text-black rounded-xl"
                            placeholder="GSTIN"
                            type="text"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={handlePo}
                                className="w-full sm:w-auto px-6 py-3 bg-green-400 text-black font-bold rounded-xl hover:bg-green-300 transition-all"
                            >
                                SAVE
                            </button>
                        </div>
                    </div>
                )}

                {/* Conditionally render MaterialInfo after PO details are saved */}
                {isPoDetailsSaved && (
                    <div className="w-screen  mt-8">
                        <MaterialInfo />
                    </div>
                )}
            </div>
        </>
    );
};

export default Po;