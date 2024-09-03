// wrap db in try catch to handle errors 
// DB is always in another continent
// put always async and await

// First approach to connect DB
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
app = express()

;(async ()=>{
try {
   await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

   app.on("error",(error)=>{
    console.error("ERRRR : ",error);
    throw error
   })

   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
   })
} catch (error) {
    console.log("ERROR",error)
    throw error
}
})()
*/

//Second Approach to Connect DB
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path: "./config.env",
})

connectDB();


















