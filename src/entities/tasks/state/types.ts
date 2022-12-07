import { TasksTypes } from "./../api";

export interface IReduxState {
  loading: boolean;
  error: string | null;
}

export enum TasksActionsType {
  GET_TASKS = "GET_TASKS",
  GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS",
  GET_TASKS_ERROR = "GET_TASKS_ERROR",
}

export type TasksAction =
  | GetTasksAction
  | GetTasksSuccessAction
  | GetTasksErrorAction;

interface GetTasksAction {
  type: TasksActionsType.GET_TASKS;
}

interface GetTasksSuccessAction {
  type: TasksActionsType.GET_TASKS_SUCCESS;
  payload: TasksTypes.TasksListI[];
}

interface GetTasksErrorAction {
  type: TasksActionsType.GET_TASKS_ERROR;
  payload: string;
}

export type TasksState = IReduxState & {
  tasks: TasksTypes.TasksListI[];
};
