import React from 'react';
import { connect } from 'react-redux';

const DataManager = ({ data }) => {
  const timestampToData = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Open Prices</th>
          <th scope="col">Close Prices</th>
          <th scope="col">High Prices</th>
          <th scope="col">Low Prices</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map((row, index) => 
          <tr key={row[0].toString()}>
            <td>{index}</td>
            <th scope="row">{timestampToData(row[0])}</th>
            <td>{row[1].o}</td>
            <td>{row[1].c}</td>
            <td>{row[1].h}</td>
            <td>{row[1].l}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataManager);