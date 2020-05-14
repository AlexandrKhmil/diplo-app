import React from 'react';
import { connect } from 'react-redux';
import { selectDataset, datasetDelete } from '../../../actions/dataset';
import { timestampToDataTime } from '../../../functions/timestamp';

const DatasetList = ({ list, selected, selectDataset, datasetDelete }) => {
  return (
    <>
      {list.map((dataset) => (
        <div className="card card-body border-primary mb-3 flex-row justify-content-between align-items-center" key={dataset.loaded}>
          <div>
            <div>
              <span className="font-weight-bold">Создан: </span> 
              <span>{timestampToDataTime(dataset.loaded)}</span>
            </div>
          </div>
          <div>
            <button 
              className={`btn ${selected === dataset.loaded ? 'btn-success' : 'btn-outline-success'} mr-3`}
              onClick={() => selectDataset(dataset.loaded)}>
              Select
            </button>
            <button 
              className="btn btn-outline-danger"
              onClick={() => datasetDelete(dataset.loaded)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  list: Object.values(state.dataset.list),
  selected: state.dataset.selected,
});

const mapDispatchToProps = (dispatch) => ({
  selectDataset: (value) => dispatch(selectDataset(value)),
  datasetDelete: (value) => dispatch(datasetDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetList);
