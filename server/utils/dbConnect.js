import mongoose  from "mongoose";
import config from "config"

async function dbConnect() {
    try {
        let db=config.get("URL")
        await mongoose.connect(db)
        console.log("DB CONNECTED Successfully");
    } catch (error) {
        console.log(error);
    }


    
}
dbConnect()