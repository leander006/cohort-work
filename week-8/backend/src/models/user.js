const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { SALT, SECRET } = require("../config/server-config");
const JWT = require("jsonwebtoken");
const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  {
    timestamps: true,
  }
);

userScheme.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hash(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userScheme.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userScheme.methods.genJWT = function generate() {
  return JWT.sign({ id: this._id, username: this.username }, SECRET, {
    expiresIn: "1h",
  });
};

const User = mongoose.models.User || mongoose.model("User", userScheme);

module.exports = User;
