import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../actions/account';
import { modalLoginOpen, modalRegisterOpen } from '../../actions/modal';

function Header(props) {
  let pagesList = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
  ];
  
  const authUserList = (
    <ul className="navbar-nav ml-auto align-items-center">
      <li className="nav-item mr-3 text-light">
        Welcome {props.email}
      </li>
      <li className="nav-item">
        <button
          className='nav-link btn btn-info'
          onClick = {props.logout}
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
          onClick = {props.modalLoginOpen}
        >
          Login
        </button>
      </li>
      <li className="nav-item">
        <button
          className='nav-link btn btn-link'
          onClick = {props.modalRegisterOpen}
        >
          Register
        </button>
      </li>
    </ul>
  )

  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              {pagesList.map((link) => 
                <li className="nav-item" key={link.title.toString()}>
                  <NavLink className="nav-link" exact to={link.to}>
                    {link.title}
                  </NavLink>
                </li>
              )} 
            </ul> 
            {props.isAuth ? authUserList : unauthUserList} 
          </div>
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.account.isAuth,
  email: state.account.email,
})

const mapDispatchToProps = {
  modalLoginOpen,
  modalRegisterOpen,
  logout,
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Header);