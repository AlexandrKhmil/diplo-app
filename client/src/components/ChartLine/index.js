import React from 'react';
import { connect } from 'react-redux';
import Chart from 'react-google-charts'

const ChartWrapper = ({ data }) => {
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Price',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartWrapper);