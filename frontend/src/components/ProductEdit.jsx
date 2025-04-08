import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState(location.state);

    useEffect(() => {
        toast.success('PO data is loaded successfully!');
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');

        setFormData(prevState => {
            let newState = { ...prevState };
            let current = newState;

            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            current[keys[keys.length - 1]] = value;
            return newState;
        });
    };

    const handleSave = () => {
        toast.success('PO data is saved successfully!');
        navigate("/");
    };

    return (
        <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Edit Product</h2>

            <div className="flex justify-between mb-4">
                <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                    Back
                </button>
            </div>

            {/* PO Details Section */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold mb-2">PO Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label>
                        <strong>PO Number:</strong>
                        <input type="text" name="poData.PO" value={formData.poData.PO} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                    <label>
                        <strong>PO Date:</strong>
                        <input type="text" name="poData.PoDate" value={formData.poData.PoDate} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                    <label>
                        <strong>GSTIN:</strong>
                        <input type="text" name="poData.GstIn" value={formData.poData.GstIn} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                </div>
            </div>

            {/* Product Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label>
                        <strong>Group:</strong>
                        <input type="text" name="productDetails.group" value={formData.productDetails.group} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                    <label>
                        <strong>Style Description:</strong>
                        <input type="text" name="productDetails.styleDescription" value={formData.productDetails.styleDescription} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                    <label>
                        <strong>Fabric:</strong>
                        <input type="text" name="productDetails.fabric" value={formData.productDetails.fabric} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                </div>
            </div>

            {/* Material Information */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Material Information</h3>
                {formData.materialInfo.map((material, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <label>
                            <strong>Material Name:</strong>
                            <input type="text" name={`materialInfo[${index}].materialName`} value={material.materialName} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>Material Quantity:</strong>
                            <input type="number" name={`materialInfo[${index}].materialQuantity`} value={material.materialQuantity} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>Material UOM:</strong>
                            <input type="text" name={`materialInfo[${index}].materialUom`} value={material.materialUom} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                    </div>
                ))}
            </div>

            {/* Color Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Color Details</h3>
                {formData.colorDetails.map((color, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <label>
                            <strong>Color:</strong>
                            <input type="text" name={`colorDetails[${index}].color`} value={color.color} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>S:</strong>
                            <input type="number" name={`colorDetails[${index}].s`} value={color.s} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>M:</strong>
                            <input type="number" name={`colorDetails[${index}].m`} value={color.m} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>L:</strong>
                            <input type="number" name={`colorDetails[${index}].l`} value={color.l} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>XL:</strong>
                            <input type="number" name={`colorDetails[${index}].xl`} value={color.xl} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>2XL:</strong>
                            <input type="number" name={`colorDetails[${index}].2xl`} value={color["2xl"]} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                    </div>
                ))}
            </div>

            {/* Price Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Price Details</h3>
                {formData.priceDetails.map((priceEntry, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <label>
                            <strong>Color:</strong>
                            <input type="text" name={`priceDetails[${index}].color`} value={priceEntry.color} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>S Price:</strong>
                            <input type="number" name={`priceDetails[${index}].s`} value={priceEntry.s} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>M Price:</strong>
                            <input type="number" name={`priceDetails[${index}].m`} value={priceEntry.m} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>L Price:</strong>
                            <input type="number" name={`priceDetails[${index}].l`} value={priceEntry.l} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>XL Price:</strong>
                            <input type="number" name={`priceDetails[${index}].xl`} value={priceEntry.xl} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>2XL Price:</strong>
                            <input type="number" name={`priceDetails[${index}].2xl`} value={priceEntry["2xl"]} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                    </div>
                ))}
            </div>

            {/* GST Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">GST Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label>
                        <strong>SGST Rate:</strong>
                        <input type="text" name="gstDetails.sgstRate" value={formData.gstDetails.sgstRate} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                    <label>
                        <strong>CGST Rate:</strong>
                        <input type="text" name="gstDetails.cgstRate" value={formData.gstDetails.cgstRate} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </label>
                </div>
            </div>

            {/* Accessories Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Accessories Details</h3>
                {formData.accessoriesDetails.map((accessory, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <label>
                            <strong>Material:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].material`} value={accessory.material} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>HSN Code:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].hsnCode`} value={accessory.hsnCode} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>Description:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].description`} value={accessory.description} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>Color:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].color`} value={accessory.color} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>Size:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].size`} value={accessory.size} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>Quantity:</strong>
                            <input type="number" name={`accessoriesDetails[${index}].quantity`} value={accessory.quantity} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>UOM:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].UOM`} value={accessory.UOM} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                        <label>
                            <strong>Amount:</strong>
                            <input type="number" name={`accessoriesDetails[${index}].amount`} value={accessory.amount} onChange={handleChange} className="border rounded-md p-2 w-full" />
                        </label>
                    </div>
                ))}
            </div>

            <div className='flex justify-end items-center w-full h-full'>
                <button onClick={handleSave} className='w-[100px] h-[50px] bg-green-400 rounded-[10px]'>
                    SAVE
                </button>
            </div>
        </div>
    );
};

export default ProductEdit;