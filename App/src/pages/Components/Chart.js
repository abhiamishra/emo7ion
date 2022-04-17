import React, { Component } from "react";
import Chart from "react-apexcharts";
import { UserData } from "../Data";
const map1 = UserData.map((data) => data.emotion)

// class Bar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: ["Happy", "Sad", "Angry"]
//         }
//       },
//       series: [
//         {
//           name: "Emotions Over Time",
//           data: [30, 40, 45]
//         }
//       ]
//     };
//   }
//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="400"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


class Bar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        series: UserData.map(({ emotion, number}) => (number)),
        labels: UserData.map(({ emotion, number}) => (emotion))
      },
      series: UserData.map(({ emotion, number}) => (number)),
      labels: UserData.map(({ emotion, number}) => (emotion)),
    }
    console.log(this.state.labels)
  }

  componentDidMount(){
    function changeVals(){
        this.setState({series: UserData.map(({ emotion, number}) => (number))})
    }  
    setTimeout(10000, changeVals)
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} labels = {this.state.labels} type="donut" width="380" />
      </div>
    );
  }
}


export default Bar;