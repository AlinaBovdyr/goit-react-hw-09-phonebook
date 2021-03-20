import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
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

class ContactsView extends PureComponent {
  state = {
    showModal: false,
    error: false,
    text: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { contacts, isLoading, isError } = this.props;

    return (
      <Container>
        <Header onClick={this.toggleModal} />

        {isLoading && <LoaderView />}

        <CSSTransition
          in={showModal}
          unmountOnExit
          classNames="modal"
          timeout={500}
        >
          <Modal onClose={this.toggleModal}>
            <ContactForm onSave={this.toggleModal} />
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
        
        </Container>
    );
  }
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
  isLoading: getIsLoading(state),
  isError: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContact())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);