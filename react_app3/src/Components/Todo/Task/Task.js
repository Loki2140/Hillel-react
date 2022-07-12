import React, { Component } from "react";
import "./Task.scss";

export default class Task extends Component {
  onToggleClick = (e) => {
    e.stopPropagation();
    this.props.delTask(this.props.task.id);
  };

  render() {
    return (
      <div
        onClick={() => this.props.toggleDoneTask(this.props.task.id)}
        className={this.props.task.done ? "task done" : "task undone"}
      >
        <div className="taskName">{this.props.task.taskName}</div>
        <button onClick={this.onToggleClick} className="del">
          x
        </button>
      </div>
    );
  }
}
