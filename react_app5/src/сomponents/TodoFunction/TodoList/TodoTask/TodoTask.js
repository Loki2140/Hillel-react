import React from "react";
import "./TodoTask.scss";

export default function TodoTask({ task, delTask, toggleDoneTask }) {
  const onDelClick = (e) => {
    e.stopPropagation();
    delTask(task.id);
  };

  return (
    <div
      onClick={() => toggleDoneTask(task.id)}
      className={task.isDone ? "task done" : "task undone"}
    >
      <div className="taskName">{task.title}</div>
      <button onClick={onDelClick} className="del">
        x
      </button>
    </div>
  );
}
