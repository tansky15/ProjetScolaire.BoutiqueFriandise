//declaration des variables objet
const express = require('express');
const app = express();
const cors= require('cors');

const mongoose = require('mongoose');
const Friandise = require('./models/modFriandise');
const router = require('./Routes/FrianRoutes');
const connection = mongoose.connection;
const port = 3131;

//middleware pour lire dans le post
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const frianRouter= require('./Routes/FrianRoutes');
app.use('/frian',frianRouter);




router.get('/friandises',(req,res)=>{
    Friandise.find().exec()
    .then(envoi => res.status(200).json(envoi));
    });
app.listen(3131,()=>{
console.log("Available on port 3131");
});


//connection a la base de donnees
mongoose.connect('mongodb://localhost:27017/labo6',{useUnifiedTopology:true, useNewUrlParser: true });
connection.once('open',()=>{
    console.log('connected to MongoDB');
});
