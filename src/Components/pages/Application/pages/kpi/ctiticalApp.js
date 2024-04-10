import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import KpiOneComponent from "../../../../KPI/kpiOne";

export const CriticalApp = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        criticalApplications: {
          thisMonth: 381,
          lastMonth: 379,
          change: 2,
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

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <KpiOneComponent
        title="Total Critical Applications"
        data={data?.criticalApplications?.thisMonth}
        label="Today"
        isLoading={loading}
        // getUrl={`?table=true&name=criticalApplication&month=${paramsMonth}`}
      />
    </>
  );
};

export default React.memo(CriticalApp);

CriticalApp.propTypes = {
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

CriticalApp.defaultProps = {
  filterData: {},
};
