import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getAllContacts } from '../../redux/contacts';
import { toast } from 'react-toastify';
import s from './ContactForm.module.css';

export default function ContactForm({onSave}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getAllContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        toast.error(`The type of field name - ${name} is not processed`);
    }
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (name === '') {
        return toast.error('Enter a contact name', {position: "top-center",});
      };

      if (number === '') {
        return toast.error('Enter a contact number', {position: "top-center",});
      };

      if (contacts.some(contact => contact.name === name)) {
        return toast.error(`${name} is already in contacts!`, {position: "top-center",});
      };

      dispatch(addContact(name, number));
      toast.success('The contact was added', {position: "top-left"});
      onSave();
      setName('');
      setNumber('');
    }, [contacts, dispatch, name, number, onSave]
  );
  
  return (
      <>
        <form className={s.container} onSubmit={handleSubmit}>
          <label className={s.field}>
            <span className={s.label}>Name</span>
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className={s.field}>
            <span className={s.label}>Number</span>
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
};