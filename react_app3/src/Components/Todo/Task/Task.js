import React, { Component } from "react";
import "./Task.scss";

export default class Task extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.toggleDoneTask(this.props.task.id)}
        className={this.props.task.done ? "task done" : "task undone"}
      >
        <div className="taskName">{this.props.task.taskName}</div>
        <button
          onClick={(e) => this.props.delTask(this.props.task.id, e)}
          className="del"
        >
          x
        </button>
      </div>
    );
  }
}
