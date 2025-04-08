import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const POList = () => {
    const navigate = useNavigate();

    // Dummy data for Purchase Orders
    const poDataList = [
        {
            poData: {
                PO: "13214124",
                PoDate: "22-02-2025",
                GstIn: "253643425465"
            },
            materialInfo: [
                {
                    materialSNo: 1,
                    materialName: "Material A",
                    materialHSNCode: "124325463",
                    materialDescription: "Description A",
                    materialColour: "Yellow",
                    materialRou: "5",
                    materialQuantity: "10",
                    materialUom: "KG",
                    materialAmount: "10000"
                }
            ],
            productDetails: {
                group: "Ladies leggings",
                styleDescription: "Kurti",
                fabric: "cotton"
            },
            colorDetails: [
                {
                    sno: 1,
                    color: "Yellow",
                    s: "10",
                    m: "10",
                    l: "10",
                    xl: "10",
                    "2xl": "10",
                    qty: "50",
                    pieceWeight: "0.20"
                }
            ],
            priceDetails: [
                {
                    color: "Yellow",
                    s: "40",
                    m: "40",
                    l: "40",
                    xl: "40",
                    "2xl": "40"
                }
            ],
            gstDetails: {
                sgstRate: "2.5",
                cgstRate: "2.5"
            },
            accessoriesDetails: [
                {
                    material: "WRE",
                    hsnCode: "132435246",
                    description: "2143546",
                    color: "Yellow",
                    size: "2",
                    quantity: "10",
                    UOM: "KG",
                    amount: "21039",
                    sno: 1
                }
            ]
        },
        // Add 4 more dummy PO data
        {
            poData: {
                PO: "13214125",
                PoDate: "23-02-2025",
                GstIn: "253643425466"
            },
            materialInfo: [
                {
                    materialSNo: 2,
                    materialName: "Material B",
                    materialHSNCode: "124325464",
                    materialDescription: "Description B",
                    materialColour: "Blue",
                    materialRou: "5",
                    materialQuantity: "15",
                    materialUom: "KG",
                    materialAmount: "15000"
                }
            ],
            productDetails: {
                group: "Men's T-shirt",
                styleDescription: "Casual Tee",
                fabric: "Polyester"
            },
            colorDetails: [
                {
                    sno: 2,
                    color: "Blue",
                    s: "5",
                    m: "5",
                    l: "5",
                    xl: "5",
                    "2xl": "5",
                    qty: "25",
                    pieceWeight: "0.25"
                }
            ],
            priceDetails: [
                {
                    color: "Blue",
                    s: "50",
                    m: "50",
                    l: "50",
                    xl: "50",
                    "2xl": "50"
                }
            ],
            gstDetails: {
                sgstRate: "2.5",
                cgstRate: "2.5"
            },
            accessoriesDetails: [
                {
                    material: "Zipper",
                    hsnCode: "132435247",
                    description: "Zipper for T-shirt",
                    color: "Blue",
                    size: "1",
                    quantity: "20",
                    UOM: "KG",
                    amount: "5000",
                    sno: 2
                }
            ]
        },
        {
            poData: {
                PO: "13214126",
                PoDate: "24-02-2025",
                GstIn: "253643425467"
            },
            materialInfo: [
                {
                    materialSNo: 3,
                    materialName: "Material C",
                    materialHSNCode: "124325465",
                    materialDescription: "Description C",
                    materialColour: "Red",
                    materialRou: "5",
                    materialQuantity: "20",
                    materialUom: "KG",
                    materialAmount: "20000"
                }
            ],
            productDetails: {
                group: "Kids Shorts",
                styleDescription: "Summer Shorts",
                fabric: "Denim"
            },
            colorDetails: [
                {
                    sno: 3,
                    color: "Red",
                    s: "8",
                    m: "8",
                    l: "8",
                    xl: "8",
                    "2xl": "8",
                    qty: "40",
                    pieceWeight: "0.30"
                }
            ],
            priceDetails: [
                {
                    color: "Red",
                    s: "60",
                    m: "60",
                    l: "60",
                    xl: "60",
                    "2xl": "60"
                }
            ],
            gstDetails: {
                sgstRate: "2.5",
                cgstRate: "2.5"
            },
            accessoriesDetails: [
                {
                    material: "Button",
                    hsnCode: "132435248",
                    description: "Button for Shorts",
                    color: "Red",
                    size: "1",
                    quantity: "30",
                    UOM: "KG",
                    amount: "3000",
                    sno: 3
                }
            ]
        },
        {
            poData: {
                PO: "13214127",
                PoDate: "25-02-2025",
                GstIn: "253643425468"
            },
            materialInfo: [
                {
                    materialSNo: 4,
                    materialName: "Material D",
                    materialHSNCode: "124325466",
                    materialDescription: "Description D",
                    materialColour: "Green",
                    materialRou: "5",
                    materialQuantity: "25",
                    materialUom: "KG",
                    materialAmount: "25000"
                }
            ],
            productDetails: {
                group: "Jackets",
                styleDescription: "Winter Jacket",
                fabric: "Wool"
            },
            colorDetails: [
                {
                    sno: 4,
                    color: "Green",
                    s: "12",
                    m: "12",
                    l: "12",
                    xl: "12",
                    "2xl": "12",
                    qty: "60",
                    pieceWeight: "0.40"
                }
            ],
            priceDetails: [
                {
                    color: "Green",
                    s: "70",
                    m: "70",
                    l: "70",
                    xl: "70",
                    "2xl": "70"
                }
            ],
            gstDetails: {
                sgstRate: "2.5",
                cgstRate: "2.5"
            },
            accessoriesDetails: [
                {
                    material: "Zipper",
                    hsnCode: "132435249",
                    description: "Zipper for Jacket",
                    color: "Green",
                    size: "1",
                    quantity: "15",
                    UOM: "KG",
                    amount: "15000",
                    sno: 4
                }
            ]
        },
        {
            poData: {
                PO: "13214128",
                PoDate: "26-02-2025",
                GstIn: "253643425469"
            },
            materialInfo: [
                {
                    materialSNo: 5,
                    materialName: "Material E",
                    materialHSNCode: "124325467",
                    materialDescription: "Description E",
                    materialColour: "Black",
                    materialRou: "5",
                    materialQuantity: "30",
                    materialUom: "KG",
                    materialAmount: "30000"
                }
            ],
            productDetails: {
                group: "Pants",
                styleDescription: "Formal Pants",
                fabric: "Cotton"
            },
            colorDetails: [
                {
                    sno: 5,
                    color: "Black",
                    s: "15",
                    m: "15",
                    l: "15",
                    xl: "15",
                    "2xl": "15",
                    qty: "75",
                    pieceWeight: "0.50"
                }
            ],
            priceDetails: [
                {
                    color: "Black",
                    s: "80",
                    m: "80",
                    l: "80",
                    xl: "80",
                    "2xl": "80"
                }
            ],
            gstDetails: {
                sgstRate: "2.5",
                cgstRate: "2.5"
            },
            accessoriesDetails: [
                {
                    material: "Belt",
                    hsnCode: "132435250",
                    description: "Belt for Pants",
                    color: "Black",
                    size: "1",
                    quantity: "20",
                    UOM: "KG",
                    amount: "20000",
                    sno: 5
                }
            ]
        }
    ];

    const handlePOClick = (poData) => {
        navigate('/viewPo', { state: poData });
    };
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPOs = poDataList.filter(po => 
        po.poData.PO.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-screen-xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Purchase Orders List</h2>
        <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-lg">
                    <input 
                        type="text" 
                        placeholder="Search Purchase Orders..." 
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full p-4 pl-10 pr-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                    <div className="absolute left-3 top-3 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6m-6-6l-6 6" />
                        </svg>
                    </div>
                </div>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPOs.map((po, index) => (
                <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer"
                    onClick={() => handlePOClick(po)}
                >
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                            {index + 1} {/* Display the first character of PO number */}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Po No : {po.poData.PO}</h3>
                    </div>
                    <p className="text-gray-600">
                        <strong>PO Date:</strong> {po.poData.PoDate}
                    </p>
                    <p className="text-gray-600">
                        <strong>Status:</strong> {po.status || "Pending"} {/* Example status */}
                    </p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default POList;