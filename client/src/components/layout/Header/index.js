import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { openLogin, openReg } from '../../../actions/modal';
import { accountLogout } from '../../../actions/account';

const Header = ({ isAuth, email, openLogin, openReg, accountLogout }) => {
  const unauthLinks = (
    <>
      <li className="nav-item">
        <button
          className="nav-link btn btn-link"
          onClick={openLogin}>
          Login
        </button>
      </li>
      <li className="nav-item">
        <button
          className="nav-link btn btn-link"
          onClick={openReg}>
          Registration
        </button>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className="nav-item mr-3 text-light">
        Welcome {email}
      </li>
      <li className="nav-item">
        <button
          className="nav-link btn btn-link"
          onClick={accountLogout}>
          Logout
        </button>
      </li>
    </>
  );

  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="headerNavbar">
          <div className="container">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto align-items-center">
              {!isAuth ? unauthLinks : authLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.account.isAuth,
  email: state.account.email,
});

const mapDispatchToProps = (dispatch) => ({
  openLogin: () => dispatch(openLogin()),
  openReg: () => dispatch(openReg()),
  accountLogout: () => dispatch(accountLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);