import React from "react";
import Contact from "./Contact/Contact";

export default function ContactList({
  contacts,
  edit,
  removeContact,
  updateContact
}) {
  return (
    <tbody className="tbody">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
          updateContact={updateContact}
          edit={edit}
        />
      ))}
    </tbody>
  );
}
