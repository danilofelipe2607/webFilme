import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../services/AuthService";
import Layout from "../layout/layout";
import Dashboard from "../views/Dashboard/index";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const PrivateRoutes = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const PublicRoutes = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

function Routes() {
  const token = "565665656565656";
  //  useSelector(state => state.LoginReducer.token);
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          {/* <PrivateRoutes token={token} path="/" component={() => <Layout />} /> */}
          {/* <PublicRoutes
            token={token}
            path="/home"
            component={() => <Layout />}
          /> */}
          <Redirect from="/" exact to="/dashboard" />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default Routes;
