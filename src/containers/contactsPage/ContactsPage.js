import React, { useState, useEffect } from "react";
import { TileList } from '../../components/tileList/TileList';
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = ({contacts, addNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addNewContact({
        name: name, 
        phone: phone, 
        email: email});
      resetForm()
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setIsDuplicate(false);
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const exists = contacts.map((contact) => contact.name).includes(name);
    setIsDuplicate(exists);
  }, [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList info={contacts} />
      </section>
    </div>
  );
};