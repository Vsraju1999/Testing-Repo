// import React from "react";
// import ReactEcharts from "echarts-for-react";

// const BarChartComponent = () => {
//   const option = {
//     // title: {
//     //   text: "World Population",
//     //   textStyle: {
//     //     // Add textStyle property for title customization
//     //     color: "#fff", // Set the color of the title text
//     //   },
//     // },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//     },
//     legend: {
//       bottom: 10, // Display legend at the bottom
//       textStyle: {
//         // Customize legend text style
//         color: "#fff", // Change legend text color
//       },
//     },
//     grid: {
//       left: "3%",
//       right: "4%",
//       bottom: "15%", // Adjust the bottom margin for the chart
//       containLabel: true,
//     },
//     // toolbox: {
//     //   feature: {
//     //     saveAsImage: {},
//     //   },
//     // },
//     xAxis: {
//       type: "value",
//       boundaryGap: [0, 0.01],
//     },
//     yAxis: {
//       type: "category",
//       data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
//     },
//     series: [
//       {
//         name: "2011",
//         type: "bar",
//         data: [18203, 23489, 29034, 104970, 131744, 630230],
//       },
//       {
//         name: "2012",
//         type: "bar",
//         data: [19325, 23438, 31000, 121594, 134141, 681807],
//       },
//     ],
//   };

//   return (
//     <div className="flex h-full w-full flex-col">
//       <div style={{ height: "15%" }}>World Population</div>
//       <div style={{ height: "85%" }}>
//         <ReactEcharts option={option} />
//       </div>
//     </div>
//   );
// };

// export default BarChartComponent;

import React from "react";
import { ChartWidgetComponent } from "../../../widgetComponent";

const BarChartComponent = () => {
  const [loading, setloading] = React.useState(false);

  const data = {
    Availability_Trend: {
      state: ["Jan", "Feb", "Mar"],
      in_data: [
        {
          name: "2023",
          values: ["99.9986", "99.9986", "99.9982"],
        },
        {
          name: "2024",
          values: ["99.9992", "99.9989", "99.9940"],
        },
      ],
    },
  };

  const rr = {
    xAxis: data && data?.Availability_Trend?.state,
    data:
      data &&
      data?.Availability_Trend?.in_data?.map((a, i) => ({
        name: a.name,
        value: a.values,
        type: i % 2 === 0 ? "line" : "bar",
      })),
  };

  return (
    <div>
      <ChartWidgetComponent
        type="line"
        title="Title"
        series={rr || []}
        color={["#B1985E", "#008080", "#77B489", "#B57432", "#2E85D9"]}
        max={100}
      />
    </div>
  );
};
export default React.memo(BarChartComponent);
