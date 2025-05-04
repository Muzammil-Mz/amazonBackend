import mongoose from "mongoose";


const userschema=new mongoose.Schema({
    name:{
        type:String,
    },email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },address:[
        {street:{
            type:String
        },}
    ]
})
