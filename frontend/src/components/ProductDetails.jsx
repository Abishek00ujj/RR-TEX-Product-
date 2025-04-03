import React, { useState, useEffect } from 'react';

const ProductDetails = () => {
    // --- State Definitions ---
    const [materialSNo, setMaterialSNo] = useState(1);
    const [materialInfo, setMaterialInfo] = useState([]);
    const [materials, setMaterials] = useState([{}]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedMaterial, setEditedMaterial] = useState({});
    const [isAddingNewRow, setIsAddingNewRow] = useState(false);

    const [productDetails, setProductDetails] = useState({
        group: '',
        styleDescription: '',
        fabric: '',
    });
    const [colorDetails, setColorDetails] = useState([]);
    const [priceDetails, setPriceDetails] = useState([]);
    const [gstDetails, setGstDetails] = useState({
        sgstRate: '',
        cgstRate: '',
    });
    const [accessoriesDetails, setAccessoriesDetails] = useState([]);
    // State for handling the Add/Edit Color form
    const [newColorInput, setNewColorInput] = useState({});
    const [isAddingOrEditingColor, setIsAddingOrEditingColor] = useState(false);
    const [editColorIndex, setEditColorIndex] = useState(null); // null = adding, index = editing
    // State for handling the Add/Edit Accessory form
    const [newAccessory, setNewAccessory] = useState({});
    const [isAddingOrEditingAccessory, setIsAddingOrEditingAccessory] = useState(false);
    const [editAccessoryIndex, setEditAccessoryIndex] = useState(null); // null = adding, index = editing

    // --- Material Info Functions ---
    const handleMaterial = () => {
        const newMaterials = materials.map((_, index) => ({
            materialSNo: materialSNo + index,
            materialName: document.getElementById(`materialName-${index}`).value.trim(),
            materialHSNCode: document.getElementById(`materialHSNCode-${index}`).value.trim(),
            materialDescription: document.getElementById(`materialDescription-${index}`).value.trim(),
            materialColour: document.getElementById(`materialColour-${index}`).value.trim(),
            materialRou: document.getElementById(`materialRou-${index}`).value.trim(),
            materialQuantity: document.getElementById(`materialQuantity-${index}`).value.trim(),
            materialUom: document.getElementById(`materialUom-${index}`).value.trim(),
            materialAmount: document.getElementById(`materialAmount-${index}`).value.trim(),
        }));

        setMaterialInfo([...materialInfo, ...newMaterials]);
        setMaterialSNo(materialSNo + materials.length);
        setMaterials([{}]);
        setIsAddingNewRow(false);
    };

    const addNewRow = () => {
        setIsAddingNewRow(true);
    };

    const handleEditMaterial = (index) => {
        setEditIndex(index);
        setEditedMaterial(materialInfo[index]);
    };

    const handleInputChangeMaterial = (e, key) => {
        setEditedMaterial({ ...editedMaterial, [key]: e.target.value });
    };

    const handleSaveEditMaterial = (index) => {
        const updatedMaterialInfo = [...materialInfo];
        updatedMaterialInfo[index] = editedMaterial;
        setMaterialInfo(updatedMaterialInfo);
        setEditIndex(null);
    };

    const handleRemoveMaterial = (index) => {
        setMaterialInfo(materialInfo.filter((_, i) => i !== index));
    };

    // --- Helper Functions ---
    // Generate default price structure for a given color name
    const createDefaultPriceEntry = (colorName) => ({
        color: colorName || 'N/A', // Use color name as identifier
        s: '',
        m: '',
        l: '',
        xl: '',
        '2xl': '',
    });

    // --- Effect to Pre-populate Colors ---
    useEffect(() => {
        if (materialInfo && materialInfo.length > 0) {
            const uniqueColors = [...new Set(materialInfo.map(material => material.materialColour).filter(Boolean))];
            const initialColorDetails = uniqueColors.map((color, index) => ({
                sno: index + 1,
                color: color,
                s: '',
                m: '',
                l: '',
                xl: '',
                '2xl': '',
                qty: '',
                pieceWeight: ''
            }));
            setColorDetails(initialColorDetails);
            // Initialize price details with default structure for each color
            const initialPriceDetails = uniqueColors.map(createDefaultPriceEntry);
            setPriceDetails(initialPriceDetails);
        }
    }, [materialInfo]);

    // --- Event Handlers ---
    // Product Details Input Change
    const handleProductDetailChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    // Color Details Table Input Change (Inline Editing)
    const handleColorDetailChange = (index, e) => {
        const { name, value } = e.target;
        const updatedColorDetails = [...colorDetails];
        const oldColorName = updatedColorDetails[index].color;
        updatedColorDetails[index] = { ...updatedColorDetails[index], [name]: value };
        setColorDetails(updatedColorDetails);
        // If the color name itself changed, update the corresponding price entry
        if (name === 'color') {
            const updatedPriceDetails = priceDetails.map(price =>
                price.color === oldColorName ? { ...price, color: value } : price
            );
            setPriceDetails(updatedPriceDetails);
        }
    };

    // Price Details Table Input Change
    const handlePriceDetailChange = (colorName, size, e) => {
        const { value } = e.target;
        const updatedPriceDetails = priceDetails.map(price =>
            price.color === colorName ? { ...price, [size]: value } : price
        );
        setPriceDetails(updatedPriceDetails);
    };

    // GST Details Input Change
    const handleGstDetailChange = (e) => {
        setGstDetails({ ...gstDetails, [e.target.name]: e.target.value });
    };

    // Accessories Table Input Change (Inline Editing)
    const handleAccessoryChange = (index, e) => {
        const updatedAccessories = [...accessoriesDetails];
        updatedAccessories[index] = { ...updatedAccessories[index], [e.target.name]: e.target.value };
        setAccessoriesDetails(updatedAccessories);
    };

    // --- Color Add/Edit/Remove Logic ---
    const handleAddNewColorClick = () => {
        setEditColorIndex(null);
        setNewColorInput({
            color: '', s: '', m: '', l: '', xl: '', '2xl': '', qty: '', pieceWeight: ''
        });
        setIsAddingOrEditingColor(true);
    };

    const handleEditColorClick = (index) => {
        setEditColorIndex(index);
        setNewColorInput({ ...colorDetails[index] });
        setIsAddingOrEditingColor(true);
    };

    const handleNewColorInputChange = (e) => {
        setNewColorInput({ ...newColorInput, [e.target.name]: e.target.value });
    };

    const handleSaveOrUpdateColor = () => {
        if (!newColorInput.color || newColorInput.color.trim() === '') {
            alert("Please enter a color name.");
            return;
        }
        if (editColorIndex !== null) {
            const updatedColorDetails = [...colorDetails];
            const oldColorName = updatedColorDetails[editColorIndex].color;
            updatedColorDetails[editColorIndex] = { ...newColorInput, sno: updatedColorDetails[editColorIndex].sno };
            setColorDetails(updatedColorDetails);
            if (oldColorName !== newColorInput.color) {
                const updatedPriceDetails = priceDetails.map(price =>
                    price.color === oldColorName ? { ...price, color: newColorInput.color } : price
                );
                setPriceDetails(updatedPriceDetails);
            }
        } else {
            if (colorDetails.some(color => color.color === newColorInput.color)) {
                alert(`Color "${newColorInput.color}" already exists.`);
                return;
            }
            const newColorEntry = { ...newColorInput, sno: colorDetails.length + 1 };
            setColorDetails([...colorDetails, newColorEntry]);
            setPriceDetails([...priceDetails, createDefaultPriceEntry(newColorInput.color)]);
        }
        setNewColorInput({});
        setIsAddingOrEditingColor(false);
        setEditColorIndex(null);
    };

    const handleRemoveColor = (indexToRemove) => {
        const colorToRemove = colorDetails[indexToRemove];
        const updatedColorDetails = colorDetails.filter((_, i) => i !== indexToRemove)
            .map((color, i) => ({ ...color, sno: i + 1 }));
        setColorDetails(updatedColorDetails);
        const updatedPriceDetails = priceDetails.filter(price => price.color !== colorToRemove.color);
        setPriceDetails(updatedPriceDetails);
        if (editColorIndex === indexToRemove) {
            setIsAddingOrEditingColor(false);
            setEditColorIndex(null);
            setNewColorInput({});
        }
    };

    const handleCancelColor = () => {
        setIsAddingOrEditingColor(false);
        setEditColorIndex(null);
        setNewColorInput({});
    };

    // --- Accessory Add/Edit/Remove Logic ---
    const handleAddNewAccessoryClick = () => {
        setEditAccessoryIndex(null);
        setNewAccessory({
            material: '', hsnCode: '', description: '', color: '', size: '', quantity: '', UOM: '', amount: ''
        });
        setIsAddingOrEditingAccessory(true);
    };

    const handleEditAccessoryClick = (index) => {
        setEditAccessoryIndex(index);
        setNewAccessory({ ...accessoriesDetails[index] });
        setIsAddingOrEditingAccessory(true);
    };

    const handleNewAccessoryInputChange = (e) => {
        setNewAccessory({ ...newAccessory, [e.target.name]: e.target.value });
    };

    const handleSaveOrUpdateAccessory = () => {
        if (editAccessoryIndex !== null) {
            const updatedAccessories = [...accessoriesDetails];
            updatedAccessories[editAccessoryIndex] = { ...newAccessory, sno: updatedAccessories[editAccessoryIndex].sno };
            setAccessoriesDetails(updatedAccessories);
        } else {
            const newAccessoryEntry = { ...newAccessory, sno: accessoriesDetails.length + 1 };
            setAccessoriesDetails([...accessoriesDetails, newAccessoryEntry]);
        }
        setNewAccessory({});
        setIsAddingOrEditingAccessory(false);
        setEditAccessoryIndex(null);
    };

    const handleRemoveAccessory = (indexToRemove) => {
        const updatedAccessories = accessoriesDetails.filter((_, i) => i !== indexToRemove)
            .map((acc, i) => ({ ...acc, sno: i + 1 }));
        setAccessoriesDetails(updatedAccessories);
        if (editAccessoryIndex === indexToRemove) {
            setIsAddingOrEditingAccessory(false);
            setEditAccessoryIndex(null);
            setNewAccessory({});
        }
    };

    const handleCancelAccessory = () => {
        setIsAddingOrEditingAccessory(false);
        setEditAccessoryIndex(null);
        setNewAccessory({});
    };

    // --- SAVE ALL ---
    const handleSaveAll = () => {
        const allDetails = {
            materialInfo: materialInfo,
            productDetails: productDetails,
            colorDetails: colorDetails,
            priceDetails: priceDetails,
            gstDetails: gstDetails,
            accessoriesDetails: accessoriesDetails,
        };
        console.log("--- ALL PRODUCT DETAILS ---");
        console.log(JSON.stringify(allDetails, null, 2));
        alert("All details logged to the console!");
    };

    // --- Render JSX ---
    return (
        <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
            {/* Material Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center border-b pb-2">Material Information</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 font-semibold">SNO</th>
                                <th className="px-4 py-2 font-semibold">MATERIAL NAME</th>
                                <th className="px-4 py-2 font-semibold">HSN CODE</th>
                                <th className="px-4 py-2 font-semibold">DESCRIPTION</th>
                                <th className="px-4 py-2 font-semibold">COLOUR</th>
                                <th className="px-4 py-2 font-semibold">ROU</th>
                                <th className="px-4 py-2 font-semibold">QUANTITY</th>
                                <th className="px-4 py-2 font-semibold">UOM</th>
                                <th className="px-4 py-2 font-semibold">AMOUNT</th>
                                <th className="px-4 py-2 font-semibold">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materialInfo.map((material, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    {Object.keys(material).map((key) => (
                                        key !== "edit" && (
                                            <td key={key} className="px-4 py-2 text-center">
                                                {editIndex === index ? (
                                                    <input 
                                                        type="text" 
                                                        value={editedMaterial[key] || ""} 
                                                        onChange={(e) => handleInputChangeMaterial(e, key)} 
                                                        className="border p-1"
                                                    />
                                                ) : (
                                                    material[key]
                                                )}
                                            </td>
                                        )
                                    ))}
                                    <td className="px-4 py-2 text-center">
                                        {editIndex === index ? (
                                            <button 
                                                onClick={() => handleSaveEditMaterial(index)} 
                                                className="bg-green-400 text-black font-semibold rounded px-2 py-1"
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <button 
                                                onClick={() => handleEditMaterial(index)} 
                                                className="bg-blue-400 text-black font-semibold rounded px-2 py-1"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        <button 
                                            onClick={() => handleRemoveMaterial(index)} 
                                            className="bg-red-400 text-black font-semibold rounded px-2 py-1 ml-2"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end mt-4">
                    <button onClick={addNewRow} className="bg-blue-400 text-black font-semibold rounded px-4 py-2">
                        Add Row
                    </button>
                </div>

                {isAddingNewRow && (
                    <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Add New Material</h2>
                        {materials.map((_, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input id={`materialName-${index}`} className="p-2 border rounded" placeholder="Material Name" type="text" />
                                <input id={`materialHSNCode-${index}`} className="p-2 border rounded" placeholder="HSN Code" type="text" />
                                <input id={`materialDescription-${index}`} className="p-2 border rounded" placeholder="Description" type="text" />
                                <input id={`materialColour-${index}`} className="p-2 border rounded" placeholder="Colour" type="text" />
                                <input id={`materialRou-${index}`} className="p-2 border rounded" placeholder="Rou" type="text" />
                                <input id={`materialQuantity-${index}`} className="p-2 border rounded" placeholder="Quantity" type="text" />
                                <input id={`materialUom-${index}`} className="p-2 border rounded" placeholder="UOM" type="text" />
                                <input id={`materialAmount-${index}`} className="p-2 border rounded" placeholder="Amount" type="text" />
                            </div>
                        ))}
                        <div className="flex justify-end mt-6">
                            <button onClick={handleMaterial} className="bg-green-400 text-black font-semibold rounded px-4 py-2">
                                Save Material
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Product Details Section */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center border-b pb-2">Product Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        name="group"
                        value={productDetails.group}
                        onChange={handleProductDetailChange}
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Group"
                    />
                    <input
                        name="styleDescription"
                        value={productDetails.styleDescription}
                        onChange={handleProductDetailChange}
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Style Description"
                    />
                    <input
                        name="fabric"
                        value={productDetails.fabric}
                        onChange={handleProductDetailChange}
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Fabric"
                    />
                </div>
            </div>

            {/* Color Details Section */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center border-b pb-2">Color Details (Quantities & Weight)</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">SNO</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">Color</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">S</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">M</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">L</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">XL</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">2XL</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">Total Qty</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">Piece Wgt (kg)</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colorDetails.map((color, index) => (
                                <tr key={color.sno || index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="px-3 py-2 border border-gray-300 text-center text-sm">{color.sno}</td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="text" name="color" value={color.color || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-full focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" name="s" value={color.s || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-16 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" name="m" value={color.m || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-16 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" name="l" value={color.l || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-16 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" name="xl" value={color.xl || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-16 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" name="2xl" value={color['2xl'] || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-16 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" name="qty" value={color.qty || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-20 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" step="0.01" name="pieceWeight" value={color.pieceWeight || ''} onChange={(e) => handleColorDetailChange(index, e)} className="p-1 border rounded w-24 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center whitespace-nowrap">
                                        <button onClick={() => handleEditColorClick(index)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded px-2 py-1 mr-1 transition duration-150 ease-in-out">Edit</button>
                                        <button onClick={() => handleRemoveColor(index)} className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded px-2 py-1 transition duration-150 ease-in-out">Remove</button>
                                    </td>
                                </tr>
                            ))}
                            {colorDetails.length === 0 && (
                                <tr>
                                    <td colSpan="10" className="text-center py-4 text-gray-500 border border-gray-300">No colors added yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={handleAddNewColorClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 transition duration-150 ease-in-out">
                        Add New Color
                    </button>
                </div>
            </div>

            {/* Price Details Section */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center border-b pb-2">Price Details (Per Size)</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">Color</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">S Price</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">M Price</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">L Price</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">XL Price</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">2XL Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceDetails.map((priceEntry, index) => (
                                <tr key={priceEntry.color || index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="px-3 py-2 border border-gray-300 font-medium text-sm">{priceEntry.color}</td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" step="0.01" value={priceEntry.s || ''} onChange={(e) => handlePriceDetailChange(priceEntry.color, 's', e)} className="p-1 border rounded w-20 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" step="0.01" value={priceEntry.m || ''} onChange={(e) => handlePriceDetailChange(priceEntry.color, 'm', e)} className="p-1 border rounded w-20 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" step="0.01" value={priceEntry.l || ''} onChange={(e) => handlePriceDetailChange(priceEntry.color, 'l', e)} className="p-1 border rounded w-20 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" step="0.01" value={priceEntry.xl || ''} onChange={(e) => handlePriceDetailChange(priceEntry.color, 'xl', e)} className="p-1 border rounded w-20 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="number" step="0.01" value={priceEntry['2xl'] || ''} onChange={(e) => handlePriceDetailChange(priceEntry.color, '2xl', e)} className="p-1 border rounded w-20 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                </tr>
                            ))}
                            {priceDetails.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-gray-500 border border-gray-300">No price details available. Add colors first.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* GST Details Section */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center border-b pb-2">GST Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="sgstRate"
                        value={gstDetails.sgstRate}
                        onChange={handleGstDetailChange}
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="SGST Rate (%)"
                        type="number"
                        step="0.01"
                    />
                    <input
                        name="cgstRate"
                        value={gstDetails.cgstRate}
                        onChange={handleGstDetailChange}
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="CGST Rate (%)"
                        type="number"
                        step="0.01"
                    />
                </div>
            </div>

            {/* Accessories Details Section */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center border-b pb-2">Accessories Details</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">SNO</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">Material</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">HSN Code</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">Description</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">Color</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">Size</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">Quantity</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-left text-sm">UOM</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">Amount</th>
                                <th className="px-3 py-2 font-semibold border border-gray-300 text-center text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accessoriesDetails.map((accessory, index) => (
                                <tr key={accessory.sno || index} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="px-3 py-2 border border-gray-300 text-center text-sm">{accessory.sno}</td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="text" name="material" value={accessory.material || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-full focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="text" name="hsnCode" value={accessory.hsnCode || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-24 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="text" name="description" value={accessory.description || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-full focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="text" name="color" value={accessory.color || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-20 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="text" name="size" value={accessory.size || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-16 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center text-sm">
                                        <input type="number" name="quantity" value={accessory.quantity || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-20 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-sm">
                                        <input type="text" name="UOM" value={accessory.UOM || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-16 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center text-sm">
                                        <input type="number" step="0.01" name="amount" value={accessory.amount || ''} onChange={(e) => handleAccessoryChange(index, e)} className="p-1 border rounded w-24 text-center focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300 text-center whitespace-nowrap">
                                        <button onClick={() => handleEditAccessoryClick(index)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded px-2 py-1 mr-1 transition duration-150 ease-in-out">Edit</button>
                                        <button onClick={() => handleRemoveAccessory(index)} className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded px-2 py-1 transition duration-150 ease-in-out">Remove</button>
                                    </td>
                                </tr>
                            ))}
                            {accessoriesDetails.length === 0 && (
                                <tr>
                                    <td colSpan="10" className="text-center py-4 text-gray-500 border border-gray-300">No accessories added yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={handleAddNewAccessoryClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 transition duration-150 ease-in-out">
                        Add New Accessory
                    </button>
                </div>
            </div>

            {/* Save All Button */}
            <div className="flex justify-center mt-8">
                <button onClick={handleSaveAll} className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded px-6 py-3 transition duration-150 ease-in-out">
                    Save All Details
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;