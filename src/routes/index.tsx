import { Outlet, Route, Routes as ReactRoutes } from "react-router-dom";

import {
  HOME_PATH,
  CLIENT_PATH,
  DASHBOARD_PATH
} from "../constants/routes";
import { RouteConfig } from "../interfaces/routes";
import UnauthRoute from './UnauthRoute'
import Home from '../pages/Home'
import Client from '../pages/Client'
import Dashboard from '../pages/Dashboard'
import NotFound from "../pages/NotFound";
// I use the route structure of Angular
const unauthRoutes: RouteConfig = {
  path: HOME_PATH,
  element: <Outlet />,
  guard: <UnauthRoute />,
  children :[
    {
      path:CLIENT_PATH,
      element: <Client/>
    },
    {
      path: DASHBOARD_PATH,
      element: <Dashboard/>
    },
    {
      path: HOME_PATH,
      element: <Home/>
    }
  ]
};


const notfoundRoute: RouteConfig = {
  path: "*",
  element: <NotFound />,
};

const routes = [unauthRoutes, notfoundRoute];

const Routes = () => {
  return (
    <ReactRoutes>
      {routes.map((route) => (
        <Route key={route.path} element={route.guard}>
          <Route path={route.path} element={route.element}>
            {route.children
              ? route.children.map(({ element, path }) => (
                  <Route key={path} element={route.guard}>
                      <Route path={path} element={element} />                
                  </Route>
                ))
              : null}
          </Route>
        </Route>
      ))}
    </ReactRoutes>
  );
};

export default Routes;
