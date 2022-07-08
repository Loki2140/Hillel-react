import "./Calculator.scss";
import React, { Component } from "react";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      firstOperand: 0,
      secondOperand: 0,
      select: "-",
      summ: 0
    };
  }
  render() {
    return (
      <div className="calculator">
        <input
          type="text"
          onChange={(event) => {
            this.handelerOperand("firstOperand", event);
          }}
        />
        <select onChange={this.handelerSelect}>
          <option value="-">-</option>
          <option value="+">+</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          type="text"
          onChange={(event) => {
            this.handelerOperand("secondOperand", event);
          }}
        />
        <button onClick={this.handlerEquels}>Equals</button>
        <span>{this.state.summ}</span>
      </div>
    );
  }

  handlerEquels = () => {
    this.commitAction(
      this.state.select,
      this.state.firstOperand,
      this.state.secondOperand
    );
  };

  handelerSelect = (event) => {
    this.setState({ select: event.target.value });
  };

  handelerOperand(msg, event) {
    const { ...items } = this.state;
    items[msg] = Number(event.target.value);
    this.setState(items);
  }

  commitAction(action, operandA, operandB) {
    switch (action) {
      case "+":
        return this.result((operandA += operandB));
      case "-":
        return this.result((operandA -= operandB));
      case "/":
        return this.result((operandA /= operandB));
      case "*":
        return this.result((operandA *= operandB));
      default:
        this.result("Error!");
    }
  }

  result(result) {
    this.setState({ summ: result });
  }
}
