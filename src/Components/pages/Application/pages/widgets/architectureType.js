import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChartWidget from "../chartWidget";

export const ArchitectureType = ({ className }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        applicationByArchitectureType: [
          {
            name: "N-Tier",
            value: 38.44,
            count: 894,
          },
          {
            name: "Platform Application",
            value: 12.21,
            count: 284,
          },
          {
            name: "Platform Host",
            value: 6.53,
            count: 152,
          },
          {
            name: "Web Based",
            value: 42.82,
            count: 996,
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

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={className}>
      <ChartWidget
        title="Architecture Type"
        headerLabel="Architecture Type"
        tableValue
        type="donut"
        pieDLegends
        formatter="{c}%"
        isPieLabelVisible
        series={{
          xAxis: data?.applicationByArchitectureType?.length
            ? data?.applicationByArchitectureType?.map((d) => d.name)
            : [],
          data: [
            {
              name: "Application by Architecture Type",
              value: data?.applicationByArchitectureType?.length
                ? data?.applicationByArchitectureType?.map(
                    (d) => `${d?.value?.toFixed(2) || 0}`
                  )
                : [],
            },
          ],
          count: data?.applicationByArchitectureType?.length
            ? data?.applicationByArchitectureType?.map((d) => `${d?.count}`)
            : [],
          unit: "%",
        }}
        color={["#ADB9CA  ", "#FE9367 ", "#92D050 ", "#00B0F0 "]}
        dataPointColorChange
        handleRefresh={() => fetchData()}
        isLoading={loading}
        // handleDownload={() => data}
        // onEvents={{
        //     click: (params) => {
        //         history.push(`?table=true&chartName=applicationByArchitectureType&cValue=${encodeURIComponent(params.name)}&month=${paramsMonth}`);
        //     },
        // }}
      />
    </div>
  );
};

export default React.memo(ArchitectureType);

ArchitectureType.propTypes = {
  className: PropTypes.string,
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

ArchitectureType.defaultProps = {
  className: "",
  filterData: {},
};
