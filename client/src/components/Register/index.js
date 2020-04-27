import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { modalRegisterClose } from '../../actions/modal';
import { register } from '../../actions/account';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    props.register({ email, password });
  };
  return (
    <Modal
      status={props.status}
      close={props.modalRegisterClose}
      title="Register"
    >
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordRepeat">Password Repeat</label>
          <input
            type="password"
            className="form-control"
            name="passwordRepeat"
            onChange={(e) => setPasswordRepeat(e.target.value)}
            value={passwordRepeat}
          />
        </div>
        <div className="form-group d-flex justify-content-end mb-0">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Enter
          </button>
        </div>
      </form>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  status: state.modal.register
})

const mapDispatchToProps = {
  modalRegisterClose,
  register,
}

export default connect(
  (state) => mapStateToProps, 
  mapDispatchToProps
)(Register);