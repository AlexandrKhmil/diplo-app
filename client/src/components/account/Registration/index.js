import React, { useState } from 'react';
import { connect } from 'react-redux';
import { accountReg } from '../../../actions/account';
import { messageShow } from '../../../actions/message';
import * as msgType from '../../../constants/message-type';

const Registration = ({ isLoading, accountReg, messageShow }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const match = password === passwordRepeat;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      const error = { 
        type: msgType.MESSAGE_ERROR,
        title: 'Ошибка!',
        text: 'Пароли не совпадают!', 
      };
      return messageShow(error);
    }
    accountReg({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading} />
      </div>
      <div className="form-group">
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <input
          type="password"
          className={`form-control ${!match && "is-invalid"}`}
          name="passwordRepeat"
          onChange={(e) => setPasswordRepeat(e.target.value)}
          value={passwordRepeat}
          disabled={isLoading} />
      </div>
      <div className="form-group d-flex justify-content-end mb-0">
        <button 
          className="btn btn-primary d-flex justify-content-between align-items-center"
          type="submit"
          disabled={isLoading}>
          {isLoading && (
            <span 
              className="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true">
            </span>
          )}
          {!isLoading ? 'Enter' : 'Loading'}
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.account.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  accountReg: (value) => dispatch(accountReg(value)),
  messageShow: (value) => dispatch(messageShow(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);