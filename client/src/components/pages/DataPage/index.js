import React, { useState } from 'react';
import LoaderFinhub from '../../dataset/LoaderFinhub';
import LoaderCSV from '../../dataset/LoaderCSV';
import DatasetList from '../../dataset/DatasetList';
import * as sourceType from '../../../constants/dataset-source-type';

const DataPage = () => {
  const [where, setWhere] = useState(sourceType.USER_FILE);

  return (
    <main>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <div className="card card-body border-primary h-100">
              <h2>User Guide to Load Data</h2>
              <p>To load data use form...</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="card card-body border-primary">
              <h2>Data Loader</h2>
              <div className="form-group">
                <label htmlFor="where">Where</label>
                <select 
                  className="custom-select" 
                  id="where" 
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}>
                  <option value={sourceType.USER_FILE}>My CSV File</option>
                  <option value={sourceType.FINHUB}>finhub.com</option>
                </select>  
              </div>
              {where === sourceType.FINHUB && <LoaderFinhub />}
              {where === sourceType.USER_FILE && <LoaderCSV />}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Loaded datasets</h2>
        <DatasetList />
      </div>
    </main>
  )
}

export default DataPage;