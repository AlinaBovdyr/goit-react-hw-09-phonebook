import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteContact, getSortContacts } from '../../redux/contacts';
import ContactListItem from './ContactListItem';
import './ContactListAnim.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getSortContacts);

  const onDeleteContact = useCallback(id => {
    dispatch(deleteContact(id));
  }, [dispatch]);

  return (
    <TransitionGroup component="ol">
      {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="item-fade">
            <ContactListItem
              name={name}
              number={number}
              onDelete={() => onDeleteContact(id)}
            />
          </CSSTransition>
      ))}
    </TransitionGroup>
  );
};