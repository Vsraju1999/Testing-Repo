import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { BarChart, GraphicComponent } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";

// Register components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  SVGRenderer,
  DataZoomComponent,
]);

const DynamicBarComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "Random Data",
        textStyle: {
          // Add textStyle property for title customization
          color: "#fff", // Set the color of the title text
        },
      },
      xAxis: {
        type: "category",
        data: ["Animals", "Fruits", "Cars"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      yAxis: {},
      dataGroupId: "",
      animationDurationUpdate: 500,
      series: [
        {
          type: "bar",
          id: "sales",
          data: [
            {
              value: 5,
              groupId: "animals",
            },
            {
              value: 2,
              groupId: "fruits",
            },
            {
              value: 4,
              groupId: "cars",
            },
          ],
          universalTransition: {
            enabled: true,
            divideShape: "clone",
          },
        },
      ],
    };

    const drilldownData = [
      {
        dataGroupId: "animals",
        data: [
          ["Cats", 4],
          ["Dogs", 2],
          ["Cows", 1],
          ["Sheep", 2],
          ["Pigs", 1],
        ],
      },
      {
        dataGroupId: "fruits",
        data: [
          ["Apples", 4],
          ["Oranges", 2],
        ],
      },
      {
        dataGroupId: "cars",
        data: [
          ["Toyota", 4],
          ["Opel", 2],
          ["Volkswagen", 2],
        ],
      },
    ];

    myChart.on("click", function (event) {
      if (event.data) {
        var subData = drilldownData.find(function (data) {
          return data.dataGroupId === event.data.groupId;
        });
        if (!subData) {
          return;
        }
        myChart.setOption({
          xAxis: {
            data: subData.data.map(function (item) {
              return item[0];
            }),
          },
          series: [
            {
              type: "bar",
              id: "sales",
              dataGroupId: subData.dataGroupId,
              data: subData.data.map(function (item) {
                return item[1];
              }),
              universalTransition: {
                enabled: true,
                divideShape: "clone",
              },
            },
          ],
          graphic: [
            {
              type: "text",
              left: 50,
              top: 30,
              style: {
                text: "Back",
                fontSize: 18,
                fill: "#fff",
                cursor: "pointer",
              },

              onclick: function () {
                myChart.setOption(option);
              },
            },
          ],
        });
      }
    });

    myChart.setOption(option);

    // Clean up function
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "350px" }} />;
};

export default DynamicBarComponent;
