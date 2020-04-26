import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Header from '../../components/Header';

// PAGES
import Home from '../Home';
import About from '../About';
import Algorithm from '../Algorithm';

function App() { 
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/algorithm/:algorithmId" component={Algorithm} /> 
      </Switch>
    </Router>
  );
}

export default connect((state) => ({user: state}), {})(App);