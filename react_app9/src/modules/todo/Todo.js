import React, { useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { errorSEL } from "../../store/redux-selectors/todoSel";
import { useDispatch, useSelector } from "react-redux";
import { fetchTODO } from "../../store/actions/todoActions";

export default function Todo() {
  const todoErrors = useSelector(errorSEL);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTODO());
  }, []);

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
