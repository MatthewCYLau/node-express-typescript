import express, { Request, Response } from "express";
import { Todo } from "../todo/todo.interface";

const router = express.Router();

router.get("/todos", async (req: Request, res: Response) => {
  const todo = await Todo.find({});
  return res.status(200).send(todo);
});

router.post("/todos", async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const todo = Todo.build({ title, description });
  await todo.save();
  return res.status(201).send(todo);
});

export { router as todoRouter };
