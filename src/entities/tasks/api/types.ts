export interface TasksResponseI {
  projectId: number;
  tasksList: TasksListI[];
}

export interface TasksListI {
  id: number;
  title: string;
  tasks: TaskI[];
}

export interface TaskI {
  id: number;
  title: string;
  description: string;
}
