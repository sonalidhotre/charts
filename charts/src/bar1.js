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
  labels: ['Makeup', 'Skincare', 'Hair', 'Fragrance'],
  datasets: [
    {
      label: "Sub Category 1 FY19",
      backgroundColor: ["rgb(0,97,152)", "rgb(109,211,194)", "rgb(240,103,103)", "rgb(255,184,42)"],
      data: [0.59, 0.80, 0.81, 0.56],
      stack: 1
    },
    {
      label: "Sub Category 2 FY19",
      backgroundColor: ["rgb(0,97,152)", "rgb(109,211,194)", "rgb(240,103,103)", "rgb(255,184,42)"],
      data: [0.80, 0.81, 1.56, 1.55],
      stack: 2
    },
    {
      label: "Sub Category 3 FY19",
      backgroundColor: ["rgb(0,97,152)", "rgb(109,211,194)", "rgb(240,103,103)", "rgb(255,184,42)"],
      data: [0.85, 1.61, 0.50, 1.58],
      stack: 3
    }
  ]
};

class Bar1Example extends Component {

  render() {
    var legend = [{ label: 'Makeup', backgroundColor: "rgb(0,97,152)" },
    { label: 'Skincare', backgroundColor: "rgb(109,211,194)" },
    { label: 'Hair', backgroundColor: "rgb(240,103,103)" },
    { label: 'Fragrance', backgroundColor: "rgb(255,184,42)" }];
    return (
      <div>
        <h2>Annual brand share point increase</h2>
        <div>
          <div>
            <Bar
              data={data}
              width={100}
              height={50}
              options={{
                cornerRadius: 3,
                tooltips: {
                  // Disable the on-canvas tooltip
                  enabled: false,

                  custom: function (tooltipModel) {
                    // Tooltip Element
                    var tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                      tooltipEl = document.createElement('div');
                      tooltipEl.id = 'chartjs-tooltip';
                      tooltipEl.innerHTML = '<table></table>';
                      document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    if (tooltipModel.opacity === 0) {
                      tooltipEl.style.opacity = 0;
                      return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                      tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                      tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                      return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                      // var titleLines = tooltipModel.title || [];
                      var bodyLines = tooltipModel.body.map(getBody);

                      var innerHtml = '<thead>';

                      // titleLines.forEach(function (title) {
                      //   innerHtml += '<tr><th>' + title + '</th></tr>';
                      // });
                      innerHtml += '</thead><tbody>';

                      bodyLines.forEach(function (body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background-color:' + colors.backgroundColor;
                        style += '; border-color: #ffffff';
                        style += '; border-width: 2px';
                        style += '; text-align: center';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + "Current: 28%</td></tr>";
                        innerHtml += '<tr><td>' + span + "FY19: " + (parseFloat(body[0].substring(body[0].indexOf(":") + 2, body[0].length)) + 28) + '%</td></tr>';
                        innerHtml += '<tr><td>' + span + "Growth: +" + body[0].substring(body[0].indexOf(":") + 2, body[0].length) + '%</td></tr>';
                      });
                      innerHtml += '</tbody>';

                      var tableRoot = tooltipEl.querySelector('table');
                      tableRoot.innerHTML = innerHtml;
                    }

                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                    tooltipEl.style.boxShadow = '1px 1px 8px -2px rgba(0, 0, 0, 0.5)';
                    tooltipEl.style.borderRadius = '3px';
                    tooltipEl.style.backgroundColor = '#ffffff';
                  }
                },
                // tooltips: {
                //   callbacks: {
                //     label: function (tooltipItem, data) {
                //       var label = data.datasets[tooltipItem.datasetIndex].label || '';

                //       if (label) {
                //         label += ': ';
                //       }
                //       label += Math.round(tooltipItem.yLabel * 100) / 100;
                //       return label;
                //     },
                //     labelTextColor: function (tooltipItem, chart) {
                //       return '#543453';
                //     }
                //   }
                // },
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
                    barPercentage: 0.7,
                    categoryPercentage: 0.4,
                    // barThickness: 15,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      callback: function (value, index, values) {
                        return '';
                      }
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

export default Bar1Example;