import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChartWidget from "../chartWidget";

const datas = [
  {
    name: "Business Application",
    value: [
      {
        label: "Innovation and Product Lifecycle Management",
        count: 83,
      },
      {
        label: "Consumer & Marketing",
        count: 79,
      },
      {
        label: "Supply Chain, Sourcing and Manufacturing",
        count: 590,
      },
      {
        label: "Go To Market (Customer & Sales)",
        count: 400,
      },
      {
        label: "Human Capital Management",
        count: 211,
      },
      {
        label: "Finance & Accounting",
        count: 246,
      },
      {
        label: "Corporate Affairs",
        count: 29,
      },
      {
        label: "Enterprise Asset Management",
        count: 101,
      },
      {
        label: "Legal",
        count: 54,
      },
    ],
    totalCount: 1687,
  },
  {
    name: "Data & AI",
    value: [
      {
        label: "Ingest",
        count: 6,
      },
      {
        label: "Prepare",
        count: 4,
      },
      {
        label: "Analyze",
        count: 6,
      },
      {
        label: "Serve",
        count: 47,
      },
      {
        label: "Consume",
        count: 32,
      },
      {
        label: "Store",
        count: 6,
      },
      {
        label: "Manage & Govern",
        count: 51,
      },
      {
        label: "Analytics App Store",
        count: 0,
      },
      {
        label: "Structured & Unstructured Storage",
        count: 0,
      },
      {
        label: "Data Management",
        count: 0,
      },
    ],
    totalCount: 146,
  },
  {
    name: "Enterprise Integration",
    value: [
      {
        label: "Process Integration",
        count: 28,
      },
      {
        label: "Application Integration",
        count: 6,
      },
      {
        label: "Data Integration",
        count: 58,
      },
    ],
    totalCount: 90,
  },
  {
    name: "Intelligent Automation & AI",
    value: [
      {
        label: "Process Discovery",
        count: 3,
      },
      {
        label: "Process Automation",
        count: 9,
      },
      {
        label: "Digital Assistant",
        count: 5,
      },
      {
        label: "Vision & Deep Learning",
        count: 10,
      },
    ],
    totalCount: 24,
  },
  {
    name: "Web Solutions",
    value: [
      {
        label: "Web Presentation",
        count: 14,
      },
      {
        label: "Web Enablers",
        count: 7,
      },
    ],
    totalCount: 20,
  },
  {
    name: "Internet of Things",
    value: [
      {
        label: "Edge Management",
        count: 2,
      },
      {
        label: "IoT Data Ingestion and Processing",
        count: 2,
      },
      {
        label: "IoT Management",
        count: 2,
      },
      {
        label: "Digital Twin",
        count: 1,
      },
    ],
    totalCount: 3,
  },
  {
    name: "IT Core Services",
    value: [
      {
        label: "IT Service Management",
        count: 84,
      },
      {
        label: "UCC & End User Compute",
        count: 103,
      },
      {
        label: "Security",
        count: 84,
      },
      {
        label: "Application Lifecycle Management",
        count: 42,
      },
      {
        label: "Infrastructure",
        count: 53,
      },
    ],
    totalCount: 364,
  },
];

export const ReferenceArchitectureWidget = ({ className, filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [barIndex, setBarIndex] = useState(undefined);

  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(datas);
      // Mock data
      if (datas?.data) {
        setBarIndex(
          barIndex || Object.keys(datas?.data)?.map((item) => item)?.[0]
        );
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
        title="Reference Architecture (Capability Domain)"
        headerLabel="Sector"
        type="stack bar"
        isPieLabelVisible
        dataPointColorChange={false}
        disPlayCount
        stackBarTotalCount
        series={{
          xAxis: data && data?.[barIndex]?.Applications?.map((d) => d),
          data:
            data &&
            data?.[barIndex]?.data?.map((a, i) => ({
              name: a.name,
              value: a.values,
              type: i % 2 === 0 ? "line" : "bar",
            })),
        }}
        color={["#007CD5 ", "#B7DBFF "]}
        isLegendsDisplay
        handleRefresh={() => fetchData()}
        isLoading={loading}
      />
    </div>
  );
};

export default React.memo(ReferenceArchitectureWidget);

ReferenceArchitectureWidget.propTypes = {
  className: PropTypes.string,
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array || PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

ReferenceArchitectureWidget.defaultProps = {
  className: "",
  filterData: {},
};
