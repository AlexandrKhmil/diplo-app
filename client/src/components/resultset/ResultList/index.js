import React from 'react';
import { connect } from 'react-redux';
import ResultItem from '../ResultItem';

const ResultList = ({ list }) => {
  return (
    <div>
      {list.map((result) => (
        <div className="card card-body border-primary mb-3 flex-md-row justify-content-between align-items-md-center">
          <ResultItem data={result}/>
        </div>
      ))}

    </div>
  );
};

const mapStateToProps = (state) => ({
  list: Object.values(state.resultset.list),
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
