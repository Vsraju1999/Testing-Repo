import React from "react";
import ReactEcharts from "echarts-for-react"; // Make sure you have echarts-for-react installed

const RaderChartComponent = () => {
  const option = {
    title: {
      text: "Referer of a Website",
      textStyle: {
        // Add textStyle property for title customization
        color: "#fff", // Set the color of the title text
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal", // changed to horizontal for legends to display below
      bottom: 10, // moved to bottom to display below
      textStyle: {
        // Customize legend text style
        color: "#fff", // Change legend text color
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            // shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};

export default RaderChartComponent;
