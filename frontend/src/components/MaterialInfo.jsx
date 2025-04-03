import React, { useState } from 'react';

const MaterialInfo = () => {
    const [materialSNo, setMaterialSNo] = useState(1);
    const [materialInfo, setMaterialInfo] = useState([]);
    const [materials, setMaterials] = useState([{}]);
    const [editIndex, setEditIndex] = useState(null);
    const [isAddingNewRow, setIsAddingNewRow] = useState(false);

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
                materialAmount: document.getElementById(`materialAmount-${index}`).value.trim(),
            };
        });

        setMaterialInfo([...materialInfo, ...newMaterials]);
        setMaterialSNo(materialSNo + materials.length);
        setMaterials([{}]);
        setIsAddingNewRow(false);
    };

    const addNewRow = () => {
        setIsAddingNewRow(true);
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
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
                                                <input type="text" defaultValue={material[key]} className="border p-1" />
                                            ) : (
                                                material[key]
                                            )}
                                        </td>
                                    )
                                ))}
                                <td className="px-4 py-2 text-center">
                                    {editIndex === index ? (
                                        <button onClick={() => handleSaveEdit(index)} className="bg-green-400 text-black font-semibold rounded px-2 py-1">Save</button>
                                    ) : (
                                        <button onClick={() => handleEdit(index)} className="bg-blue-400 text-black font-semibold rounded px-2 py-1">Edit</button>
                                    )}
                                    <button onClick={() => handleRemove(index)} className="bg-red-400 text-black font-semibold rounded px-2 py-1 ml-2">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div className="flex justify-end mt-4">
                    <button onClick={addNewRow} className="bg-blue-400 text-black font-semibold rounded px-4 py-2">Add Row</button>
                </div> */}
            </div>
            <div className="flex justify-end mt-4">
                    <button onClick={addNewRow} className="bg-blue-400 text-black font-semibold rounded px-4 py-2">Add Row</button>
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
                        <button onClick={handleMaterial} className="bg-green-400 text-black font-semibold rounded px-4 py-2">Save Material</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MaterialInfo;





