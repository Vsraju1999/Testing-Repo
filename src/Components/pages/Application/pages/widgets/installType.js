import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChartWidget from "../chartWidget";

const aggregrateColors = ["#00B050 ", "#0071E2 "];
const granularColors = [
  "#00Ea6a",
  "#00C85A ",
  "#00B050",
  "#85c2ff ",
  "#5daeff ",
  "#007dfa ",
  "#0060c0 ",
];

const datas = {
  Aggregate: [
    {
      name: "Cloud",
      value: 56.84,
      count: 1322,
    },
    {
      name: "On-Premise",
      value: 43.16,
      count: 1004,
    },
  ],
  Granular: [
    {
      name: "Stand Alone",
      value: 2.02,
      count: 47,
    },
    {
      name: "On-Premise (DataCenter)",
      value: 30.44,
      count: 708,
    },
    {
      name: "On-Premise (Field Site)",
      value: 10.71,
      count: 249,
    },
    {
      name: "BPaaS",
      value: 2.54,
      count: 59,
    },
    {
      name: "SaaS",
      value: 27.34,
      count: 636,
    },
    {
      name: "PaaS",
      value: 7.35,
      count: 171,
    },
    {
      name: "IaaS",
      value: 19.6,
      count: 456,
    },
  ],
};
export const InstallType = ({ className, filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pieIndex, setPieIndex] = React.useState(undefined);
  const [colors, setColors] = useState(aggregrateColors);

  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(datas);
      // Mock data
      if (datas) {
        setPieIndex(pieIndex || Object.keys(datas)?.map((item) => item)?.[0]);
      }
      // Set loading to false once data is fetched
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={className}>
      <ChartWidget
        title="Install Type"
        headerLabel="Install Type"
        type="donut"
        pieDLegends
        // WidgetInfoIcon
        // infoContent={handleInfoContent}
        formatter="{c}%"
        isPieLabelVisible
        dataoptions={data && Object.keys(data)?.map((item) => item)}
        series={{
          xAxis: data?.[pieIndex]?.map((d) => d.name),
          data: [
            {
              name: data?.[pieIndex]?.map((d) => d.name),
              value: data?.[pieIndex]?.map(
                (d) => `${d?.value?.toFixed(2) || 0}`
              ),
            },
          ],
          count: data?.[pieIndex]?.map((d) => `${d?.count}`),
          unit: "%",
        }}
        onSelectDrop={(e) => {
          setPieIndex(e.target.value);
          if (e.target.value === "Aggregate") {
            setColors(aggregrateColors);
          } else {
            setColors(granularColors);
          }
        }}
        color={colors}
        handleRefresh={() => fetchData()}
        dataPointColorChange
        isLoading={loading}
        tableValue
        // handleDownload={() => data}
        // onEvents={{
        //   click: (params) => {
        //     history.push(
        //       `?table=true&chartName=appsByInstallType&cValue=${encodeURIComponent(
        //         params.name
        //       )}&month=${paramsMonth}`
        //     );
        //   },
        // }}
      />{" "}
    </div>
  );
};
export default React.memo(InstallType);
InstallType.propTypes = {
  className: PropTypes.string,
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};
InstallType.defaultProps = {
  className: "",
  filterData: {},
};
