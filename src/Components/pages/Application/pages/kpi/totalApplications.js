import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import KpiOneComponent from "../../../../KPI/kpiOne";

export const TotalApplications = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        totalApplications: {
          thisMonth: 2326,
          lastMonth: 2309,
          change: 17,
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
        title="Total Applications"
        data={data?.totalApplications?.thisMonth}
        label="Today"
        isLoading={loading}
        // getUrl={`?table=true&name=criticalApplication&month=${paramsMonth}`}
      />
    </>
  );
};

export default React.memo(TotalApplications);

TotalApplications.propTypes = {
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

TotalApplications.defaultProps = {
  filterData: {},
};
