import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DatasetList from '../../dataset/DatasetList';
import Executer from '../../algorithm/Executer';
import { algoGetInfo } from '../../../functions/algorithm';
import styles from './styles.module.css';

const AlgorithmPage = ({ ...props }) => {
  const { link } = props.match.params;
  const [algo, setAlgo] = useState({}); 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setAlgo(await algoGetInfo({ link }));
      setIsLoaded(true);
    };
    if (!isLoaded) fetchData();
  });

  return (
    <main>
      <div className="container mt-5 mb-4">
        <div className="row">

          <div className="col-12 mb-3">
            <h1 className="mb-3">{algo.title && algo.title}</h1>

            <div className="card card-body border-primary">
              <div className="row">
                <div className="col-6">
                  <img className={styles.img} src={algo.img_url || 'https://i.imgur.com/Bb2evGw.jpg'} alt="Algorithm" />
                </div>
                <div className="col-6">
                  {algo.short_desc ? algo.short_desc : 'Описание отсутствует...'}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="card card-body border-primary">
              <h2 className="mb-3">List of Datasets</h2>
              <div className={styles.dataListWrapper}>
                <DatasetList wrapped={true} />
              </div> 
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card card-body border-primary">
              <h2 className="mb-3">Execute</h2>
              <Executer id={algo.id}/>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmPage);