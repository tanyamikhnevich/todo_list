import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { usePopup } from "features/popup/use-popup";
import { ProjectStateTypes } from "entities/projects";

export const CreateProject = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { closePopup } = usePopup();

  const addProject = () => {
    dispatch({
      type: ProjectStateTypes.ProjectsActionsType.CREATE_PROJECT,
      payload: title,
    });
    setTitle("");
    closePopup();
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        style={{ margin: "5px", border: "1px solid black" }}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={() => addProject()}>Create</button>
    </div>
  );
};
