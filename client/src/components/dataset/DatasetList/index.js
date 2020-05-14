import React from 'react';
import { connect } from 'react-redux';
import { selectDataset } from '../../../actions/dataset';
import { timestampToDataTime } from '../../../functions/timestamp';

const DatasetList = ({ list, selected, selectDataset }) => {
  return (
    <table className="table table-hover mb-0">
      <thead className="sticky-top" style={{backgroundColor: 'white'}}>
        <tr>
          <th className="border-top-0" scope="col">Loaded</th>
          <th className="border-top-0" scope="col">Select</th>
        </tr>
      </thead>
      <tbody>
        {list.map((dataset) => (
          <tr key={dataset.loaded}>
            <th scope="row">{timestampToDataTime(dataset.loaded)}</th>
            <td>
              <button 
                className={`btn ${selected === dataset.loaded ? 'btn-success' : 'btn-secondary'}`}
                onClick={() => selectDataset(dataset.loaded)}>
                Select
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  list: Object.values(state.dataset.list),
  selected: state.dataset.selected,
});

const mapDispatchToProps = (dispatch) => ({
  selectDataset: (value) => dispatch(selectDataset(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetList);
