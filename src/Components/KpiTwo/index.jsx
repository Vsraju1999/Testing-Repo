import React, { useState, useEffect } from "react";
import { Loader } from "../loader";

const mockData = {
  availability: [
    { value: "1000", label: "CYTD" },
    { value: "99.09", label: "PYTD" },
  ],
};
const KpiTwoComponent = ({ isLoading }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulated delay to mimic network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(mockData);
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
  }, []); // Empty dependency array to simulate componentDidMount behavior

  return (
    <>
      {loading && (
        <div className="flex w-full h-full align-middle justify-center">
          <Loader />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col w-full h-full p-4">
          <div style={{ height: "30%" }}>Availability</div>
          <div
            style={{
              height: "70%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            {data?.availability?.map((item) => (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div>{item?.value}</div>
                  <div>{item?.label}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default KpiTwoComponent;

// KpiTwoComponent.propTypes = {
//   // className: PropTypes.string,
//   title: PropTypes.string,
//   isLoading: PropTypes.bool,
//   data: PropTypes.object,
//   // ToolTipText: PropTypes.string,
//   // dataTestId: PropTypes.string,
//   // infoIcon: PropTypes.bool,
//   // infoContent: PropTypes.object,
// };

// KpiTwoComponent.defaultProps = {
//   // className: '',
//   title: "",
//   isLoading: true,
//   data: {},
//   // ToolTipText: undefined,
//   // dataTestId: undefined,
//   // infoIcon: false,
//   // infoContent: {},
// };
