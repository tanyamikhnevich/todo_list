import { Dispatch } from "react";
import { TasksStateTypes } from ".";
import { tasksAPI } from "../api";

export const getTasks = (id: number) => {
  return async (dispatch: Dispatch<TasksStateTypes.TasksAction>) => {
    try {
      dispatch({ type: TasksStateTypes.TasksActionsType.GET_TASKS });
      const { data } = await tasksAPI.getTasks();
      const result = data.filter((d) => id === d.projectId)[0].tasksList;
      dispatch({
        type: TasksStateTypes.TasksActionsType.GET_TASKS_SUCCESS,
        payload: result,
      });
    } catch (e) {
      dispatch({
        type: TasksStateTypes.TasksActionsType.GET_TASKS_ERROR,
        payload: "Error",
      });
    }
  };
};
