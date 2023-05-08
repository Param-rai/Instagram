import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import dotenv from "dotenv";
import postRoute from "./routes/postRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
const URI = process.env.MONGODBURI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDb is connected");
    app.listen(5000, () => {
      console.log("Listening at 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//middlewares
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/user", userRoute);
