import { axiosInstance } from "../api";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getExampleData = (): Promise<Array<Todo>> =>
  axiosInstance.get("/todos").then((response) => response.data);

export const exampleService = {
  getExampleData,
};
