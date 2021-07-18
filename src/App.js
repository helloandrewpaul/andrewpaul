import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Homepage,
  About,
  Arbus,
  Cv,
  ClownTown,
  Contact,
  ProjectPage,
  Header,
  Menu
} from "./Components"
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const [open, setOpen] = useState(false);

  const hamburgerClick = () => setOpen((open) => !open);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header open={open} setOpen={setOpen} hamburgerClick={hamburgerClick}/>
      <Menu open={open} setOpen={setOpen}/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cv">
          <Cv />
        </Route>
        <Route exact path="/arbus">
          <Arbus />
        </Route>
        <Route exact path="/clown-town">
          <ClownTown />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <ProjectPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
