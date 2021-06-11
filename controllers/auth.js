const {response} = require('express');
const userModel = require('../models/users');

const crearUsuario = (req, res) =>{
    const {fName, lName, docType, doc, birthDate, email, phoneNum, gender} = req.body
    userModel.create({
      "fName": fName,
      "lName": lName,
      "docType": docType,
      "doc": doc,
      "birthDate": birthDate,
      "email": email,
      "phoneNum": phoneNum,
      "gender": gender
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

const deleteUser =  (req, res = response) =>{
  const {id} = req.params;  
  userModel.findByIdAndRemove({_id: id}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }}
  )
}

const updateUser =  (req, res = response) =>{
  const {id} = req.params;
  const {fName, lName, docType, doc, birthDate, email, phoneNum, gender} = req.body
  userModel.findByIdAndUpdate(id, {
    "fName": fName,
    "lName": lName,
    "docType": docType,
    "doc": doc,
    "birthDate": birthDate,
    "email": email,
    "phoneNum": phoneNum,
    "gender": gender
  }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }}
  )
}

const getUser =  (req, res = response) =>{
  const {id} = req.params;
  userModel.findById(id, function(err, result) {
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
    getUsers,
    deleteUser,
    getUser,
    updateUser
}