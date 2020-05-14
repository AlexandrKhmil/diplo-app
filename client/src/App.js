import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';

import Header from './components/layout/Header';
import Modal from './components/layout/Modal';

import Login from './components/account/Login';
import Registration from './components/account/Registration';

import Alert from './components/alert/Alert';
import AlertTemplate from './components/alert/AlertTemplate';

import DataTable from './components/dataset/DataTable';

import Home from './components/pages/Home';
import AlgorithmPage from './components/pages/Algorithm';
import DataPage from './components/pages/DataPage';

import { accountAuth } from './actions/account';
import { closeLogin, closeReg, modalDatasetClose } from './actions/modal';

import { finhubToDataset } from './functions/dataset';

const App = (props) => {
  const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.FADE,
    containerStyle: {
      zIndex: 1070
    },
  };

  useEffect(() => {
    if (!props.isAuth && props.token) props.accountAuth({ token: props.token });
  }, [props, props.isAuth, props.token, props.accountAuth]);

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
        <Modal
          status={props.modalDatasetStatus}
          title="Dataset"
          close={props.modalDatasetClose}>
          <DataTable data={props.viewedDataset} />
        </Modal>
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/algorithm/:link" component={AlgorithmPage} />
          <Route path="/datasets/" component={DataPage} />
        </Switch>
      </Router>
    </AlertProvider>
  );
};

const mapStateToProps = (state) => {
  const list = state.dataset.list;
  const viewed = state.modal.dataset.viewed
  const viewedDataset = list[viewed] ? finhubToDataset(list[viewed]) : [];

  return {
    viewedDataset,
    isAuth: state.account.isAuth,
    token: state.account.token,
    modalLoginStatus: state.modal.login.isOpen,
    modalRegStatus: state.modal.reg.isOpen,
    modalDatasetStatus: state.modal.dataset.isOpen,
  };
};

const mapDispatchToProps = (dispatch) => ({
  accountAuth: (value) => dispatch(accountAuth(value)),
  closeLogin: () => dispatch(closeLogin()),
  closeReg: () => dispatch(closeReg()),
  modalDatasetClose: () => dispatch(modalDatasetClose())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
