import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: String,
    password: String,
    fullname: String,
    image: String,
  },
  { timestamps: true }
);

const Users =
  mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
