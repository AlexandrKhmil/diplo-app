import React from 'react';
import styles from './styles.module.css';

const DataTable = ({ headers, data }) => {

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
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((item, index) => (
                <td 
                  className={`${index === 0 ? 'font-weight-bold' : ''}`} 
                  key={index}>
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default DataTable;