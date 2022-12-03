import React, { useState } from "react";
import styles from "./task.module.scss";
import { BoardI, TaskI } from "../../pages";

interface Props {
  title: string;
  description: string;
  index: number;
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
  title,
  description,
  index,
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
          {index}. {title}
        </h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
