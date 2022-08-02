import React, { useState } from "react";
import "./TodoInput.scss";
import { useDispatch } from "react-redux";
import { addTODO, addError } from "./../../../store/actions/todoActions";
const ERROR = "ПУСТОЕ  ПОЛЕ!";

export default function TodoInput({ addNewTask }) {
  const [inputNewTask, setInputNewTask] = useState("");
  const dispatch = useDispatch();

  const addNewTaskName = (e) => {
    setInputNewTask(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputNewTask === "") {
      showError();
    } else {
      dispatch(addTODO(inputNewTask));
      setInputNewTask("");
    }
  };

  const showError = () => {
    dispatch(addError(ERROR));
    setTimeout(() => {
      dispatch(addError(""));
    }, 2000);
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
