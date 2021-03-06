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
import Chart from 'react-google-charts';

import Home from './components/pages/Home';
import AlgorithmPage from './components/pages/AlgorithmPage';
import DataPage from './components/pages/DataPage';
import ResultPage from './components/pages/ResultPage';

import { accountAuth } from './actions/account';
import { closeLogin, closeReg, tableClose, linearClose, candleClose } from './actions/modal';
import { timestampToDateTime } from './functions/timestamp';

import * as colType from './constants/dataset-column-type';

const App = ({
  isAuth,
  token,
  accountAuth,

  loginIsOpen,
  closeLogin,

  regIsOpen,
  closeReg,

  tableIsOpen,
  tableClose,
  tableHeaders,
  tableData,
  tableType,

  linearStatus,
  linearData,
  linearClose,

  candleStatus,
  candleClose,
  candleData,
}) => {
  const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.FADE,
    containerStyle: {
      zIndex: 1070
    },
  };

  const linearOptions = {
    title: "Company Performance",
    curveType: "function",
    legend: 'none',
    bar: { groupWidth: '100%' },
    chartArea: {
      left: window.innerWidth <= 760 ? 30 : 50,
      top: 10, 
      bottom: 40,
      right: 10,
      width:'100%',
      height:'100%'
    },
  };
  
  const candleOptions = {
    legend: 'none',
    bar: { groupWidth: '100%' },
    chartArea: {
      left: window.innerWidth <= 760 ? 30 : 50,
      top: 10, 
      bottom: 40,
      right: 10,
      width:'100%',
      height:'100%'
    },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, 
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, 
    },
  };

  useEffect(() => {
    if (!isAuth && token) accountAuth({ token });
  }, [isAuth, token, accountAuth]);

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <Header />
        <Modal
          title="Login"
          status={loginIsOpen}
          close={closeLogin}>
          <Login />
        </Modal>
        <Modal
          title="Registration"
          status={regIsOpen}
          close={closeReg}>
          <Registration />
        </Modal>
        <Modal
          title="Dataset"
          status={tableIsOpen}
          close={tableClose}>
          <DataTable 
            headers={tableHeaders}
            data={tableData}
            type={tableType} />
        </Modal>
        <Modal
          status={linearStatus}
          title="Linear Chart"
          close={linearClose}>
          <Chart
            chartType="LineChart"
            width={'calc(80vw - 60px)'}
            height={'80vh'}
            data={linearData}
            options={linearOptions}
            loader={<div>Loading Chart</div>} />
        </Modal>
        <Modal
          status={candleStatus}
          title="Candle Chart"
          close={candleClose}>
          <Chart 
            width={'calc(80vw - 60px)'}
            height={'80vh'}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={candleData}
            options={candleOptions}
            rootProps={{ 'data-testid': '1' }} />
        </Modal>
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/algorithm/:link" component={AlgorithmPage} />
          <Route path="/datasets/" component={DataPage} />
          <Route path="/resultsets/" component={ResultPage} />
        </Switch>

      </Router>
    </AlertProvider>
  );
};

const mapStateToProps = (state) => {
  const linearType = state.modal.linear.type;
  const linearState = state.modal.linear.data;
  const linearData = linearState ? linearState.map((row, rowIndex) => {
    if (rowIndex === 0) return row;
    return row.map((item, index) => {
      return linearType[index] === colType.TIMESTAMP ? timestampToDateTime(item) : item
    });
  }) : [];

  const candleType = state.modal.candle.type;
  const candleState = state.modal.candle.data;
  const candleData = candleState ? candleState.map((row, rowIndex) => {
    if (rowIndex === 0) return row;
    return row.map((item, index) => {
      return candleType[index] === colType.TIMESTAMP ? timestampToDateTime(item) : item
    });
  }) : [];

  return {
    isAuth: state.account.isAuth,
    token: state.account.token,

    loginIsOpen: state.modal.login.isOpen,
    regIsOpen: state.modal.reg.isOpen,

    tableIsOpen: state.modal.table.isOpen,
    tableHeaders: state.modal.table.headers,
    tableData: state.modal.table.data,
    tableType: state.modal.table.type,

    linearStatus: state.modal.linear.isOpen,
    linearData,

    candleStatus: state.modal.candle.isOpen,
    candleData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  accountAuth: (value) => dispatch(accountAuth(value)),
  closeLogin: () => dispatch(closeLogin()),
  closeReg: () => dispatch(closeReg()),
  tableClose: () => dispatch(tableClose()),
  linearClose: () => dispatch(linearClose()),
  candleClose: () => dispatch(candleClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
