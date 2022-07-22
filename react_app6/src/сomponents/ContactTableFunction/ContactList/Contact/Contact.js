import React from "react";
import "./Contact.scss";

export default function Contact({
  contact,
  edit,
  removeContact,
  updateContact
}) {
  const onDelClick = (e) => {
    e.stopPropagation();
    removeContact(contact.id);
  };
  const onContactChenge = () => {
    if (edit) return;
    updateContact(contact.id);
  };

  return (
    <tr className="trItem" onClick={onContactChenge}>
      <td>{contact.name}</td>
      <td>{contact.surname}</td>
      <td>{contact.email}</td>
      <td className="del" onClick={onDelClick}>
        X
      </td>
    </tr>
  );
}
