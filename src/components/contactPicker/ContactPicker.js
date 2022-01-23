import React from "react";

export const ContactPicker = ({contacts, handleChange}) => {
  return (
    <select onChange={handleChange}>
      <option value="" key="0" selected disabled >Choose contact</option>
      {contacts.map((contact, index) => <option value={contact.name} key={contact.name}>{contact.name}</option>)}
    </select>
  );
};