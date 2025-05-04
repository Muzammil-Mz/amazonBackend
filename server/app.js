import express from "express"
import config from "config"
import"./utils/dbConnect.js"




const app=express()
const port=config.get("PORT")
app.use(express.json())


app.get("/",(req,res)=>{
    try {
        res.status(200).json("HElLO World")
    } catch (error) {
        console.log(error);
    }
})

app.listen(port,()=>{
    console.log("SErver is up and listening");
})