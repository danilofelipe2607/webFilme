import React from "react";
import { Route, Switch } from "react-router-dom";

const AdminIndex = React.lazy(() => import("../../../views/admin/index"));

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/admin" exact component={AdminIndex} />
        <Route path="/dashboard" component={AdminIndex} />
        <Route path="/profile" component={AdminIndex} />
        <Route path="/tables" component={AdminIndex} />
        <Route path="/maps" component={AdminIndex} />
        <Route path="/404" component={AdminIndex} />
      </Switch>
    );
  }
}

export default Routes;
