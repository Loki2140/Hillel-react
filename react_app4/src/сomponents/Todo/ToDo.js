import React, { Component } from "react";
import Task from "./Task/Task";
import TaskInput from "./TaskInput/TaskInput";

export default class ToDo extends Component {
  state = {
    toDoList: [
      { id: 1, taskName: "Купить кота", done: true },
      { id: 2, taskName: "Погладить кота", done: false },
      { id: 3, taskName: "Убрать за котом", done: false },
      { id: 4, taskName: "Разочароваться в коте", done: false },
      { id: 5, taskName: "Пойти на диалог с котом", done: false },
      { id: 6, taskName: "Найти способ шантажа кота", done: false },
      {
        id: 7,
        taskName: "Узнать где кот прячет компромат на меня",
        done: false
      },
      { id: 8, taskName: "Уничтожить улики", done: false },
      { id: 9, taskName: "Перестать писать списки", done: false }
    ]
  };

  delTask = (id) => {
    this.setState({
      toDoList: this.state.toDoList.filter((task) => task.id !== id)
    });
  };

  toggleDoneTask = (id) => {
    this.setState({
      toDoList: this.state.toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      })
    });
  };

  addNewTask = (newTask) => {
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { ...newTask, id: Date.now(), done: false }
      ]
    });
  };

  render() {
    return (
      <div className="todo">
        {this.state.toDoList.map((task) => (
          <Task
            key={task.id}
            task={task}
            delTask={this.delTask}
            toggleDoneTask={this.toggleDoneTask}
          />
        ))}
        <TaskInput addNewTask={this.addNewTask} />
      </div>
    );
  }
}
