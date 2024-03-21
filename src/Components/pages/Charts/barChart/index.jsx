import React from "react";
import ReactEcharts from "echarts-for-react";

const BarChartComponent = () => {
  const option = {
    title: {
      text: "World Population",
      textStyle: {
        // Add textStyle property for title customization
        color: "#fff", // Set the color of the title text
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      bottom: 10, // Display legend at the bottom
      textStyle: {
        // Customize legend text style
        color: "#fff", // Change legend text color
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%", // Adjust the bottom margin for the chart
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    },
    series: [
      {
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
      {
        name: "2012",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807],
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default BarChartComponent;
