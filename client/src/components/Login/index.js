import React, { useState } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { modalLoginClose } from '../../actions/modal';
import { login } from '../../actions/account';

const Login = ({ status, isLoading, modalLoginClose, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password }); 
  };

  return (
    <Modal
      status={status}
      close={modalLoginClose}
      title="Login"
    >
      <form onSubmit={(e) => onSubmit(e)}> 
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
          />
        </div>
        <div className="form-group d-flex justify-content-end mb-0">
          <button 
            className="btn btn-primary d-flex 
              justify-content-between align-items-center"
            disabled={isLoading} 
          >
            {isLoading && 
              <span 
                class="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
              >
              </span>
            }
            {!isLoading ? 'Enter' : 'Loading'}
          </button>
        </div>
      </form>
    </Modal> 
  );
};

const mapStateToProps = (state) => ({
  status: state.modal.login,
  isLoading: state.account.isLoading,
});

const mapDispatchToProps = {
  modalLoginClose, 
  login,
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);