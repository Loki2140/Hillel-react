import React from "react";
import { useSelector } from "react-redux";
import "./TodoList.scss";
import TodoItem from "./TodoItem";
import { todoListSEL } from "../../../store/redux-selectors/todoSel";

export default function TodoList() {
  const todoList = useSelector(todoListSEL);

  return (
    <div className="todo">
      {todoList.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
      <div></div>
    </div>
  );
}
