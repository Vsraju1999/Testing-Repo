import React from "react";
import ReactEcharts from "echarts-for-react";

const LineChartComponent = () => {
  const option = {
    title: {
      text: "Stacked Line",
      textStyle: {
        // Add textStyle property for title customization
        color: "#fff", // Set the color of the title text
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      bottom: 8, // Display legend at the bottom
      textStyle: {
        // Customize legend text style
        color: "#fff", // Change legend text color
      },
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      icon: "circle", // Display legend as round bubble
      itemWidth: 15, // Adjust the width of legend item bubble
      itemHeight: 15, // Adjust the height of legend item bubble
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
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      boundaryGap: false,
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default LineChartComponent;
