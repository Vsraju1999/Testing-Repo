import React, { useState } from "react";
import { Loader } from "../../../../loader";

export const EmailComponent = ({
  exportref,
  title = undefined,
  close,
  name = undefined,
  filterValues = undefined,
}) => {
  // const [image, takeScreenShot] = useScreenshot({
  //     type: 'image/jpeg',
  //     quality: 1.0,
  // });

  // Take screenshot and get capturedImage
  //   const getScreenShot = async () => {
  //     setIsCapturing(true);
  //     try {
  //       const canvas = await html2Canvas({ ref: exportref });
  //       const base64Img = canvas?.toDataURL("image/png;base64");
  //       setcapturedImage(base64Img);
  //     } catch (e) {
  //       toast.error("Failed to capture image!");
  //     }
  //     setIsCapturing(false);
  //     // takeScreenShot(exportref?.current).then((image) => {
  //     //     setcapturedImage(image);
  //     // });
  //   };

  //   React.useEffect(() => {
  //     getScreenShot();
  //   }, [exportref, html2Canvas]);

  //   React.useEffect(() => {
  //     async function fetchData() {
  //       const res = await FilterSection(filterValues);
  //       setFilterSection(res?.join(" "));
  //     }

  //     fetchData();
  //   }, [filterValues]);

  // React.useEffect(() => {
  //     let isMounted = true;
  //     async function takeScreenshot() {
  //         if (isMounted) setIsCapturing(true);
  //         try {
  //             const canvas = await html2Canvas({ ref: exportref });
  //             const base64Img = canvas.toDataURL('image/png;base64');
  //             if (isMounted) setcapturedImage(base64Img);
  //         } catch (e) {
  //             // console.log(`Failed to capture image: ${e}`);
  //             toast.error('Failed to capture image!');
  //         }
  //         if (isMounted) setIsCapturing(false);
  //     }
  //     takeScreenshot(exportref.current);

  //     return () => {
  //         isMounted = false;
  //     };
  // }, [exportref, html2Canvas]);

  //   let postemail = {
  //     action: "SendEmail",
  //     FromAddress: "no-reply@pepsico.com",
  //     ToAddress: emailInput.email,
  //     Subject: emailInput.subject,
  //     HtmlBody: `<!DOCTYPE html>
  //         <html lang="en">
  //           <head>
  //             <meta charset="UTF-8" />
  //             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //             <title>VantageX</title>
  //             <link
  //               href="https://fonts.googleapis.com/css?family=Roboto"
  //               rel="stylesheet"
  //             />
  //             <style>
  //               body {
  //                 font-family: "Roboto", arial, sans-serif;
  //                 background : #f2f4f7;
  //                 padding:20px 0px;
  //               }
  //               .body-name {
  //                 font-size: 18px;
  //                 font-weight: medium;
  //                 letter-spacing: 0px;
  //                 color: #1e1e1e;
  //               }
  //               .body-content {
  //                 font-size: 14px;
  //                 letter-spacing: 0px;
  //                 color: #4a4848;
  //                 line-height: 18px;
  //               }
  //               .body-link {
  //                 color: #0047ba;
  //                 font-weight: bold;
  //                 text-decoration: underline;
  //                 cursor: pointer;
  //               }
  //               .heading {
  //                 font-size: 16px;
  //                 letter-spacing: 0px;
  //                 color: #0047ba;
  //                 font-weight: medium;
  //               }
  //               .req-info,
  //               .vm-info {
  //                 font-size: 14px;
  //                 color: #626262;
  //               }
  //               .padd-lr10 {
  //                 padding-left: 10px;
  //                 padding-right: 10px;
  //               }
  //             </style>
  //           </head>
  //           <body>
  //             <center>
  //               <table
  //                 className="center"
  //                 border="0"
  //                 cellspacing="0"
  //                 cellpadding="0"
  //                 style="
  //                   width: 800px;
  //                   background-color: #ffffff;
  //                   border-bottom: 10px solid #0c65f5;
  //                   border-radius: 10px;
  //                 "
  //               >
  //                 <tr>
  //                   <td
  //                     colspan="2"
  //                     style="
  //                       padding-left: 20px;
  //                       padding-top: 15px;
  //                       padding-bottom: 15px;
  //                       background-color: #162d51;
  //                       border-radius: 10px 10px 0px 0px;
  //                     "
  //                   >
  //                     <img
  //                       width="110"
  //                       height="25"
  //                       src="data:image/png;base64,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"
  //                     />
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td
  //                     colspan="2"
  //                     align="left"
  //                     className="padd-lr10"
  //                     style="padding: 28px 10px 0px 10px;"
  //                   >
  //                     <div className="body-name">Hi ${recipientGreeting},</div>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td colspan="2" className="padd-lr10" style="padding: 18px 10px 0px 10px">
  //                     <div className="body-content">
  //                       ${senderName} shared the ${moduleName} with you from
  //                       <span style="font-weight: bold; color: black">PEPOPS</span>. This report was generated at ${reportDateTime}.
  //                     </div>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td colspan="2" className="padd-lr10" style="padding: 18px 10px 0px 10px">
  //                     <div className="body-content">
  //                       ${
  //                         emailInput.message
  //                           ? `
  //                       <p className="message">
  //                         ${emailInput.message.replace(
  //                           /(?:\r\n|\r|\n)/g,
  //                           "<br />"
  //                         )}
  //                       </p>
  //                       `
  //                           : ""
  //                       }
  //                     </div>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td colspan="2" style="padding: 18px 10px 0px 10px">
  //                     <div className="body-content">
  //                       <table className="filters-table" style="width: auto">
  //                           <tbody>
  //                               ${filterValues?.length ? getFilterSection : ""}
  //                           </tbody>
  //                       </table>
  //                     </div>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td colspan="2" style="padding: 20px 10px" className="center">
  //                     <img
  //                       style="max-width: 100%; width: 100%;"
  //                       alt="${moduleName} Screenshot"
  //                       src="${capturedImage}"
  //                     />
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td
  //                     colspan="2"
  //                     className="padd-lr10"
  //                     style="padding: 20px 10px 0px 10px; font-size: 14px; color: #333333;"
  //                   >
  //                     <div>
  //                       This is a system generated email. Please do not reply to this
  //                       email.
  //                     </div>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td
  //                     colspan="2"
  //                     className="padd-lr10"
  //                     style="padding: 20px 10px 0px 10px; color: #333333; font-size: 12px"
  //                   >
  //                     <div>
  //                     <span style="font-weight: bold; color: black">Disclaimer</span>: The information contained in this electronic message
  //                       and any attachments to this message are intended for the exclusive
  //                       use of the addressee(s) and may contain proprietary, confidential
  //                       or privileged information. If you are not the intended recipient,
  //                       you should not disseminate, distribute or copy this e-mail. Please
  //                       destroy all copies of this message and any attachments.
  //                     </div>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td
  //                     colspan="2"
  //                     className="padd-lr10"
  //                     align="center"
  //                     style="padding: 20px 10px 10px 10px; color: #626262; font-size: 14px"
  //                   >
  //                     <div>
  //                       Have a question? Email our support team at
  //                       <a href="mailto:${supportTeamEmail}" style = "text-decoration: none; color: #0c65f5">${supportTeamEmail}</a>
  //                     </div>
  //                   </td>
  //                 </tr>
  //               </table>
  //             </center>
  //           </body>
  //         </html>
  //         `,
  //   };

  //   const triggerEmail = (e) => {
  //     e.preventDefault();
  //     let missingField = [];

  //     if (!emailInput?.email) missingField.push("Email");
  //     if (!emailInput?.subject) missingField.push("Subject");

  //     if (missingField.length > 0) {
  //       toast.error(`Please enter ${missingField?.join(", ")} fields.`);
  //     } else {
  //       sendEmail();
  //     }
  //   };

  //   const sendEmail = async () => {
  //     setLoding(true);
  //     const url = `${reverseProxyUrl}/visualization/TriggerEmail`;
  //     let accessToken = getuser.access_token;

  //     const request = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": getAccessOriginUrl,
  //       },
  //       body: JSON.stringify(postemail),
  //     });

  //     const resp = await request.json();

  //     if (!resp.error) {
  //       toast.success(resp.message);
  //       setTimeout(() => {
  //         close();
  //       }, 1000);
  //     } else {
  //       toast.error(resp.message);
  //     }

  //     setData(resp);
  //     setLoding(false);
  //   };

  return (
    <>
      <div
        className="emailExport"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="emailExport_container">
          <div
            className="emailExport_container_overlay"
            aria-hidden="true"
          ></div>
          <div className="emailExport_container_body">
            <h3 className="emailExport_container_body_title" id="modal-title">
              Email This Widget
              {/* <span
                onClick={() => close()}
                className="emailExport_container_close"
                aria-hidden="true"
              >
                <FiX size={24} />
              </span> */}
            </h3>
            <div className="emailExport_container_body_form">
              <div className="emailExport_container_body_form_cnt">
                <div className="emailExport_container_body_form_cnt_field">
                  <label
                    htmlFor="email"
                    className="emailExport_container_body_form_cnt_field_label"
                  >
                    Email ID
                  </label>
                  <input
                    // value={emailInput.email}
                    // onChange={(e) =>
                    //   setEmailInut({
                    //     ...emailInput,
                    //     email: e.target.value,
                    //   })
                    // }
                    autoComplete="off"
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="emailExport_container_body_form_cnt_field_input"
                  />
                </div>
                <div className="emailExport_container_body_form_cnt_field">
                  <label
                    htmlFor="subject"
                    className="emailExport_container_body_form_cnt_field_label"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    // value={emailInput.subject}
                    // onChange={(e) =>
                    //   setEmailInut({ ...emailInput, subject: e.target.value })
                    // }
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="emailExport_container_body_form_cnt_field_input"
                  />
                </div>
                <div className="emailExport_container_body_form_cnt_field">
                  <label
                    htmlFor="about"
                    className="emailExport_container_body_form_cnt_field_label"
                  >
                    Message
                  </label>
                  <textarea
                    // onChange={(e) =>
                    //   setEmailInut({ ...emailInput, message: e.target.value })
                    // }
                    // value={emailInput.message}
                    id="message"
                    name="message"
                    rows="3"
                    className="emailExport_container_body_form_cnt_field_input"
                    placeholder="message"
                  >
                    {/* {emailInput.message} */}
                  </textarea>
                </div>
                <div
                  className="emailExport_container_body_form_cnt_area"
                  style={{ minHeight: 200 }}
                >
                  {/* {isCapturing && <Loader content="Please wait..." />} */}
                  {/* {!isCapturing && capturedImage && (
                    <img
                      className="emailExport_container_body_form_cnt_area_img"
                      src={capturedImage}
                      alt="Capture"
                    />
                  )} */}
                </div>
              </div>
            </div>
            <div className={"emailExport_container_body_footer"}>
              <button
                label={`Cancel`}
                variant={"default"}
                size={"md"}
                onClick={() => close()}
              />
              <button
                label={"Sending..."}
                size={"md"}
                // onClick={triggerEmail}
                className={"ml-2"}
                // disabled={
                //   isCapturing ||
                //   Loding ||
                //   !emailInput?.email ||
                //   emailInput?.email.trim().length === 0
                // }
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <span className="absolute">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          className="Hometoaster"
        />
      </span> */}
    </>
  );
};

EmailComponent.propTypes = {};
EmailComponent.defaultProps = {};
