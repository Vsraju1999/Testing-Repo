import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { Loader } from "../loader";

export const KpiTwoComponent = ({
  title,
  isLoading,
  data,
  dataLabel,
  getUrl = undefined,
}) => {
  return (
    <div className="kpi">
      <>
        <div className="flex justify-between items-center ">
          <h3 className="kpi_title">{title}</h3>
        </div>
      </>
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
      {!isLoading && (
        <div
          className={`w-full flex gap-y-4 justify-around flex-col xl:flex-row`}
          style={{ marginTop: "20px" }}
        >
          {dataLabel?.map((item) => {
            return (
              <Link
                to={`${getUrl}&type=${item?.name}`}
                key={item?.name}
                className={`flex flex-col items-center  ${
                  getUrl && !item?.restrictOnClick
                    ? "cursor-pointer"
                    : "cursor-default pointer-events-none"
                }`}
              >
                <p className="kpi_count" style={{ color: item?.color }}>
                  {data[item?.value]}
                </p>
                {item?.labeltooltip ? (
                  <Popup
                    trigger={() => (
                      <p className="kpi_label" title="">
                        {item?.label}
                      </p>
                    )}
                    position="bottom center"
                    className=" kpi-tool-tip"
                    closeOnDocumentClick
                    on="hover"
                  >
                    {item?.labeltooltip}
                  </Popup>
                ) : (
                  <p className="kpi_label">{item?.label} </p>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default KpiTwoComponent;

KpiTwoComponent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  ToolTipText: PropTypes.string,
  dataTestId: PropTypes.string,
  infoIcon: PropTypes.bool,
  infoContent: PropTypes.object,
};

KpiTwoComponent.defaultProps = {
  className: "",
  title: "",
  isLoading: true,
  data: {},
  ToolTipText: undefined,
  dataTestId: undefined,
  infoIcon: false,
  infoContent: {},
};
