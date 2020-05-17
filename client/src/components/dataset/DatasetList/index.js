import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CSVLink } from "react-csv";
import { selectDataset, datasetDelete } from '../../../actions/dataset';
import { tableOpen, candleOpen } from '../../../actions/modal';
import { timestampToDateTime } from '../../../functions/timestamp';
import { datasetListSort } from '../../../functions/dataset';
import * as sortType from '../../../constants/dataset-list-sort-type';
import * as finhubRes from '../../../constants/finhub-resolution';
import * as finhubSymbol from '../../../constants/finhub-symbol';
import styles from './styles.module.css';

const DatasetList = ({ 
  list, 
  selected, 
  selectDataset, 
  datasetDelete, 
  tableOpen,
  candleOpen,
  wrapped,
}) => {
  const [sort, setSort] = useState(sortType.DATASET_DATE_DESC);
  const [sortedList, setSortedList] = useState(datasetListSort(list, sort));
  useEffect(() => {
    setSortedList(datasetListSort(list, sort));
  }, [list, sort]);

  return (
    <>
      <div className="card card-body border-primary mb-3 flex-row align-items-center">
        <label className="font-weight-bold mb-0" htmlFor="datasetSort">Sort by:</label> 
        <select 
          className="custom-select w-auto ml-3" 
          id="datasetSort" 
          onChange={(e) => setSort(e.target.value)}>
          <option value={sortType.DATASET_DATE_DESC}>By Date DESC</option>
          <option value={sortType.DATASET_DATE_ASC}>By Date ASC</option>
        </select> 
      </div>
      <div className={wrapped && styles.dataListWrapper}> 
        {sortedList.length === 0 && <p>No datasets were loaded...</p>} 
        {sortedList.map((dataset) => (
          <div 
            className="card card-body border-primary mb-3 flex-md-row justify-content-between align-items-md-center" 
            key={dataset.id}>

            <div className="d-flex flex-wrap flex-md-column mb-3 mb-md-0">
            <div className="ml-3 ml-md-0">
                <span className="font-weight-bold">ID: </span> 
                <span>{dataset.id}</span>
              </div>
              <div className="ml-3 ml-md-0">
                <span className="font-weight-bold">Loaded: </span> 
                <span>{timestampToDateTime(dataset.meta.loaded)}</span>
              </div>
              <div className="ml-3 ml-md-0">
                <span className="font-weight-bold">Source: </span> 
                <span>{dataset.meta.source}</span>
              </div>
              {dataset.meta.symbol && (
                <div className="ml-3 ml-md-0">
                  <span className="font-weight-bold">Symbol: </span> 
                  <span>
                    {Object.values(finhubSymbol)
                      .find((symbol) => {
                        return symbol.symbol === dataset.meta.symbol
                      }).desc
                    }
                  </span>
                </div>
              )}
              {dataset.meta.resolution && (
                <div className="ml-3 ml-md-0">
                  <span className="font-weight-bold">Resolution: </span> 
                  <span>
                    {Object.values(finhubRes)
                      .find((resol) => {
                        return resol.code === dataset.meta.resolution
                      }).desc
                    }
                  </span>
                </div>
              )}
            </div>

            <div className="row">
              <div className="col-6 col-md-auto mb-3 mb-lg-0">
                <CSVLink 
                  className="btn btn-outline-primary w-100"
                  filename={"dataset.csv"}
                  data={[dataset.meta.headers, ...dataset.data]}> 
                  Download
                </CSVLink>
              </div>
              <div className="col-6 col-md-auto mb-3 mb-lg-0">
                <button 
                  className="btn btn-outline-info w-100"
                  onClick={() => tableOpen({
                    headers: dataset.meta.headers,
                    data: dataset.data,
                    type: dataset.meta.type,
                  })}>
                  View
                </button>
              </div>
              <div className="col-6 mb-3 col-md-auto mb-3 mb-lg-0">
                <button 
                  className="btn btn-outline-info w-100"
                  onClick={() => candleOpen({
                    data: [dataset.meta.headers, ...dataset.data],
                    type: dataset.meta.type,
                  })}>
                  Chart
                </button>
              </div>
              <div className="col-6 col-md-auto">
                <button 
                  className={`btn w-100 ${selected === dataset.id ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => selectDataset(dataset.id)}>
                  Select
                </button>
              </div>
              <div className="col-6 col-md-auto">
                <button 
                  className="btn btn-outline-danger w-100"
                  onClick={() => datasetDelete(dataset.id)}>
                  Delete
                </button>
              </div>
            </div>

          </div>
        ))} 
      </div>
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
  tableOpen: (value) => dispatch(tableOpen(value)),
  candleOpen: (value) => dispatch(candleOpen(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetList);
