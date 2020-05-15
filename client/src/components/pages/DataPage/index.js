import React from 'react';
import Loader from '../../dataset/Loader';
import DatasetList from '../../dataset/DatasetList';

const DataPage = () => {
  return (
    <main>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <div className="card card-body border-primary h-100">
              <h2>User Guide to Load Data</h2>
              <p>To load data use form...</p>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="card card-body border-primary">
              <h2>Data Loader</h2>
              <Loader />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <DatasetList />
      </div>
    </main>
  )
}

export default DataPage;
