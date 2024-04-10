import React from "react";
import Popup from "reactjs-popup";

export const Filter = ({
  onFilterButtonClick,
  onClearFilterClick,
  filter,
  filterContent = undefined,
}) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Popup
        trigger={
          <div
            className="flex iconBg p-2 rounded cursor-pointer items-center ml-3"
            onClick={() => onFilterButtonClick()}
          >
            <div className="flex items-center w-full">
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path>
                </svg>
              </div>
            </div>
            {filter?.count ? (
              <span className="pl-2 pr-3 text-sm">{filter?.count}</span>
            ) : (
              ""
            )}

            {filter?.count > 0 && (
              <button
                className="filter-clear-all-btn p-1"
                onClick={(e) => onClearFilterClick(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="0.6em"
                  height="0.6em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M2 30L30 2m0 28L2 2" />
                  </g>
                </svg>
              </button>
            )}
          </div>
        }
        position="bottom right"
        on="hover"
        className={`${
          filter?.count > 0 && filterContent ? "" : "global_togglePopup_hide"
        } global_togglePopup`}
        closeOnDocumentClick
        open={isOpen}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        {filterContent}
      </Popup>
    </>
  );
};
export default Filter;
