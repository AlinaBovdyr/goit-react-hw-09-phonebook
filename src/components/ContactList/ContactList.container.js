import { connect } from 'react-redux';
import { deleteContact, getSortContacts } from '../../redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = (state) => ({
    contacts: getSortContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
