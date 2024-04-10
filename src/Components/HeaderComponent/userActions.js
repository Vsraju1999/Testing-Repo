import React from "react";
import Popup from "reactjs-popup";
import { useLocation } from "react-router-dom";
// import {
//   HiOutlineDotsVertical,
//   BiImage,
//   FiMail,
//   FaRegFilePdf,
//   AiOutlinePlus,
// } from "../../assets/icons";
// import {
//   bannerAccessControllers,
//   EmailComponent,
//   GetImageExport,
// } from "../../components";
// import { ExportMessage } from "./ExportMessage";
import { useState } from "react";
import { HiOutlineDotsVertical } from "../Assets/Icons";
// import About from "./about";
// import { useScreenshot, createFileName } from 'use-react-screenshot';

export const UserAction = ({
  referingTo,
  title,
  routeNavigation,
  filterValues = undefined,
  handleAbout = undefined,
  config = {},
  refreshIntraval,
  dataRefreshedTime,
  addBanner,
  getHandleBannerClick,
  module,
  dataSourceName,
}) => {
  let configWrap = {
    mail: true,
    pdfDownload: true,
    imageDownload: true,
    handleAbout: false,
    ...config,
  };
  const location = useLocation();
  const [filterPopup, setFilterPopup] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [moduleName, setModuleName] = React.useState(title);
  const [aboutPopup, setAboutPopup] = useState(false);

  // const [image, takeScreenShot] = useScreenshot({
  //     type: 'image/jpeg',
  //     quality: 1.0,
  // });

  const handleEmail = () => {
    setFilterPopup(false);
    setIsModalOpen(true);
  };

  const handlePOp = () => {
    setFilterPopup(false);
    setAboutPopup(true);
  };
//   const handleClose = () => setAboutPopup(false);
//   const handleDownload = async (isExportImage) => {
//     setIsDownloading(true);
//     setFilterPopup(false);
//     await GetImageExport({
//       name: routeNavigation ? moduleName : title,
//       ref: referingTo,
//       isExportImage: isExportImage,
//     });
//     setIsDownloading(false);
//     // downloadScreenshot();
//   };

  // const downloadScreenshot = () => {
  //     setIsDownloading(true);
  //     setTimeout(() => {
  //         takeScreenShot(referingTo?.current).then(download);
  //     }, 100);
  // };

  // const download = (image, { name = moduleName, extension = 'jpg' } = {}) => {
  //     const a = document.createElement('a');
  //     a.href = image;
  //     a.download = createFileName(extension, name);
  //     a.click();
  //     setIsDownloading(false);
  // };

  const handleBanner = (value) => {
    getHandleBannerClick(value);
  };

  React.useEffect(() => {
    const route = routeNavigation?.filter(
      (item) => item.path === location?.pathname
    );
    setModuleName(route?.map((d) => d.title));
  }, [location?.pathname]);

  return (
    <>
      {!isDownloading && (
        <Popup
          trigger={
            <div className="global_togglePopup-root ml-2">
              {" "}
              <HiOutlineDotsVertical size={26} />{" "}
            </div>
          }
          position="bottom right"
          on="click"
          className={"global_togglePopup"}
          closeOnDocumentClick
          open={filterPopup}
          onOpen={() => setFilterPopup(true)}
          onClose={() => setFilterPopup(false)}
        >
          <div className={"global_togglePopup-body"}>
            {/* {configWrap?.mail && (
              <div
                className={"global_togglePopup-item"}
                onClick={() => handleEmail()}
              >
                <span className="global_togglePopup-item-icon">
                  <FiMail />
                </span>
                <span className={"global_togglePopup-item-text"}>
                  Send Email
                </span>
              </div>
            )}
            {configWrap?.pdfDownload && (
              <div
                className={"global_togglePopup-item"}
                onClick={() => handleDownload(false)}
              >
                <span className="global_togglePopup-item-icon">
                  <FaRegFilePdf size={15} />
                </span>
                <span className={"global_togglePopup-item-text"}>
                  Export PDF
                </span>
              </div>
            )}
            {configWrap?.imageDownload && (
              <div
                className={"global_togglePopup-item"}
                onClick={() => handleDownload(true)}
              >
                <span className="global_togglePopup-item-icon">
                  <BiImage size={16} />
                </span>
                <span className={"global_togglePopup-item-text"}>
                  Export Image
                </span>
              </div>
            )}
            {!addBanner?.data && bannerAccessControllers(module) && (
              <div
                className={"global_togglePopup-item"}
                onClick={() => handleBanner(addBanner?.bannerState)}
              >
                <span className="global_togglePopup-item-icon">
                  <AiOutlinePlus size={16} />
                </span>
                <span className={"global_togglePopup-item-text"}>
                  Add Banner
                </span>
              </div>
            )} */}
            {configWrap?.handleAbout && (
              <div className={"global_togglePopup-item"} onClick={handlePOp}>
                <span className="global_togglePopup-item-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <circle cx="8" cy="8" r="6.25" />
                      <path d="M8 5.25v0m0 6v-3.5" />
                    </g>
                  </svg>
                </span>
                <span className={"global_togglePopup-item-text"}>About</span>
              </div>
            )}
          </div>
        </Popup>
      )}
      {/* {isDownloading && <Loader className="pl-1" />} */}
      {/* {isModalOpen && (
        <EmailComponent
          exportref={referingTo}
          name={!routeNavigation && title}
          close={() => setIsModalOpen(false)}
          filterValues={filterValues}
        />
      )} */}
      {/* {aboutPopup && (
        <About
          handleClose={handleClose}
          refreshIntraval={refreshIntraval}
          dataSourceName={dataSourceName}
          dataRefreshedTime={dataRefreshedTime}
        />
      )} */}
      {/* {isDownloading && <ExportMessage />} */}
    </>
  );
};
export default UserAction;
