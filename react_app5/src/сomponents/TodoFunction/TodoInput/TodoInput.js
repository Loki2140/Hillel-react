import React, { useState } from "react";
import "./TodoInput.scss";

export default function TodoInput({ addNewTask }) {
  const [inputNewTask, setInputNewTask] = useState("");
  const addNewTaskName = (e) => {
    setInputNewTask(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: inputNewTask
    };
    addNewTask(newTask);
    setInputNewTask("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        task="task"
        value={inputNewTask}
        onChange={addNewTaskName}
        type="text"
      />
      <button>New Task</button>
    </form>
  );
}
