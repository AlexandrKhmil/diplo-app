import React from 'react';
import { connect } from 'react-redux';
import AlgorithmCard from '../../components/AlgorithmCard';

const Home = ({ list }) => {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="mb-4">List of algorithms</h1>  
        <div className="row">
          {list && Object.values(list).map(algorithm => 
            <div key={algorithm.id} className="col-sm-6">
              <AlgorithmCard
                title={algorithm.title}
                link={`algorithm/${algorithm.link}`}
                imgLink={algorithm.imgurl}
                description={algorithm.description}
              />
            </div>
          )}
        </div> 
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  list: state.algorithm.list,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);