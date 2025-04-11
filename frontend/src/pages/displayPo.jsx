import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PurchaseOrderDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const poData = location.state; // Get the passed data

    if (!poData || !poData.poData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Error</h2>
                    <p className="text-gray-600">No Purchase Order data available.</p>
                    <button
                        onClick={() => navigate('/managePo')}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Back to Manage POs
                    </button>
                </div>
            </div>
        );
    }

    const handleEditClick = () => {
        navigate('/edit', { state: poData }); // Navigate to the edit page with the current PO data
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white p-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold">{poData.poData.PO} - Purchase Order Details</h2>
                        <button onClick={() => navigate('/managePo')} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Back
                        </button>
                    </div>
                </div>
                <div className="p-8 space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">PO Information</h3>
                        <p><strong className="text-gray-700">PO Date:</strong> {poData.poData.PoDate}</p>
                        <p><strong className="text-gray-700">GST IN:</strong> {poData.poData.GstIn}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Material Info</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">Name</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">Quantity</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">UOM</th>
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
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-purple-600 mb-2">Product Details</h3>
                        <p><strong className="text-gray-700">Group:</strong> {poData.productDetails.group}</p>
                        <p><strong className="text-gray-700">Style Description:</strong> {poData.productDetails.styleDescription}</p>
                        <p><strong className="text-gray-700">Fabric:</strong> {poData.productDetails.fabric}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Color Details</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">Color</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">Quantity</th>
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
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Price Details</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">Color</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">S</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">M</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">L</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">XL</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">2XL</th>
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
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-pink-600 mb-2">GST Details</h3>
                        <p><strong className="text-gray-700">SGST Rate:</strong> {poData.gstDetails.sgstRate}%</p>
                        <p><strong className="text-gray-700">CGST Rate:</strong> {poData.gstDetails.cgstRate}%</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Accessories Details</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">Material</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">Quantity</th>
                                        <th className="py-3 px-4 border-b text-left text-gray-700">UOM</th>
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
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={handleEditClick}
                            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline hover:bg-indigo-500 transition duration-300"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrderDetail;