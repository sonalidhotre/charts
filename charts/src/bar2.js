import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

require('./roundedCharts.js')

const listItemStyle = {
  color: "#333",
  listStyle: "none",
  textAlign: "left",
  display: "flex",
  flexDirection: "row",
  margin: "8px"
};

const data = {
  labels: ['2019', '2020', '2021'],
  datasets: [
    {
      label: "Sub Category 1 FY19",
      backgroundColor: "rgb(0,97,152)",
      data: [17, 22, 29],
      stack: 1
    },
    {
      label: "Sub Category 1 FY20",
      backgroundColor: "rgba(177,177,177)",
      data: [7, 12, 10],
      stack: 1
    },
    {
      label: "Sub Category 2 FY19",
      backgroundColor: "rgb(109,211,194)",
      data: [16, 21, 26],
      stack: 2
    },
    {
      label: "Sub Category 2 FY20",
      backgroundColor: "rgba(177,177,177)",
      data: [6, 6, 10],
      stack: 2
    },
    {
      label: "Sub Category 3 FY19",
      backgroundColor: "rgb(240,103,103)",
      data: [17, 18, 22],
      stack: 3
    },
    {
      label: "Sub Category 3 FY20",
      backgroundColor: "rgba(177,177,177)",
      data: [2, 4, 8],
      stack: 3
    },
    {
      label: "Sub Category 4 FY19",
      backgroundColor: "rgb(255,184,42)",
      data: [15, 17, 22],
      stack: 4
    },
    {
      label: "Sub Category 4 FY20",
      backgroundColor: "rgba(177,177,177)",
      data: [5, 12, 10],
      stack: 4
    }
  ]
};

class Bar2Example extends Component {
  render() {
    var legend = [{ label: 'Makeup', backgroundColor: "rgb(0,97,152)" },
    { label: 'Skincare', backgroundColor: "rgb(109,211,194)" },
    { label: 'Hair', backgroundColor: "rgb(240,103,103)" },
    { label: 'Fragrance', backgroundColor: "rgb(255,184,42)" },
    { label: 'Estée Lauder\'s Ambition', backgroundColor: "rgba(177,177,177)" }];
    return (
      <div>
        <h2>% Market Growth</h2>
        <div>
          <div>
            <Bar
              data={data}
              width={100}
              height={50}
              options={{
                cornerRadius: 3,
                legend: {
                  display: false,
                  position: 'right',
                  // labels: {
                  //   fontColor: 'rgb(255, 99, 132)'
                  // }
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
                  text: '% Market Growth',
                  position: 'left',
                  fontStyle: 'normal'
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      max: 45,
                      stepSize: 5
                    },
                    stacked: true,
                  }],
                  xAxes: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.4,
                    barDatasetSpacing: 0,
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

export default Bar2Example;