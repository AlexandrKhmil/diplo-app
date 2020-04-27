import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/account';
import { modalLoginOpen, modalRegisterOpen } from '../../actions/modal';

const Header = ({ 
  email,
  isAuth,
  modalLoginOpen,
  modalRegisterOpen,
  logout,
}) => {
  const pagesList = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to='/'>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to='/about'>
          About
        </NavLink>
      </li>
    </ul>
  );
  const authUserList = (
    <ul className="navbar-nav ml-auto align-items-center">
      <li className="nav-item mr-3 text-light">
        Welcome {email}
      </li>
      <li className="nav-item">
        <button
          className='nav-link btn btn-info'
          onClick = {logout}
        >
          Logout
        </button>
      </li>
    </ul>
  ); 
  const unauthUserList = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <button
          className='nav-link btn btn-link'
          onClick = {modalLoginOpen}
        >
          Login
        </button>
      </li>
      <li className="nav-item">
        <button
          className='nav-link btn btn-link'
          onClick = {modalRegisterOpen}
        >
          Register
        </button>
      </li>
    </ul>
  );

  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbar">
            {pagesList}
            {isAuth ? authUserList : unauthUserList} 
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

const mapDispatchToProps = {
  modalLoginOpen,
  modalRegisterOpen,
  logout,
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Header);