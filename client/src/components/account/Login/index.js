import React, { useState } from 'react';
import { connect } from 'react-redux';
import { accountLogin } from '../../../actions/account';

const Login = ({ isLoading, accountLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault(); 
    accountLogin({ email, password });
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
      <div className="form-group d-flex justify-content-end mb-0">
        <button 
          className="btn btn-primary d-flex justify-content-between align-items-center"
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
  accountLogin: (value) => dispatch(accountLogin(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);