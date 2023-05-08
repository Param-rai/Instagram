import express from "express";
const Router = express.Router();

import { login, register } from "../controllers/authController.js";

Router.post("/register", register);
Router.post("/login", login);

export default Router;
