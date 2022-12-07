import { TasksTypes } from "entities/tasks";
import React, { useState } from "react";

type BoardI = TasksTypes.TasksListI;

type TaskI = TasksTypes.TaskI;

export function useDragDrop(boards: BoardI[]) {
  const [, setBoards] = useState(boards);
  const [currentBoard, setCurrentBoard] = useState<null | BoardI>(null);
  const [currentItem, setCurrentItem] = useState<null | TaskI>(null);

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    // @ts-ignore
    if (e.target.className === "task_container__C1Pbh") {
      // @ts-ignore
      e.target.style.boxShadow = "0 2px 3px gray";
    }
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    // @ts-ignore
    e.target.style.boxShadow = "none";
  }

  function dragStartHandler(
    e: React.DragEvent<HTMLDivElement>,
    board: BoardI,
    task: TaskI
  ) {
    setCurrentBoard(board);
    setCurrentItem(task);
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    // @ts-ignore
    e.target.style.boxShadow = "none";
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    // @ts-ignore
    e.target.style.boxShadow = "none";
  }

  function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: BoardI) {
    if (!currentBoard) return;
    if (!currentItem) return;
    board.tasks.push(currentItem);
    const currentIndex = currentBoard.tasks.indexOf(currentItem);
    currentBoard.tasks.splice(currentIndex, 1);
    setBoards(
      boards.map((b: any) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  return {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCardHandler,
  };
}
