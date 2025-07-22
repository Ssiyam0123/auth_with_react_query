import { model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    user: {
      name: { type: String },
      email: { type: String },
    },
    title: { type: String },
    description: { type: String },
    likes: { type: Number },
    comments: [
      {
        name: { type: String },
        email: { type: String },
        comment: { type: String },
      },
    ],
    edit: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Post = model?.Post || model("Post", postSchema);

export default Post;
