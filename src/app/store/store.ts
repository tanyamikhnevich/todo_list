import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { projectsReducer } from "entities/projects";
import { tasksReducer } from "entities/tasks";

export const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
