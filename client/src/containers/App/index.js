import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Header from '../../components/Header';
import Login from '../../components/Login';
import Modal from '../../components/Modal';

// PAGES
import Home from '../Home';
import About from '../About';
import Algorithm from '../Algorithm';

function App(props) {
  return ( 
    <Router>
      <Header />
      <Modal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/algorithm/:algorithmId" component={Algorithm} /> 
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = { 
};

export default connect((state) => mapStateToProps, mapDispatchToProps)(App);