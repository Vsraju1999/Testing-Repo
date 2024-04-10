import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Popup } from "reactjs-popup";
import { Loader } from "../../loader";

const DataComponent = ({ data, label, labeltooltip }) => (
  <>
    <p className="kpi_count">{data}</p>
    {labeltooltip ? (
      <Popup
        trigger={() => <p className="kpi_label">{label}</p>}
        position="bottom center"
        className=" kpi-tool-tip"
        closeOnDocumentClick
        on="hover"
      >
        {labeltooltip}
      </Popup>
    ) : (
      <p className="kpi_label">{label} </p>
    )}
  </>
);
export const KpiOneComponent = ({
  title,
  isLoading,
  data,
  getUrl = undefined,
  routeUrl = undefined,
  href = undefined,
  label = undefined,
  labeltooltip = undefined,
}) => {
  const baseUrl = routeUrl ? `${routeUrl}` : `${getUrl}`;

  return (
    <div className="kpi kpi_one">
      <div className="flex justify-between items-center ">
        <h3 className="kpi_title">{title}</h3>
      </div>
      {isLoading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Loader />
        </div>
      )}
      {!isLoading &&
        (href ? (
          <a
            style={{ marginTop: "20px" }}
            href={href}
            onClick={() => localStorage.setItem("selectedMenu", href)}
            className={`flex justify-center flex-col w-full items-center cursor-pointer : 'cursor-default pointer-events-none'}`}
          >
            <DataComponent
              data={data}
              label={label}
              labeltooltip={labeltooltip}
            />
          </a>
        ) : (
          <Link
            style={{ marginTop: "20px" }}
            to={baseUrl}
            className={`flex justify-center flex-col w-full items-center ${
              getUrl || routeUrl
                ? "cursor-pointer"
                : "cursor-default pointer-events-none"
            }`}
          >
            <DataComponent
              data={data}
              label={label}
              labeltooltip={labeltooltip}
            />
          </Link>
        ))}
    </div>
  );
};
export default KpiOneComponent;
KpiOneComponent.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  data: PropTypes.any,
  ToolTipText: PropTypes.string,
};
KpiOneComponent.defaultProps = {
  title: "",
  isLoading: true,
  data: "",
  ToolTipText: undefined,
};
