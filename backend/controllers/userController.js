const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createUser  = async (req, res) => {
    const { name, id, bloodGroup, address, phone, department } = req.body;
    const newUser  = new User({ name, id, bloodGroup, address, phone, department });

    try {
        await newUser .save();
        res.status(201).json(newUser );
    } catch (error) {
        res.status(400).json({ message: 'Error creating user' });
    }
};

const updateUser  = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedUser  = await User.findOneAndUpdate({ id }, updates, { new: true });
        if (!updatedUser ) return res.status(404).json({ message: 'User  not found' });
        res.status(200).json(updatedUser );
    } catch (error) {
        res.status(400).json({ message: 'Error updating user' });
    }
};

const deleteUser  = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser  = await User.findOneAndDelete({ id });
        if (!deletedUser ) return res.status(404).json({ message: 'User  not found' });
        res.status(200).json({ message: 'User  deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAllUsers, createUser , updateUser , deleteUser  };