import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoggedIn from "./Pages/LoggedIn";
import SignIn from "./components/SignIn";

function App() {
  const [user,setUser] = useState(null)

  if (user===null) {
    return (
      <Router>
        <Switch>
          <Route exact path="/"><SignIn user={user} setUser={setUser}/></Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/"><LoggedIn user={user} /></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
