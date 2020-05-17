import React, { useState } from 'react';
import { connect } from 'react-redux';
import ResultItem from '../../resultset/ResultItem';
import { algoExecute } from '../../../actions/algorithm';

const Executer = ({ id, algoExecute }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault(); 
    const fetchData = async () => {
      setIsLoading(true);
      setResult(await algoExecute({ id, data: [1,23,4]})); 
      setIsLoading(false);
    };
    fetchData();
  };

  return (
    <>
      <form className="mb-3" onSubmit={onSubmit}>
        {/* Submit */}
        <div className="form-group d-flex mb-0">
          <button
            className="btn btn-primary d-flex 
            justify-content-between align-items-center w-100"
            disabled={isLoading}>
            {isLoading && (
              <span 
                className="spinner-border spinner-border-sm mr-2" 
                role="status" 
                aria-hidden="true">
              </span>
            )}
            <span className="ml-auto">
              {!isLoading ? 'Execute' : 'Loading'}
            </span>
          </button>
        </div>
      </form>
      
      {result && (
        <ResultItem data={result} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  algoExecute: (value) => dispatch(algoExecute(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Executer);
