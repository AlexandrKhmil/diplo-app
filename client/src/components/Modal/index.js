import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.css';

const Modal = () => (
  <CSSTransition
    in={true}
    timeout={200}
    classNames={{
      enter: styles.enter,
      enterActive: styles.enterActive,
      exit: styles.exit,
      exitActive: styles.exitActive,
    }}
    unmountOnExit
  >
    <div className={styles.modalBackdrop}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button 
              onClick={this.props.close}
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* {this.props.children} */}
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </CSSTransition>
)

export default Modal;