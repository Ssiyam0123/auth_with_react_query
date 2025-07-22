import mongoose, { model, Schema } from "mongoose";
const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  posts: [{ id: { type: String } }],
});

const User = model?.User || model("User", userSchema);

export default User;
