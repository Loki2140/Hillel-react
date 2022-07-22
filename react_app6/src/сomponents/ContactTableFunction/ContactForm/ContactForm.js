import React, { useState } from "react";
import "./ContactForm.scss";

export default function ContactForm({
  contact,
  addNewContact,
  updateContactForm,
  edit,
  editContact,
  errorEmptyField
}) {
  const [formContact, setFormContact] = useState({
    name: "",
    surname: "",
    email: ""
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    let newContact = {};
    if (edit) {
      newContact = {
        ...contact,
        name: contact.name,
        surname: contact.surname,
        email: contact.email
      };
    } else {
      newContact = {
        name: formContact.name,
        surname: formContact.surname,
        email: formContact.email
      };
    }
    if (!isContactValid(newContact)) return errorEmptyField();
    if (edit) {
      updateContactForm(newContact);
      setFormContact({
        name: "",
        surname: "",
        email: ""
      });
      return;
    }
    addNewContact(newContact);
    setFormContact({
      name: "",
      surname: "",
      email: ""
    });
  };

  const onNameInputChange = (e) => {
    if (edit) editContact(e);
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const isContactValid = (contact) => {
    return (
      isTextFieldValid(contact.name) &&
      isTextFieldValid(contact.surname) &&
      isTextFieldValid(contact.email)
    );
  };

  const isTextFieldValid = (value) => {
    return value !== "";
  };

  return (
    <form className="newContact">
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        value={edit ? contact.name : formContact.name}
        onChange={onNameInputChange}
      />
      <input
        id="surname"
        name="surname"
        type="text"
        placeholder="Surname"
        value={edit ? contact.surname : formContact.surname}
        onChange={onNameInputChange}
      />
      <input
        id="email"
        name="email"
        type="text"
        placeholder="E-mail"
        value={edit ? contact.email : formContact.email}
        onChange={onNameInputChange}
      />
      <button onClick={onFormSubmit} name="addRow" id="addRow">
        {edit ? "Edit Contact" : "Add Contact"}
      </button>
    </form>
  );
}
