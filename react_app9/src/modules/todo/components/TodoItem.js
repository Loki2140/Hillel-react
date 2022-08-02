import React from "react";
import "./TodoItem.scss";
import { useDispatch } from "react-redux";
import { delTODO, toggleTODO } from "./../../../store/actions/todoActions";

export default function TodoItem({ task }) {
  const dispatch = useDispatch();

  const onDelClick = (e) => {
    e.stopPropagation();
    dispatch(delTODO(task.id));
  };
  const onTaskClick = () => {
    dispatch(toggleTODO(task.id));
  };

  return (
    <div
      onClick={onTaskClick}
      className={task.isDone ? "task done" : "task undone"}
    >
      <div className="taskName">{task.title}</div>
      <button onClick={onDelClick} className="del">
        x
      </button>
    </div>
  );
}
