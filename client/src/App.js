import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';

import Header from './components/layout/Header';
import Modal from './components/layout/Modal';

import Login from './components/account/Login';
import Registration from './components/account/Registration';

import Alert from './components/alert/Alert';
import AlertTemplate from './components/alert/AlertTemplate';

import { closeLogin, closeReg } from './actions/modal';

const App = (props) => {
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
        <Modal
          status={props.modalLoginStatus}
          title="Login"
          close={props.closeLogin}>
          <Login />
        </Modal>
        <Modal
          status={props.modalRegStatus}
          title="Registration"
          close={props.closeReg}>
          <Registration />
        </Modal>
      </Router>
    </AlertProvider>
  );
};

const mapStateToProps = (state) => ({
  modalLoginStatus: state.modal.login.isOpen,
  modalRegStatus: state.modal.reg.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeLogin: () => dispatch(closeLogin()),
  closeReg: () => dispatch(closeReg()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
