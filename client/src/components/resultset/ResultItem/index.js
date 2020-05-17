import React from 'react';
import { connect } from 'react-redux';
import { resultDelete } from '../../../actions/result';
import { tableOpen, candleOpen } from '../../../actions/modal';
import { timestampToDateTime } from '../../../functions/timestamp';

const ResultItem = ({ data, tableOpen, resultDelete }) => {
  if (data.error) {
    return (<div className="card card-body border-primary">Error</div>);
  }

  return ( 
    <>
      <div className="d-flex flex-wrap flex-md-column mb-3 mb-md-0">
        <div className="ml-3 ml-md-0">
          <span className="font-weight-bold">ID: </span>
          <span>{data.id}</span>
        </div>
        <div className="ml-3 ml-md-0">
          <span className="font-weight-bold">Loaded: </span>
          <span>{timestampToDateTime(data.meta.loaded)}</span>
        </div>
        <div className="ml-3 ml-md-0">
          <span className="font-weight-bold">Created by: </span>
          <span>{data.meta.algorithm}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-md-auto">
          <button 
            className="btn btn-outline-info w-100"
            onClick={() => tableOpen({
              // headers: data.meta.headers,
              data: data.data,
              // type: data.meta.type,
            })}>
            View
          </button>
        </div>
        <div className="col-6 col-md-auto">
          <button 
            className="btn btn-outline-danger w-100"
            onClick={() => resultDelete(data.id)}>
            Delete
          </button>
        </div>
      </div> 
    </>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  tableOpen: (value) => dispatch(tableOpen(value)),
  resultDelete: (value) => dispatch(resultDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultItem);
