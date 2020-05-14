import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDataset, datasetDelete } from '../../../actions/dataset';
import { modalDatasetOpen } from '../../../actions/modal';
import { timestampToDataTime } from '../../../functions/timestamp';
import { datasetListSort } from '../../../functions/dataset';
import * as datasetSortType from '../../../constants/dataset-sort-type';

const DatasetList = ({ 
  list, 
  selected, 
  selectDataset, 
  datasetDelete, 
  modalDatasetOpen 
}) => {
  const [selectedSort, setSelectedSort] = useState(datasetSortType.DATASET_DATE_DESC);
  const [sortedList, setSortedList] = useState(datasetListSort(list, selectedSort));
  useEffect(() => {
    setSortedList(datasetListSort(list, selectedSort));
  }, [list, selectedSort]);

  return (
    <>
      <div className="card card-body border-primary mb-3 flex-row align-items-center">
        <label className="font-weight-bold mb-0" htmlFor="datasetSort">Sort by:</label> 
        <select className="ml-3" id="datasetSort" onChange={(e) => setSelectedSort(e.target.value)}>
          <option value={datasetSortType.DATASET_DATE_DESC}>By Date DESC</option>
          <option value={datasetSortType.DATASET_DATE_ASC}>By Date ASC</option>
        </select> 
      </div>

      {sortedList.map((dataset) => (
        <div className="card card-body border-primary mb-3 flex-row justify-content-between align-items-center" key={dataset.loaded}>
          <div>
            <div>
              <span className="font-weight-bold">Создан: </span> 
              <span>{timestampToDataTime(dataset.loaded)}</span>
            </div>
          </div>
          <div>
            <button 
              className="btn btn-outline-info mr-3"
              onClick={() => modalDatasetOpen(dataset.loaded)}>
              View
            </button>
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
  modalDatasetOpen: (value) => dispatch(modalDatasetOpen(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetList);
