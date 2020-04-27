import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.css';

const Modal = (props) => {
  const ref = React.createRef();
  return (
    <CSSTransition
      in={props.status}
      timeout={200}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      unmountOnExit
    >
      <div
        className={styles.modalBackdrop}
        ref={ref}
        onClick={(e) => e.target === ref.current && props.close()}
      >
        <div className="modal-dialog w-100">
          <div className="modal-content">
            <div className="modal-header">
              {props.title &&
                <h5 className="modal-title">{props.title}</h5>
              }
              <button 
                onClick={props.close}
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            {props.footer &&
              <div className="modal-footer">
                {props.footer}
              </div>
            }
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Modal;