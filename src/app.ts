require("dotenv").config();
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./db/connect";
import { todoRouter } from "./todo/todo.router";

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/v1/", todoRouter);

app.use("/ping", (req: Request, res: Response) => {
  return res.status(200).send("pong!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
