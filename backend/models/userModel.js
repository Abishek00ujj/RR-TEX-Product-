const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: String,
    bloodGroup: String,
    department: String,
    id: String,
    name: String,
    phone: String
});

module.exports = mongoose.model('User ', userSchema);