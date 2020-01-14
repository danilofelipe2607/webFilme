import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import store from "./store";
import { BrowserRouter, Router } from "react-router-dom";
import Routes from "./routes/index";

const hist = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router history={hist}>
          <Routes />
        </Router>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
