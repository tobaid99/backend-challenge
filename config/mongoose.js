const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://tobaid99:1234asd@cluster0.39dwi6x.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
            console.log("Database is ON"); 
        })
        .catch((err)=>{
            console.log(err);
        })