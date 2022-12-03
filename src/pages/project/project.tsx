import React from "react";

import styles from "./projects.module.scss";
import { UseTypedSelector } from "../../features/hooks/use-typed-selector";

export const Projects = () => {
  const { projects } = UseTypedSelector((state) => state.projects);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
};
