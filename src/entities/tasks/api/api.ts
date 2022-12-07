import axios, { AxiosResponse } from "axios";
import { TasksTypes } from ".";

export const getTasks = (): Promise<
  AxiosResponse<TasksTypes.TasksResponseI[]>
> => {
  return axios.get<TasksTypes.TasksResponseI[]>("/api/tasks.json");
};
