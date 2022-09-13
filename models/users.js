const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: [10, "Username cannot be more than 10 characters"],
    },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      maxlength: [30, "Password cannot be more than 30 characters"],
    },
    metamaskAddress: { type: String, required: true, unique: true },
  },
  { collection: "userCredentials" }
);

module.exports = mongoose.models.Users || mongoose.model("Users", UsersSchema);
