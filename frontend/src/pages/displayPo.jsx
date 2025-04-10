import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PurchaseOrderDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const poData = location.state; // Get the passed data

    const handleEditClick = () => {
        navigate('/edit', { state: poData }); // Navigate to the edit page with the current PO data
    };

    return (
        <div className="p-8 max-w-screen-xl mx-auto space-y-10">
            <h2 className="text-5xl font-bold mb-8 text-center text-gray-800">Purchase Order Details</h2>
            <div className="flex justify-between mb-4">
                <button onClick={() => navigate('/managePo')} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                    Back
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-10">
                <h3 className="text-4xl font-semibold mb-6 text-blue-600">PO Number: {poData.poData.PO}</h3>
                <p className="text-xl mb-3"><strong>PO Date:</strong> {poData.poData.PoDate}</p>
                <p className="text-xl mb-6"><strong>GST IN:</strong> {poData.poData.GstIn}</p>

                <h4 className="text-3xl font-semibold mt-6 text-gray-700">Material Info</h4>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">Name</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">Quantity</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">UOM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {poData.materialInfo.map((material, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{material.materialName}</td>
                                <td className="py-2 px-4 border-b">{material.materialQuantity}</td>
                                <td className="py-2 px-4 border-b">{material.materialUom}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h4 className="text-3xl font-semibold mt-6 text-gray-700">Product Details</h4>
                <p className="text-xl mb-3"><strong>Group:</strong> {poData.productDetails.group}</p>
                <p className="text-xl mb-3"><strong>Style Description:</strong> {poData.productDetails.styleDescription}</p>
                <p className="text-xl mb-6"><strong>Fabric:</strong> {poData.productDetails.fabric}</p>

                <h4 className="text-3xl font-semibold mt-6 text-gray-700">Color Details</h4>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">Color</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {poData.colorDetails.map((color, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{color.color}</td>
                                <td className="py-2 px-4 border-b">{color.qty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h4 className="text-3xl font-semibold mt-6 text-gray-700">Price Details</h4>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">Color</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">S</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">M</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">L</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">XL</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">2XL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {poData.priceDetails.map((price, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{price.color}</td>
                                <td className="py-2 px-4 border-b">{price.s}</td>
                                <td className="py-2 px-4 border-b">{price.m}</td>
                                <td className="py-2 px-4 border-b">{price.l}</td>
                                <td className="py-2 px-4 border-b">{price.xl}</td>
                                <td className="py-2 px-4 border-b">{price["2xl"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h4 className="text-3xl font-semibold mt-6 text-gray-700">GST Details</h4>
                <p className="text-xl mb-3"><strong>SGST Rate:</strong> {poData.gstDetails.sgstRate}%</p>
                <p className="text-xl mb-6"><strong>CGST Rate:</strong> {poData.gstDetails.cgstRate}%</p>

                <h4 className="text-3xl font-semibold mt-6 text-gray-700">Accessories Details</h4>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">Material</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">Quantity</th>
                            <th className="py-3 px-4 border-b text-left text-lg font-semibold">UOM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {poData.accessoriesDetails.map((accessory, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{accessory.material}</td>
                                <td className="py-2 px-4 border-b">{accessory.quantity}</td>
                                <td className="py-2 px-4 border-b">{accessory.UOM}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-8 text-center">
                    <button 
                        onClick={handleEditClick} 
                        className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md text-xl"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrderDetail;