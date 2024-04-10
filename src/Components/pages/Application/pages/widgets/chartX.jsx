import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../loader";
import { WidgetComponent } from "../../../../widgetComponent/widgetHeader";
import { FaChevronDown, FaChevronUp } from "../../../../Assets/Icons";

export const DefaultChartColor = [
  "#007CD5 ",
  "#B7DBFF",
  "#B7DBFF",
  "#B7DBFF",
  "#B7DBFF",
  "#B7DBFF",
  "#B7DBFF",
  "#B7DBFF",
  "#B7DBFF",
];
export const DefaultMonoChartColor = [
  "#1e5d8b",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
  "#227db0",
];

const datas = [
  {
    name: "Business Application",
    value: [
      {
        label: "Innovation and Product Lifecycle Management",
        count: 84,
      },
      {
        label: "Consumer & Marketing",
        count: 81,
      },
      {
        label: "Supply Chain, Sourcing and Manufacturing",
        count: 588,
      },
      {
        label: "Go To Market (Customer & Sales)",
        count: 394,
      },
      {
        label: "Human Capital Management",
        count: 212,
      },
      {
        label: "Finance & Accounting",
        count: 246,
      },
      {
        label: "Corporate Affairs",
        count: 30,
      },
      {
        label: "Enterprise Asset Management",
        count: 102,
      },
      {
        label: "Legal",
        count: 54,
      },
    ],
    totalCount: 1684,
  },
  {
    name: "Data & AI",
    value: [
      {
        label: "Ingest",
        count: 8,
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
        count: 31,
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
    totalCount: 147,
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
        count: 9,
      },
    ],
    totalCount: 23,
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
        count: 85,
      },
      {
        label: "UCC & End User Compute",
        count: 103,
      },
      {
        label: "Security",
        count: 87,
      },
      {
        label: "Application Lifecycle Management",
        count: 42,
      },
      {
        label: "Infrastructure",
        count: 55,
      },
    ],
    totalCount: 369,
  },
];

export const ChartX = ({ filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState([]);
  const navigate = useNavigate();

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(datas);
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

  const handleDataClick = (module, subModule = null) => {
    navigate(
      `?table=true&chartName=appsByRefArchitecture&cValue=${encodeURIComponent(
        module
      )}&subModule2=${encodeURIComponent(
        subModule
      )}&pageTitle=${encodeURIComponent(
        module
      )}&kpiChartName=Reference Architecture (Capability Domain)_${encodeURIComponent(
        module
      )}`
    );
  };
  const ExpandData = (num) => {
    let val = index;
    if (index.includes(num)) {
      val = val.filter((a) => a !== num);
    } else {
      val = [...index, num];
    }
    setIndex(val);
  };

  console.log(index, "index");
  const isMono = localStorage.getItem("monoChrome") === "true";

  return (
    <WidgetComponent
      title="Reference Architecture (Capability Domain)"
      widgetInnerScroll
      handleRefresh={() => fetchData()}
    >
      {loading && (
        <p
          className="flex flex-col items-center justify-center w-full h-full text-gray-500"
          style={{ minHeight: "320px" }}
        >
          <Loader content="Loading..." className="pl-2" />{" "}
        </p>
      )}
      {!loading && !(data?.length > 0) && (
        <p
          className="flex flex-col items-center justify-center w-full h-full text-gray-500"
          style={{ minHeight: "320px" }}
        >
          No Data
        </p>
      )}
      {console.log(data, "data")}
      {!loading &&
        data?.length > 0 &&
        data?.map((item, i) => {
          const getCount = item?.value?.map((m) => parseInt(m?.count, 10));
          const getMaxValue = Math.max(...getCount);
          return (
            <div className="grid">
              <div
                className="secHead flex space-y-1 items-center mb-2 pb-2"
                style={{
                  borderBottom: "1px solid #6480a1",
                }}
              >
                <p className="flex items-center justify-center text-lg">
                  {item?.name}
                </p>
                <button
                  type="button"
                  className="text-md font-semibold ml-auto rounded py-1 px-4"
                  style={{ marginTop: 0, background: "#5a92f9" }}
                  //   onClick={() => handleDataClick(item?.name)}
                  //   onKeyDown={() => handleDataClick(item?.name)}
                >
                  {item?.totalCount || 0}
                </button>
                <button
                  className="flex justify-center"
                  type="button"
                  onClick={() => {
                    ExpandData(i);
                  }}
                >
                  {!index.includes(i) ? (
                    <FaChevronDown size="32" title="Expand" />
                  ) : (
                    <FaChevronUp size="32" title="Collapse" />
                  )}
                </button>
              </div>
              <div
                style={{
                  display: `${index.includes(i) ? "block" : "none"} `,
                }}
              >
                <div className={`bar grid ${!index.includes(i) ? "mb-6" : ""}`}>
                  {item?.value?.map((d, j) => (
                    <>
                      <div className="flex items-center justify-end px-1">
                        <div
                          className="barLabel"
                          style={{
                            display: "block",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            width: "100%",
                            textOverflow: "ellipsis",
                            paddingRight: "10px",
                            color: "#999999",
                          }}
                          title={d?.label}
                        >
                          {d?.label}
                          {console.log(d?.label)}
                        </div>
                      </div>
                      <div
                        className={`py-1 relative ${
                          j + 1 === item?.value?.length ? "last_div" : ""
                        } ${j === 0 ? "first_div" : ""}`}
                        style={{ borderLeft: "1px solid #999" }}
                      />
                      <div
                        className="bar_wrap"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          position: "relative",
                        }}
                      >
                        <span
                          className="bar_progress"
                          style={{
                            background: `${
                              isMono
                                ? DefaultMonoChartColor[i]
                                : DefaultChartColor[i]
                            }`,
                            width: `calc(${Math.floor(
                              (d?.count / getMaxValue) * 100
                            )}% - 50px)`,
                            display: "block",
                            cursor: "pointer",
                            height: "8px",
                          }}
                          //   onClick={() => handleDataClick(item?.name, d?.label)}
                          //   onKeyDown={() =>
                          //     handleDataClick(item?.name, d?.label)
                          //   }
                          role="none"
                        />
                        <span
                          className="bar_count"
                          style={{cursor: 'pointer', paddingLeft: '0.25rem', maxWidth: '50px', color: '#999'}}
                          //   onClick={() => handleDataClick(item?.name, d?.label)}
                          //   onKeyDown={() =>
                          //     handleDataClick(item?.name, d?.label)
                          //   }
                          role="none"
                        >
                          {d?.count}
                        </span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </WidgetComponent>
  );
};
export default React.memo(ChartX);

ChartX.propTypes = {
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

ChartX.defaultProps = {
  filterData: {},
};
