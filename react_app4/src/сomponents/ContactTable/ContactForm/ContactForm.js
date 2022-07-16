import React, { Component } from "react";
import "./ContactForm.scss";

export default class ContactForm extends Component {
  state = {
    name: "",
    surname: "",
    email: ""
  };

  onNameInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email
    };
    if (this.isContactValid(newContact)) {
      this.props.addNewContact(newContact);
      this.setState({
        name: "",
        surname: "",
        email: ""
      });
    } else {
      this.props.errorEmptyField();
    }
  };

  onFormEdit = (e) => {
    e.preventDefault();
    const editedContact = {
      ...this.props.contact,
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email
    };
    if (this.isContactValid(editedContact)) {
      this.props.updateContactForm(editedContact);
      this.setState({
        name: "",
        surname: "",
        email: ""
      });
    } else {
      this.props.errorEmptyField();
    }
  };

  isContactValid() {
    return (
      this.isTextFieldValid(this.state.name) &&
      this.isTextFieldValid(this.state.surname) &&
      this.isTextFieldValid(this.state.email)
    );
  }

  isTextFieldValid(value) {
    return value !== "";
  }

  //Как-то сделал, теперь понять как?

  componentDidUpdate(prev) {
    // console.log("текущие пропмсы", this.props.edit);
    // console.log("прошлые пропмсы", prev.edit);
    // console.log(this.props.edit !== prev.edit);
    // console.log(this.props.edit !== prev.edit);
    if (this.props.edit !== prev.edit && this.props.edit) {
      // if (this.props.contact !== prev.contact) {
      this.setState({
        name: this.props.contact.name,
        surname: this.props.contact.surname,
        email: this.props.contact.email
      });
    }
  }

  render() {
    return (
      <form className="newContact">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onNameInputChange}
        />
        <input
          id="surname"
          name="surname"
          type="text"
          placeholder="Surname"
          value={this.state.surname}
          onChange={this.onNameInputChange}
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.onNameInputChange}
        />
        {this.props.edit ? (
          <button onClick={this.onFormEdit} name="addRow" id="addRow">
            Edit Contact
          </button>
        ) : (
          <button onClick={this.onFormSubmit} name="addRow" id="addRow">
            Add Contact
          </button>
        )}
      </form>
    );
  }
}
