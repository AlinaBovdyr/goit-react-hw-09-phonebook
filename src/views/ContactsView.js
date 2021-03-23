import React, { useState, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContact } from '../redux/contacts/contacts-operations';
import { getAllContacts, getError, getIsLoading } from '../redux/contacts/selectors';

import Container from '../components/Container';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import Sorter from '../components/Sorter';
import Modal from '../components/UI/Modal/Modal';
import LoaderView from '../components/UI/Loader';
import ErrorView from '../components/UI/Error';

import '../styles/animations/Fade.css';
import '../styles/animations/ModalAppear.css';
import '../styles/animations/NoticeAppear.css';
import '../styles/animations/ContactListAppear.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  const contacts = useSelector(getAllContacts);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <Container>
      <Header onClick={toggleModal} />

      <CSSTransition
        in={showModal}
        unmountOnExit
        classNames="modal"
        timeout={500}
      >
        <Modal onClose={toggleModal}>
          <ContactForm onSave={toggleModal} />
        </Modal>
      </CSSTransition>

      <CSSTransition
        in={contacts.length > 1}
        unmountOnExit
        classNames="fade"
        timeout={250}
      >
        <div>
          <Filter />
          <Sorter />
        </div>
      </CSSTransition>

      <CSSTransition
        in={true}
        appear={true}
        unmountOnExit
        classNames="item-fade"
        timeout={500}
      >
        {isError ? <ErrorView /> : <ContactList />}
      </CSSTransition>
      
      {isLoading && <LoaderView />}
      
      </Container>
  );
};