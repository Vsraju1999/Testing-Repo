import React from "react";
import KpiTwoComponent from "../../KpiTwo";
import LineChartComponent from "../Charts/lineChart";
import BarChartComponent from "../Charts/barChart";
import RaderChartComponent from "../Charts/raderChart";
import DynamicBarComponent from "../Charts/dynamicBar";

const ITSM = () => {
  const data = {
    availability_current_year_percentage: "99.9971",
    availability_last_year_percentage: "99.9961",
  };

  return (
    <div className="flex h-full w-full flex-col" style={{ height: "100vh" }}>
      <div
        style={{
          height: "65px",
          background: "var(--bg-color)",
          color: "var(--text-color)",
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        ITSM Management
      </div>
      <div
        style={{ height: "55px", background: "var(--sidebar-bg-color)" }}
      ></div>
      <div
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
            <KpiTwoComponent />
          </div>
          <div
            style={{
              height: "140px",
              width: "100%",
              background: "var(--kpi-bg)",
              color: "var(--kpi-text)",
            }}
          >
            <KpiTwoComponent />
          </div>
          <div
            style={{
              height: "140px",
              width: "100%",
              background: "var(--kpi-bg)",
              color: "var(--kpi-text)",
            }}
          >
            <KpiTwoComponent />
          </div>
          <div
            style={{
              height: "140px",
              width: "100%",
              background: "var(--kpi-bg)",
              color: "var(--kpi-text)",
            }}
          >
            <KpiTwoComponent />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-3">
          <div
            style={{
              width: "100%",
              height: "330px",
              background: "var(--kpi-bg)",
              color: "var(--kpi-text)",
              padding: "10px",
            }}
          >
            <LineChartComponent />
          </div>
          <div
            style={{
              width: "100%",
              height: "330px",
              background: "var(--kpi-bg)",
              color: "var(--kpi-text)",
              padding: "10px",
            }}
          >
            <BarChartComponent />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-3">
          <div
            style={{
              width: "100%",
              height: "330px",
              padding: "10px",
              background: "var(--kpi-bg)",
              color: "var(--kpi-text)",
            }}
          >
            <RaderChartComponent />
          </div>
          <div
            style={{
              width: "100%",
              height: "330px",
              padding: "10px",
              background: "var(--kpi-bg)",
              color: "var(--kpi-text)",
            }}
          >
            <DynamicBarComponent />
          </div>
        </div>
        {/* <div className="flex flex-row justify-between gap-5">
          <div
            style={{
              width: "100%",
              height: "240px",
             background: 'var(--kpi-bg)',
              color: "var( --kpi-text)",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "100%",
              height: "240px",
             background: 'var(--kpi-bg)',
              color: "#fff",
            }}
          >
            1
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ITSM;
