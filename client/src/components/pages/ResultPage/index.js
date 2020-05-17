import React from 'react';
import ResultList from '../../resultset/ResultList';

const ResultPage = () => {
  return (
    <main>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <ResultList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
