import { ProjectStateTypes } from "./index";
import { addInLocalStorage } from "../../../shared/utils/set-in-local-storage";

export const initialState: ProjectStateTypes.ProjectsState = {
  projects: [],
  loading: false,
  error: null,
};

export const projectsReducer = (
  state = initialState,
  action: ProjectStateTypes.ProjectAction
): ProjectStateTypes.ProjectsState => {
  switch (action.type) {
    case ProjectStateTypes.ProjectsActionsType.GET_PROJECTS:
      return { projects: [], loading: true, error: null };
    case ProjectStateTypes.ProjectsActionsType.GET_PROJECTS_SUCCESS:
      return {
        projects: action.payload,
        loading: false,
        error: null,
      };
    case ProjectStateTypes.ProjectsActionsType.GET_PROJECTS_ERROR:
      return { projects: [], loading: false, error: action.payload };
    case ProjectStateTypes.ProjectsActionsType.CREATE_PROJECT:
      addInLocalStorage({
        localKey: "projects",
        object: { id: Date.now(), title: action.payload },
      });
      return {
        ...state,
        projects: [
          ...state.projects,
          { id: Date.now(), title: action.payload },
        ],
      };
    default:
      return state;
  }
};
