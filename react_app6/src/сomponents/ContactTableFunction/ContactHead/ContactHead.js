import React from "react";
import "./ContactHead.scss";

export default function ContactTableHead() {
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
