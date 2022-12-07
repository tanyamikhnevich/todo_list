import React from "react";
import styles from "./task.module.scss";
import { TasksTypes } from "entities/tasks";

type BoardI = TasksTypes.TasksListI;

type TaskI = TasksTypes.TaskI;

interface Props {
  dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragStartHandler: (
    e: React.DragEvent<HTMLDivElement>,
    board: BoardI,
    item: TaskI
  ) => void;
  dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dropHandler: (
    e: React.DragEvent<HTMLDivElement>,
    board: BoardI,
    item: TaskI
  ) => void;
  board: BoardI;
  item: TaskI;
}

export const Task = ({
  dragOverHandler,
  dragStartHandler,
  dragLeaveHandler,
  dragEndHandler,
  dropHandler,
  board,
  item,
}: Props) => {
  return (
    <div
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, board, item)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, board, item)}
      className={styles.container}
      draggable={true}
    >
      <div className={styles.titleContainer}>
        <input type="checkbox" />
        <h2>
          {item.id}. {item.title}
        </h2>
      </div>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};
