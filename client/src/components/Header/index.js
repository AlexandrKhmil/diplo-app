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

  pagesList = props.isAuth 
    ? [...pagesList, { title: 'Account', to: '/account' }] 
    : pagesList;
  
  const userList = !props.isAuth
  ? [
      { title: 'Login', action: props.modalLoginOpen },
      { title: 'Register', action: props.modalRegisterOpen },
    ]
  : [
      { title: 'Logout', action: props.logout, className: "btn-info" },
    ]

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
            <ul className="navbar-nav ml-auto">
              {userList.map((btn) => 
                <li className="nav-item" key={btn.title.toString()}>
                  <button
                    className={`nav-link btn 
                      ${btn.className ? btn.className : 'btn-link'}`}
                    onClick = {btn.action}
                  >
                    {btn.title}
                  </button>
                </li>
              )} 
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.account.isAuth,
})

const mapDispatchToProps = {
  modalLoginOpen,
  modalRegisterOpen,
  logout,
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Header);