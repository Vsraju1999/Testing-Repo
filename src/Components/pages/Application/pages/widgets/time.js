import React, { useState } from "react";
import PropTypes from "prop-types";
import ChartWidget from "../chartWidget";

export const Time = ({ className, filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        timeChart: [
          {
            name: "Eliminate",
            value: 4.73,
            count: 110,
          },
          {
            name: "Invest",
            value: 32.29,
            count: 751,
          },
          {
            name: "Migrate",
            value: 30.22,
            count: 703,
          },
          {
            name: "Tolerate",
            value: 32.76,
            count: 762,
          },
        ],
      });
      // Mock data

      // Set loading to false once data is fetched
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ChartWidget
        title="TIME"
        type="donut"
        pieDLegends
        headerLabel="Time"
        // WidgetInfoIcon
        // infoContent={handleInfoContent}
        // tableValue
        formatter="{c}%"
        isPieLabelVisible
        chartName
        series={{
          xAxis: data?.timeChart?.length
            ? data?.timeChart?.map((d) => d.name)
            : [],
          data: [
            {
              name: "TIME",
              value: data?.timeChart?.length
                ? data?.timeChart?.map((d) => `${d?.value?.toFixed(2) || 0}`)
                : [],
            },
          ],
          count: data?.timeChart?.length
            ? data?.timeChart?.map((d) => `${d?.count}`)
            : [],
          unit: "%",
        }}
        color={["#FC4C02 ", "#009638 ", "#FFC000 ", "#ADB9CA ", "#B1985E"]}
        handleRefresh={() => fetchData()}
        dataPointColorChange
        isLoading={loading}
        // handleDownload={() => data}
        // onEvents={{
        //     click: (params) => {
        //         history.push(`?table=true&chartName=timeChart&cValue=${encodeURIComponent(params.name)}&month=${paramsMonth}`);
        //     },
        // }}
      />
    </div>
  );
};

export default React.memo(Time);

Time.propTypes = {
  className: PropTypes.string,
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

Time.defaultProps = {
  className: "",
  filterData: {},
};
