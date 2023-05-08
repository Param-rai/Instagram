import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    username: String,
    post: String,
    media: String,
    desc: String,
    likes: [],
    comments: [
      {
        username: String,
        comment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
