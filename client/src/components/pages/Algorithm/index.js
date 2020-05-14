import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../../dataset/Loader';
import DatasetList from '../../dataset/DatasetList';
import DataTable from '../../dataset/DataTable';
import { algoGetInfo } from '../../../functions/algorithm';
import styles from './styles.module.css';

const Algorithm = ({ selectedDataset, ...props }) => {
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
  const selectedId = state.dataset.selected
  let selectedDataset = [];
  if (list[selectedId]) {
    let data = {};
    for (let i = 0; i < list[selectedId].t.length; i++) {
      data = {
        ...data, 
        [list[selectedId].t[i]]: { 
          c: list[selectedId].c[i],
          h: list[selectedId].h[i],
          l: list[selectedId].l[i],
          o: list[selectedId].o[i],
          v: list[selectedId].v[i],
        },
      };
    }
    selectedDataset = data;
    console.log(data)
  }

  return {
    selectedDataset,
  };
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Algorithm);