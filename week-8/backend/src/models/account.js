const mongoose = require("mongoose");
const accountScheme = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Account =
  mongoose.models.Account || mongoose.model("Account", accountScheme);

module.exports = Account;
