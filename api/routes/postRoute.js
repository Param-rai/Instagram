import express from "express";
const Router = express.Router();
import {
  createPost,
  currentUserPost,
  deletePost,
  getPost,
  likeToggle,
  timelinePost,
  updatePost,
} from "../controllers/postController.js";

Router.post("/create", createPost);
Router.get("/:id", getPost);
Router.put("/:id", updatePost);
Router.delete("/:id", deletePost);
Router.put("/like/:id", likeToggle);

Router.get("/timeline/all", timelinePost);
Router.get("/currentUserPost/:username", currentUserPost);

export default Router;
