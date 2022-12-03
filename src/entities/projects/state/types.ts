import { ProjectTypes } from "./../index";

export interface IReduxState {
  loading: boolean;
  error: string | null;
}

export enum ProjectsActionsType {
  GET_PROJECTS = "GET_PROJECTS",
  GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS",
  GET_PROJECTS_ERROR = "GET_PROJECTS_ERROR",
  CREATE_PROJECT = "CREATE_PROJECT",
}

export type ProjectAction =
  | GetProjectsAction
  | GetProjectsSuccessAction
  | GetProjectsErrorAction
  | CreateProjectsAction;

type CreateProjectsAction = ProjectTypes.ProjectResponseI[] & {
  type: ProjectsActionsType.CREATE_PROJECT;
  payload: string;
};

interface GetProjectsAction {
  type: ProjectsActionsType.GET_PROJECTS;
}

interface GetProjectsSuccessAction {
  type: ProjectsActionsType.GET_PROJECTS_SUCCESS;
  payload: ProjectTypes.ProjectResponseI[];
}

interface GetProjectsErrorAction {
  type: ProjectsActionsType.GET_PROJECTS_ERROR;
  payload: string;
}

export type ProjectsState = IReduxState & {
  projects: ProjectTypes.ProjectResponseI[];
};
