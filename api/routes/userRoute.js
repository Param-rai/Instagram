import express from "express";
import {
  deleteUser,
  followToggle,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
const Router = express.Router();

Router.get("/:username", getUser);
Router.get("/getallusers/test", getAllUser);
Router.put("/:username", updateUser);
Router.delete("/:username", deleteUser);
Router.put("/follow/:username", followToggle);

export default Router;
