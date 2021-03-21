import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as CloseIcon } from '../../../icons/cross.svg';
import IconButton from '../IconButton';
import s from './Modal.module.css';
import './ContentAppear.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseBtnClick = () => {
    onClose();
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <CSSTransition in={true} appear={true} timeout={250} classNames="content" unmountOnExit>
        <div className={s.content}>
          {children}
          <IconButton
            className={s.closeBtn}
            onClick={handleCloseBtnClick}
            aria-label="Close modal"
            title="Close modal"
          >
            <CloseIcon width="12" height="12" fill="#fff" />
          </IconButton>
        </div>
      </CSSTransition>
    </div>,
    modalRoot,
  );
};
