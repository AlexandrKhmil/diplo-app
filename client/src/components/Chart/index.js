import React from 'react';
import Chart from 'react-google-charts'

const ChartWrapper = () => {
  let newData = [['day', 'a', 'b', 'c', 'd']];
  for (let i = 0; i < 100; i++) {
    newData = [...newData, [`${i}`,  Math.random() * 1000,  Math.random() * 1000,  Math.random() * 1000,  Math.random() * 1000]];
  }
  return (
    <Chart
      width={'100%'}
      height={350}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={newData}
      options={{
        legend: 'none',
        bar: { groupWidth: '100%' }, // Remove space between bars.
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default ChartWrapper;