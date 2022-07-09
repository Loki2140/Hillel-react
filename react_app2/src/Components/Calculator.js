import "./Calculator.scss";
import React, { Component } from "react";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      firstOperand: "",
      secondOperand: "",
      select: "+",
      summ: ""
    };
  }
  render() {
    return (
      <div className="calculator">
        <input
          type="text"
          onChange={(e) => {
            this.handelerOperand("firstOperand", e);
          }}
        />
        <select
          onChange={(e) => {
            this.handelerOperand("select", e);
          }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            this.handelerOperand("secondOperand", e);
          }}
        />
        <span>{this.state.summ}</span>
      </div>
    );
  }

  //Универсалый сопосб
  handelerOperand(msg, event) {
    const { ...items } = this.state;
    items[msg] = event.target.value;
    this.setState(items, () => {
      this.checkOperands();
    });
  }
  checkOperands() {
    return isNaN(this.state.firstOperand) ||
      this.state.firstOperand === "" ||
      isNaN(this.state.secondOperand) ||
      this.state.secondOperand === ""
      ? this.result("")
      : this.countOperands(
          this.state.select,
          Number(this.state.firstOperand),
          Number(this.state.secondOperand)
        );
  }

  // Для каждого по отдельности
  // handelerOperand1 = (e) => {
  //   this.setState({ firstOperand: e.target.value }, () => {
  //     this.checkOperands();
  //   });
  // };
  // handelerOperand2 = (e) => {
  //   this.setState({ secondOperand: e.target.value }, () => {
  //     this.checkOperands();
  //   });
  // };

  // handelerSelect = (event) => {
  //   this.setState({ select: event.target.value }, () => {
  //     this.checkOperands();
  //   });
  // };

  countOperands(action, operandA, operandB) {
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
