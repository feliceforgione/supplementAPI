const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User must have a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
  },
});

module.exports = mongoose.model("User", UserSchema);
