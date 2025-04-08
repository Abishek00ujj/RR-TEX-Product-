

const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    materialSNo: Number,
    materialName: String,
    materialHSNCode: String,
    materialDescription: String,
    materialColour: String,
    materialRou: String,
    materialQuantity: String,
    materialUom: String,
    materialAmount: String
});

const colorSchema = new mongoose.Schema({
    sno: Number,
    color: String,
    s: String,
    m: String,
    l: String,
    xl: String,
    "2xl": String,
    qty: String,
    pieceWeight: String
});

const priceSchema = new mongoose.Schema({
    color: String,
    s: String,
    m: String,
    l: String,
    xl: String,
    "2xl": String
});

const gstSchema = new mongoose.Schema({
    sgstRate: String,
    cgstRate: String
});

const accessoriesSchema = new mongoose.Schema({
    material: String,
    hsnCode: String,
    description: String,
    color: String,
    size: String,
    quantity: String,
    UOM: String,
    amount: String,
    sno: Number
});

const poSchema = new mongoose.Schema({
    poData: {
        PO: String,
        PoDate: String,
        GstIn: String
    },
    materialInfo: [materialSchema],
    productDetails: {
        group: String,
        styleDescription: String,
        fabric: String
    },
    colorDetails: [colorSchema],
    priceDetails: [priceSchema],
    gstDetails: gstSchema,
    accessoriesDetails: [accessoriesSchema]
});

module.exports = mongoose.model('PurchaseOrder', poSchema);