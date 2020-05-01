import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { execute } from '../../actions/algorithm';
import Chart from '../../components/Chart';
import DataLoader from '../../components/DataLoader';
import DataManager from '../../components/DataManager';

const Algorithm = ({
  data,
  execute,
  algorithm, 
}) => {
  const [forward, setForward] = useState('1');

  if (!algorithm) return <>Error</>;

  const { 
    isExecuting,
    title,
    imgurl,
    description,
    result,
    id,
    link,
  } = algorithm;

  const onSubmit = (e) => {
    e.preventDefault();
    const processedData = Object.values(data).map((item) => item.c);
    execute({ id, link, data: processedData, forward });
  }; 

  return (
    <main>
      <div className="container mt-5 mb-4">
        {title &&
          <h1 className="mb-4">{title}</h1> 
        }
        <div className="card card-body border-primary container">
          <div className="row">
            <div className="col-md-6 d-flex mb-3 mb-md-0">
              <img
                className={`${styles.img}`}
                src={imgurl || 'https://i.imgur.com/Bb2evGw.jpg'} 
                alt="Algrithm" 
              />
            </div>
            <div className="col-md-6">
              <p className="mb-0">
                {description || 'Описание отсутствует.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card card-body border-primary">
              <h2>Data Loading</h2>
              <DataLoader />
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card card-body border-primary">
              <h2>Data Manager</h2>
              <div className={styles.tableWrapper}>
                <DataManager />
              </div> 
            </div>
          </div>

          <div className="col-12 mb-4">
            <div className="card card-body border-primary">
              <h2>Chart</h2> 
              <Chart /> 
            </div>
          </div>
          

          <div className="col-md-6 mb-4">
            <div className="card card-body border-primary">
              <h2 className="mb-3">Execute</h2>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="forward">На сколько вперед</label>
                  <input
                    type="number"
                    className="form-control"
                    name="forward"
                    value={forward}
                    onChange={(e) => setForward(e.target.value)}
                    min="1"
                  />
                </div>
                <div className="form-group d-flex mb-0">
                  <button 
                      className="btn btn-primary d-flex 
                        justify-content-between align-items-center w-100"
                      type="submit"
                      disabled={isExecuting} 
                    >
                      {isExecuting && 
                        <span 
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                          aria-hidden="true"
                        >
                        </span>
                      }
                      {!isExecuting ? 'Run' : 'Loading'}
                    </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card card-body border-primary">
              <h2 className="card-title">Result</h2>
              <div className={styles.tableWrapper}>
                <table className="table table-hover mb-0">
                  <thead 
                    className="sticky-top" 
                    style={{backgroundColor: 'white'}}
                  >
                    <tr>
                      <th className="border-top-0" scope="col">#</th>
                      <th className="border-top-0" scope="col">Close</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.data &&
                      result.data.map((row, indx) => 
                        <tr key={indx}>
                          <td scope="row">{indx + 1}</td>
                          <td>{row}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div> 
      </div>
    </main>
  );
};

const mapStateToProps = (state, props) => ({
  algorithm: state.algorithm.list && Object.values(state.algorithm.list)
    .find((item) => item.link === props.match.params.algorithmLink),
  data: state.data.data,
});

const mapDispatchToProps = (dispatch) => ({
  execute: (value) => execute(value)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Algorithm);