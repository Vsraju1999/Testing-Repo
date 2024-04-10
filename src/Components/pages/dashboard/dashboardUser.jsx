// DashboardUser.js

import React from "react";
import NavBar from "../navbar";
import ITSM from "../ITSM/indx";
import { Route, Routes } from "react-router-dom";
import AssetXplorer from "../AssetXplorer";
import ApplicationScorecard from "../Application";
import { Collaboration } from "../../Assets/Icons";

const DashboardUser = ({ userRole, getAuth }) => {
  return (
   <div>Welcome to Dashboard</div>
  );
};

export default DashboardUser;
