const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://johan:Kisure7845@cluster0.2pyne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true}).then(res =>{
    //crear servidor express
    const app = express();

    //parser
    app.use(express.json());
    app.use(cors());

    //rutas
    app.use('/api/auth', authRoutes);

    //escuchar peticiones
    app.listen(process.env.PORT, ()=>{
        console.log(`server running on ${ process.env.PORT }`);
    });
})