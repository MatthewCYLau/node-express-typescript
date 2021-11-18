require("dotenv").config();
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./db/connect";
import { todoRouter } from "./todo/todo.router";

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = process.env.PORT || 8080;

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(helmet());
app.use(cors());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use("/api/v1/", todoRouter);

app.all("*", async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.use("/ping", (_req: Request, res: Response) => {
  return res.status(200).send("pong!");
});

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  try {
    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

start();
