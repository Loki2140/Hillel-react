import React from "react";
import { useSelector } from "react-redux";
import "./TodoList.scss";
import TodoItem from "./TodoItem";
import {
  todoListSEL,
  loadingSEL
} from "../../../store/redux-selectors/todoSel";
import Loader from "./../../../common/components/Loader/Loader";

export default function TodoList() {
  const todoList = useSelector(todoListSEL);
  const todoLoading = useSelector(loadingSEL);

  return todoLoading ? (
    <Loader />
  ) : (
    <div className="todo">
      {todoList.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}
