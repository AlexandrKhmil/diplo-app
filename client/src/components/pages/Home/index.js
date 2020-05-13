import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const load = async () => {
    setList([{title: 'ALGORITHM_NAME', link: 'link', imgURL: 'https://www.innovation.ca/sites/default/files/styles/large_2/public/algorithms.png', shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, ]);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (!isLoaded) {
      load()
    }
  }, [isLoaded]);

  return (
    <main>
      <div className="container mt-3">
        <div className="row">
          {list.map((algorithm, index) => (
            <div className="col-md-6" key={index}>
              <div className="card card-body border-primary">
                <img className={styles.img} src={algorithm.imgURL} alt="Algorithm" />
                <NavLink to={`/algorithm/${algorithm.link}`}><h5>{algorithm.title}</h5></NavLink>
                <p className="mb-0">
                  {algorithm.shortDescription.length < 150 ? algorithm.shortDescription: `${algorithm.shortDescription.slice(0, 150)}...`}
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
