require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const SECRET = process.env.SECRET;
const SALT = process.env.SALT;
module.exports = {
  PORT,
  MONGO_URL,
  SALT,
  SECRET,
};
