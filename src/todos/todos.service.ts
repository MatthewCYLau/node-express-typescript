import { BaseModel, Todo } from "./todo.interface";
import { Todos } from "./todos.interface";

let todos: Todos = {
  1: {
    id: 1,
    name: "Burger",
    score: 599,
    description: "Tasty"
  },
  2: {
    id: 2,
    name: "Pizza",
    score: 299,
    description: "Cheesy"
  },
  3: {
    id: 3,
    name: "Tea",
    score: 199,
    description: "Informative"
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
