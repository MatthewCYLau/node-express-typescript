import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./db/connect";
import { todosRouter } from "./todos/todos.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/v1/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
