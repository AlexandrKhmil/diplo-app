import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/data';
import { errorAlert } from '../../actions/error';

const DataLoader = ({ isLoading, loadData, errorAlert}) => {
  const [where, setWhere] = useState('finnhub.io');
  const [which, setWhich] = useState('AAPL');
  const [resolution, setResolution] = useState('W');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!start || !end) {
      const error = { msg: 'Укажите даты!' }
      return errorAlert(error);
    }

    loadData({ 
      where,
      resolution,
      start: Date.parse(start) / 1000, 
      end: Date.parse(end) / 1000, 
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Where */}
      <div className="form-group">
        <label htmlFor="where">Where</label>
        <input 
          type="text"
          className="form-control"
          name="where"
          onChange={(e) => setWhere(e.target.value)}
          value={where}
          disabled={true}
        />
      </div>

      {/* Which */}
      <div className="form-group">
        <label htmlFor="which">Which</label>
        <input 
          type="text"
          className="form-control"
          name="which"
          onChange={(e) => setWhich(e.target.value)}
          value={which}
          disabled={true}
        />
      </div>

      {/* Resolution */}
      <div className="form-group">
        <label htmlFor="resolution">Resolution</label>
        <input 
          type="text"
          className="form-control"
          name="resolution"
          onChange={(e) => setResolution(e.target.value)}
          value={resolution}
          disabled={true}
        />
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
          disabled={isLoading}
        />
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
          disabled={isLoading}
        />
      </div>

      {/* Submit */}
      <div className="form-group d-flex mb-0">
        <button
          className="btn btn-primary d-flex 
          justify-content-between align-items-center w-100"
          disabled={isLoading} 
        >
          {isLoading && 
            <span 
              className="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            >
            </span>
          }
          <span className="ml-auto">
            {!isLoading ? 'Load Data' : 'Loading'}
          </span>
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.data.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: (value) => loadData(value)(dispatch),
  errorAlert: (value) => errorAlert(value)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataLoader);