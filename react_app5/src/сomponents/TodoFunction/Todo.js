import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";
import {
  getObjList,
  removeObj,
  createObj,
  updateObj
} from "./../../app_api";

export default function Todo() {
  const [toDoList, setToDoList] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getObjList()
      .then((data) => setToDoList(data))
      .catch(() => {
        setErrors(["Something went wrong, cannot get Contacts!!!"]);
        clearError();
      });
  }, []);

  const delTask = (id) => {
    const prevTodoList = toDoList;
    setToDoList(toDoList.filter((task) => task.id !== id));
    return removeObj(id).catch(() => {
      setToDoList(prevTodoList);
      setErrors(["Something went wrong, cannot remove Contact!!!"]);
      clearError();
    });
  };

  const toggleDoneTask = (id) => {
    const prevTodo = toDoList.find((item) => item.id === id);
    setToDoList(
      toDoList.map((item) =>
        item.id === prevTodo.id
          ? { ...prevTodo, isDone: !prevTodo.isDone }
          : item
      )
    );
    return updateObj({ ...prevTodo, isDone: !prevTodo.isDone }).catch(() => {
      setErrors(["Something went wrong, cannot upadate Contact!!!"]);
      setToDoList(
        toDoList.map((item) => (item.id === prevTodo.id ? prevTodo : item))
      );
      clearError();
    });
  };

  const addNewTask = (newTask) => {
    const prevTodoList = toDoList;
    setToDoList([...toDoList, newTask]);
    createObj(newTask)
      .then((data) => {
        setToDoList([...toDoList, data]);
      })
      .catch(() => {
        setToDoList(prevTodoList);
        setErrors(["Something went wrong, cannot add Contact!!!"]);
        clearError();
      });
  };

  const clearError = () => {
    setTimeout(() => {
      setErrors([]);
    }, 1500);
  };

  return (
    <>
      <TodoList
        delTask={delTask}
        toggleDoneTask={toggleDoneTask}
        toDoList={toDoList}
      />
      <TodoInput addNewTask={addNewTask} />
      <div className="error">
        <div>{errors}</div>
      </div>
    </>
  );
}
