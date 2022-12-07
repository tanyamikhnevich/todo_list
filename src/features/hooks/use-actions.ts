import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { projectActions } from "entities/projects";
import { tasksActions } from "entities/tasks";

const actions = { ...projectActions, ...tasksActions };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
