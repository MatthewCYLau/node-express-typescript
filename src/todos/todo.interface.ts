export interface BaseModel {
  name: string;
  description: string;
  score: number;
}

export interface Todo extends BaseModel {
  id: number;
}
