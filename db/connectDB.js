import mongoose from 'mongoose';


const connectDB = async (DATABASE_URL)=>{
    
    try{
        const DB_OPTIONS = {
            dbName: 'smoothies'
          }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("connected to db successfully");
    }
    catch(error){
        console.log("error connecting to db");
    }
}

export default connectDB

