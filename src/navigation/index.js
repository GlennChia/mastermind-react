import React from "react";
import { Game } from "../containers/Game";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Game} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
