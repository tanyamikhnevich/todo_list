import React, { ReactNode, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import { usePopup } from "features/popup/use-popup";
import { ReactComponent as Plus } from "assets/images/plus.svg";
import { useActions } from "../../features/hooks/use-actions";
import { UseTypedSelector } from "../../features/hooks/use-typed-selector";
import { CreateProject } from "../create-project/create-project";

import styles from "./navbar.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Navbar = ({ children, className }: Props) => {
  const getQuery = useLocation();
  const { openPopup } = usePopup();

  const { getProjects } = useActions();
  const { projects } = UseTypedSelector((state) => state.projects);
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <NavLink to="/projects" className={styles.title}>
          Projects
        </NavLink>
        <span
          className={styles.plus}
          onClick={() => openPopup(<CreateProject />)}
        >
          <Plus />
        </span>

        {projects.map((project) => (
          <NavLink
            key={project.id}
            className={classNames(
              styles.button,
              getQuery.pathname === `/projects/${project.id}` &&
                styles.buttonActive
            )}
            to={`/projects/${project.id}`}
          >
            {project.title}
          </NavLink>
        ))}

        <button
          className={classNames(styles.button, styles.add)}
          onClick={() => openPopup(<div>dc</div>)}
        >
          Add Task
          <div className={styles.plus}></div>
        </button>
      </div>
      <main className={className}>{children}</main>
    </nav>
  );
};
