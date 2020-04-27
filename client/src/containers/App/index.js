import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  positions, 
  transitions,
  Provider as AlertProvider 
} from 'react-alert';

import { auth } from '../../actions/account';

// COMPONENTS
import Header from '../../components/Header';
import Login from '../../components/Login';
import Register from '../../components/Register';
import Alert from '../../components/Alert';
import AlertTemplate from '../../components/AlertTemplate';

// PAGES
import Home from '../Home';
import About from '../About';
import Algorithm from '../Algorithm';

const App = ({ token, auth }) => {
  useEffect(() => token && auth());

  const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.FADE,
    containerStyle: {
      zIndex: 1070
    },
  };

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <Header />
        <Login />
        <Register />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/algorithm/:algorithmId" component={Algorithm} /> 
        </Switch>
      </Router>
    </AlertProvider>
  );
};

const mapStateToProps = (state) => ({
  token: state.account.token,
});

const mapDispatchToProps = { 
  auth,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);