import Lesson from "#/#lesson";
import React from "react";
import "public/styles/App.css";
import "public/styles/global.css";
import { Switch, Route, useLocation } from "react-router-dom";
import CodingEnvironment from "#/#ide";
import Home from "#/#home";
import Workspace from "#/#workspace";
import Course from "#/#course";
import CourseResume from "#/#course_resume";
import useScrollToTop from "helpers/scrollToTop";
import Auth from "#/#auth";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  useScrollToTop();
  let location = useLocation();

  return (
    <>
      <TransitionGroup className={`h-full w-full`}>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/auth/:method" exact>
              <Auth />
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
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
