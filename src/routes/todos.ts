import express, { Request, Response } from "express";
import { Todo } from "../models/todo";
import { currentUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.get(
  "/todos",
  currentUser,
  requireAuth,
  async (req: Request, res: Response) => {
    const todo = await Todo.find({});
    return res.status(200).send(todo);
  }
);

router.post(
  "/todos",
  currentUser,
  requireAuth,
  async (req: Request, res: Response) => {
    const { title, description } = req.body;

    const todo = Todo.build({ title, description });
    await todo.save();
    return res.status(201).send(todo);
  }
);

export { router as todoRouter };
