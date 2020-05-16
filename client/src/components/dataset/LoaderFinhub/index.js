import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadDataFinhub } from '../../../actions/dataset';
import { messageShow } from '../../../actions/message';
import * as msgType from '../../../constants/message-type';
import * as finhubRes from '../../../constants/finhub-resolution';
import * as finhubSymbol from '../../../constants/finhub-symbol';

const LoaderFinhub = ({ isLoading, messageShow, loadDataFinhub }) => {
  const [symbol, setSymbol] = useState(finhubSymbol.APPLE.symbol);
  const [resolution, setResolution] = useState(finhubRes.ONE_MONTH.code);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!start || !end) {
      return messageShow( {
        type: msgType.MESSAGE_ERROR,
        title: 'Ошибка', 
        text: 'Укажите даты!' 
      });
    }
    if (!isLoading) loadDataFinhub({
      symbol,
      resolution,
      start: Date.parse(start) / 1000, 
      end: Date.parse(end) / 1000, 
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Symbol */}
      <div className="form-group">
        <label htmlFor="symbol">Symbol</label>
        <select 
          className="custom-select" 
          id="symbol" 
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          disabled={isLoading}>
          <option value={finhubSymbol.APPLE.symbol}>{finhubSymbol.APPLE.desc}</option>
          <option value={finhubSymbol.FACEBOOK.symbol}>{finhubSymbol.FACEBOOK.desc}</option>
          <option value={finhubSymbol.MICROSOFT.symbol}>{finhubSymbol.MICROSOFT.desc}</option>
          <option value={finhubSymbol.GOOGLE.symbol}>{finhubSymbol.GOOGLE.desc}</option>
        </select>
      </div>

      {/* Resolution */}
      <div className="form-group">
        <label htmlFor="resolution">Resolution</label>
        <select 
          className="custom-select" 
          id="resolution" 
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
          disabled={isLoading}>
          <option value={finhubRes.ONE_MINUTE.code}>{finhubRes.ONE_MINUTE.desc}</option>
          <option value={finhubRes.FIVE_MINUTES.code}>{finhubRes.FIVE_MINUTES.desc}</option>
          <option value={finhubRes.FIFTEEN_MINUTES.code}>{finhubRes.FIFTEEN_MINUTES.desc}</option>
          <option value={finhubRes.THIRTY_MINUTES.code}>{finhubRes.THIRTY_MINUTES.desc}</option>
          <option value={finhubRes.ONE_HOUR.code}>{finhubRes.ONE_HOUR.desc}</option>
          <option value={finhubRes.ONE_DAY.code}>{finhubRes.ONE_DAY.desc}</option>
          <option value={finhubRes.ONE_WEEK.code}>{finhubRes.ONE_WEEK.desc}</option>
          <option value={finhubRes.ONE_MONTH.code}>{finhubRes.ONE_MONTH.desc}</option>
        </select>
      </div>

      {/* From (Start) */}
      <div className="form-group">
        <label htmlFor="start">From</label>
        <input 
          type="date"
          className="form-control"
          name="start"
          onChange={(e) => setStart(e.target.value)}
          value={start}
          disabled={isLoading} />
      </div>

      {/* To (End) */}
      <div className="form-group">
        <label htmlFor="end">To</label>
        <input 
          type="date"
          className="form-control"
          name="end"
          onChange={(e) => setEnd(e.target.value)}
          value={end}
          disabled={isLoading} />
      </div>

      {/* Submit */}
      <div className="form-group d-flex mb-0">
        <button
          className="btn btn-primary d-flex 
          justify-content-between align-items-center w-100"
          disabled={isLoading}>
          {isLoading && (
            <span 
              className="spinner-border spinner-border-sm mr-2" 
              role="status" 
              aria-hidden="true">
            </span>
          )}
          <span className="ml-auto">
            {!isLoading ? 'Load Data' : 'Loading'}
          </span>
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.dataset.loader.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  messageShow: (value) => dispatch(messageShow(value)),
  loadDataFinhub: (value) => dispatch(loadDataFinhub(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoaderFinhub);
