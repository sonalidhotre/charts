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
  labels: ['2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: "Sub Category 1 FY19",
      backgroundColor: "rgba(99,255,132)",
      data: [59, 80, 81, 56],
      stack: 1
    },
    {
      label: "Sub Category 1 FY20",
      backgroundColor: "rgba(99,99,255)",
      data: [29, 30, 41, 36],
      stack: 1
    },
    // {
    //   label: "Sub Category 1 FY21",
    //   backgroundColor: "rgba(99,99,132)",
    //   data: [59, 80, 81, 56],
    //   stack: 1
    // },
    {
      label: "Sub Category 2 FY19",
      backgroundColor: "rgba(99,99,99)",
      // backgroundColor: "rgba(99,132,255)",
      data: [80, 81, 56, 55],
      stack: 2
    },
    {
      label: "Sub Category 2 FY20",
      backgroundColor: "rgba(99,99,255)",
      data: [30, 19, 20, 41],
      stack: 2
    },
    // {
    //   label: "Sub Category 2 FY21",
    //   backgroundColor: "rgba(99,99,132)",
    //   data: [60, 59, 80, 81],
    //   stack: 2
    // },
    {
      label: "Sub Category 3 FY19",
      backgroundColor: "rgba(255,99,132)",
      // backgroundColor: "rgba(99,99,99)",
      data: [85, 61, 50, 58],
      stack: 3
    },
    {
      label: "Sub Category 3 FY20",
      backgroundColor: "rgba(99,99,255)",
      // backgroundColor: "rgba(99,99,99)",
      data: [45, 31, 20, 38],
      stack: 3
    },
    // {
    //   label: "Sub Category 3 FY21",
    //   backgroundColor: "rgba(99,99,132)",
    //   // backgroundColor: "rgba(99,99,99)",
    //   data: [85, 61, 50, 58],
    //   stack: 3
    // }
  ]
};

class Bar2Example extends Component {
  render() {
    var legend = [{ label: '2019', backgroundColor: "rgba(99,255,132)" },
    { label: '2020', backgroundColor: "rgba(99,99,99)" },
    { label: '2021', backgroundColor: "rgba(255,99,132)" },
    { label: '2022', backgroundColor: "rgba(99,99,255)" }];
    return (
      <div>
        <h2>% Market Growth</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            tooltips: {
              // Disable the on-canvas tooltip
              enabled: false,

              custom: function (tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');
                // console.log('>>>', tooltipEl)

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
                  var titleLines = tooltipModel.title || [];
                  var bodyLines = tooltipModel.body.map(getBody);

                  var innerHtml = '<thead>';

                  titleLines.forEach(function (title) {
                    innerHtml += '<tr><th> FY ' + title + '</th></tr>';
                  });
                  innerHtml += '</thead><tbody>';

                  bodyLines.forEach(function (body, i) {
                    var colors = tooltipModel.labelColors[i];
                    var style = 'background-color:' + colors.backgroundColor;
                    style += '; border-color: #ffffff';
                    style += '; border-width: 2px';
                    var span = '<span style="' + style + '"></span>';
                    innerHtml += '<tr><td>' + span + body[0].substring(0, body[0].indexOf(":")) + '</td></tr>';
                    innerHtml += '<tr><td>' + span + "Growth: " + body[0].substring(body[0].indexOf(":") + 2, body[0].length) + '</td></tr>';
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
                  max: 150,
                  stepSize: 5
                },
                stacked: true,
              }],
              xAxes: [{
                barPercentage: 0.7,
                categoryPercentage: 0.5,
                barDatasetSpacing: 0,
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

export default Bar2Example;