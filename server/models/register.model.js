import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength:3,
    maxLength:16
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  createdAt:{
    type:Date,
    default:()=>Date.now(),
    immutable:true
  }
});

const User = mongoose.model("User", userSchema);

export default User;
