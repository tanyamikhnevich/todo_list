import axios, { AxiosResponse } from "axios";
import { ProjectTypes } from ".";

export const getProjects = (): Promise<
  AxiosResponse<ProjectTypes.ProjectResponseI[]>
> => {
  return axios.get<ProjectTypes.ProjectResponseI[]>("/api/projects.json");
};
