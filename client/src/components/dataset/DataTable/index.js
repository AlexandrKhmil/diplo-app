import React from 'react';
import { connect } from 'react-redux';

const DataTable = ({ data }) => {
  return (
    <table className="table table-hover mb-0">
      <thead className="sticky-top" style={{backgroundColor: 'white'}}>
        <tr>
          <th className="border-top-0" scope="col">Date</th>
          <th className="border-top-0" scope="col">Open</th>
          <th className="border-top-0" scope="col">Close</th>
          <th className="border-top-0" scope="col">High</th>
          <th className="border-top-0" scope="col">Low</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map((row) => 
          <tr key={row[0].toString()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);