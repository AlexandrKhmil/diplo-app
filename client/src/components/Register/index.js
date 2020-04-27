import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { modalRegisterClose } from '../../actions/modal';
import { register } from '../../actions/account';
import { errorAlert } from '../../actions/error';

const Register = ({
  status,
  isLoading, 
  modalRegisterClose,
  register,
  errorAlert,
  dispatch,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const match = password === passwordRepeat;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      const error = { msg: 'Пароли не совпадают!' };
      return errorAlert(error)(dispatch);
    }
    register({ email, password });
  };

  return (
    <Modal
      status={status}
      close={modalRegisterClose}
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
        <div className="form-group">
          <label htmlFor="passwordRepeat">Password Repeat</label>
          <input
            type="password"
            className={`form-control ${!match && "is-invalid"}`}
            name="passwordRepeat"
            onChange={(e) => setPasswordRepeat(e.target.value)}
            value={passwordRepeat}
            disabled={isLoading}
          />
        </div>
        <div className="form-group d-flex justify-content-end mb-0">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            Enter
          </button>
        </div>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  status: state.modal.register,
  isLoading: state.account.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  modalRegisterClose: () => modalRegisterClose()(dispatch),
  register,
  errorAlert,
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);