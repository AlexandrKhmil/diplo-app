import React from 'react';
import { connect } from 'react-redux';
import Chart from 'react-google-charts'

const ChartWrapper = ({ data }) => {
  if (Object.keys(data).length === 0) return <>No data!</>;

  const timestampToData = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear().toString();
    return `${month}.${day}.${year.slice(-2)}`;
  };

  let chartData = [['day', 'Prices', 'Open', 'Close', 'High']];

  chartData = [
    ['day', 'Low', 'Open', 'Close', 'High'],
    ...Object.entries(data).map((row) => {
      return [
        timestampToData(row[0]),
        row[1].l,
        row[1].o,
        row[1].c,
        row[1].h,
      ]
    })
  ]

  const options = {
    legend: 'none',
    bar: { groupWidth: '100%' }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
    }
  };

  return (
    <Chart
      width={'100%'}
      height={350}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={options}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartWrapper);