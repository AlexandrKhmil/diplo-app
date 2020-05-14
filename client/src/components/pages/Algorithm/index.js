import React, { useState, useEffect } from 'react';
import { algoGetInfo } from '../../../functions/algorithm';

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
          <div className="">

          </div>
        </div>
      </div>
    </main>
  );
};

export default Algorithm;


// desc: "Эта опиция сущесвтует чтобы проверить исполнение Python файлов"
// ​
// id: 1
// ​
// img_url: "https://www.innovation.ca/sites/default/files/styles/large_2/public/algorithms.png"
// ​
// link: "linear_regression"
// ​
// short_desc: "Some quick example text to build on the card title and make up the bulk of the card"
// ​
// title: "Linear Regression"