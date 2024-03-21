import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import LoginForm from "./Components/pages/login/index";
import SignUpForm from "./Components/pages/signup/index";
import "./App.css";
import { RecoilRoot } from "recoil";
import NavBar from "./Components/pages/navbar";
import ITSM from "./Components/pages/ITSM/indx";
import AssetXplorer from "./Components/pages/AssetXplorer";
import ApplicationScorecard from "./Components/pages/Application";
import Collaboration from "./Components/pages/Collaboration";

const PrivateRoute = ({ element, userRole, handleLogouts }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("auth"));
  return isAuthenticated ? (
    <NavBar userRole={userRole} handleLogouts={handleLogouts}>
      {element}
    </NavBar>
  ) : (
    <Navigate to="/" />
  );
};

const LoginRedirect = () => {};

const App = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  // const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("auth")));

  // useEffect(() => {
  //   const storedAuth = JSON.parse(localStorage.getItem("auth"));
  //   const storedUserRole = JSON.parse(localStorage.getItem("userRole"));
  //   if (storedAuth) {
  //     setIsAuthenticated(true);
  //     setUserRole(storedUserRole);
  //   }
  // }, []);

  React.useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  }, [localStorage.getItem("userRole")]);

  const handleLogouts = () => {
    setUserRole(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("userRole");
  };

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route element={<LoginForm setUserRole={setUserRole} />} path="/" />
          <Route element={<SignUpForm />} path="/signup" />
          <Route
            path="/dashboard/user"
            element={
              <PrivateRoute
                element={<ITSM />}
                userRole={userRole}
                handleLogouts={handleLogouts}
              />
            }
          />
          <Route
            path="/dashboard/user/assetXplorer"
            element={
              <PrivateRoute
                element={<AssetXplorer />}
                userRole={userRole}
                handleLogouts={handleLogouts}
              />
            }
          />
          <Route
            path="/dashboard/user/application"
            element={
              <PrivateRoute
                element={<ApplicationScorecard />}
                userRole={userRole}
                handleLogouts={handleLogouts}
              />
            }
          />
          <Route
            path="/dashboard/user/collaboration"
            element={
              <PrivateRoute
                element={<Collaboration />}
                userRole={userRole}
                handleLogouts={handleLogouts}
              />
            }
          />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
