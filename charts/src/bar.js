import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

require ('./roundedCharts.js')

const listItemStyle = {
  color: "#333",
  listStyle: "none",
  textAlign: "left",
  display: "flex",
  flexDirection: "row",
  margin: "8px"
};

const data = {
  labels: ['Makeup', 'Skincare', 'Hair', 'Fragrance'],
  datasets: [
    {
      label: "Sub Category 1 FY19",
      backgroundColor: "rgba(99,255,132)",
      data: [59, 80, 81, 56],
      stack: 1
    },
    {
      label: "Sub Category 1 FY20",
      backgroundColor: "rgba(255,99,132)",
      data: [59, 80, 81, 56],
      stack: 1
    },
    {
      label: "Sub Category 1 FY21",
      backgroundColor: "rgba(99,99,132)",
      data: [59, 80, 81, 56],
      stack: 1
    },
    {
      label: "Sub Category 2 FY19",
      backgroundColor: "rgba(99,255,132)",
      // backgroundColor: "rgba(99,132,255)",
      data: [80, 81, 56, 55],
      stack: 2
    },
    {
      label: "Sub Category 2 FY20",
      backgroundColor: "rgba(255,99,132)",
      data: [60, 59, 80, 81],
      stack: 2
    },
    {
      label: "Sub Category 2 FY21",
      backgroundColor: "rgba(99,99,132)",
      data: [60, 59, 80, 81],
      stack: 2
    },
    {
      label: "Sub Category 3 FY19",
      backgroundColor: "rgba(99,255,132)",
      // backgroundColor: "rgba(99,99,99)",
      data: [85, 61, 50, 58],
      stack: 3
    },
    {
      label: "Sub Category 3 FY20",
      backgroundColor: "rgba(255,99,132)",
      // backgroundColor: "rgba(99,99,99)",
      data: [85, 61, 50, 58],
      stack: 3
    },
    {
      label: "Sub Category 3 FY21",
      backgroundColor: "rgba(99,99,132)",
      // backgroundColor: "rgba(99,99,99)",
      data: [85, 61, 50, 58],
      stack: 3
    }
  ]
};

class BarExample extends Component {
  constructor(props) {
    super(props);
    // this.chartReference = React.createRef();
  }
  componentDidMount() {
    // console.log(this.chartReference); // returns a Chart.js instance reference
  }

  render() {
    var legend = [{
      label: "FY19",
      backgroundColor: "rgba(99,255,132)",
      data: [59, 80, 81, 56],
      stack: 1
    },
    {
      label: "FY20",
      backgroundColor: "rgba(255,99,132)",
      data: [59, 80, 81, 56],
      stack: 1
    },
    {
      label: "FY21",
      backgroundColor: "rgba(99,99,132)",
      data: [59, 80, 81, 56],
      stack: 1
    }];
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <div>
          <Bar
            data={data}
            width={100}
            height={50}
            // ref={this.chartReference}
            ref="chart"
            options={{
              cornerRadius: 8,
              legend: {
                display: false,
                position: 'right',
                align: 'end',
                labels: {
                  fontColor: '#646f79'
                }
              },
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
              },
              title: {
                display: true,
                text: 'Custom Chart Title',
                position: 'top',
                fontStyle: 'normal'
              },
              scales: {
                yAxes: [{
                  ticks: {
                    max: 300,
                    stepSize: 50,
                    callback: function (value, index, values) {
                      return '$' + value + 'M';
                    }
                  },
                  stacked: true
                }],
                xAxes: [{
                  barPercentage: 0.5,
                  categoryPercentage: 0.5,
                  // barThickness: 15,
                  gridLines: {
                    display: false,
                  }
                }]
              }
            }}
          />
        </div>
        <div>
          <ul className="mt-8">
            {legend.length &&
              legend.map(item => {
                return (
                  <li key={item.label} style={listItemStyle}>
                    <div
                      style={{
                        marginRight: "8px",
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        backgroundColor: item.backgroundColor
                      }}
                    />
                    {item.label}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BarExample;