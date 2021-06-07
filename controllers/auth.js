const {response} = require('express');
const userModel = require('../models/users');

const crearUsuario = (req, res) =>{
    const {nombre, email, pass} = req.body
    userModel.create({
        "name": nombre,
        "email": email,
        "pass": pass
    }, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          console.log(result);
          res.send(result);
        }}
    )
}

const loginUsuario =  (req, res = response) =>{
    res.json({
        ok:true,
        msg: "login"
    })
}

const getUsers =  (req, res = response) =>{
    
    userModel.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          console.log(result);
          res.send(result);
        }}
    )
}


module.exports = {
    crearUsuario,
    loginUsuario,
    getUsers
}