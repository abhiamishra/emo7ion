import React, { Component } from 'react';
import { render } from 'react-dom';
import { Doughnut } from 'react-chartjs-2'

class DoughnutChart extends Component {
  constructor() {
    super();

    this.chartReference = React.createRef();
    this.state = {
      name: 'React',
      data: {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [{
          data: [5, 7, 6],
          backgroundColor: ['red', 'green', 'blue']
        }]
      }
    };

    setInterval(() => {
      const chart = this.chartReference.current.chartInstance;
      chart.data.datasets[0].data = [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
      ];
      chart.update();
    }, 2000);
  }

  render() {
    return (
      <DoughnutChart ref={this.chartReference} data={this.state.data} />
    )
  }
}

export default DoughnutChart;
