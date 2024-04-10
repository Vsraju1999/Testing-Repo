import React, { useState } from "react";
import PropTypes from "prop-types";
import ChartWidget from "../chartWidget";

export const SolutionScope = ({ className, filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        appsBySolutionScope: [
          {
            name: "Local Application",
            value: 46.04,
            count: 1071,
          },
          {
            name: "Multi-Sector Application",
            value: 34.65,
            count: 806,
          },
          {
            name: "Sector Application",
            value: 19.26,
            count: 448,
          },
          {
            name: "Null Scope Application",
            value: 0.04,
            count: 1,
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
    <div className={className}>
      <ChartWidget
        title="Solution Scope"
        headerLabel="Application by Solution Scope"
        tableValue
        type="donut"
        // WidgetInfoIcon
        // infoContent={handleInfoContent}
        pieDLegends
        hasTopLabels
        formatter="{c}%"
        isPieLabelVisible
        dataPointColorChange
        series={{
          xAxis: data?.appsBySolutionScope?.length
            ? data?.appsBySolutionScope?.map((d) => d.name)
            : [],
          data: [
            {
              name: "Application by Solution Scope",
              value: data?.appsBySolutionScope?.length
                ? data?.appsBySolutionScope?.map(
                    (d) => `${d?.value?.toFixed(2) || 0}`
                  )
                : [],
            },
          ],
          count: data?.appsBySolutionScope?.length
            ? data?.appsBySolutionScope?.map((d) => `${d?.count}`)
            : [],
          unit: "%",
        }}
        color={[
          "#7030A0  ",
          "#46C0FF  ",
          "#0085CA ",
          "#8497B0 ",
          "#B1985E",
          "#A78029",
          "#BBABA0",
          "#CCC589",
          "#82A66C",
          "#63BDF6",
          "#D7BE82",
          "#755C1B",
          "#7A4419",
          "#515A47",
        ]}
        // monoColors={AllChartColors?.MonoChartVarient9}
        handleRefresh={() => fetchData()}
        isLoading={loading}
        // handleDownload={() => data}
        // onEvents={{
        //   click: (params) => {
        //     history.push(
        //       `?table=true&chartName=appsBySolutionScope&cValue=${encodeURIComponent(
        //         params.name
        //       )}&month=${paramsMonth}`
        //     );
        //   },
        // }}
      />
    </div>
  );
};

export default React.memo(SolutionScope);

SolutionScope.propTypes = {
  className: PropTypes.string,
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

SolutionScope.defaultProps = {
  className: "",
  filterData: {},
};
