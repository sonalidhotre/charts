import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

require('./roundedCharts.js')

const listItemStyle = {
  color: "#646f79",
  listStyle: "none",
  textAlign: "left",
  fontSize: "12px",
  display: "flex",
  flexDirection: "row",
  margin: "8px",
  fontWeight: "300",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.5",
  letterSpacing: "normal"
};

const data = {
  labels: ['Makeup', 'Skincare', 'Hair', 'Fragrance'],
  datasets: [
    {
      label: "Sub Category 1 FY19",
      backgroundColor: ["rgb(0,97,152)", "rgb(109,211,194)", "rgb(240,103,103)", "rgb(255,184,42)"],
      data: [140, 190, 160, 100],
      stack: 1
    },
    {
      label: "Sub Category 1 FY20",
      backgroundColor: "rgba(177,177,177)",
      data: [50, 20, 20, 10],
      stack: 1
    },
    {
      label: "Sub Category 2 FY19",
      backgroundColor: ["rgb(0,97,152)", "rgb(109,211,194)", "rgb(240,103,103)", "rgb(255,184,42)"],
      data: [105, 145, 110, 150],
      stack: 2
    },
    {
      label: "Sub Category 2 FY20",
      backgroundColor: "rgba(177,177,177)",
      data: [40, 20, 10, 20],
      stack: 2
    },
    {
      label: "Sub Category 3 FY19",
      backgroundColor: ["rgb(0,97,152)", "rgb(109,211,194)", "rgb(240,103,103)", "rgb(255,184,42)"],
      data: [165, 190, 140, 140],
      stack: 3
    },
    {
      label: "Sub Category 3 FY20",
      backgroundColor: "rgba(177,177,177)",
      data: [20, 20, 5, 10],
      stack: 3
    },
  ]
};

class BarExample extends Component {
  render() {
    var legend = [
      {
        label: "FY22 Size $M",
        backgroundColor: "rgba(177,177,177)",
        data: [59, 80, 81, 56],
        stack: 1
      }
    ];
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <div>
          <div>
            <Bar
              data={data}
              width={100}
              height={50}
              ref="chart"
              options={{
                cornerRadius: 3,
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
                  display: false,
                  text: 'Custom Chart Title',
                  position: 'top',
                  fontStyle: 'normal'
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      max: 250,
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
      </div>
    );
  }
}

export default BarExample;