import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

// import createHistory from 'history/createBrowserHistory';
import createHistory from "history/createHashHistory";

import routes from "./routes";

const history = createHistory();

const App = () => <Router history={history}>{renderRoutes(routes)}</Router>;

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
