import React from 'react';

const ProductDetails = () => {
  // Dummy data
  const data = {
    poData: {
      PO: "PO123456",
      PoDate: "2023-10-01",
      GstIn: "27AAACD1234F1Z5"
    },
    productDetails: {
      group: "Apparel",
      styleDescription: "Casual T-Shirt",
      fabric: "Cotton"
    },
    colorDetails: ["Red", "Blue", "Green"],
    priceDetails: [
      { description: "Base Price", amount: "$20.00" },
      { description: "Discount", amount: "-$2.00" },
      { description: "Total Price", amount: "$18.00" }
    ],
    gstDetails: {
      sgstRate: "9%",
      cgstRate: "9%"
    },
    accessoriesDetails: [
      {
        material: "Plastic",
        hsnCode: "1234",
        description: "Button",
        color: "Black",
        size: "Small",
        quantity: "10",
        UOM: "pcs",
        amount: "$1.00",
        sno: 1
      },
      {
        material: "Metal",
        hsnCode: "5678",
        description: "Zipper",
        color: "Silver",
        size: "Medium",
        quantity: "5",
        UOM: "pcs",
        amount: "$2.50",
        sno: 2
      }
    ]
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>

      <section className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Purchase Order Information</h2>
        <p><strong>PO:</strong> {data.poData.PO}</p>
        <p><strong>PO Date:</strong> {data.poData.PoDate}</p>
        <p><strong>GST IN:</strong> {data.poData.GstIn}</p>
      </section>

      <section className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Product Information</h2>
        <p><strong>Group:</strong> {data.productDetails.group || 'N/A'}</p>
        <p><strong>Style Description:</strong> {data.productDetails.styleDescription || 'N/A'}</p>
        <p><strong>Fabric:</strong> {data.productDetails.fabric || 'N/A'}</p>
      </section>

      <section className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Color Details</h2>
        {data.colorDetails.length > 0 ? (
          data.colorDetails.map((color, index) => (
            <p key={index}>{color}</p>
          ))
        ) : (
          <p>No color details available.</p>
        )}
      </section>

      <section className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Price Details</h2>
        {data.priceDetails.length > 0 ? (
          data.priceDetails.map((price, index) => (
            <p key={index}><strong>{price.description}:</strong> {price.amount}</p>
          ))
        ) : (
          <p>No price details available.</p>
        )}
      </section>

      <section className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">GST Details</h2>
        <p><strong>SGST Rate:</strong> {data.gstDetails.sgstRate || 'N/A'}</p>
        <p><strong>CGST Rate:</strong> {data.gstDetails.cgstRate || 'N/A'}</p>
      </section>

      <section className="mb-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Accessories Details</h2>
        {data.accessoriesDetails.length > 0 ? (
          data.accessoriesDetails.map((accessory) => (
            <div key={accessory.sno} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <p><strong>Description:</strong> {accessory.description || 'N/A'}</p>
              <p><strong>Material:</strong> {accessory.material || 'N/A'}</p>
              <p><strong>HSN Code:</strong> {accessory.hsnCode || 'N/A'}</p>
              <p><strong>Color:</strong> {accessory.color || 'N/A'}</p>
              <p><strong>Size:</strong> {accessory.size || 'N/A'}</p>
              <p><strong>Quantity:</strong> {accessory.quantity || 'N/A'}</p>
              <p><strong>UOM:</strong> {accessory.UOM || 'N/A'}</p>
              <p><strong>Amount:</strong> {accessory.amount || 'N/A'}</p>
            </div>
          ))
        ) : (
          <p>No accessories details available.</p>
        )}
      </section>
    </div>
  );
};

export default ProductDetails;