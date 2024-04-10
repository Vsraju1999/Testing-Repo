import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChartWidget from "../chartWidget";

const datas = {
  SECTOR: {
    Applications: [
      "EUROPE",
      "PFNA",
      "PBNA",
      "CGF",
      "AMESA",
      "LATAM",
      "APAC",
      "PGCS",
      "SODASTREAM",
    ],
    data: [
      {
        name: "Business Application",
        values: [508, 399, 406, 274, 212, 227, 192, 111, 47],
      },
      {
        name: "Infra Application",
        values: [198, 217, 204, 325, 179, 142, 130, 112, 27],
      },
    ],
  },
  IT_EXCOMM: {
    Applications: [
      "Nigel Richardson",
      "Stephanie Skinner",
      "Joan Pertak",
      "Magesh Bagavathi",
      "Shyam Venkat",
      "David Dohnalik",
      "Salma Abdelgelil",
      "Ana Camargo",
      "Xiao Ling Cui",
      "Andrew Kirkland",
      "Mark O'Brien",
      "Gayatri Narayan",
    ],
    data: [
      {
        name: "Business Application",
        values: [389, 323, 246, 21, 218, 150, 108, 136, 74, 0, 2, 8],
      },
      {
        name: "Infra Application",
        values: [64, 58, 37, 249, 36, 78, 50, 15, 6, 49, 9, 0],
      },
    ],
  },
};

export const ReferenceArchitecture = ({ className, filterData }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [barIndex, setBarIndex] = useState(undefined);

  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(datas);
      // setBarIndex(datas?.data);
      // Mock data
      if (datas) {
        setBarIndex(barIndex || Object.keys(datas)?.map((item) => item)?.[0]);
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

  // useEffect(() => {
  //   if (data) {
  //     setBarIndex(barIndex || Object.keys(data)?.map((item) => item)?.[0]);
  //   }
  // }, [data]);

  // const handleRefresh = () => {
  //   setLoading(true);
  //   fetchData();
  //   setLoading(false);
  // };

  return (
    <div className={className}>
      <ChartWidget
        title="Applications By Sector and IT Excomm"
        headerLabel="Sector"
        type="stack bar"
        isPieLabelVisible
        dataPointColorChange={false}
        disPlayCount
        stackBarTotalCount
        dataoptions={data && Object.keys(data)?.map((item) => item)}
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
        onSelectDrop={(e) => setBarIndex(e.target.value)}
        handleRefresh={() => fetchData()}
        isLoading={loading}
        handleDownload={() => data}
        // onEvents={{
        //     click: (params) => {
        //         history.push(
        //             `?table=true&chartName=appsByAppByRefarchSectItexcom&cValue=${encodeURIComponent(params.name)}&month=${paramsMonth}&submodule=${
        //                 params.seriesName
        //             }`
        //         );
        //     },
        // }}
      />
    </div>
  );
};

export default React.memo(ReferenceArchitecture);

ReferenceArchitecture.propTypes = {
  className: PropTypes.string,
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array || PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

ReferenceArchitecture.defaultProps = {
  className: "",
  filterData: {},
};
