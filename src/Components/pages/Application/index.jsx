// import React from "react";

// const ApplicationScorecard = () => {
//   return <div>Welocme to ApplicationScorecard Dashboard</div>;
// };

// export default ApplicationScorecard;

import React from "react";
import { CriticalApp } from "./pages/kpi/ctiticalApp";
import TotalApplications from "./pages/kpi/totalApplications";
import Additions from "./pages/kpi/additions";
import Retirement from "./pages/kpi/retirement";
import { BusinessCriticality } from "./pages/widgets/dataCenter";
import DataCenterandCriticality from "./pages/widgets/dataCenterandCriticality";
import { ReferenceArchitecture } from "./pages/widgets/applicationsBySector";
import SolutionScope from "./pages/widgets/solutionScope";
import Time from "./pages/widgets/time";
import InstallType from "./pages/widgets/installType";
import ArchitectureType from "./pages/widgets/architectureType";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ReferenceArchitectureWidget } from "./pages/widgets/referenceArchitecture";
import SampleChartWidgetComponents, {
  SampleChartWidgetComponent,
} from "./pages/widgets/sample";
import TableComponent from "./pages/table";
import ChartX from "./pages/widgets/chartX";

const routeNavigation = [
  { title: "Application Summary", path: "/app-repo/app-summary" },
  // { title: "App List", path: "/app-list" },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ApplicationScorecard = () => {
  const [navRoute, setNav] = React.useState();
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();
  const isTableShow = query.get("table");

  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      setNav(path);
    }
  };

  React.useEffect(() => {
    setNav(`/${window.location.hash?.slice(1)}`);
  }, []);

  return (
    <>
      <div className="flex h-full w-full flex-col" style={{ height: "100vh" }}>
        <div
          style={{
            height: "55px",
            background: "var(--bg-color)",
            color: "var(--text-color)",
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          Application Scorecard
        </div>
        {routeNavigation?.length && (
          <div
            style={{
              height: "45px",
              background: "var(--sidebar-bg-color)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "10px",
            }}
          >
            <select
              name="routeNavigation"
              id="routeNavigation"
              value={navRoute}
              style={{ width: "100%" }}
              className="menuHeader p-3 dropNav"
              onChange={(e) => handleNavClick(e.target.value)}
            >
              {routeNavigation?.map((route, index) => (
                <option value={route?.path}>{route?.title}</option>
              ))}
            </select>
            {routeNavigation?.map((route, index) => (
              <NavLink
                key={index}
                exact
                to={route?.path}
                activeClassName={"normal"}
                className="menu smallDisplay"
                onClick={() => handleNavClick(route?.path)}
              >
                {route?.title}
              </NavLink>
            ))}
          </div>
        )}

        {/* <AssetXplorerHeader /> */}
        <div
          id="moduleScroll"
          style={{
            height: "calc(100vh - 130px)",
            background: "var(--bg-color)",
            color: "var(--text-color)",
            width: "100%",
            // gap: "10px",
            padding: "10px",
            overflowY: "scroll",
          }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-row  justify-between gap-3">
            <div
              style={{
                height: "140px",
                width: "100%",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <TotalApplications />
            </div>
            <div
              style={{
                height: "140px",
                width: "100%",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <CriticalApp />
            </div>
            <div
              style={{
                height: "140px",
                width: "100%",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <Additions />
            </div>
            <div
              style={{
                height: "140px",
                width: "100%",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <Retirement />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3">
            <div
              style={{
                width: "100%",
                height: "480px",
                padding: "10px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <ReferenceArchitecture />
            </div>
            <div
              style={{
                width: "100%",
                height: "480px",
                padding: "10px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <SolutionScope />
            </div>
            <div
              style={{
                width: "100%",
                height: "480px",
                padding: "10px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <Time />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3">
            <div
              style={{
                width: "100%",
                height: "480px",
                padding: "10px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <ChartX />
            </div>
            <div
              style={{
                width: "100%",
                height: "480px",
                padding: "10px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <InstallType />
            </div>
            <div
              style={{
                width: "100%",
                height: "480px",
                padding: "10px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
              }}
            >
              <ArchitectureType />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3">
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
                padding: "10px",
              }}
            >
              <DataCenterandCriticality />
            </div>
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
                padding: "10px",
              }}
            >
              <BusinessCriticality />
            </div>
          </div>
          {/* <div className="flex flex-row justify-between gap-3">
            <div
              style={{
                width: "100%",
                height: "450px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
                padding: "10px",
              }}
            >
              <SampleChartWidgetComponent />
            </div>
            <div
              style={{
                width: "100%",
                height: "450px",
                background: "var(--kpi-bg)",
                color: "var(--kpi-text)",
                padding: "10px",
              }}
            >
              <SampleChartWidgetComponent />
            </div>
          </div> */}
        </div>
      </div>
      {isTableShow && <TableComponent />}
    </>
  );
};

export default ApplicationScorecard;
