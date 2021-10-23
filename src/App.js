import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoggedIn from "./Pages/LoggedIn";
import SignIn from "./components/SignIn";

function App() {
  const [isUserSignIn, setIsUserSignedIn] = useState(false);
  const [user,setUser] = useState()

  if (isUserSignIn === false) {
    return (
      <Router>
        <Switch>
          <Route exact path="/"><SignIn setIsUserSignedIn={setIsUserSignedIn} setUser={setUser}/></Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/"><LoggedIn user={user} setIsUserSignedIn={setIsUserSignedIn}/></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
