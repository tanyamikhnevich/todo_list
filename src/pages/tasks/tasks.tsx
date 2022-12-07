import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Task } from "widgets/task/task";
import { UseTypedSelector } from "features/hooks/use-typed-selector";
import { useDragDrop } from "features/hooks/use-drag-drop";
import { useActions } from "features/hooks/use-actions";

import styles from "./tasks.module.scss";

export const Tasks = () => {
  const getQuery = useLocation();
  const { projects } = UseTypedSelector((state) => state.projects);
  const { tasks } = UseTypedSelector((state) => state.tasks);

  const projectOne = projects.filter(
    (project) => getQuery.pathname === `/projects/${project.id}`
  )[0];

  const { getTasks } = useActions();

  useEffect(() => {
    projectOne && getTasks(projectOne.id);
  }, [projectOne]);

  const {
    dragOverHandler,
    dragStartHandler,
    dragLeaveHandler,
    dropHandler,
    dropCardHandler,
    dragEndHandler,
  } = useDragDrop(tasks);

  return (
    <div className={styles.container}>
      <h1 className={styles.titleProject}>{projectOne && projectOne.title}</h1>
      <div className={styles.columnsContainer}>
        {tasks.map((board) => (
          <div
            className={styles.column}
            key={board.id}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
          >
            <h2 className={styles.columnTitle}>{board.title}</h2>
            <div className={styles.tasks}>
              {board.tasks.map((task) => (
                <Task
                  key={task.id}
                  dragEndHandler={dragEndHandler}
                  dragStartHandler={dragStartHandler}
                  dragLeaveHandler={dragLeaveHandler}
                  dragOverHandler={dragOverHandler}
                  dropHandler={dropHandler}
                  board={board}
                  item={task}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
