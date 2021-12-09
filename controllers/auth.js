const {response} = require('express');
const userModel = require('../models/users');
const psyModel = require('../models/psychologist');
const bcrypt = require('bcrypt');

const crearUsuario = (req, res) =>{
    const {fName, lName, docType, doc, birthDate, email, phoneNum, gender, CBQA, CBQVA, dataDepartamentos, dataCiudades} = req.body
    console.log(CBQVA);
    console.log(req.body);
    userModel.create({
      "fName": fName,
      "lName": lName,
      "docType": docType,
      "doc": doc,
      "birthDate": birthDate,
      "email": email,
      "phoneNum": phoneNum,
      "gender": gender,
      "CBQA": CBQA,
      "CBQVA": CBQVA,
      "Departamento": dataDepartamentos,
      "Ciudad": dataCiudades,
      "userType": "estudiante"
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
    const {username, password} = req.body;
    psyModel.findOne({username: username, userType: 'psicologo'}, (err, user) => {
      if(err){
        res.status(500).send('Error al autenticar el usuario');
      }else if(!user){
        res.status(500).send('El usuario no existe')
      }else{
        user.isCorrectPassword(password, (err, result) =>{
          if(err){
            res.status(500).send('Error al autenticar');
          }else if(result){
            res.status(200).send('usuario atenticado correctamente');
          }else{
            res.status(500).send('usuario y/ contraseña incorrecta');
          }
        });
      }
    });
}

const registerPsy =  (req, res = response) =>{
  const {username, password, userType} = req.body;
  const psy = new psyModel({username,password,userType});
  /* bcrypt.hash(password, 10, (err, hash) => {
    if(err){
      res.send(err);
    }else{
      res.send(hash);
      console.log(hash);
    }
  }) */
  psy.save(err => {
    if(err){
      res.status(500).send('Error al registrar nuevo usuario');
    }else{
      res.status(200).send('Usuario registrado');
    }
  });
  console.log(username, password, userType);
}

const getUsers =  (req, res = response) =>{
    
    userModel.find({userType: 'estudiante'}, function(err, result) {
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
    updateUser,
    registerPsy
}