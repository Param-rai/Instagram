import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: String,
    fullname: String,
    email: String,
    phoneNumber: Number,
    password: String,
    bio: String,
    profilePic: String,
    followers: [],
    followings: [],
    saved: [],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
