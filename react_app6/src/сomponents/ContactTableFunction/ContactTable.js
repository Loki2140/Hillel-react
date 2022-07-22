import React, { useState, useEffect } from "react";
import ContactHead from "./ContactHead/ContactHead";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { getObjList, createObj, removeObj, updateObj } from "./../../app_api";
import "./ContactTable.scss";

export default function ContactTable() {
  const [contacts, setContacts] = useState([]);
  const [errors, setErrors] = useState();
  const [edit, setEdit] = useState(false);
  const [editedContact, setEditedContact] = useState({});

  useEffect(() => {
    getObjList()
      .then((data) => setContacts(data))
      .catch(() => {
        setErrors("Something went wrong, cannot get Contacts!!!");
        clearError();
      });
  }, []);

  const clearError = () => {
    setTimeout(() => {
      setErrors("");
    }, 1500);
  };

  const editContact = (e) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value
    });
  };
  const removeContact = (id) => {
    const prevContacts = contacts;
    const newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
    return removeObj(id).catch(() => {
      setErrors("Something went wrong, cannot remove Contact!!!");
      setContacts(prevContacts);
      clearError();
    });
  };
  const addNewContact = (newObj) => {
    createObj(newObj)
      .then((data) => {
        setContacts([...contacts, data]);
      })
      .catch(() => {
        setErrors("Something went wrong, cannot add Contact!!!");
        clearError();
      });
  };

  const updateContactForm = (updatedContact) => {
    const prevContact = contacts.find((item) => item.id === updatedContact.id);
    setContacts(
      contacts.map((item) =>
        item.id === updatedContact.id ? updatedContact : item
      )
    );
    setEdit(false);
    return updateObj(updatedContact).catch(() => {
      setContacts(
        contacts.map((item) =>
          item.id === prevContact.id ? prevContact : item
        )
      );
      setErrors("Something went wrong, cannot edit Contact!!!");
      clearError();
    });
  };

  const updateContact = (id) => {
    const contact = contacts.find((item) => item.id === id);
    setEdit(true);
    setEditedContact(contact);
  };

  const errorEmptyField = () => {
    setErrors("There should not be empty fields!");
    clearError();
  };
  return (
    <>
      <table className="flex-table">
        <ContactHead />
        <ContactList
          contacts={contacts}
          removeContact={removeContact}
          updateContact={updateContact}
          edit={edit}
        />
      </table>
      <ContactForm
        addNewContact={addNewContact}
        edit={edit}
        contact={editedContact}
        updateContactForm={updateContactForm}
        editContact={editContact}
        errorEmptyField={errorEmptyField}
      />
      <div className="error">
        <div>{errors}</div>
      </div>
    </>
  );
}
