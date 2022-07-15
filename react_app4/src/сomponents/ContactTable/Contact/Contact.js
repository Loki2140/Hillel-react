import React, { Component } from "react";
import "./Contact.scss";

export default class ContactTableHead extends Component {
  onDelClick = (e) => {
    e.stopPropagation();
    this.props.removeContact(this.props.contact.id);
  };
  onContactChenge = () => {
    this.props.updateContact(this.props.contact.id);
  };

  removeContact;
  render() {
    return (
      <tr className="trItem" onClick={this.onContactChenge}>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.surname}</td>
        <td>{this.props.contact.email}</td>
        <td className="del" onClick={this.onDelClick}>
          X
        </td>
      </tr>
    );
  }
}
