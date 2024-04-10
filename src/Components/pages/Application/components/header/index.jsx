import React from "react";
// import { HeaderComponent, setLocalStoreItem, Loader } from "@vtx/components";
// import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import {
//   globalFilterOpen,
//   defaultFilterObj,
//   userEditRbaC,
//   setCsvDownload,
// } from "components/atom";
import PropTypes from "prop-types";
// import { useLocation } from "react-router-dom";
import Filter from "../../../../HeaderComponent/filter";
// import { Loader } from "../../../../loader";
import { HeaderComponent } from "../../../../HeaderComponent";
// import { emptyFilterValue, getDownloadCsv } from "utils";
// import { onFilterValueGlobal } from "components/filter/filterValue";
// import { SearchComponent } from "components/search";

// import { GlobalSearch } from "recoilState";
// import { format } from "date-fns";
// import { requestWithToken } from "services/index";
// import { Filter } from "../filter";

const routeNavigation = [
  { title: "Application Summary", path: "/app-summary" },
  { title: "App List", path: "/app-list" },
];

export const AssetXplorerHeader = ({ referingTo }) => {
  // const initialFilterFields = [
  //   "sctr_nm",
  //   "reportDate",
  //   "capabilityDomain",
  //   "architectureType",
  //   "businessOwner",
  //   "referenceArchitecture",
  //   "solutionScope",
  // ];
  // const location = useLocation();
  // //   const [filterView, setFilterView] = useRecoilState(globalFilterOpen);
  // //   const [filterData, updateFilterData] = useRecoilState(defaultFilterObj);
  // //   const setGlobalSearch = useSetRecoilState(GlobalSearch);
  // const [isFieldShow, setIsFieldShow] = React.useState(initialFilterFields);
  // //   const edit = useRecoilValue(userEditRbaC);
  // const [FilterVal, setFilterVal] = React.useState(false);
  // //   const csvPay = useRecoilValue(setCsvDownload);
  // const [loading, setLoading] = React.useState(false);
  // const [refreshdata, setRefreshData] = React.useState("");
  // const [refreshIntervalCall, setRefreshIntervalCall] = React.useState(true);

  //   const onFilterButtonClick = () => {
  //     setFilterVal(!FilterVal);
  //     setFilterView(() => ({
  //       name: window.location.hash,
  //       open: !filterView.open,
  //       count: filterView.count,
  //     }));
  //   };
  //   const filterObject = (data, filterKeys) => {
  //     const objArr = Object.entries(data);
  //     const filteredArr = objArr.filter(([key]) => filterKeys.includes(key));
  //     const filterObj = Object.fromEntries(filteredArr);
  //     return filterObj;
  //   };
  //   const handleNavClick = () => {
  //     updateFilterData({
  //       ...filterData,
  //       // filters: {},
  //       isFilterApplied: true,
  //     });
  //     setFilterView(() => ({
  //       name: filterView?.name,
  //       open: false,
  //       count: filterView.count,
  //     }));
  //     // setRefreshStr('');
  //     // setDateDropdown({
  //     //     data: {},
  //     //     isLoading: true,
  //     // });
  //   };
  //   const filterValuesByModule = () => {
  //     let data = [];
  //     data = [
  //       {
  //         name: "Sector",
  //         value: filterData?.filters?.sctr_nm
  //           ?.filter((item) => item?.value !== "*")
  //           .map((item) => item.value),
  //       },
  //       {
  //         name: "Capability Domain",
  //         value: filterData?.filters?.capabilityDomain
  //           ?.filter((item) => item?.value !== "*")
  //           .map((item) => item.value),
  //       },
  //       {
  //         name: "Architecture Type",
  //         value: filterData?.filters?.architectureType
  //           ?.filter((item) => item?.value !== "*")
  //           .map((item) => item.value),
  //       },
  //       {
  //         name: "Business Owner",
  //         value: filterData?.filters?.businessOwner
  //           ?.filter((item) => item?.value !== "*")
  //           .map((item) => item.value),
  //       },
  //       {
  //         name: "Reference Architecture",
  //         value: filterData?.filters?.referenceArchitecture
  //           ?.filter((item) => item?.value !== "*")
  //           .map((item) => item.value),
  //       },
  //       {
  //         name: "Solution Scope",
  //         value: filterData?.filters?.solutionScope
  //           ?.filter((item) => item?.value !== "*")
  //           .map((item) => item.value),
  //       },
  //     ];
  //     return data;
  //   };

  //   const onClearFilterClick = (e) => {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     updateFilterData({
  //       ...filterData,
  //       filters: {},
  //       filterValue: {},
  //       isFilterApplied: true,
  //     });
  //     setFilterView(() => ({
  //       name: filterView?.name,
  //       open: false,
  //       count: 0,
  //     }));
  //     // setLocalStoreItem("globalFilterValues", {
  //     //   filters: {},
  //     //   filterValue: { ...emptyFilterValue() },
  //     // });
  //     setGlobalSearch({ value: "", isFilterApplied: false });
  //   };

  //   React.useEffect(() => {
  //     setIsFieldShow([
  //       "sctr_nm",
  //       "capabilityDomain",
  //       "architectureType",
  //       "businessOwner",
  //       "referenceArchitecture",
  //       "solutionScope",
  //     ]);
  //     setFilterView(() => ({
  //       name: filterView?.name,
  //       open: filterView?.open,
  //       count: filterData?.filters
  //         ? Object.keys(filterObject(filterData?.filters, isFieldShow))?.reduce(
  //             (sum, key) => {
  //               let getArrayFilterCount = 0;
  //               if (Array.isArray(filterData?.filters[key])) {
  //                 getArrayFilterCount = Number(
  //                   filterData?.filters[key]?.filter(
  //                     (item) => item?.value !== "*"
  //                   )?.length || 0
  //                 );
  //               } else if (
  //                 filterData?.filters[key] !== undefined &&
  //                 filterData?.filters[key] !== null &&
  //                 !Array.isArray(filterData?.filters[key])
  //               ) {
  //                 getArrayFilterCount = Number(1);
  //               }
  //               return sum + getArrayFilterCount;
  //             },
  //             0
  //           )
  //         : undefined,
  //     }));
  //   }, [filterData]);
  //   const setValue =
  //     filterValuesByModule() &&
  //     filterValuesByModule()?.filter((datevalue) => datevalue?.value?.length > 0);

  // const getrefreshTime = async () => {
  //     const payload = {
  //         action: 'refreshInterval',
  //         module: String(window.location.hash).substring(1),
  //     };
  //     // let strin = '';
  //     const data = await requestWithToken('refreshInterval', 'POST', payload);
  //     if (data.error) {
  //         setRefreshStr('');
  //     } else {
  //         setRefreshStr(`Data Refresh Time: ${moment(data?.data?.latest_date).startOf().fromNow()}`);
  //     }
  // };

  // React.useEffect(() => {
  //     getrefreshTime();
  // }, [window.location.hash]);

  // const [csvDLoading, setcsvDLoading] = React.useState(false);

  //   const onClickToCsv = async () => {
  //     setcsvDLoading(true);
  //     await getDownloadCsv({ csvPay, url: "getAppRepo", name: "App List" });
  //     setcsvDLoading(false);
  //   };

  // const handleMenu = () => {
  //   if (location.pathname === "/app-list") {
  //     return {
  //       handleAbout: true,
  //       imageDownload: false,
  //       pdfDownload: false,
  //       mail: false,
  //     };
  //   }
  //   return { handleAbout: true };
  // };
  //   const apiCall = async () => {
  //     const getPayload = {
  //       action: "refreshInterval",
  //       module: "app-summary",
  //     };
  //     setLoading(true);
  //     if (getPayload?.module) {
  //       const json = await requestWithToken(
  //         "getRefreshInterval",
  //         "POST",
  //         getPayload
  //       );
  //       setRefreshData(json);
  //       setLoading(false);
  //       setRefreshIntervalCall(false);
  //     }
  //   };

  //   React.useEffect(() => {
  //     if (window.location.hash && refreshIntervalCall) {
  //       apiCall();
  //     }
  //   }, [window.location.hash]);
  //   const getLocalTimezone = (dateFeild = undefined) => {
  //     const getNewDate = dateFeild;

  //     return `${format(new Date(getNewDate), "dd-MM-yy HH:mm")} ${new Date()
  //       .toLocaleDateString(undefined, { timeZoneName: "long" })
  //       .split(", ")
  //       .at(1)
  //       .split(" ")
  //       .map((word) => word.charAt(0))
  //       .join("")}`;
  //   };
  //   const RefreshDate =
  //     refreshdata?.data?.latest_date &&
  //     getLocalTimezone(refreshdata?.data?.latest_date);

  return (
    <>
      <HeaderComponent
        filterContent={
          <>
            {/* {setValue?.map((a) => a.value?.length)[0] > 0 && (
              <div className="global_togglePopup-body">
                <div className="popupHover">
                  {setValue?.map((item) => (
                    <>
                      <ul>
                        <li className="heading">
                          {" "}
                          {item?.value?.length > 0 ? `${item?.name}` : ""}
                        </li>
                        {item?.value?.length > 0 ? (
                          <li
                            key={item.id}
                            className="h-auto py-1 px-2 -mt-2 cursor-pointer"
                          >
                            {item?.value?.map((element) => (
                              <div className="filterValues text-sm mx-2 inline-block">
                                {element}
                              </div>
                            ))}
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </>
                  ))}
                </div>
              </div>
            )} */}
          </>
        }
        routeNavigation={routeNavigation}
        title="Application Scorecard"
        // filter={filterView}
        // onFilterButtonClick={onFilterButtonClick}
        // onClearFilterClick={(e) => onClearFilterClick(e)}
        // userAccess={edit?.userEdit}
        referingTo={referingTo}
        restrictFilter={routeNavigation?.map((item) => item?.path)}
        // getHandleNavClick={() => handleNavClick()}
        // filterValues={onFilterValueGlobal()}
        // config={handleMenu()}
        refreshIntraval="24 Hours"
        dataSourceName="ServiceNow"
      >
        <div className="flex items-center mr-2">
          Last Refreshed:{" "}
          {/* {loading ? (
            <span className="pl-2">
              <Loader />
            </span>
          ) : (
            RefreshDate || "Error"
          )} */}
        </div>
        {/* {["#app-list"].includes(window.location.hash) ? (
          <SearchComponent />
        ) : (
          []
        )} */}
        {/* {["#app-list"].includes(window.location.hash) ? (
          <div className="ml-3 items-center  flex">
            {!csvDLoading ? (
              <div
                className="flex justify-center items-center cursor-pointer"
                title="CSV Download"
              >
                <div
                  role="none"
                  className="p-1.5 rounded-md"
                  onClick={() => onClickToCsv()}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
                  </svg>
                </div>
              </div>
            ) : (
              <>
                <div
                  className="p-1.5 rounded-md"
                  title="CSV Download"
                  style={{
                    backgroundColor: "var(--cm-header-menu-active-color)",
                  }}
                >
                  <svg
                    className="animate-bounce"
                    stroke="#085ddf"
                    fill="#085ddf"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </div>
              </>
            )}
          </div>
        ) : (
          []
        )} */}
      </HeaderComponent>
      {/* {filterView?.open && ( */}
      <Filter restrictFilter={routeNavigation?.map((item) => item?.path)} />
      {/* )} */}
    </>
  );
};
export default AssetXplorerHeader;
AssetXplorerHeader.propTypes = {
  referingTo: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
AssetXplorerHeader.defaultProps = {
  referingTo: undefined,
};
