import React, { Component } from "react";
import "./ContactTableHead.scss";

export default class ContactTableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>E-mail</th>
          <th>Удалить</th>
        </tr>
      </thead>
    );
  }
}
