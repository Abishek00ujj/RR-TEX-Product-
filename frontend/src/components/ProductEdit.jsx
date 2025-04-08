import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductEdit = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Use useLocation to get the state
    const [formData, setFormData] = useState(location.state); // Initialize state with location.state

    useEffect(() => {
        // Simulate PO data being loaded successfully
        toast.success('PO data is loaded successfully!');
    }, []); // Empty dependency array means this effect runs once after the initial render

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.'); // Split the name to handle nested properties

        setFormData(prevState => {
            let newState = { ...prevState };
            let current = newState;

            // Traverse the keys to reach the correct property
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            // Update the final property
            current[keys[keys.length - 1]] = value;
            return newState;
        });
    };

    const handleSave = () => {
        // Here you would typically save the data to your backend
        toast.success('PO data is saved successfully!');
        navigate("/"); // Navigate back to the PO list
    };

    return (
        <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Edit Product</h2>

            {/* PO Details Section */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold mb-2">PO Details</h3>
                <label>
                    <strong>PO Number:</strong>
                    <input type="text" name="poData.PO" value={formData.poData.PO} onChange={handleChange} />
                </label>
                <label>
                    <strong>PO Date:</strong>
                    <input type="text" name="poData.PoDate" value={formData.poData.PoDate} onChange={handleChange} />
                </label>
                <label>
                    <strong>GSTIN:</strong>
                    <input type="text" name="poData.GstIn" value={formData.poData.GstIn} onChange={handleChange} />
                </label>
            </div>

            {/* Product Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <label>
                    <strong>Group:</strong>
                    <input type="text" name="productDetails.group" value={formData.productDetails.group} onChange={handleChange} />
                </label>
                <label>
                    <strong>Style Description:</strong>
                    <input type="text" name="productDetails.styleDescription" value={formData.productDetails.styleDescription} onChange={handleChange} />
                </label>
                <label>
                    <strong>Fabric:</strong>
                    <input type="text" name="productDetails.fabric" value={formData.productDetails.fabric} onChange={handleChange} />
                </label>
            </div>

            {/* Material Information */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Material Information</h3>
                {formData.materialInfo.map((material, index) => (
                    <div key={index}>
                        <label>
                            <strong>Material Name:</strong>
                            <input type="text" name={`materialInfo[${index}].materialName`} value={material.materialName} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>Material Quantity:</strong>
                            <input type="number" name={`materialInfo[${index}].materialQuantity`} value={material.materialQuantity} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>Material UOM:</strong>
                            <input type="text" name={`materialInfo[${index}].materialUom`} value={material.materialUom} onChange={handleChange} />
                        </label>
                    </div>
                ))}
            </div>

            {/* Color Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Color Details</h3>
                {formData.colorDetails.map((color, index) => (
                    <div key={index}>
                        <label>
                            <strong>Color:</strong>
                            <input type="text" name={`colorDetails[${index}].color`} value={color.color} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>S:</strong>
                            <input type="number" name={`colorDetails[${index}].s`} value={color.s} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>M:</strong>
                            <input type="number" name={`colorDetails[${index}].m`} value={color.m} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>L:</strong>
                            <input type="number" name={`colorDetails[${index}].l`} value={color.l} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>XL:</strong>
                            <input type="number" name={`colorDetails[${index}].xl`} value={color.xl} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>2XL:</strong>
                            <input type="number" name={`colorDetails[${index}].2xl`} value={color["2xl"]} onChange={handleChange} />
                        </label>
                    </div>
                ))}
            </div>

            {/* Price Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Price Details</h3>
                {formData.priceDetails.map((priceEntry, index) => (
                    <div key={index}>
                        <label>
                            <strong>Color:</strong>
                            <input type="text" name={`priceDetails[${index}].color`} value={priceEntry.color} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>S Price:</strong>
                            <input type="number" name={`priceDetails[${index}].s`} value={priceEntry.s} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>M Price:</strong>
                            <input type="number" name={`priceDetails[${index}].m`} value={priceEntry.m} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>L Price:</strong>
                            <input type="number" name={`priceDetails[${index}].l`} value={priceEntry.l} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>XL Price:</strong>
                            <input type="number" name={`priceDetails[${index}].xl`} value={priceEntry.xl} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>2XL Price:</strong>
                            <input type="number" name={`priceDetails[${index}].2xl`} value={priceEntry["2xl"]} onChange={handleChange} />
                        </label>
                    </div>
                ))}
            </div>

            {/* GST Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">GST Details</h3>
                <label>
                    <strong>SGST Rate:</strong>
                    <input type="text" name="gstDetails.sgstRate" value={formData.gstDetails.sgstRate} onChange={handleChange} />
                </label>
                <label>
                    <strong>CGST Rate:</strong>
                    <input type="text" name="gstDetails.cgstRate" value={formData.gstDetails.cgstRate} onChange={handleChange} />
                </label>
            </div>

            {/* Accessories Details */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Accessories Details</h3>
                {formData.accessoriesDetails.map((accessory, index) => (
                    <div key={index}>
                        <label>
                            <strong>Material:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].material`} value={accessory.material} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>HSN Code:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].hsnCode`} value={accessory.hsnCode} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>Description:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].description`} value={accessory.description} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>Color:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].color`} value={accessory.color} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>Size:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].size`} value={accessory.size} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>Quantity:</strong>
                            <input type="number" name={`accessoriesDetails[${index}].quantity`} value={accessory.quantity} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>UOM:</strong>
                            <input type="text" name={`accessoriesDetails[${index}].UOM`} value={accessory.UOM} onChange={handleChange} />
                        </label>
                        <label>
                            <strong>Amount:</strong>
                            <input type="number" name={`accessoriesDetails[${index}].amount`} value={accessory.amount} onChange={handleChange} />
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