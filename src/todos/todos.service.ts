import { BaseModel, Todo } from "./todo.interface";
import { Todos } from "./todos.interface";

let todos: Todos = {
  1: {
    id: 1,
    name: "Grocery",
    score: 8,
    description: "Buy food"
  },
  2: {
    id: 2,
    name: "Cleaning",
    score: 9,
    description: "Clean the kitchen"
  },
  3: {
    id: 3,
    name: "Gardening",
    score: 3,
    description: "Cut grass"
  }
};

export const findAll = async (): Promise<Todo[]> => Object.values(todos);

export const find = async (id: number): Promise<Todo> => todos[id];

export const create = async (newTodo: BaseModel): Promise<Todo> => {
  const id = new Date().valueOf();

  todos[id] = {
    id,
    ...newTodo
  };

  return todos[id];
};

export const update = async (
  id: number,
  todoUpdate: BaseModel
): Promise<Todo | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  todos[id] = { id, ...todoUpdate };

  return todos[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete todos[id];
};
