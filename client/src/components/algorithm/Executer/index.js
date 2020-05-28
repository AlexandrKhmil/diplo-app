import React, { useState } from 'react';
import { connect } from 'react-redux';
import ResultItem from '../../resultset/ResultItem';
import { algoExecute } from '../../../actions/algorithm';

const Executer = ({ id, fieldList, algoExecute, dataset }) => {
  const [fieldValues, setFieldValues] = useState(
    Object.fromEntries(fieldList.map((field) => [field.name, field.type === 'number' ? field.value : '']))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault(); 
    const fetchData = async () => {
      setIsLoading(true);
      const data = Object.fromEntries(Object.entries(fieldValues).map((value) => {
        return fieldList.find((field) => field.name === value[0]).get === 'row' 
        ? [value[0], dataset.data[value[1]]]
        : value;
      }));
      setResult(await algoExecute({ id, data })); 
      setIsLoading(false);
    };
    fetchData();
  };

  return (
    <>
      <form className="mb-3" onSubmit={onSubmit}>
        {/* Custom Rows */}
        {fieldList.map((field) => (
          <div className="form-group" key={field.name}>
            <label htmlFor={field.name}>{field.title}</label>

            {field.type === 'select'
              ? (
                <select 
                  name={field.name}
                  className="custom-select" 
                  value={fieldValues[field.name]}
                  onChange={(e) => setFieldValues({ 
                    ...fieldValues, 
                    ...{ [field.name]:  e.target.value } 
                  })}
                  disabled={isLoading || !dataset}>
                    <option value={null}>Please select a Dataset</option>
                  {field.optionList === 'rows' 
                    ? dataset && dataset.meta.headers.map((header, index) => (
                          <option key={index} value={index}>{header}</option>
                        ))
                    : <option value={null}>Not Implemented</option>
                  }
                </select>
              )
              : (
                <input 
                  type={field.type}
                  className="form-control"
                  name={field.name}
                  value={fieldValues[field.name]}
                  min={field.min && field.min}
                  onChange={(e) => setFieldValues({ 
                    ...fieldValues, 
                    ...{ [field.name]:  e.target.value } 
                  })}
                  disabled={isLoading} />
              )
            }
          </div>
        ))}

        {/* Submit */}
        <div className="form-group d-flex mb-0">
          <button
            className="btn btn-primary d-flex 
            justify-content-between align-items-center w-100"
            disabled={isLoading || !dataset}>
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

const mapStateToProps = (state) => {
  const setup = {
    fieldList: {
      forward: {
        name: 'forward',
        title: 'Forward',
        type: 'number',
        min: 0,
        value: 1,
        get: 'value',
      },
      timeRow: {
        name: 'timeRow',
        title: 'Select Date Row',
        type: 'select',
        optionList: 'rows',
        get: 'row',
      },
      text: {
        name: 'text',
        title: 'Select Row',
        type: 'text',
        get: 'value',
      }
    }
  };

  const selected = state.dataset.selected;

  const dataset = selected 
    ? Object.values(state.dataset.list).find((item) => item.id === selected)
    : null;
  
  return {
    dataset,
    fieldList: Object.values(setup.fieldList),
  }
};

const mapDispatchToProps = (dispatch) => ({
  algoExecute: (value) => dispatch(algoExecute(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Executer);
