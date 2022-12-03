import { Dispatch } from "react";
import { ProjectStateTypes } from ".";
import { projectsAPI } from "./../api";
import {
  getLocalStorage,
  setInLocalStorage,
} from "../../../shared/utils/set-in-local-storage";

export const getProjects = () => {
  return async (dispatch: Dispatch<ProjectStateTypes.ProjectAction>) => {
    try {
      dispatch({ type: ProjectStateTypes.ProjectsActionsType.GET_PROJECTS });
      const projectsStorage = getLocalStorage("projects");
      if (!projectsStorage) {
        const { data } = await projectsAPI.getProjects();
        setInLocalStorage({ localKey: "projects", object: data });
        dispatch({
          type: ProjectStateTypes.ProjectsActionsType.GET_PROJECTS_SUCCESS,
          payload: data,
        });
      } else {
        const data = projectsStorage;
        dispatch({
          type: ProjectStateTypes.ProjectsActionsType.GET_PROJECTS_SUCCESS,
          payload: data,
        });
      }
    } catch (e) {
      dispatch({
        type: ProjectStateTypes.ProjectsActionsType.GET_PROJECTS_ERROR,
        payload: "Error",
      });
    }
  };
};
