import React, { useState, useRef } from 'react';
const MaterialInfo = () => {
    const [materialSNo , setmaterialSNo] = useState(1);
    const materialNameRef = useRef(null);
    const materialHSNCodeRef = useRef(null);
    const materialDescriptionRef = useRef(null);
    const materialColourRef = useRef(null);
    const materialRouRef = useRef(null);
    const materialQuantityRef = useRef(null);
    const materialUomRef = useRef(null);
    const materialAmountRef = useRef(null);
    const [materialInfo , setMaterialInfo] = useState([]);
    const [editIndex , setEditIndex] = useState(-1);
    const handleMaterial = () => {
        const material = ({
            materialSNo : materialSNo,
            materialName : materialNameRef.current.value.trim(), 
            materialHSNCode : materialHSNCodeRef.current.value.trim(),
            materialDescription : materialDescriptionRef.current.value.trim(), 
            materialColour : materialColourRef.current.value.trim() ,
            materialRou :  materialRouRef.current.value.trim(),
            materialQuantity : materialQuantityRef.current.value.trim() ,
            materialUom : materialUomRef.current.value.trim() ,
            materialAmount : materialAmountRef.current.value.trim()
        })
        setmaterialSNo(materialSNo + 1);
        if(editIndex !== -1){
            const newMaterialInfo = [...materialInfo];
            newMaterialInfo[editIndex] = material;
            setMaterialInfo(newMaterialInfo);
            setEditIndex(-1);

        }
        else{
            setMaterialInfo([...materialInfo , material]);
        }
        materialNameRef.current.value = '';
        materialHSNCodeRef.current.value = '';
        materialDescriptionRef.current.value = '';
        materialColourRef.current.value = '';
        materialRouRef.current.value = '';
        materialQuantityRef.current.value = '';
        materialUomRef.current.value = '';
        materialAmountRef.current.value = '';

    
    }
    const handleEdit = (index) => {
    const material = materialInfo[editIndex];
        materialNameRef.current.value = material.materialName;
        materialHSNCodeRef.current.value = material.materialHSNCode;
        materialDescriptionRef.current.value = material.materialDescription;
        materialColourRef.current.value = material.materialColour;
        materialRouRef.current.value = material.materialRou;
        materialQuantityRef.current.value = material.materialQuantity;
        materialUomRef.current.value = material.materialUom;
        materialAmountRef.current.value = material.materialAmount;
        setEditIndex(index);
    }
  return (
    <>
        <div>
            <table>
                <thead className='w-full'>
                    <tr>
                        <th>SNO</th>
                        <th>MATERIAL NAME</th>
                        <th>HSN Code</th>
                        <th>Description</th>
                        <th>Colour</th>
                        <th>Rou</th>
                        <th>Quantity</th>
                        <th>Uom</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {materialInfo.map((material , index) => (
                    <tr key={material.materialSNo}>
                        <td>{material.materialSNo}</td>
                        <td>{material.materialName}</td>
                        <td>{material.materialHSNCode}</td>
                        <td>{material.materialDescription}</td>
                        <td>{material.materialColour}</td>
                        <td>{material.materialRou}</td>
                        <td>{material.materialQuantity}</td>
                        <td>{material.materialUom}</td>
                        <td>{material.materialAmount}</td>
                        <td className='border border-gray-400 p-2'>
                            <button onClick={() => handleEdit(index)} className='bg-yellow-400 text-black px-2 py-1 rounded'>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div>
            <div className='max-sm:w-[80%] w-[700px] bg-black space-y-6 flex flex-col p-5 7 rounded-[10px] '>
                <div className='text-white text-2xl font-bold w-full flex justify-start'>
                    ADD MATERIAL DETAILS
                </div>
                <input ref={materialNameRef}  className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='MATERIAL nAME' type="text" />
                <input ref={materialHSNCodeRef}  className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='HSN Code' type="text" />
                <input ref={materialDescriptionRef}  className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='Description' type="text" />
                <input ref={materialColourRef}  className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='Colour' type="text" />
                <input ref={materialRouRef} className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='Rou' type="text" />
                <input ref={materialQuantityRef}  className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='Quantity' type="text" />
                <input ref={materialUomRef}  className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='Uom' type="text" />
                <input ref={materialAmountRef}  className='text-black bg-gray-500 p-2 4 rounded-2xl' placeholder='Amount' type="text" />
                <div className='w-full flex justify-end'>
                <button onClick={handleMaterial} className='cursor-pointer bg-green-400 text-black font-bold rounded-[10px] w-[100px] h-[40px] flex justify-center items-center'>
                    {editIndex !== -1 ? 'UPDATE' : 'SAVE'}
                </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default MaterialInfo
