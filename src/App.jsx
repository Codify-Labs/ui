import Lesson from "#/#lesson";
import React from "react";
import "public/styles/App.css";
import "public/styles/global.css";
import { Switch, Route } from "react-router-dom";
import CodingEnvironment from "#/#ide";
import Home from "#/#home";
import Workspace from "#/#workspace";
import Course from "#/#course";
import CourseResume from "#/#course_resume";
import useScrollToTop from "helpers/scrollToTop";

function App() {
  useScrollToTop();

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/lesson/:slug" exact>
          <Lesson />
        </Route>

        <Route path="/course/:slug/resume" exact>
          <CourseResume />
        </Route>

        <Route path="/course/:slug" exact>
          <Course />
        </Route>

        <Route path="/ide/:lang" exact>
          <CodingEnvironment />
        </Route>

        <Route path="/space/:lang" exact>
          <Workspace />
        </Route>
      </Switch>
    </>
  );
}

export default App;
