const mongoose = require("mongoose");

const mongoURI =
  "mongodb://parkinn:mananrand@ac-vkdwttq-shard-00-00.ob6e1mx.mongodb.net:27017,ac-vkdwttq-shard-00-01.ob6e1mx.mongodb.net:27017,ac-vkdwttq-shard-00-02.ob6e1mx.mongodb.net:27017/?ssl=true&replicaSet=atlas-ijz60t-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, () => {
    console.log("connected successfully");
  });
};
module.exports = mongoDB;
