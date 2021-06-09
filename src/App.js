import React from "react";
import "./App.css";
import { routeHome, routerAdmin } from "./router";
import HomeTemplate from "./templates/HomeTemplate";
import { BrowserRouter, Switch } from "react-router-dom";
import RouterAdminTemplate from "./templates/AdminTemplate";

const showMenuHome = (route) => {
  if (route && route.length > 0) {
    return route.map((item, index) => (
      <HomeTemplate
        key={index}
        path={item.path}
        exact={item.exact}
        Component={item.component}
      />
    ));
  }
};
const renderAdminRouter = () => {
  return routerAdmin.map(({ path, exact, Component }) => {
    return (
      <RouterAdminTemplate
        path={path}
        exact={exact}
        Component={Component}
      ></RouterAdminTemplate>
    );
  });
};
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {showMenuHome(routeHome)}
          {renderAdminRouter()}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
