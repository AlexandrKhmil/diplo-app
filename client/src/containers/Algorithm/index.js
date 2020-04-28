import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';

const Algorithm = ({ list, ...props }) => {
  const { algorithmLink } = props.match.params;
  const algorithm = list && Object.values(list).find((algorithm) => {
    return algorithm.link === algorithmLink
  });

  if (!algorithm) {
    return <>Error</>;
  }

  return (
    <main>
      <div className="container mt-5">
        { algorithm.title &&
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
    </main>
  );
};

const mapStateToProps = (state) => ({
  list: state.algorithm.list,
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Algorithm);