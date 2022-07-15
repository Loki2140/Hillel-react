import React, { Component } from "react";
import ContactTableHead from "./ContactTableHead/ContactTableHead";
import Contact from "./Contact/Contact.js";
import ContactForm from "./ContactForm/ContactForm.js";
import { getObjList, createObj, removeObj, updateObj } from "../../contact_api";

import "./ContactTable.scss";

export default class ContactTable extends Component {
  state = {
    contacts: [],
    errors: [],
    edit: false,
    contact: {}
  };

  componentDidMount() {
    this.fetchContacts();
  }
  fetchContacts() {
    return getObjList()
      .then((data) => this.setState({ ...this.state, contacts: data }))
      .catch(() => {
        this.setState({
          ...this.state,
          errors: ["Something went wrong, cannot get Contacts!!!"]
        });
      });
  }

  render() {
    return (
      <>
        <table className="flex-table">
          <ContactTableHead />
          <tbody className="tbody">
            {this.state.contacts.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
                removeContact={this.removeContact}
                updateContact={this.updateContact}
              />
            ))}
          </tbody>
        </table>
        <ContactForm
          addNewContact={this.addNewContact}
          edit={this.state.edit}
          contact={this.state.contact}
          updateContactForm={this.updateContactForm}
          errorEmptyField={this.errorEmptyField}
        />
        <div className="error">
          <div>{this.state.errors}</div>
        </div>
      </>
    );
  }

  removeContact = (id) => {
    const prevContacts = this.state.contacts;
    const newContacts = this.state.contacts.filter((item) => item.id !== id);
    this.setState({ ...this.state, contacts: newContacts });
    return removeObj(id).catch(() => {
      this.setState({
        ...this.state,
        errors: ["Something went wrong, cannot remove Contact!!!"],
        contacts: prevContacts
      });
    });
  };

  addNewContact = (newObj) => {
    createObj(newObj)
      .then((data) => {
        this.setState({
          ...this.state,
          contacts: [...this.state.contacts, data]
        });
      })
      .catch(() => {
        this.setState({
          ...this.state,
          errors: ["Something went wrong, cannot add Contact!!!"]
        });
      });
  };

  updateContactForm = (updatedContact) => {
    const prevContact = this.state.contacts.find(
      (item) => item.id === updatedContact.id
    );
    console.log(prevContact);
    console.log(updatedContact);

    this.setState({
      ...this.state,
      contacts: this.state.contacts.map((item) =>
        item.id === updatedContact.id ? updatedContact : item
      ),
      edit: false
    });

    return updateObj(updatedContact).catch(() => {
      this.setState({
        ...this.state,
        errors: ["Something went wrong, cannot edit Contact!!!"],
        contacts: this.state.contacts.map((item) =>
          item.id === prevContact.id ? prevContact : item
        )
      });
    });
  };

  updateContact = (id) => {
    const contact = this.state.contacts.find((item) => item.id === id);
    this.setState({ ...this.state, edit: true, contact: contact });
  };

  errorEmptyField = () => {
    this.setState({
      ...this.state,
      errors: ["There should not be empty fields!"]
    });
  };

  // как это работает?
  componentDidUpdate(prev, prevState) {
    console.log(this.state.errors === prevState.errors);

    if (this.state.errors === prevState.errors) {
      this.setState({ ...this.state, errors: [] });
    }
  }
}
