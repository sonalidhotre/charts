import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

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
      backgroundColor: ["rgba(99,255,132)", "rgba(99,99,99)", "rgba(255,99,132)", "rgba(99,99,255)"],
      data: [0.59, 0.80, 0.81, 0.56],
      stack: 1
    },
    // // {
    // //   label: "Sub Category 1 FY20",
    // //   backgroundColor: "rgba(255,99,132)",
    // //   data: [59, 80, 81, 56],
    // //   stack: 1
    // // },
    // {
    //   label: "Sub Category 1 FY21",
    //   backgroundColor: "rgba(99,99,132)",
    //   data: [59, 80, 81, 56],
    //   stack: 1
    // },
    {
      label: "Sub Category 2 FY19",
      backgroundColor: ["rgba(99,255,132)", "rgba(99,99,99)", "rgba(255,99,132)", "rgba(99,99,255)"],
      // backgroundColor: "rgba(99,132,255)",
      data: [0.80, 0.81, 1.56, 1.55],
      stack: 2
    },
    // {
    //   label: "Sub Category 2 FY20",
    //   backgroundColor: "rgba(255,99,132)",
    //   data: [60, 59, 80, 81],
    //   stack: 2
    // },
    // {
    //   label: "Sub Category 2 FY21",
    //   backgroundColor: "rgba(99,99,132)",
    //   data: [60, 59, 80, 81],
    //   stack: 2
    // },
    {
      label: "Sub Category 3 FY19",
      backgroundColor: ["rgba(99,255,132)", "rgba(99,99,99)", "rgba(255,99,132)", "rgba(99,99,255)"],
      // backgroundColor: "rgba(99,99,99)",
      data: [0.85, 1.61, 0.50, 1.58],
      stack: 3
    },
    // {
    //   label: "Sub Category 3 FY20",
    //   backgroundColor: "rgba(255,99,132)",
    //   // backgroundColor: "rgba(99,99,99)",
    //   data: [85, 61, 50, 58],
    //   stack: 3
    // },
    // {
    //   label: "Sub Category 3 FY21",
    //   backgroundColor: "rgba(99,99,132)",
    //   // backgroundColor: "rgba(99,99,99)",
    //   data: [85, 61, 50, 58],
    //   stack: 3
    // }
  ]
};

class Bar1Example extends Component {

  render() {
    var legend = [{ label: 'Makeup', backgroundColor: "rgba(99,255,132)" },
    { label: 'Skincare', backgroundColor: "rgba(99,99,99)" },
    { label: 'Hair', backgroundColor: "rgba(255,99,132)" },
    { label: 'Fragrance', backgroundColor: "rgba(99,99,255)" }];
    return (
      <div>
        <h2>Annual brand share point increase</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            curvature: 1,
            animation: {
              onComplete: function () {
                var chartInstance = this.chart,
                  ctx = chartInstance.ctx;
                ctx.textAlign = 'center';
                ctx.fillStyle = "rgba(0, 0, 0, 1)";
                ctx.textBaseline = 'bottom';
                var height = chartInstance.controller.boxes[0].bottom;
                this.data.datasets.forEach(function (dataset, i) {
                  var meta = chartInstance.controller.getDatasetMeta(i);
                  meta.data.forEach(function (bar, index) {
                    // console.log(bar._model.datasetLabel, bar._model.y, height, height - bar._model.y)
                    var str = bar._model.datasetLabel
                    str = str.substring(str.indexOf("Sub Category ") + ("Sub Category ").length, str.length - 5)
                    // var data = dataset.data[index];
                    var random = Math.floor(Math.random() * 16) + 5;
                    ctx.save();
                    ctx.translate(bar._model.x, bar._model.y - random);
                    ctx.rotate(-0.5 * Math.PI);
                    ctx.fillText(bar._model.label + " SC " + str, (-(height - bar._model.y) + 35), 5);
                    ctx.restore();
                  });
                });
              }
            },
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
              text: 'Annual brand share point increase',
              position: 'left',
              fontStyle: 'normal'
            },
            scales: {
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 2,
                  stepSize: 0.5,
                  callback: function (value, index, values) {
                    return value + '%';
                  }
                },
                stacked: true,
                gridLines: {
                  display: false,
                }
              }],
              xAxes: [{
                barPercentage: 0.8,
                categoryPercentage: 0.5,
                // barThickness: 15,
                gridLines: {
                  display: false,
                }
              }]
            }
          }}
        />
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

export default Bar1Example;