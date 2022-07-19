import React from "react";
import "./TodoList.scss";
import TodoTask from "./TodoTask/TodoTask";

export default function TodoList({ toDoList, delTask, toggleDoneTask }) {
  return (
    <div className="todo">
      {toDoList.map((task) => (
        <TodoTask
          key={task.id}
          task={task}
          delTask={delTask}
          toggleDoneTask={toggleDoneTask}
        />
      ))}
    </div>
  );
}
