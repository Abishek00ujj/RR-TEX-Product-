import React from 'react';
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
        navigate('/edit', { state: poData });
    };

    return (
        <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Purchase Orders List</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <ul>
                    {poDataList.map((po, index) => (
                        <li key={index} className="border-b border-gray-300 py-2 cursor-pointer" onClick={() => handlePOClick(po)}>
                            <strong>PO Number:</strong> {po.poData.PO} | <strong>PO Date:</strong> {po.poData.PoDate}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default POList;