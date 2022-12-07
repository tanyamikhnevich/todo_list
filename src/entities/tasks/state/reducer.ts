import { TasksStateTypes } from "./index";

export const initialState: TasksStateTypes.TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

export const tasksReducer = (
  state = initialState,
  action: TasksStateTypes.TasksAction
): TasksStateTypes.TasksState => {
  switch (action.type) {
    case TasksStateTypes.TasksActionsType.GET_TASKS:
      return { tasks: [], loading: true, error: null };
    case TasksStateTypes.TasksActionsType.GET_TASKS_SUCCESS:
      return {
        tasks: action.payload,
        loading: false,
        error: null,
      };
    case TasksStateTypes.TasksActionsType.GET_TASKS_ERROR:
      return { tasks: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
