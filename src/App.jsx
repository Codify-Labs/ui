import Lesson from "#/#lesson";
import React from "react";
import "public/styles/App.css";
import "public/styles/global.css";
import { Switch, Route } from "react-router-dom";
import CodingEnvironment from "#/#ide"

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" exact>
            <Lesson />
          </Route>
          <Route path="/ide/:lang" exact>
            <CodingEnvironment />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
