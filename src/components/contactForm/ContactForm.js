import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{color: 'red', fontSize: '0.7rem'}}>{ !isDuplicate || '* Namnet finns redan' }</label>
      <input type='text' placeholder="Name" required value={name} onChange={handleNameChange} />
      <input type='tel' placeholder="Phone required 07XXXXXXXX" pattern="([0][7])([0-9]){8}" value={phone} onChange={handlePhoneChange} />
      <input type='email' placeholder="Email" required value={email} onChange={handleEmailChange} />
      <input type='submit' value='Add contact' />
    </form>
  );
};
