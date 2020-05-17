import React from 'react';
import { connect } from 'react-redux';
import { algoExecute } from '../../../actions/algorithm';

const Executer = ({ id, algoExecute }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    algoExecute({ id, data: [1,23,4]});
  };

  return (
    <form onSubmit={onSubmit}>
      this is executer
      <button>Button</button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  algoExecute: (value) => dispatch(algoExecute(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Executer);
