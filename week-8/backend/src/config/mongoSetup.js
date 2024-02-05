const mongoose = require("mongoose");
const { MONGO_URL } = require("./server-config");

const connect = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to mongodb successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { connect };
