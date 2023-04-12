const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://manan20019:zyzz@123@cluster0.2aqqv5q.mongodb.net/manan?retryWrites=true&w=majority'

const mongoDB = async () => {
  await mongoose.connect(mongoURI,{useNewUrlParser:true}, (err,result) => {
    if(err) console.log("---",err)
    else {
      console.log("connected successfully");

    }
   
  });
};
module.exports = mongoDB;
