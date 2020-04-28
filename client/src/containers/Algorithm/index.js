import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { execute } from '../../actions/algorithm';

const Algorithm = ({ 
  list, 
  isLoading,
  execute,
  ...props 
}) => {
  const { algorithmLink } = props.match.params;
  const algorithm = list && Object.values(list).find((algorithm) => {
    return algorithm.link === algorithmLink
  });

  if (!algorithm) {
    return <>Error</>;
  }

  const onSumbit = (e) => {
    e.preventDefault();
    execute({ id: algorithm.id, link : algorithm.link})
  }

  return (
    <main>
      <div className="container mt-5">
        {algorithm.title &&
          <h1 className="mb-4">{algorithm.title}</h1> 
        } 
        <div className="card card-body border-primary container">
          <div className="row">
            <div className="col-md-6 d-flex mb-3 mb-md-0">
              <img
                className={`${styles.img}`}
                src={algorithm.imgurl || 'https://i.imgur.com/Bb2evGw.jpg'} 
                alt="Algrithm" 
              />
            </div>
            <div className="col-md-6">
              <p className="mb-0">
                {algorithm.description || 'Описание отсутствует.'}
              </p>
            </div>
          </div> 
        </div> 
      </div>

      <div className="container mt-5"> 
        <h2>Execute and Results</h2>
        <div className="row">
          <div className="col-md-6">
            <form 
              className="card card-body border-primary" 
              onSubmit={onSumbit}
            >
              <div className="form-group d-flex mb-0">
                <button 
                    className="btn btn-primary d-flex 
                      justify-content-between align-items-center w-100"
                    type="submit"
                    disabled={algorithm.isExecuting} 
                  >
                    {algorithm.isExecuting && 
                      <span 
                        class="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                      >
                      </span>
                    }
                    {!algorithm.isExecuting ? 'Run' : 'Loading'}
                  </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="card card-body border-primary">
              <h2 className="card-title">Result</h2>
              <div>
                  {algorithm.result &&
                    algorithm.result.data
                  }
              </div>
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