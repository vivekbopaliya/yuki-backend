import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyparser from "body-parser";
import { AuthRouter } from "./routes/auth.js";
import { ComplainRouter } from "./routes/complaints.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/complaint", ComplainRouter);
mongoose
  .connect(
    "mongodb+srv://yuki:k08xCgA5XL8gEfDp@cluster0.ccuewxo.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Mongodb is connected!`);
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(process.env.PORT || 3000, console.log(`Server is active!`));
