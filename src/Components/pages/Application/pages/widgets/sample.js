import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactEcharts from "echarts-for-react";
import { WidgetComponent } from "../../../../widgetComponent/widgetHeader";

export const SampleChartWidgetComponent = (props) => {
  const { type: initialType = "bar" } = props;
  const [type, setType] = useState(initialType);
  const [chartOptions, setChartOptions] = useState({});

  const datas = {
    xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    data: [120, 200, 150, 80, 70],
  };

  useEffect(() => {
    const chartData = {
      line: datas,
      bar: datas,
      horizontal: datas,
      pie: {
        data: datas.xAxis.map((item, index) => ({
          value: datas.data[index],
          name: item,
        })),
      },
      donut: {
        data: datas.xAxis.map((item, index) => ({
          value: datas.data[index],
          name: item,
        })),
      },
      "line & bar": {
        xAxis: datas.xAxis,
        data: [
          {
            name: "Line",
            value: datas.data.map((item) => item),
          },
          {
            name: "Bar",
            value: datas.data.map((item) => item),
          },
        ],
      },
    };

    // Load static JSON data
    const data = chartData[type];

    console.log(data, "data");

    let xAxisType, yAxisType, chartSeries;

    switch (type) {
      case "line":
        xAxisType = "category";
        yAxisType = "value";
        chartSeries = [{ type: "line", data: data.data }];
        break;
      case "bar":
        xAxisType = "category";
        yAxisType = "value";
        chartSeries = [
          {
            type: "bar",
            data: data.data,
          },
        ];
        break;
      case "horizontal":
        xAxisType = "value"; // For horizontal charts, xAxis should be value type
        yAxisType = "category"; // For horizontal charts, yAxis should be category type
        chartSeries = [
          {
            type: "bar",
            data: data.data.map((value, index) => [value, data.xAxis[index]]), // Mapping data properly
          },
        ];
        break;
      case "pie":
        chartSeries = [{ type: "pie", data: data.data }];
        break;
      case "donut":
        chartSeries = [
          { type: "pie", radius: ["50%", "70%"], data: data.data },
        ];
        break;
      case "line & bar":
        chartSeries = [
          { type: "line", data: data.data[0].value },
          { type: "bar", data: data.data[1].value },
        ];
        break;
      default:
        break;
    }
    console.log("Data for xAxis:", data.xAxis);
    console.log("Data for series:", chartSeries);
    setChartOptions({
      xAxis: {
        type: xAxisType,
        data: data.xAxis || [],
        showGrid: false,
        boundaryGap: true,
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          show: ["pie", "donut", "horizontal"]?.includes(type) ? false : true,
          lineStyle: {
            color: "#999",
          },
          splitLine: {
            show: false,
          },
        },
      },
      yAxis: {
        type: yAxisType,
        axisLine: {
          show: ["pie", "donut"]?.includes(type) ? false : true,
          // show: true,
          lineStyle: {
            color: "#999",
          },
        },
        showGrid: false,
        axisTick: {
          show: true,
        },

        splitLine: {
          show: false,
        },
      },
      series: chartSeries,
      color: ["#639"],
      grid: {
        left: "8%",
        right: "5%",
        bottom: "10%",
        top: "30px",
        containLabel: true,
      },
      legend: {
        show: false,
        icon: "circle",
        // orient: "horizontal",
        bottom: "0%",
        width: "100%",
        align: "auto",

        textStyle: {
          fontSize: 12,
          color: "#999",
        },
      },
      label: {
        show: false,
        position: "top",
        color: "#fff",
      },
      tooltip: {},
      // series: chartSeries,
      //   ...defaultOptions,
    });
  }, [type]);

  // console.log("Data for xAxis:", data.xAxis);
  // console.log("Data for series:", chartSeries);

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  return (
    <WidgetComponent {...props}>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 ${
            type === "line" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => handleTypeChange("line")}
        >
          Line Chart
        </button>
        <button
          className={`mx-2 ${
            type === "bar" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => handleTypeChange("bar")}
        >
          Bar Chart
        </button>
        <button
          className={`mx-2 ${
            type === "horizontal" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => handleTypeChange("horizontal")}
        >
          Horizontal Chart
        </button>
        <button
          className={`mx-2 ${
            type === "pie" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => handleTypeChange("pie")}
        >
          Pie Chart
        </button>
        <button
          className={`mx-2 ${
            type === "donut" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => handleTypeChange("donut")}
        >
          Donut Chart
        </button>
        <button
          className={`mx-2 ${
            type === "line & bar" ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => handleTypeChange("line & bar")}
        >
          Line & Bar Chart
        </button>
      </div>
      <div className="flex-1 flex flex-col w-full items-center justify-start py-4">
        <ReactEcharts
          option={chartOptions}
          notMerge={true}
          lazyUpdate={true}
          style={{ minHeight: "300px" }}
          className="w-full"
        />
      </div>
    </WidgetComponent>
  );
};

SampleChartWidgetComponent.propTypes = {
  type: PropTypes.oneOf([
    "line",
    "bar",
    "horizontal",
    "pie",
    "donut",
    "line & bar",
  ]).isRequired,
};
