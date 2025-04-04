import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProductSummary = () => {
    const [redirect,setRedirect]=useState(false);
     const navigate = useNavigate();
    const location = useLocation();
    const {
        poData = {},
        productDetails = {},
        materialInfo = [],
        colorDetails = [],
        priceDetails = [],
        gstDetails = {},
        accessoriesDetails = [],
    } = location.state || {};

    let warningMessage = "";

    // Calculate total required material weight
    const calculatedData = colorDetails.map(color => {
        // Ensure data types are numbers before calculations
        const s = Number(color.s || 0);
        const m = Number(color.m || 0);
        const l = Number(color.l || 0);
        const xl = Number(color.xl || 0);
        const twoXl = Number(color["2xl"] || 0);
        const pieceWeight = Number(color.pieceWeight || 0);

        const totalPieces = s + m + l + xl + twoXl;
        const estimatedMaterialWeight = totalPieces * pieceWeight;

        return {
            ...color,
            s,
            m,
            l,
            xl,
            "2xl": twoXl,
            pieceWeight,
            totalPieces,
            estimatedMaterialWeight
        };
    });

    // Check material weight feasibility
    const materialWeight = materialInfo.reduce((acc, material) => {
        if (material.materialUom?.toLowerCase() === "kg") {
            return acc + Number(material.materialQuantity || 0);
        }
        return acc;
    }, 0);

    const totalEstimatedWeight = calculatedData.reduce((acc, item) => acc + item.estimatedMaterialWeight, 0);

    if (totalEstimatedWeight > materialWeight) {
        warningMessage = `Warning: The total estimated material weight (${totalEstimatedWeight.toFixed(2)} KG) exceeds the available material weight (${materialWeight.toFixed(2)} KG).`;
    }

    useEffect(() => {
        // Simulate PO data being saved successfully before navigating to this summary page
        // In a real application, you might trigger this toast based on a state change
        // after a successful API call.
        toast.success('PO data is saved successfully!');
    }, []); // Empty dependency array means this effect runs once after the initial render

    if(redirect)
    {
        navigate("/home");
    }

    return (
        <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Product Summary</h2>
            {warningMessage && (
                <div className="bg-red-200 text-red-800 p-3 rounded-md">
                    {warningMessage}
                </div>
            )}

            {/* PO Details Section */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold mb-2">PO Details</h3>
                <p><strong>PO Number:</strong> {poData.PO || 'N/A'}</p>
                <p><strong>PO Date:</strong> {poData.PoDate || 'N/A'}</p>
                <p><strong>GSTIN:</strong> {poData.GstIn || 'N/A'}</p>
            </div>

            {/* Product Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <p><strong>Group:</strong> {productDetails.group || 'N/A'}</p>
                <p><strong>Style Description:</strong> {productDetails.styleDescription || 'N/A'}</p>
                <p><strong>Fabric:</strong> {productDetails.fabric || 'N/A'}</p>
            </div>

            {/* Material Information */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Material Information</h3>
                <p><strong>Total Material Weight (KG):</strong> {materialWeight.toFixed(2)}</p>
            </div>

            {/* Color Details with Calculated Pieces */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Color Details</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-3 py-2">Color</th>
                                <th className="px-3 py-2">S</th>
                                <th className="px-3 py-2">M</th>
                                <th className="px-3 py-2">L</th>
                                <th className="px-3 py-2">XL</th>
                                <th className="px-3 py-2">2XL</th>
                                <th className="px-3 py-2">Total Pieces</th>
                                <th className="px-3 py-2">Piece Weight (kg)</th>
                                <th className="px-3 py-2">Estimated Material Weight (KG)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {calculatedData.map((color, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="px-3 py-2 text-center">{color.color}</td>
                                    <td className="px-3 py-2 text-center">{color.s}</td>
                                    <td className="px-3 py-2 text-center">{color.m}</td>
                                    <td className="px-3 py-2 text-center">{color.l}</td>
                                    <td className="px-3 py-2 text-center">{color.xl}</td>
                                    <td className="px-3 py-2 text-center">{color["2xl"]}</td>
                                    <td className="px-3 py-2 text-center">{color.totalPieces}</td>
                                    <td className="px-3 py-2 text-center">{color.pieceWeight}</td>
                                    <td className="px-3 py-2 text-center">{color.estimatedMaterialWeight.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Price Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Price Details</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-3 py-2">Color</th>
                                <th className="px-3 py-2">S Price</th>
                                <th className="px-3 py-2">M Price</th>
                                <th className="px-3 py-2">L Price</th>
                                <th className="px-3 py-2">XL Price</th>
                                <th className="px-3 py-2">2XL Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceDetails.map((priceEntry, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="px-3 py-2 text-center">{priceEntry.color}</td>
                                    <td className="px-3 py-2 text-center">{priceEntry.s}</td>
                                    <td className="px-3 py-2 text-center">{priceEntry.m}</td>
                                    <td className="px-3 py-2 text-center">{priceEntry.l}</td>
                                    <td className="px-3 py-2 text-center">{priceEntry.xl}</td>
                                    <td className="px-3 py-2 text-center">{priceEntry['2xl']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* GST Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">GST Details</h3>
                <p><strong>SGST Rate:</strong> {gstDetails.sgstRate || 'N/A'}%</p>
                <p><strong>CGST Rate:</strong> {gstDetails.cgstRate || 'N/A'}%</p>
            </div>

            {/* Accessories Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Accessories Details</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-3 py-2">SNO</th>
                                <th className="px-3 py-2">Material</th>
                                <th className="px-3 py-2">HSN Code</th>
                                <th className="px-3 py-2">Description</th>
                                <th className="px-3 py-2">Color</th>
                                <th className="px-3 py-2">Size</th>
                                <th className="px-3 py-2">Quantity</th>
                                <th className="px-3 py-2">UOM</th>
                                <th className="px-3 py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accessoriesDetails.map((accessory, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="px-3 py-2 text-center">{accessory.sno}</td>
                                    <td className="px-3 py-2 text-center">{accessory.material}</td>
                                    <td className="px-3 py-2 text-center">{accessory.hsnCode}</td>
                                    <td className="px-3 py-2 text-center">{accessory.description}</td>
                                    <td className="px-3 py-2 text-center">{accessory.color}</td>
                                    <td className="px-3 py-2 text-center">{accessory.size}</td>
                                    <td className="px-3 py-2 text-center">{accessory.quantity}</td>
                                    <td className="px-3 py-2 text-center">{accessory.UOM}</td>
                                    <td className="px-3 py-2 text-center">{accessory.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=' flex justify-end items-center w-full h-full'>
                <button onClick={()=>{
                    setRedirect(true);
                }} className='w-[100px] h-[50px] bg-green-400 rounded-[10px]'>
                       BACK
                </button>
            </div>
        </div>
    );
};

export default ProductSummary;