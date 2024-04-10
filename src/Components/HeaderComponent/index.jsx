import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Filter from "./filter";
import UserAction from "./userActions";
// import { Filter } from "./filter";
// import { UserAction } from "./userAction";

export const HeaderComponent = (props) => {
  const {
    title,
    routeNavigation,
    children,
    restrictFilter,
    getHandleNavClick,
    userAccess,
    icon = false,
  } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [navRoute, setNav] = React.useState();

  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      getHandleNavClick();
      setNav(path);
    }
  };

  React.useEffect(() => {
    setNav(`/${window.location.hash?.slice(1)}`);
  }, []);

  return (
    <header className="flex flex-col mainHeader">
      <div className={"flex md:flex-row py-3 px-4 headerHeight"}>
        {icon && <span className="pr-1">{icon}</span>}
        <div style={{ display: "flex" }}>
          <span className="pr-3 text-lg md:text-xl TitleMarginSet truncateText">
            {title}
          </span>
        </div>

        <div className={"flex ml-auto"}>
          {children}
          {restrictFilter?.includes(location?.pathname) && (
            <Filter {...props} />
          )}
          {userAccess && <UserAction {...props} />}
        </div>
      </div>
      {routeNavigation?.length && (
        <div className="menuHeader flex space-x-3 px-4">
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
              activeClassName={"active"}
              className="menu smallDisplay"
              onClick={() => handleNavClick(route?.path)}
            >
              {route?.title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
