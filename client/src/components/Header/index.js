import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
  const pagesList = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
  ];
  const userList = [
    { title: 'Login', to: '/login' },
    { title: 'Register', to: '/register' },
  ]
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              {pagesList.map((link) => 
                <li className="nav-item" key={link.title.toString()}>
                  <NavLink className="nav-link" exact to={link.to}>{link.title}</NavLink>
                </li>
              )} 
            </ul>
            <ul className="navbar-nav ml-auto">
              {userList.map((link) => 
                <li className="nav-item" key={link.title.toString()}>
                  <NavLink className="nav-link" to={link.to}>{link.title}</NavLink>
                </li>
              )} 
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}