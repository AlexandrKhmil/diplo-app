import React from 'react';
import { timestampToDate } from '../../../functions/timestamp';
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
                <th className="border-top-0" scope="col" key={index}>
                  <button className="btn btn-link text-dark">
                    {value}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
        )}
        
        <tbody>
          {Object.entries(data).map((row) => 
            <tr key={row[0].toString()}>
              <th scope="row">{timestampToDate(row[0])}</th>
              {row[1].map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default DataTable;