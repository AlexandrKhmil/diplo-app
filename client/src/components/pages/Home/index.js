import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { algoGetList } from '../../../functions/algorithm';

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setList(await algoGetList());
      setIsLoaded(true);
    };
    if (!isLoaded) fetchData();
  }, [isLoaded]);

  return (
    <main>
      <div className="container mt-3">
        <div className="row">
          {list.map((algorithm, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="card card-body border-primary">
                <img className={styles.img} src={algorithm.img_url} alt="Algorithm" />
                <NavLink to={`/algorithm/${algorithm.link}`}><h5>{algorithm.title}</h5></NavLink>
                <p className="mb-0">
                  {algorithm.short_desc.length < 150 ? algorithm.short_desc: `${algorithm.short_desc.slice(0, 150)}...`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
