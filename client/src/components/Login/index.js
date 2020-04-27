import React, { useState } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { modalLoginClose } from '../../actions/modal';
import { login } from '../../actions/account';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    props.login({ email, password }); 
  };

  return (
    <Modal
      status={props.status}
      close={props.modalLoginClose}
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
            disabled={props.isLoading}
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
            disabled={props.isLoading}
          />
        </div>
        <div className="form-group d-flex justify-content-end mb-0">
          <button 
            className="btn btn-primary"
            disabled={props.isLoading} 
          >
            Enter
          </button>
        </div>
      </form>
    </Modal> 
  )
}

const mapStateToProps = (state) => ({
  status: state.modal.login,
  isAuth: state.account.isAuth,
  isLoading: state.account.isLoading,
})

const mapDispatchToProps = {
  modalLoginClose, 
  login,
};

export default connect(
  (state) => mapStateToProps, 
  mapDispatchToProps
)(Login);