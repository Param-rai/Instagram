import Post from "../models/postSchema.js";

export const createPost = async (req, res) => {
  const { username, post, media, desc } = req.body;

  try {
    const newPost = await Post.create({ username, post, media, desc });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json("Not found");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { username, desc } = req.body;

  try {
    const post = await Post.findById(id);
    if (post.username === username) {
      await post.updateOne({ $set: { desc } }, { new: true });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    const post = await Post.findById(id);
    if (post.username === username) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const likeToggle = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post.likes.includes(username)) {
      await post.updateOne({ $push: { likes: username } });
      res.status(200).json("liked");
    } else {
      await post.updateOne({ $pull: { likes: username } });
      res.status(200).json("unliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const timelinePost = async (req, res) => {
  const currentUserId = req.body.username;
  try {
    const currentUser = await User.findOne({ username: currentUserId });
    const followingsPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(followingsPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const currentUserPost = async (req, res) => {
  const { username } = req.params;
  try {
    const posts = await Post.find({ username });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
