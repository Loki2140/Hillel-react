import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { errorListSEL } from "../../store/redux-selectors/todoSel";
import { useSelector } from "react-redux";

export default function Todo() {
  const todoErrors = useSelector(errorListSEL);
  return (
    <>
      <TodoList />
      <TodoInput />
      <div
        className={
          "error" +
          (todoErrors === "" || todoErrors === null ? " invisible" : " ")
        }
      >
        {todoErrors}
      </div>
    </>
  );
}
