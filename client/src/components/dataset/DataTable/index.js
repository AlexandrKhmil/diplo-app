import React from 'react';
import { timestampToData } from '../../../functions/timestamp';
import styles from './styles.module.css';

const DataTable = ({ headers, data }) => {
  console.log(data)
  return (
    <div className={styles.wrapper}>
      <table className="table table-hover mb-0">
        {headers && (
          <thead className="sticky-top" style={{backgroundColor: 'white'}}>
            <tr>
              {headers.map((value, index) => (
                <th className="border-top-0" scope="col" key={index}>{value}</th>
              ))}
            </tr>
          </thead>
        )}
        
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
    </div>
  );
};

export default DataTable;