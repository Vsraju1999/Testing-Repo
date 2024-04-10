import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import KpiOneComponent from "../../../../KPI/kpiOne";
import KpiTwoComponent from "../../../../KpiTwo";

export const Retirement = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        additions: {
          currentMonth: 9,
          currentYear: 42,
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
      <KpiTwoComponent
        isLoading={loading}
        title="Retirement"
        dataLabel={[
          { name: "thismonth", value: "currentMonth", label: "This Month" },
          { name: "ytd", value: "currentYear", label: "YTD" },
        ]}
        data={data?.additions}
        getUrl={`?table=true&name=retirements&kpiChartName=Retirement`}
      />
    </>
  );
};

export default React.memo(Retirement);

Retirement.propTypes = {
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

Retirement.defaultProps = {
  filterData: {},
};
