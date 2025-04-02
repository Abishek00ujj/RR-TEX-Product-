import React, { useState } from 'react';

const MaterialInfo = () => {
    const [materialSNo, setMaterialSNo] = useState(1);
    const [materialInfo, setMaterialInfo] = useState([]);
    const [materials, setMaterials] = useState([{}]);
    const [editIndex, setEditIndex] = useState(null);

    const handleMaterial = () => {
        const newMaterials = materials.map((_, index) => {
            return {
                materialSNo: materialSNo + index,
                materialName: document.getElementById(`materialName-${index}`).value.trim(),
                materialHSNCode: document.getElementById(`materialHSNCode-${index}`).value.trim(),
                materialDescription: document.getElementById(`materialDescription-${index}`).value.trim(),
                materialColour: document.getElementById(`materialColour-${index}`).value.trim(),
                materialRou: document.getElementById(`materialRou-${index}`).value.trim(),
                materialQuantity: document.getElementById(`materialQuantity-${index}`).value.trim(),
                materialUom: document.getElementById(`materialUom-${index}`).value.trim(),
                materialAmount: document.getElementById(`materialAmount-${index}`).value.trim()
            };
        });

        setMaterialInfo([...materialInfo, ...newMaterials]);
        setMaterialSNo(materialSNo + materials.length);
        setMaterials([{}]);
    };

    const addNewRow = () => {
        setMaterials([...materials, {}]);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleSaveEdit = (index) => {
        const updatedMaterialInfo = [...materialInfo];
        updatedMaterialInfo[index] = { ...updatedMaterialInfo[index], edit: false };
        setMaterialInfo(updatedMaterialInfo);
        setEditIndex(null);
    };

    const handleRemove = (index) => {
        const updatedMaterialInfo = materialInfo.filter((_, i) => i !== index);
        setMaterialInfo(updatedMaterialInfo);
    };

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            {materialInfo.length > 0 ? (
                <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">SNO</th>
                                <th className="px-4 py-2">MATERIAL NAME</th>
                                <th className="px-4 py-2">HSN CODE</th>
                                <th className="px-4 py-2">DESCRIPTION</th>
                                <th className="px-4 py-2">COLOUR</th>
                                <th className="px-4 py-2">ROU</th>
                                <th className="px-4 py-2">QUANTITY</th>
                                <th className="px-4 py-2">UOM</th>
                                <th className="px-4 py-2">AMOUNT</th>
                                <th className="px-4 py-2">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materialInfo.map((material, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    {Object.keys(material).map((key) => (
                                        key !== "edit" && (
                                            <td key={key} className="px-4 py-2 text-center">
                                                {editIndex === index ? (
                                                    <input type="text" defaultValue={material[key]} className="border p-1" />
                                                ) : (
                                                    material[key]
                                                )}
                                            </td>
                                        )
                                    ))}
                                    <td className="px-4 py-2 text-center">
                                        {editIndex === index ? (
                                            <button onClick={() => handleSaveEdit(index)} className="bg-green-400 text-black font-bold rounded px-2 py-1">Save</button>
                                        ) : (
                                            <button onClick={() => handleEdit(index)} className="bg-blue-400 text-black font-bold rounded px-2 py-1">Edit</button>
                                        )}
                                        <button onClick={() => handleRemove(index)} className="bg-red-400 text-black font-bold rounded px-2 py-1 ml-2">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="bg-black text-white p-6 mt-6 rounded-lg">
                    <h2 className="text-xl font-bold text-center mb-4">ADD MATERIAL DETAILS</h2>
                    {materials.map((_, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input id={`materialName-${index}`} className="p-2 rounded bg-gray-700" placeholder="Material Name" type="text" />
                            <input id={`materialHSNCode-${index}`} className="p-2 rounded bg-gray-700" placeholder="HSN Code" type="text" />
                            <input id={`materialDescription-${index}`} className="p-2 rounded bg-gray-700" placeholder="Description" type="text" />
                            <input id={`materialColour-${index}`} className="p-2 rounded bg-gray-700" placeholder="Colour" type="text" />
                            <input id={`materialRou-${index}`} className="p-2 rounded bg-gray-700" placeholder="Rou" type="text" />
                            <input id={`materialQuantity-${index}`} className="p-2 rounded bg-gray-700" placeholder="Quantity" type="text" />
                            <input id={`materialUom-${index}`} className="p-2 rounded bg-gray-700" placeholder="UOM" type="text" />
                            <input id={`materialAmount-${index}`} className="p-2 rounded bg-gray-700" placeholder="Amount" type="text" />
                        </div>
                    ))}
                    <div className="flex justify-between mt-6">
                        <button onClick={addNewRow} className="bg-blue-400 text-black font-bold rounded px-4 py-2">ADD ROW</button>
                        <button onClick={handleMaterial} className="bg-green-400 text-black font-bold rounded px-4 py-2">SAVE</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MaterialInfo;
