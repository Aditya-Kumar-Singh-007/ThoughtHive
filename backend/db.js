const mongoose=require('mongoose')
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/ThoughtHive"

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI);
    console.log("connected to mongo successfully");
    
}

module.exports=connectToMongo;