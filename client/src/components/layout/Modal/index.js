import React, { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.css';

const Modal = ({ status, title, children, close, dialogStyles }) => {
  const ref = createRef();
  const backdropClose = (e) => e.target === ref.current && close();
  const timeout = 200;
  const classNames = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    exit: styles.exit,
    exitActive: styles.exitActive,
  };

  return (
    <CSSTransition
      in={status}
      timeout={timeout}
      classNames={classNames}
      unmountOnExit>
      <div
        className={styles.modalBackdrop}
        ref={ref}
        onClick={backdropClose}>
        <div className={`modal-dialog w-100 ${styles.autoWidth}`}>
          <div className="modal-content">
            <div className="modal-header">
              {title && (
                <h5 className="modal-title">{title}</h5>
              )}
              <button 
                onClick={close}
                className="close"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;