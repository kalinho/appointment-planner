import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleContactChange = (e) => {
    setContact(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} required placeholder='Title' onChange={handleTitleChange}></input>
      <ContactPicker contacts={contacts} handleChange={handleContactChange} />
      <input type='date' value={date} required min={getTodayString} onChange={handleDateChange}></input>
      <input type='time' value={time} required onChange={handleTimeChange}></input>
      <input type='submit' value='Add appointment'></input>
    </form>
  );
};