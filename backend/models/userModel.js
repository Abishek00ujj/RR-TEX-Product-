const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: String,
    bloodGroup: String,
    department: String,
    id: { type: String, unique: true }, // Ensure 'id' is unique
    name: String,
    phone: String
});

module.exports = mongoose.model('User ', userSchema);