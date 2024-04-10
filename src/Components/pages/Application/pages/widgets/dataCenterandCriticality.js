import React, { useState } from "react";
import PropTypes from "prop-types";
import ChartWidget from "../chartWidget";

export const DataCenterandCriticality = ({ className, filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        appsByDataCenter: {
          DC_TYPE: [
            "FIELD",
            "RDC",
            "PDC",
            "AZURE DC",
            "LDC",
            "FDC",
            "SDC",
            "UNKNOWN",
          ],
          data: [
            {
              name: "Most Critical",
              values: [135, 119, 126, 142, 50, 51, 16, 1],
            },
            {
              name: "Somewhat Critical",
              values: [413, 315, 310, 266, 146, 128, 48, 2],
            },
            {
              name: "Less Critical",
              values: [160, 88, 84, 151, 99, 70, 10, 1],
            },
          ],
        },
      });
      // Mock data

      // Set loading to false once data is fetched
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const rr = {
    xAxis: data && data?.appsByDataCenter?.DC_TYPE,
    data:
      data &&
      data?.appsByDataCenter?.data?.map((a, i) => ({
        name: a.name,
        value: a.values,
        type: i % 2 === 0 ? "line" : "bar",
      })),
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={className}>
      <ChartWidget
        title="Data Center and Criticality"
        headerLabel="Data Center"
        type="horizontal"
        series={rr || []}
        WidgetInfoIcon
        isLoading={loading}
        handleDownload={() => data}
        dataPointColorChange={false}
        handleRefresh={() => fetchData()}
        isLegendsDisplay
        color={["#ED3A27 ", "#ED8B00  ", "#F4EE9E "]}
        // onEvents={{
        //   click: (params) => {
        //     history.push(
        //       `?table=true&chartName=appsByDataCenter&cValue=${encodeURIComponent(
        //         params.name
        //       )}&sName=${encodeURIComponent(
        //         params.seriesName
        //       )}&month=${paramsMonth}`
        //     );
        //   },
        // }}
      />
    </div>
  );
};
export default React.memo(DataCenterandCriticality);

DataCenterandCriticality.propTypes = {
  className: PropTypes.string,
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

DataCenterandCriticality.defaultProps = {
  className: "",
  filterData: {},
};
