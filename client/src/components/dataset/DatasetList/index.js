import React from 'react';
import { connect } from 'react-redux';
import { timestampToDataTime } from '../../../functions/timestamp';

const DatasetList = ({ list }) => {
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
              <button className="btn btn-secondary">
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
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetList);
