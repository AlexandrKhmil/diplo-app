import React from 'react'
import AlgorithmCard from '../../components/AlgorithmCard';

const algorithmsList = [
  {
    title: 'Primary Algirithm',
    link: 'primary-algorithm',
    imgLink: 'https://i.imgur.com/Bb2evGw.jpg',
    description: 'Some quick example text to build on the card title and make up the bulk of the card'
  },
  {
    title: 'Secondary Algorithm',
    link: 'secondary-algorithm',
    imgLink: 'https://i.imgur.com/Bb2evGw.jpg',
    description: 'Some quick example text to build on the card title and make up the bulk of the card'
  },
]

export default function Home() {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="mb-3">List of algorithms</h1>  
        <div className="row">
          {algorithmsList.map(algorithm => 
            <div className="col-sm-6">
              <AlgorithmCard
                title={algorithm.title}
                link={`algorithm/${algorithm.link}`}
                imgLink={algorithm.imgLink}
                description={algorithm.description}
              />
            </div>
          )}
        </div> 
      </div>
    </main>
  )
}
