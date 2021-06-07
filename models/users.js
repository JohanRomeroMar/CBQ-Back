const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    email: String,
    pass: String
})

module.exports = mongoose.model("User", schema);