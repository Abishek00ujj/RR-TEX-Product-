const PurchaseOrder = require('../models/poModel');

exports.getAllPOs = async (req, res) => {
    try {
        const pos = await PurchaseOrder.find();
        res.status(200).json(pos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPO = async (req, res) => {
    const po = new PurchaseOrder(req.body);
    try {
        const savedPO = await po.save();
        res.status(201).json(savedPO);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePO = async (req, res) => {
    try {
        const updatedPO = await PurchaseOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPO);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePO = async (req, res) => {
    try {
        await PurchaseOrder.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};