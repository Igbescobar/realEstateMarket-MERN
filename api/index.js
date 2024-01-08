import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { errorHandler } from "./middleware/error.js";
import cors from "cors";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

const app = express();

const FRONTEND_URL = process.env.ORIGIN;

app.use(express.json());
app.use(
  cors({
    origin: [FRONTEND_URL],
  })
);

app.listen(3000, () => {
  console.log(FRONTEND_URL);
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use(errorHandler);
