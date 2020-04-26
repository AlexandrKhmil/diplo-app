import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { modalLoginOpen } from '../../actions/modal';

function Header(props) {
  const { modalLoginOpen } = props;

  const pagesList = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
  ];
  const userList = [
    { title: 'Login', action: modalLoginOpen }
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
                    className="nav-link btn btn-link"
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
  
})

const mapDispatchToProps = {
  modalLoginOpen
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Header);