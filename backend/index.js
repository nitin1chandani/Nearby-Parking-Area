const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port =4000; 

const DB = 'mongodb+srv://manan20019:zyzz@123@cluster0.2aqqv5q.mongodb.net/test'
mongoose.connect(DB, {
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(() => {
  console.log("connection successful");
}).catch((err) => console.log("no conneccton"));
//  const mongoDB = require("./db");
//  mongoDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
