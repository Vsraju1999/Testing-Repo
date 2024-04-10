import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import KpiOneComponent from "../../../../KPI/kpiOne";
import KpiTwoComponent from "../../../../KpiTwo";

export const Additions = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({
        additions: {
          currentMonth: 17,
          currentYear: 118,
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
        title="Additions"
        dataLabel={[
          { name: "currentMonth", value: "currentMonth", label: "This Month" },
          { name: "currentYear", value: "currentYear", label: "YTD" },
        ]}
        data={data?.additions}

        // getUrl={`?table=true&name=additions&month=${paramsMonth}&kpiChartName=Additions`}
      />
    </>
  );
};

export default React.memo(Additions);

Additions.propTypes = {
  filterData: PropTypes.shape({
    isFilterApplied: PropTypes.bool,
    filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    latestDateSum: PropTypes.string,
  }),
};

Additions.defaultProps = {
  filterData: {},
};
