const mongoose = require("mongoose");

const connectDB = async(url) => {
  try{
  const conn=await mongoose.connect(url);
  console.log("mongodb connected")
  return conn
  }catch(error){
    return console.log("mongodb error")
  }
   
};

module.exports = connectDB;
