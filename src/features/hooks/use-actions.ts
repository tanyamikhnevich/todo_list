import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { projectActions } from "entities/projects";

const actions = { ...projectActions };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
