import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import Chart from 'react-google-charts';

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
import { closeLogin, closeReg, modalDatasetTableClose, modalDatasetChartCandleClose } from './actions/modal';

import { finhubToDataset, finhubToCandle } from './functions/dataset';

const App = (props) => {
  
  // Alert
  const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.FADE,
    containerStyle: {
      zIndex: 1070
    },
  };
  
  // Candle Chart
  const chartCandleOptions = {
    legend: 'none',
    bar: { groupWidth: '100%' },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, 
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, 
    },
  };

  console.log(props.viewedDatasetCandle);

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
          status={props.modalDatasetTableStatus}
          title="Dataset"
          close={props.modalDatasetTableClose}>
          <DataTable headers={props.viewedTableHeaders} data={props.viewedDatasetTable} />
        </Modal>
        <Modal
          dialogStyles={{ maxWidth: '100%' }}
          status={props.modalDatasetCandleChartStatus}
          title="Candle Chart"
          close={props.modalDatasetChartCandleClose}>
          <Chart 
            width={'100%'}
            height={'100%'}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={props.viewedDatasetCandle}
            options={chartCandleOptions}
            rootProps={{ 'data-testid': '1' }} />
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
  const viewedTable = state.modal.datasetTable.viewed
  const viewedDatasetTable = list[viewedTable] ? finhubToDataset(list[viewedTable]) : [];
  const viewedTableHeaders = list[viewedTable] ? list[viewedTable].headers : [];
  
  const viewedCandle = state.modal.datasetCandle.viewed;
  const candleHeaders = ['day', 'Price', 'Open', 'Close', 'High'];
  const viewedDatasetCandle = list[viewedCandle] ? finhubToCandle(list[viewedCandle], candleHeaders) : [];

  return {
    viewedDatasetTable,
    viewedTableHeaders,
    viewedDatasetCandle,
    isAuth: state.account.isAuth,
    token: state.account.token,
    modalLoginStatus: state.modal.login.isOpen,
    modalRegStatus: state.modal.reg.isOpen,
    modalDatasetTableStatus: state.modal.datasetTable.isOpen,
    modalDatasetCandleChartStatus: state.modal.datasetCandle.isOpen,
  };
};

const mapDispatchToProps = (dispatch) => ({
  accountAuth: (value) => dispatch(accountAuth(value)),
  closeLogin: () => dispatch(closeLogin()),
  closeReg: () => dispatch(closeReg()),
  modalDatasetTableClose: () => dispatch(modalDatasetTableClose()),
  modalDatasetChartCandleClose: () => dispatch(modalDatasetChartCandleClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
