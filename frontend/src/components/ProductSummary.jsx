import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductSummary = () => {
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
    console.log(JSON.stringify(productDetails));
    return (
        <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Product Summary</h2>

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
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">SNO</th>
                            <th className="px-4 py-2">Material Name</th>
                            <th className="px-4 py-2">HSN Code</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Colour</th>
                            <th className="px-4 py-2">ROLL</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">UOM</th>
                            <th className="px-4 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materialInfo.map((material, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-4 py-2 text-center">{material.materialSNo}</td>
                                <td className="px-4 py-2 text-center">{material.materialName}</td>
                                <td className="px-4 py-2 text-center">{material.materialHSNCode}</td>
                                <td className="px-4 py-2 text-center">{material.materialDescription}</td>
                                <td className="px-4 py-2 text-center">{material.materialColour}</td>
                                <td className="px-4 py-2 text-center">{material.materialRou}</td>
                                <td className="px-4 py-2 text-center">{material.materialQuantity}</td>
                                <td className="px-4 py-2 text-center">{material.materialUom}</td>
                                <td className="px-4 py-2 text-center">{material.materialAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Color Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Color Details</h3>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-3 py-2">SNO</th>
                            <th className="px-3 py-2">Color</th>
                            <th className="px-3 py-2">S</th>
                            <th className="px-3 py-2">M</th>
                            <th className="px-3 py-2">L</th>
                            <th className="px-3 py-2">XL</th>
                            <th className="px-3 py-2">2XL</th>
                            <th className="px-3 py-2">Total Qty</th>
                            <th className="px-3 py-2">Piece Wgt (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colorDetails.map((color, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-3 py-2 text-center">{color.sno}</td>
                                <td className="px-3 py-2 text-center">{color.color}</td>
                                <td className="px-3 py-2 text-center">{color.s}</td>
                                <td className="px-3 py-2 text-center">{color.m}</td>
                                <td className="px-3 py-2 text-center">{color.l}</td>
                                <td className="px-3 py-2 text-center">{color.xl}</td>
                                <td className="px-3 py-2 text-center">{color['2xl']}</td>
                                <td className="px-3 py-2 text-center">{color.qty}</td>
                                <td className="px-3 py-2 text-center">{color.pieceWeight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Price Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Price Details</h3>
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
                                <td className="px-3 py-2">{priceEntry.color}</td>
                                <td className="px-3 py-2">{priceEntry.s}</td>
                                <td className="px-3 py-2">{priceEntry.m}</td>
                                <td className="px-3 py-2">{priceEntry.l}</td>
                                <td className="px-3 py-2">{priceEntry.xl}</td>
                                <td className="px-3 py-2">{priceEntry['2xl']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                                <td className="px-3 py-2">{accessory.sno}</td>
                                <td className="px-3 py-2">{accessory.material}</td>
                                <td className="px-3 py-2">{accessory.hsnCode}</td>
                                <td className="px-3 py-2">{accessory.description}</td>
                                <td className="px-3 py-2">{accessory.color}</td>
                                <td className="px-3 py-2">{accessory.size}</td>
                                <td className="px-3 py-2">{accessory.quantity}</td>
                                <td className="px-3 py-2">{accessory.UOM}</td>
                                <td className="px-3 py-2">{accessory.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductSummary;