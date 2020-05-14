import React, { useState, useEffect } from 'react';
import { algoGetInfo } from '../../../functions/algorithm';
import styles from './styles.module.css';

const Algorithm = (props) => {
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

          <div className="col-12">
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

        </div>
      </div>
    </main>
  );
};

export default Algorithm;