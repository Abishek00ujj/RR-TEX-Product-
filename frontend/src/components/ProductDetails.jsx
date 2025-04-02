import React, { useState } from 'react';

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({
        group: '',
        styleDescription: '',
        fabric: '',
    });
    const [colorDetails, setColorDetails] = useState([]);
    const [newColorInput, setNewColorInput] = useState({});
    const [isAddingNewColor, setIsAddingNewColor] = useState(false);

    const handleProductDetailChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const handleColorDetailChange = (index, e) => {
        const updatedColorDetails = [...colorDetails];
        updatedColorDetails[index] = { ...updatedColorDetails[index], [e.target.name]: e.target.value };
        setColorDetails(updatedColorDetails);
    };

    const handleAddNewColor = () => {
        setIsAddingNewColor(true);
    };

    const handleSaveNewColor = () => {
        setColorDetails([...colorDetails, { ...newColorInput, sno: colorDetails.length + 1 }]);
        setNewColorInput({});
        setIsAddingNewColor(false);
    };

    const handleNewColorInputChange = (e) => {
        setNewColorInput({ ...newColorInput, [e.target.name]: e.target.value });
    };

    const handleRemoveColor = (index) => {
        const updatedColorDetails = colorDetails.filter((_, i) => i !== index);
        setColorDetails(updatedColorDetails);
    };

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        name="group"
                        value={productDetails.group}
                        onChange={handleProductDetailChange}
                        className="p-2 border rounded"
                        placeholder="Group"
                    />
                    <input
                        name="styleDescription"
                        value={productDetails.styleDescription}
                        onChange={handleProductDetailChange}
                        className="p-2 border rounded"
                        placeholder="Style Description"
                    />
                    <input
                        name="fabric"
                        value={productDetails.fabric}
                        onChange={handleProductDetailChange}
                        className="p-2 border rounded"
                        placeholder="Fabric"
                    />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Color Details</h2>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 font-semibold">SNO</th>
                            <th className="px-4 py-2 font-semibold">Color</th>
                            <th className="px-4 py-2 font-semibold">S</th>
                            <th className="px-4 py-2 font-semibold">M</th>
                            <th className="px-4 py-2 font-semibold">L</th>
                            <th className="px-4 py-2 font-semibold">XL</th>
                            <th className="px-4 py-2 font-semibold">2XL</th>
                            <th className="px-4 py-2 font-semibold">Qty</th>
                            <th className="px-4 py-2 font-semibold">Piece Weight</th>
                            <th className="px-4 py-2 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colorDetails.map((color, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="px-4 py-2 text-center">{color.sno || index + 1}</td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="color"
                                        value={color.color || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="s"
                                        value={color.s || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="m"
                                        value={color.m || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="l"
                                        value={color.l || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="xl"
                                        value={color.xl || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="2xl"
                                        value={color['2xl'] || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="qty"
                                        value={color.qty || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <input
                                        name="pieceWeight"
                                        value={color.pieceWeight || ''}
                                        onChange={(e) => handleColorDetailChange(index, e)}
                                        className="border p-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleRemoveColor(index)}
                                        className="bg-red-400 text-black font-semibold rounded px-2 py-1"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-end mt-4">
                    <button onClick={handleAddNewColor} className="bg-blue-400 text-black font-semibold rounded px-4 py-2">
                        Add New Color
                    </button>
                </div>
            </div>

            {isAddingNewColor && (
                <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Add New Color</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            name="color"
                            value={newColorInput.color || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="Color"
                        />
                        <input
                            name="s"
                            value={newColorInput.s || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="S"
                        />
                        <input
                            name="m"
                            value={newColorInput.m || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="M"
                        />
                        <input
                            name="l"
                            value={newColorInput.l || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="L"
                        />
                        <input
                            name="xl"
                            value={newColorInput.xl || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="XL"
                        />
                        <input
                            name="2xl"
                            value={newColorInput['2xl'] || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="2XL"
                        />
                        <input
                            name="qty"
                            value={newColorInput.qty || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="Qty"
                        />
                        <input
                            name="pieceWeight"
                            value={newColorInput.pieceWeight || ''}
                            onChange={handleNewColorInputChange}
                            className="p-2 border rounded"
                            placeholder="Piece Weight"
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button onClick={handleSaveNewColor} className="bg-green-400 text-black font-semibold rounded px-4 py-2">
                            Save Color
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;