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
    const prevErrorList = this.state.errors;
    return getObjList()
      .then((data) => this.setState({ contacts: data }))
      .catch(() => {
        this.setState({
          errors: [
            ...prevErrorList,
            "Something went wrong, cannot get Contacts!!!"
          ]
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
        />
        <div className="error">
          {this.state.errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
      </>
    );
  }

  removeContact = (id) => {
    const prevContacts = this.state.contacts;
    const prevErrorList = this.state.errors;
    const newContacts = this.state.contacts.filter((item) => item.id !== id);
    this.setState({
      contacts: newContacts
    });
    return removeObj(id).catch(() => {
      this.setState({
        errors: [
          ...prevErrorList,
          "Something went wrong, cannot remove Contact!!!"
        ],
        contacts: prevContacts
      });
    });
  };

  addNewContact = (newObj) => {
    const prevErrorList = this.state.errors;
    createObj(newObj)
      .then((data) => {
        this.setState({
          contacts: [...this.state.contacts, data]
        });
      })
      .catch(() => {
        this.setState({
          errors: [
            ...prevErrorList,
            "Something went wrong, cannot add Contact!!!"
          ]
        });
      });
  };
  // lection - work
  updateContactForm = (updatedContact) => {
    const prevContact = this.state.contacts.find(
      (item) => item.id === updatedContact.id
    );
    const prevErrorList = this.state.errors;

    this.setState({
      contacts: this.state.contacts.map((item) =>
        item.id === updatedContact.id ? updatedContact : item
      )
    });

    return updateObj(updatedContact).catch(() => {
      this.setState({
        errors: [
          ...prevErrorList,
          "Something went wrong, cannot add Contact!!!"
        ],
        contacts: this.state.contacts.map((item) =>
          item.id === prevContact.id ? prevContact : item
        )
      });
    });
  };

  updateContact = (id) => {
    const contact = this.state.contacts.find((item) => item.id === id);
    this.setState({
      edit: true,
      contact: contact
    });
  };
}
