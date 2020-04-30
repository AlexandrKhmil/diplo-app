import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { execute } from '../../actions/algorithm';
import Chart from '../../components/Chart';

const Algorithm = ({ 
  list,
  execute,
  match,
}) => {
  const { algorithmLink } = match.params;
  const algorithm = list && Object.values(list).find((item) => 
    item.link === algorithmLink);

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
    execute({ id, link });
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
              <h2 className="mb-3">Execute</h2>
              <form onSubmit={onSubmit}>
                <div className="form-group d-flex mb-0">
                  <button 
                      className="btn btn-primary d-flex 
                        justify-content-between align-items-center w-100"
                      type="submit"
                      disabled={isExecuting} 
                    >
                      {isExecuting && 
                        <span 
                          class="spinner-border spinner-border-sm mr-2"
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
              <div>
                  {result &&
                    result.data
                  }
              </div>
            </div>
          </div>

          <div className="col-12 mb-4">
            <div className="card card-body border-primary">
              <Chart />
            </div>
          </div>

        </div> 
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  list: state.algorithm.list,
});

const mapDispatchToProps = (dispatch) => ({
  execute: (value) => execute(value)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Algorithm);