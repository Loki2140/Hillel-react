import React, { Component } from "react";
import "./TaskInput.scss";

export default class TaskInput extends Component {
  state = {
    toDoNewTask: ""
  };

  addNewTaskName = (e) => {
    this.setState({
      toDoNewTask: e.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      // id: Date.now(), // не совсем понял почему генерировать id и done нужно именно там где хранится состояние?
      taskName: this.state.toDoNewTask
      // done: false
    };
    this.props.addNewTask(newTask);
    this.setState({ toDoNewTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          task="task"
          value={this.state.toDoNewTask}
          onChange={this.addNewTaskName}
          type="text"
        />
        <button>New Task</button>
      </form>
    );
  }
}
