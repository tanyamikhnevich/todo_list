import React, { useState } from "react";
import styles from "./tasks.module.scss";
import { Task } from "../../widgets/task/task";
import { useLocation } from "react-router-dom";
import { UseTypedSelector } from "../../features/hooks/use-typed-selector";
import { useDragDrop } from "../../features/hooks/use-drag-drop";

export interface BoardI {
  id: number;
  title: string;
  tasks: { id: number; title: string; description: string }[];
}

export interface TaskI {
  id: number;
  title: string;
  description: string;
}

export const Tasks = () => {
  const getQuery = useLocation();
  const { projects } = UseTypedSelector((state) => state.projects);

  const projectOne = projects.filter(
    (project) => getQuery.pathname === `/projects/${project.id}`
  )[0];

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Queue",
      tasks: [
        {
          id: 1,
          title: "task1",
          description: "description1 adfvvvvvvvvvvvdvvvvvvvvvvvvvvvvvvvvvvv",
        },
        {
          id: 2,
          title: "task2",
          description: "description2",
        },
        {
          id: 3,
          title: "task3",
          description: "description3",
        },
        {
          id: 4,
          title: "task4",
          description: "description4",
        },
      ],
    },
    {
      id: 2,
      title: "Development",
      tasks: [
        {
          id: 5,
          title: "task5",
          description: "description1",
        },
        {
          id: 6,
          title: "task6",
          description: "description2",
        },
        {
          id: 7,
          title: "task7",
          description: "description3",
        },
        {
          id: 8,
          title: "task8",
          description: "description4",
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      tasks: [
        {
          id: 9,
          title: "task9",
          description: "description1",
        },
        {
          id: 10,
          title: "task10",
          description: "description2",
        },
      ],
    },
  ]);

  const {
    dragOverHandler,
    dragStartHandler,
    dragLeaveHandler,
    dropHandler,
    dropCardHandler,
    dragEndHandler,
  } = useDragDrop(setBoards, boards);

  return (
    <div className={styles.container}>
      <h1 className={styles.titleProject}>{projectOne && projectOne.title}</h1>
      <div className={styles.columnsContainer}>
        {boards.map((board) => (
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
                  title={task.title}
                  description={task.description}
                  index={task.id}
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
