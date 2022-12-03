import { ReactNode } from "react";
import { Projects, Tasks } from "pages";

export interface Route {
  path: string;
  element: ReactNode;
  default?: boolean;
}

export const publicRoutes: Array<Route> = [
  { path: "/projects", element: <Projects />, default: true },
  { path: "/projects/:id", element: <Tasks /> },
];
