const mongoose = require('mongoose');

const schema = mongoose.Schema({
    fName: String,
    lName: String,
    docType: String,
    doc: String,
    birthDate: String,
    email: String,
    phoneNum: String,
    gender: String,
    CBQA: Array,
    CBQVA: Array,
    Departamento: String,
    Ciudad: String,
    userType: String
})

module.exports = mongoose.model("User", schema);