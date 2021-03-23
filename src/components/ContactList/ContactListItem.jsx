import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../UI/IconButton/IconButton';
import s from './ContactList.module.css';
import { ReactComponent as DeleteIcon } from '../../icons/bin.svg';
import { ReactComponent as CallIcon } from '../../icons/phone.svg';
import { ReactComponent as EditIcon } from '../../icons/pencil.svg';
import { CSSTransition } from 'react-transition-group';
import Modal from '../UI/Modal/Modal';
import ContactForm from '../ContactForm/ContactForm';

function ContactListItem({ name, number, onDelete, onEditClick }) {
  const telNum = ['tel:', number].join('');
  const [showModal, setShowModal] = useState(false);
  const [contactData, setContactData] = useState(null);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const handleItemClick = () => {
    setContactData({ name, number, id: onEditClick });
  }

  return (
    <>
    <CSSTransition
        in={showModal}
        unmountOnExit
        classNames="modal"
        timeout={500}
      >
        <Modal onClose={toggleModal}>
          <ContactForm onSave={toggleModal} data={contactData}/>
        </Modal>
      </CSSTransition>

    <li className={s.contactItem} onClick={handleItemClick}>
      <span>{name}</span>
      <div className={s.contactWrapper}>
      <div>
        <span>{number}</span>
        <a className={s.link} href={telNum}>
          <IconButton
            title="Call up"
            className={s.button}
            aria-label="Make a call "
          >
            <CallIcon className={s.icon} fill="#0ce620" />
          </IconButton>
        </a>
      </div>
        <ul className={s.iconList}>
          <li className={s.iconItem}>
            <IconButton
              title="Delete contact"
              onClick={toggleModal}
              aria-label="Delete contact"
            >
              <EditIcon width="14" height="14" fill="#fff" />
            </IconButton>
          </li>
          <li className={s.iconItem}>
            <IconButton
              className={s.deleteIcon}
              title="Delete contact"
              onClick={onDelete}
              aria-label="Delete contact"
            >
              <DeleteIcon width="14" height="14" fill="#fff" />
            </IconButton>
          </li>
        </ul>
      </div>
      </li>
      </>
  );
}

ContactListItem.defaultProps = {
  photo: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  photo: PropTypes.string,
  onDelete: PropTypes.func,
  onEditBtnClick: PropTypes.func,
};

export default ContactListItem;
