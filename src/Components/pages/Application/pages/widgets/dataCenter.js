import React, { useEffect, useState } from "react";
import ChartWidget from "../chartWidget";

export const BusinessCriticality = ({ className, filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        appsByBusinessCriticality: [
          {
            name: "1 - most critical",
            value: 16.4,
            count: 381,
          },
          {
            name: "2 - somewhat critical",
            value: 48.26,
            count: 1121,
          },
          {
            name: "3 - less critical",
            value: 35.34,
            count: 821,
          },
          {
            name: "0 - no criticality",
            value: 0.13,
            count: 3,
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
        title="Business Criticality"
        type="donut"
        headerLabel="Business Criticality"
        tableValue="Value"
        // WidgetInfoIcon
        // infoContent={handleInfoContent}
        series={{
          xAxis: data?.appsByBusinessCriticality?.length
            ? data?.appsByBusinessCriticality?.map((d) => d.name)
            : [],
          data: [
            {
              name: "Application by Business Criticality",
              value: data?.appsByBusinessCriticality?.length
                ? data?.appsByBusinessCriticality?.map(
                    (d) => `${d?.value?.toFixed(2) || 0}`
                  )
                : [],
            },
          ],
          count: data?.appsByBusinessCriticality?.length
            ? data?.appsByBusinessCriticality?.map((d) => `${d?.count}`)
            : [],
          unit: "%",
        }}
        color={["#ED3A27 ", "#ED8B00  ", "#F4EE9E  ", " #D6DCE5  "]}
        // monoColors={AllChartColors?.MonoChartVarient4}
        dataPointColorChange
        handleRefresh={() => fetchData()}
        isLoading={loading}
        // handleDownload={() => data}
        // onEvents={{
        //     click: (params) => {
        //         history.push(`?table=true&chartName=appsByBusinessCriticality&cValue=${encodeURIComponent(params.name)}&month=${paramsMonth}`);
        //     },
        // }}
      />
    </div>
  );
};

export default React.memo(BusinessCriticality);

// BusinessCriticality.propTypes = {
//   className: PropTypes.string,
//   filterData: PropTypes.shape({
//     isFilterApplied: PropTypes.bool,
//     filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//     latestDateSum: PropTypes.string,
//   }),
// };

// BusinessCriticality.defaultProps = {
//   className: "",
//   filterData: {},
// };
