import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json("User Not Found");
    }
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const updateUser = async (req, res) => {
  const { username } = req.params;
  const userToUpdate = req.headers.username;
  // used headers bcoz in case if user
  // wants to update username so body contains new username and further condition will not match

  if (username === userToUpdate) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findOneAndUpdate(
        { username },
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};

export const deleteUser = async (req, res) => {
  if (req.body.username === req.params.username) {
    try {
      await User.findOneAndDelete({ username: req.params.username });
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err.message);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
};

export const followToggle = async (req, res) => {
  const userToFollowId = req.params.username;
  const currentUserId = req.body.username;

  if (currentUserId !== userToFollowId) {
    try {
      const userToFollow = await User.findOne({ username: userToFollowId });
      const currentUser = await User.findOne({ username: currentUserId });
      if (!userToFollow.followers.includes(currentUserId)) {
        await userToFollow.updateOne({ $push: { followers: currentUserId } });
        await currentUser.updateOne({ $push: { followings: userToFollowId } });
        res.status(200).json("followed");
      } else if (userToFollow.followers.includes(currentUserId)) {
        await userToFollow.updateOne({ $pull: { followers: currentUserId } });
        await currentUser.updateOne({ $pull: { followings: userToFollowId } });
        res.status(200).json("Unfollowed");
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};
