import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../../dataset/Loader';
import DatasetList from '../../dataset/DatasetList';
import DataTable from '../../dataset/DataTable';
import { algoGetInfo } from '../../../functions/algorithm';
import { finhubToDataset } from '../../../functions/dataset';
import styles from './styles.module.css';

const AlgorithmPage = ({ selectedDataset, ...props }) => {
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

          <div className="col-md-6 mb-3">
            <div className="card card-body border-primary">
              <h2 className="mb-3">Load Dataset</h2>
              <Loader />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card card-body border-primary">
              <h2 className="mb-3">List of Datasets</h2>
              <DatasetList />
            </div>
          </div>

          <div className="col-12">
            <div className="card card-body border-primary">
              <h2 className="mb-3">Dataset's Fields</h2>
              <DataTable data={selectedDataset} />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  const list = state.dataset.list;
  const selected = state.dataset.selected
  const selectedDataset = list[selected] ? finhubToDataset(list[selected]) : [];

  return {
    selectedDataset,
  };
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmPage);