import mongoose from "mongoose"
// import {DB_NAME} from "../constants.js"


const connectDB = async () =>{
    try {
       const connect =  await mongoose.connect(`${process.env.MONGODB_URI}`)
       console.log(`\n MongoDB connected !! DB Host: ${connect.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection error", error)
        process.exit(1)
        
    }
}

export default connectDB