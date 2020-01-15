import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../services/AuthService";
import Layout from "../layout/layout";
import LayoutAdmin from "../layout/admin/layoutAdmin";
import AdminIndex from "../views/admin/index";
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

// const PublicRoutes = ({ component: Component, ...rest }) => {
//   return <Route {...rest} render={props => <Component {...props} />} />;
// };

function Routes() {
  const token = "565665656565656";
  //  useSelector(state => state.LoginReducer.token);
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <PrivateRoutes
            token={token}
            path="/admin"
            component={() => <LayoutAdmin />}
          />

          {/* <PublicRoutes path="/dashboard" component={() => <Layout />} />
           */}
          <Redirect from="/" exact to="/dashboard" />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/admin" component={AdminIndex} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default Routes;
